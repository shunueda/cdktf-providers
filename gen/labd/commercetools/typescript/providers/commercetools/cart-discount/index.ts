// https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/cart_discount
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CartDiscountConfig extends cdktf.TerraformMetaArguments {
  /**
  * [LocalizedString](https://docs.commercetools.com/api/types#localizedstring)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/cart_discount#description CartDiscount#description}
  */
  readonly description?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/cart_discount#id CartDiscount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Only active discount can be applied to the cart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/cart_discount#is_active CartDiscount#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * User-specific unique identifier for a cart discount. Must be unique across a project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/cart_discount#key CartDiscount#key}
  */
  readonly key?: string;
  /**
  * [LocalizedString](https://docs.commercetools.com/api/types#localizedstring)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/cart_discount#name CartDiscount#name}
  */
  readonly name: { [key: string]: string };
  /**
  * A valid [Cart Predicate](https://docs.commercetools.com/api/projects/predicates#cart-predicates)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/cart_discount#predicate CartDiscount#predicate}
  */
  readonly predicate: string;
  /**
  * States whether the discount can only be used in a connection with a [DiscountCode](https://docs.commercetools.com/api/projects/discountCodes#discountcode)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/cart_discount#requires_discount_code CartDiscount#requires_discount_code}
  */
  readonly requiresDiscountCode?: boolean | cdktf.IResolvable;
  /**
  * The string must contain a number between 0 and 1. All matching cart discounts are applied to a cart in the order defined by this field. A discount with greater sort order is prioritized higher than a discount with lower sort order. The sort order is unambiguous among all cart discounts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/cart_discount#sort_order CartDiscount#sort_order}
  */
  readonly sortOrder: string;
  /**
  * Specifies whether the application of this discount causes the following discounts to be ignored. Can be either Stacking or StopAfterThisDiscount
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/cart_discount#stacking_mode CartDiscount#stacking_mode}
  */
  readonly stackingMode?: string;
  /**
  * If a value exists, the Cart Discount applies on Carts having a Store matching any Store defined for this field. If empty, the Cart Discount applies on all Carts, irrespective of a Store. Use store keys as references
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/cart_discount#stores CartDiscount#stores}
  */
  readonly stores?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/cart_discount#valid_from CartDiscount#valid_from}
  */
  readonly validFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/cart_discount#valid_until CartDiscount#valid_until}
  */
  readonly validUntil?: string;
  /**
  * custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/cart_discount#custom CartDiscount#custom}
  */
  readonly custom?: CartDiscountCustom;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/cart_discount#target CartDiscount#target}
  */
  readonly target?: CartDiscountTarget;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/cart_discount#value CartDiscount#value}
  */
  readonly value: CartDiscountValue;
}
export interface CartDiscountCustom {
  /**
  * Custom fields for this resource. Note that the values need to be provided as JSON encoded strings: `my-value = jsonencode({"key": "value"})`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/cart_discount#fields CartDiscount#fields}
  */
  readonly fields?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/cart_discount#type_id CartDiscount#type_id}
  */
  readonly typeId: string;
}

export function cartDiscountCustomToTerraform(struct?: CartDiscountCustomOutputReference | CartDiscountCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fields),
    type_id: cdktf.stringToTerraform(struct!.typeId),
  }
}


export function cartDiscountCustomToHclTerraform(struct?: CartDiscountCustomOutputReference | CartDiscountCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.fields),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type_id: {
      value: cdktf.stringToHclTerraform(struct!.typeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CartDiscountCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CartDiscountCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._typeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeId = this._typeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CartDiscountCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fields = undefined;
      this._typeId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fields = value.fields;
      this._typeId = value.typeId;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: { [key: string]: string }; 
  public get fields() {
    return this.getStringMapAttribute('fields');
  }
  public set fields(value: { [key: string]: string }) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // type_id - computed: false, optional: false, required: true
  private _typeId?: string; 
  public get typeId() {
    return this.getStringAttribute('type_id');
  }
  public set typeId(value: string) {
    this._typeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeIdInput() {
    return this._typeId;
  }
}
export interface CartDiscountTarget {
  /**
  * MultiBuyLineItems or MultiBuyCustomLineItems target specific fields. If set for another target the value will be ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/cart_discount#discounted_quantity CartDiscount#discounted_quantity}
  */
  readonly discountedQuantity?: number;
  /**
  * MultiBuyLineItems or MultiBuyCustomLineItems target specific fields. If set for another target the value will be ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/cart_discount#max_occurrence CartDiscount#max_occurrence}
  */
  readonly maxOccurrence?: number;
  /**
  * LineItems, CustomLineItems, MultiBuyLineItems or MultiBuyCustomLineItems target specific fields. If set for another target the value will be ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/cart_discount#predicate CartDiscount#predicate}
  */
  readonly predicate?: string;
  /**
  * MultiBuyLineItems or MultiBuyCustomLineItems target specific fields. Can be either Cheapest or MostExpensive. If set for another target the value will be ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/cart_discount#selection_mode CartDiscount#selection_mode}
  */
  readonly selectionMode?: string;
  /**
  * MultiBuyLineItems or MultiBuyCustomLineItems target specific fields. If set for another target the value will be ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/cart_discount#trigger_quantity CartDiscount#trigger_quantity}
  */
  readonly triggerQuantity?: number;
  /**
  * Supports lineItems, customLineItems, multiBuyLineItems, multiBuyCustomLineItems, shipping or totalPrice
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/cart_discount#type CartDiscount#type}
  */
  readonly type: string;
}

export function cartDiscountTargetToTerraform(struct?: CartDiscountTargetOutputReference | CartDiscountTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    discounted_quantity: cdktf.numberToTerraform(struct!.discountedQuantity),
    max_occurrence: cdktf.numberToTerraform(struct!.maxOccurrence),
    predicate: cdktf.stringToTerraform(struct!.predicate),
    selection_mode: cdktf.stringToTerraform(struct!.selectionMode),
    trigger_quantity: cdktf.numberToTerraform(struct!.triggerQuantity),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cartDiscountTargetToHclTerraform(struct?: CartDiscountTargetOutputReference | CartDiscountTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    discounted_quantity: {
      value: cdktf.numberToHclTerraform(struct!.discountedQuantity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_occurrence: {
      value: cdktf.numberToHclTerraform(struct!.maxOccurrence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    predicate: {
      value: cdktf.stringToHclTerraform(struct!.predicate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selection_mode: {
      value: cdktf.stringToHclTerraform(struct!.selectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_quantity: {
      value: cdktf.numberToHclTerraform(struct!.triggerQuantity),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CartDiscountTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CartDiscountTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._discountedQuantity !== undefined) {
      hasAnyValues = true;
      internalValueResult.discountedQuantity = this._discountedQuantity;
    }
    if (this._maxOccurrence !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOccurrence = this._maxOccurrence;
    }
    if (this._predicate !== undefined) {
      hasAnyValues = true;
      internalValueResult.predicate = this._predicate;
    }
    if (this._selectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectionMode = this._selectionMode;
    }
    if (this._triggerQuantity !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerQuantity = this._triggerQuantity;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CartDiscountTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._discountedQuantity = undefined;
      this._maxOccurrence = undefined;
      this._predicate = undefined;
      this._selectionMode = undefined;
      this._triggerQuantity = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._discountedQuantity = value.discountedQuantity;
      this._maxOccurrence = value.maxOccurrence;
      this._predicate = value.predicate;
      this._selectionMode = value.selectionMode;
      this._triggerQuantity = value.triggerQuantity;
      this._type = value.type;
    }
  }

  // discounted_quantity - computed: false, optional: true, required: false
  private _discountedQuantity?: number; 
  public get discountedQuantity() {
    return this.getNumberAttribute('discounted_quantity');
  }
  public set discountedQuantity(value: number) {
    this._discountedQuantity = value;
  }
  public resetDiscountedQuantity() {
    this._discountedQuantity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discountedQuantityInput() {
    return this._discountedQuantity;
  }

  // max_occurrence - computed: false, optional: true, required: false
  private _maxOccurrence?: number; 
  public get maxOccurrence() {
    return this.getNumberAttribute('max_occurrence');
  }
  public set maxOccurrence(value: number) {
    this._maxOccurrence = value;
  }
  public resetMaxOccurrence() {
    this._maxOccurrence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOccurrenceInput() {
    return this._maxOccurrence;
  }

  // predicate - computed: false, optional: true, required: false
  private _predicate?: string; 
  public get predicate() {
    return this.getStringAttribute('predicate');
  }
  public set predicate(value: string) {
    this._predicate = value;
  }
  public resetPredicate() {
    this._predicate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predicateInput() {
    return this._predicate;
  }

  // selection_mode - computed: false, optional: true, required: false
  private _selectionMode?: string; 
  public get selectionMode() {
    return this.getStringAttribute('selection_mode');
  }
  public set selectionMode(value: string) {
    this._selectionMode = value;
  }
  public resetSelectionMode() {
    this._selectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionModeInput() {
    return this._selectionMode;
  }

  // trigger_quantity - computed: false, optional: true, required: false
  private _triggerQuantity?: number; 
  public get triggerQuantity() {
    return this.getNumberAttribute('trigger_quantity');
  }
  public set triggerQuantity(value: number) {
    this._triggerQuantity = value;
  }
  public resetTriggerQuantity() {
    this._triggerQuantity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerQuantityInput() {
    return this._triggerQuantity;
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
}
export interface CartDiscountValueMoney {
  /**
  * The amount in cents (the smallest indivisible unit of the currency)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/cart_discount#cent_amount CartDiscount#cent_amount}
  */
  readonly centAmount: number;
  /**
  * The currency code compliant to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/cart_discount#currency_code CartDiscount#currency_code}
  */
  readonly currencyCode: string;
}

export function cartDiscountValueMoneyToTerraform(struct?: CartDiscountValueMoney | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cent_amount: cdktf.numberToTerraform(struct!.centAmount),
    currency_code: cdktf.stringToTerraform(struct!.currencyCode),
  }
}


export function cartDiscountValueMoneyToHclTerraform(struct?: CartDiscountValueMoney | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CartDiscountValueMoneyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CartDiscountValueMoney | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CartDiscountValueMoney | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._centAmount = undefined;
      this._currencyCode = undefined;
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
}

export class CartDiscountValueMoneyList extends cdktf.ComplexList {
  public internalValue? : CartDiscountValueMoney[] | cdktf.IResolvable

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
  public get(index: number): CartDiscountValueMoneyOutputReference {
    return new CartDiscountValueMoneyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CartDiscountValue {
  /**
  * Channel must have the role ProductDistribution. Optional when value type is giftLineItem
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/cart_discount#distribution_channel_id CartDiscount#distribution_channel_id}
  */
  readonly distributionChannelId?: string;
  /**
  * Relative discount specific fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/cart_discount#permyriad CartDiscount#permyriad}
  */
  readonly permyriad?: number;
  /**
  * ResourceIdentifier of a Product. Required when value type is giftLineItem
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/cart_discount#product_id CartDiscount#product_id}
  */
  readonly productId?: string;
  /**
  * Channel must have the role InventorySupply. Optional when value type is giftLineItem
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/cart_discount#supply_channel_id CartDiscount#supply_channel_id}
  */
  readonly supplyChannelId?: string;
  /**
  * Currently supports absolute/relative/giftLineItem
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/cart_discount#type CartDiscount#type}
  */
  readonly type: string;
  /**
  * ProductVariant of the Product. Required when value type is giftLineItem
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/cart_discount#variant_id CartDiscount#variant_id}
  */
  readonly variantId?: number;
  /**
  * money block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/cart_discount#money CartDiscount#money}
  */
  readonly money?: CartDiscountValueMoney[] | cdktf.IResolvable;
}

export function cartDiscountValueToTerraform(struct?: CartDiscountValueOutputReference | CartDiscountValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribution_channel_id: cdktf.stringToTerraform(struct!.distributionChannelId),
    permyriad: cdktf.numberToTerraform(struct!.permyriad),
    product_id: cdktf.stringToTerraform(struct!.productId),
    supply_channel_id: cdktf.stringToTerraform(struct!.supplyChannelId),
    type: cdktf.stringToTerraform(struct!.type),
    variant_id: cdktf.numberToTerraform(struct!.variantId),
    money: cdktf.listMapper(cartDiscountValueMoneyToTerraform, true)(struct!.money),
  }
}


export function cartDiscountValueToHclTerraform(struct?: CartDiscountValueOutputReference | CartDiscountValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distribution_channel_id: {
      value: cdktf.stringToHclTerraform(struct!.distributionChannelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permyriad: {
      value: cdktf.numberToHclTerraform(struct!.permyriad),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    product_id: {
      value: cdktf.stringToHclTerraform(struct!.productId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    supply_channel_id: {
      value: cdktf.stringToHclTerraform(struct!.supplyChannelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variant_id: {
      value: cdktf.numberToHclTerraform(struct!.variantId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    money: {
      value: cdktf.listMapperHcl(cartDiscountValueMoneyToHclTerraform, true)(struct!.money),
      isBlock: true,
      type: "list",
      storageClassType: "CartDiscountValueMoneyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CartDiscountValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CartDiscountValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distributionChannelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributionChannelId = this._distributionChannelId;
    }
    if (this._permyriad !== undefined) {
      hasAnyValues = true;
      internalValueResult.permyriad = this._permyriad;
    }
    if (this._productId !== undefined) {
      hasAnyValues = true;
      internalValueResult.productId = this._productId;
    }
    if (this._supplyChannelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.supplyChannelId = this._supplyChannelId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._variantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.variantId = this._variantId;
    }
    if (this._money?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.money = this._money?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CartDiscountValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._distributionChannelId = undefined;
      this._permyriad = undefined;
      this._productId = undefined;
      this._supplyChannelId = undefined;
      this._type = undefined;
      this._variantId = undefined;
      this._money.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._distributionChannelId = value.distributionChannelId;
      this._permyriad = value.permyriad;
      this._productId = value.productId;
      this._supplyChannelId = value.supplyChannelId;
      this._type = value.type;
      this._variantId = value.variantId;
      this._money.internalValue = value.money;
    }
  }

  // distribution_channel_id - computed: false, optional: true, required: false
  private _distributionChannelId?: string; 
  public get distributionChannelId() {
    return this.getStringAttribute('distribution_channel_id');
  }
  public set distributionChannelId(value: string) {
    this._distributionChannelId = value;
  }
  public resetDistributionChannelId() {
    this._distributionChannelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionChannelIdInput() {
    return this._distributionChannelId;
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

  // product_id - computed: false, optional: true, required: false
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

  // supply_channel_id - computed: false, optional: true, required: false
  private _supplyChannelId?: string; 
  public get supplyChannelId() {
    return this.getStringAttribute('supply_channel_id');
  }
  public set supplyChannelId(value: string) {
    this._supplyChannelId = value;
  }
  public resetSupplyChannelId() {
    this._supplyChannelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplyChannelIdInput() {
    return this._supplyChannelId;
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

  // variant_id - computed: false, optional: true, required: false
  private _variantId?: number; 
  public get variantId() {
    return this.getNumberAttribute('variant_id');
  }
  public set variantId(value: number) {
    this._variantId = value;
  }
  public resetVariantId() {
    this._variantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variantIdInput() {
    return this._variantId;
  }

  // money - computed: false, optional: true, required: false
  private _money = new CartDiscountValueMoneyList(this, "money", false);
  public get money() {
    return this._money;
  }
  public putMoney(value: CartDiscountValueMoney[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/cart_discount commercetools_cart_discount}
*/
export class CartDiscount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commercetools_cart_discount";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CartDiscount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CartDiscount to import
  * @param importFromId The id of the existing CartDiscount that should be imported. Refer to the {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/cart_discount#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CartDiscount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commercetools_cart_discount", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/cart_discount commercetools_cart_discount} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CartDiscountConfig
  */
  public constructor(scope: Construct, id: string, config: CartDiscountConfig) {
    super(scope, id, {
      terraformResourceType: 'commercetools_cart_discount',
      terraformGeneratorMetadata: {
        providerName: 'commercetools',
        providerVersion: '1.21.1'
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
    this._requiresDiscountCode = config.requiresDiscountCode;
    this._sortOrder = config.sortOrder;
    this._stackingMode = config.stackingMode;
    this._stores = config.stores;
    this._validFrom = config.validFrom;
    this._validUntil = config.validUntil;
    this._custom.internalValue = config.custom;
    this._target.internalValue = config.target;
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

  // requires_discount_code - computed: false, optional: true, required: false
  private _requiresDiscountCode?: boolean | cdktf.IResolvable; 
  public get requiresDiscountCode() {
    return this.getBooleanAttribute('requires_discount_code');
  }
  public set requiresDiscountCode(value: boolean | cdktf.IResolvable) {
    this._requiresDiscountCode = value;
  }
  public resetRequiresDiscountCode() {
    this._requiresDiscountCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiresDiscountCodeInput() {
    return this._requiresDiscountCode;
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

  // stacking_mode - computed: false, optional: true, required: false
  private _stackingMode?: string; 
  public get stackingMode() {
    return this.getStringAttribute('stacking_mode');
  }
  public set stackingMode(value: string) {
    this._stackingMode = value;
  }
  public resetStackingMode() {
    this._stackingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackingModeInput() {
    return this._stackingMode;
  }

  // stores - computed: false, optional: true, required: false
  private _stores?: string[]; 
  public get stores() {
    return cdktf.Fn.tolist(this.getListAttribute('stores'));
  }
  public set stores(value: string[]) {
    this._stores = value;
  }
  public resetStores() {
    this._stores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storesInput() {
    return this._stores;
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

  // custom - computed: false, optional: true, required: false
  private _custom = new CartDiscountCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: CartDiscountCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // target - computed: false, optional: true, required: false
  private _target = new CartDiscountTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: CartDiscountTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // value - computed: false, optional: false, required: true
  private _value = new CartDiscountValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: CartDiscountValue) {
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
      requires_discount_code: cdktf.booleanToTerraform(this._requiresDiscountCode),
      sort_order: cdktf.stringToTerraform(this._sortOrder),
      stacking_mode: cdktf.stringToTerraform(this._stackingMode),
      stores: cdktf.listMapper(cdktf.stringToTerraform, false)(this._stores),
      valid_from: cdktf.stringToTerraform(this._validFrom),
      valid_until: cdktf.stringToTerraform(this._validUntil),
      custom: cartDiscountCustomToTerraform(this._custom.internalValue),
      target: cartDiscountTargetToTerraform(this._target.internalValue),
      value: cartDiscountValueToTerraform(this._value.internalValue),
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
      requires_discount_code: {
        value: cdktf.booleanToHclTerraform(this._requiresDiscountCode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sort_order: {
        value: cdktf.stringToHclTerraform(this._sortOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stacking_mode: {
        value: cdktf.stringToHclTerraform(this._stackingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stores: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._stores),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      custom: {
        value: cartDiscountCustomToHclTerraform(this._custom.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CartDiscountCustomList",
      },
      target: {
        value: cartDiscountTargetToHclTerraform(this._target.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CartDiscountTargetList",
      },
      value: {
        value: cartDiscountValueToHclTerraform(this._value.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CartDiscountValueList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
