// https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/shipping_rate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ShippingRateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the shipping rate can be used for new purchases. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/shipping_rate#active ShippingRate#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * The name of the shipping rate, meant to be displayable to the customer. This will appear on CheckoutSessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/shipping_rate#display_name ShippingRate#display_name}
  */
  readonly displayName: string;
  /**
  * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/shipping_rate#metadata ShippingRate#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of inclusive, exclusive, or unspecified. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/shipping_rate#tax_behavior ShippingRate#tax_behavior}
  */
  readonly taxBehavior?: string;
  /**
  * A tax code ID. The Shipping tax code is txcd_92010001.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/shipping_rate#tax_code ShippingRate#tax_code}
  */
  readonly taxCode?: string;
  /**
  * The type of calculation to use on the shipping rate. Can only be fixed_amount for now
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/shipping_rate#type ShippingRate#type}
  */
  readonly type?: string;
  /**
  * delivery_estimate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/shipping_rate#delivery_estimate ShippingRate#delivery_estimate}
  */
  readonly deliveryEstimate?: ShippingRateDeliveryEstimate[] | cdktf.IResolvable;
  /**
  * fixed_amount block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/shipping_rate#fixed_amount ShippingRate#fixed_amount}
  */
  readonly fixedAmount: ShippingRateFixedAmount;
}
export interface ShippingRateDeliveryEstimateMaximum {
  /**
  * The upper bound of the estimated range. If empty, represents no lower bound.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/shipping_rate#unit ShippingRate#unit}
  */
  readonly unit: string;
  /**
  * Must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/shipping_rate#value ShippingRate#value}
  */
  readonly value: number;
}

export function shippingRateDeliveryEstimateMaximumToTerraform(struct?: ShippingRateDeliveryEstimateMaximumOutputReference | ShippingRateDeliveryEstimateMaximum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function shippingRateDeliveryEstimateMaximumToHclTerraform(struct?: ShippingRateDeliveryEstimateMaximumOutputReference | ShippingRateDeliveryEstimateMaximum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ShippingRateDeliveryEstimateMaximumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ShippingRateDeliveryEstimateMaximum | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ShippingRateDeliveryEstimateMaximum | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ShippingRateDeliveryEstimateMinimum {
  /**
  * The lower bound of the estimated range. If empty, represents no lower bound.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/shipping_rate#unit ShippingRate#unit}
  */
  readonly unit: string;
  /**
  * Must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/shipping_rate#value ShippingRate#value}
  */
  readonly value: number;
}

export function shippingRateDeliveryEstimateMinimumToTerraform(struct?: ShippingRateDeliveryEstimateMinimumOutputReference | ShippingRateDeliveryEstimateMinimum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function shippingRateDeliveryEstimateMinimumToHclTerraform(struct?: ShippingRateDeliveryEstimateMinimumOutputReference | ShippingRateDeliveryEstimateMinimum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ShippingRateDeliveryEstimateMinimumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ShippingRateDeliveryEstimateMinimum | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ShippingRateDeliveryEstimateMinimum | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ShippingRateDeliveryEstimate {
  /**
  * maximum block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/shipping_rate#maximum ShippingRate#maximum}
  */
  readonly maximum?: ShippingRateDeliveryEstimateMaximum;
  /**
  * minimum block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/shipping_rate#minimum ShippingRate#minimum}
  */
  readonly minimum?: ShippingRateDeliveryEstimateMinimum;
}

export function shippingRateDeliveryEstimateToTerraform(struct?: ShippingRateDeliveryEstimate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum: shippingRateDeliveryEstimateMaximumToTerraform(struct!.maximum),
    minimum: shippingRateDeliveryEstimateMinimumToTerraform(struct!.minimum),
  }
}


export function shippingRateDeliveryEstimateToHclTerraform(struct?: ShippingRateDeliveryEstimate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum: {
      value: shippingRateDeliveryEstimateMaximumToHclTerraform(struct!.maximum),
      isBlock: true,
      type: "list",
      storageClassType: "ShippingRateDeliveryEstimateMaximumList",
    },
    minimum: {
      value: shippingRateDeliveryEstimateMinimumToHclTerraform(struct!.minimum),
      isBlock: true,
      type: "list",
      storageClassType: "ShippingRateDeliveryEstimateMinimumList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ShippingRateDeliveryEstimateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ShippingRateDeliveryEstimate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximum?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum?.internalValue;
    }
    if (this._minimum?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ShippingRateDeliveryEstimate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximum.internalValue = undefined;
      this._minimum.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximum.internalValue = value.maximum;
      this._minimum.internalValue = value.minimum;
    }
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum = new ShippingRateDeliveryEstimateMaximumOutputReference(this, "maximum");
  public get maximum() {
    return this._maximum;
  }
  public putMaximum(value: ShippingRateDeliveryEstimateMaximum) {
    this._maximum.internalValue = value;
  }
  public resetMaximum() {
    this._maximum.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum.internalValue;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum = new ShippingRateDeliveryEstimateMinimumOutputReference(this, "minimum");
  public get minimum() {
    return this._minimum;
  }
  public putMinimum(value: ShippingRateDeliveryEstimateMinimum) {
    this._minimum.internalValue = value;
  }
  public resetMinimum() {
    this._minimum.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum.internalValue;
  }
}

export class ShippingRateDeliveryEstimateList extends cdktf.ComplexList {
  public internalValue? : ShippingRateDeliveryEstimate[] | cdktf.IResolvable

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
  public get(index: number): ShippingRateDeliveryEstimateOutputReference {
    return new ShippingRateDeliveryEstimateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ShippingRateFixedAmountCurrencyOption {
  /**
  * A non-negative integer in cents representing how much to charge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/shipping_rate#amount ShippingRate#amount}
  */
  readonly amount: number;
  /**
  * Three-letter ISO currency code, in lowercase. Must be a supported currency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/shipping_rate#currency ShippingRate#currency}
  */
  readonly currency: string;
  /**
  * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of inclusive, exclusive, or unspecified. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/shipping_rate#tax_behavior ShippingRate#tax_behavior}
  */
  readonly taxBehavior?: string;
}

export function shippingRateFixedAmountCurrencyOptionToTerraform(struct?: ShippingRateFixedAmountCurrencyOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amount: cdktf.numberToTerraform(struct!.amount),
    currency: cdktf.stringToTerraform(struct!.currency),
    tax_behavior: cdktf.stringToTerraform(struct!.taxBehavior),
  }
}


export function shippingRateFixedAmountCurrencyOptionToHclTerraform(struct?: ShippingRateFixedAmountCurrencyOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amount: {
      value: cdktf.numberToHclTerraform(struct!.amount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    currency: {
      value: cdktf.stringToHclTerraform(struct!.currency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tax_behavior: {
      value: cdktf.stringToHclTerraform(struct!.taxBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ShippingRateFixedAmountCurrencyOptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ShippingRateFixedAmountCurrencyOption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amount !== undefined) {
      hasAnyValues = true;
      internalValueResult.amount = this._amount;
    }
    if (this._currency !== undefined) {
      hasAnyValues = true;
      internalValueResult.currency = this._currency;
    }
    if (this._taxBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.taxBehavior = this._taxBehavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ShippingRateFixedAmountCurrencyOption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amount = undefined;
      this._currency = undefined;
      this._taxBehavior = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amount = value.amount;
      this._currency = value.currency;
      this._taxBehavior = value.taxBehavior;
    }
  }

  // amount - computed: false, optional: false, required: true
  private _amount?: number; 
  public get amount() {
    return this.getNumberAttribute('amount');
  }
  public set amount(value: number) {
    this._amount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
  }

  // currency - computed: false, optional: false, required: true
  private _currency?: string; 
  public get currency() {
    return this.getStringAttribute('currency');
  }
  public set currency(value: string) {
    this._currency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get currencyInput() {
    return this._currency;
  }

  // tax_behavior - computed: false, optional: true, required: false
  private _taxBehavior?: string; 
  public get taxBehavior() {
    return this.getStringAttribute('tax_behavior');
  }
  public set taxBehavior(value: string) {
    this._taxBehavior = value;
  }
  public resetTaxBehavior() {
    this._taxBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taxBehaviorInput() {
    return this._taxBehavior;
  }
}

export class ShippingRateFixedAmountCurrencyOptionList extends cdktf.ComplexList {
  public internalValue? : ShippingRateFixedAmountCurrencyOption[] | cdktf.IResolvable

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
  public get(index: number): ShippingRateFixedAmountCurrencyOptionOutputReference {
    return new ShippingRateFixedAmountCurrencyOptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ShippingRateFixedAmount {
  /**
  * A non-negative integer in cents representing how much to charge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/shipping_rate#amount ShippingRate#amount}
  */
  readonly amount: number;
  /**
  * Three-letter ISO currency code, in lowercase. Must be a supported currency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/shipping_rate#currency ShippingRate#currency}
  */
  readonly currency: string;
  /**
  * currency_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/shipping_rate#currency_option ShippingRate#currency_option}
  */
  readonly currencyOption?: ShippingRateFixedAmountCurrencyOption[] | cdktf.IResolvable;
}

export function shippingRateFixedAmountToTerraform(struct?: ShippingRateFixedAmountOutputReference | ShippingRateFixedAmount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amount: cdktf.numberToTerraform(struct!.amount),
    currency: cdktf.stringToTerraform(struct!.currency),
    currency_option: cdktf.listMapper(shippingRateFixedAmountCurrencyOptionToTerraform, true)(struct!.currencyOption),
  }
}


export function shippingRateFixedAmountToHclTerraform(struct?: ShippingRateFixedAmountOutputReference | ShippingRateFixedAmount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amount: {
      value: cdktf.numberToHclTerraform(struct!.amount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    currency: {
      value: cdktf.stringToHclTerraform(struct!.currency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    currency_option: {
      value: cdktf.listMapperHcl(shippingRateFixedAmountCurrencyOptionToHclTerraform, true)(struct!.currencyOption),
      isBlock: true,
      type: "list",
      storageClassType: "ShippingRateFixedAmountCurrencyOptionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ShippingRateFixedAmountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ShippingRateFixedAmount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amount !== undefined) {
      hasAnyValues = true;
      internalValueResult.amount = this._amount;
    }
    if (this._currency !== undefined) {
      hasAnyValues = true;
      internalValueResult.currency = this._currency;
    }
    if (this._currencyOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.currencyOption = this._currencyOption?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ShippingRateFixedAmount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._amount = undefined;
      this._currency = undefined;
      this._currencyOption.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._amount = value.amount;
      this._currency = value.currency;
      this._currencyOption.internalValue = value.currencyOption;
    }
  }

  // amount - computed: false, optional: false, required: true
  private _amount?: number; 
  public get amount() {
    return this.getNumberAttribute('amount');
  }
  public set amount(value: number) {
    this._amount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
  }

  // currency - computed: false, optional: false, required: true
  private _currency?: string; 
  public get currency() {
    return this.getStringAttribute('currency');
  }
  public set currency(value: string) {
    this._currency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get currencyInput() {
    return this._currency;
  }

  // currency_option - computed: false, optional: true, required: false
  private _currencyOption = new ShippingRateFixedAmountCurrencyOptionList(this, "currency_option", false);
  public get currencyOption() {
    return this._currencyOption;
  }
  public putCurrencyOption(value: ShippingRateFixedAmountCurrencyOption[] | cdktf.IResolvable) {
    this._currencyOption.internalValue = value;
  }
  public resetCurrencyOption() {
    this._currencyOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currencyOptionInput() {
    return this._currencyOption.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/shipping_rate stripe_shipping_rate}
*/
export class ShippingRate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stripe_shipping_rate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ShippingRate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ShippingRate to import
  * @param importFromId The id of the existing ShippingRate that should be imported. Refer to the {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/shipping_rate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ShippingRate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stripe_shipping_rate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/shipping_rate stripe_shipping_rate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ShippingRateConfig
  */
  public constructor(scope: Construct, id: string, config: ShippingRateConfig) {
    super(scope, id, {
      terraformResourceType: 'stripe_shipping_rate',
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
    this._displayName = config.displayName;
    this._metadata = config.metadata;
    this._taxBehavior = config.taxBehavior;
    this._taxCode = config.taxCode;
    this._type = config.type;
    this._deliveryEstimate.internalValue = config.deliveryEstimate;
    this._fixedAmount.internalValue = config.fixedAmount;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // livemode - computed: true, optional: false, required: false
  public get livemode() {
    return this.getBooleanAttribute('livemode');
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

  // tax_behavior - computed: false, optional: true, required: false
  private _taxBehavior?: string; 
  public get taxBehavior() {
    return this.getStringAttribute('tax_behavior');
  }
  public set taxBehavior(value: string) {
    this._taxBehavior = value;
  }
  public resetTaxBehavior() {
    this._taxBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taxBehaviorInput() {
    return this._taxBehavior;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // delivery_estimate - computed: false, optional: true, required: false
  private _deliveryEstimate = new ShippingRateDeliveryEstimateList(this, "delivery_estimate", false);
  public get deliveryEstimate() {
    return this._deliveryEstimate;
  }
  public putDeliveryEstimate(value: ShippingRateDeliveryEstimate[] | cdktf.IResolvable) {
    this._deliveryEstimate.internalValue = value;
  }
  public resetDeliveryEstimate() {
    this._deliveryEstimate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryEstimateInput() {
    return this._deliveryEstimate.internalValue;
  }

  // fixed_amount - computed: false, optional: false, required: true
  private _fixedAmount = new ShippingRateFixedAmountOutputReference(this, "fixed_amount");
  public get fixedAmount() {
    return this._fixedAmount;
  }
  public putFixedAmount(value: ShippingRateFixedAmount) {
    this._fixedAmount.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedAmountInput() {
    return this._fixedAmount.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      display_name: cdktf.stringToTerraform(this._displayName),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      tax_behavior: cdktf.stringToTerraform(this._taxBehavior),
      tax_code: cdktf.stringToTerraform(this._taxCode),
      type: cdktf.stringToTerraform(this._type),
      delivery_estimate: cdktf.listMapper(shippingRateDeliveryEstimateToTerraform, true)(this._deliveryEstimate.internalValue),
      fixed_amount: shippingRateFixedAmountToTerraform(this._fixedAmount.internalValue),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      tax_behavior: {
        value: cdktf.stringToHclTerraform(this._taxBehavior),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delivery_estimate: {
        value: cdktf.listMapperHcl(shippingRateDeliveryEstimateToHclTerraform, true)(this._deliveryEstimate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ShippingRateDeliveryEstimateList",
      },
      fixed_amount: {
        value: shippingRateFixedAmountToHclTerraform(this._fixedAmount.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ShippingRateFixedAmountList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
