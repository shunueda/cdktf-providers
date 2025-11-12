// https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/shipping_zone_rate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ShippingZoneRateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/shipping_zone_rate#id ShippingZoneRate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/shipping_zone_rate#shipping_method_id ShippingZoneRate#shipping_method_id}
  */
  readonly shippingMethodId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/shipping_zone_rate#shipping_zone_id ShippingZoneRate#shipping_zone_id}
  */
  readonly shippingZoneId: string;
  /**
  * free_above block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/shipping_zone_rate#free_above ShippingZoneRate#free_above}
  */
  readonly freeAbove?: ShippingZoneRateFreeAbove;
  /**
  * price block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/shipping_zone_rate#price ShippingZoneRate#price}
  */
  readonly price: ShippingZoneRatePrice;
  /**
  * shipping_rate_price_tier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/shipping_zone_rate#shipping_rate_price_tier ShippingZoneRate#shipping_rate_price_tier}
  */
  readonly shippingRatePriceTier?: ShippingZoneRateShippingRatePriceTier[] | cdktf.IResolvable;
}
export interface ShippingZoneRateFreeAbove {
  /**
  * The amount in cents (the smallest indivisible unit of the currency)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/shipping_zone_rate#cent_amount ShippingZoneRate#cent_amount}
  */
  readonly centAmount: number;
  /**
  * The currency code compliant to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/shipping_zone_rate#currency_code ShippingZoneRate#currency_code}
  */
  readonly currencyCode: string;
}

export function shippingZoneRateFreeAboveToTerraform(struct?: ShippingZoneRateFreeAboveOutputReference | ShippingZoneRateFreeAbove): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cent_amount: cdktf.numberToTerraform(struct!.centAmount),
    currency_code: cdktf.stringToTerraform(struct!.currencyCode),
  }
}


export function shippingZoneRateFreeAboveToHclTerraform(struct?: ShippingZoneRateFreeAboveOutputReference | ShippingZoneRateFreeAbove): any {
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

export class ShippingZoneRateFreeAboveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ShippingZoneRateFreeAbove | undefined {
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

  public set internalValue(value: ShippingZoneRateFreeAbove | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._centAmount = undefined;
      this._currencyCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface ShippingZoneRatePrice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/shipping_zone_rate#cent_amount ShippingZoneRate#cent_amount}
  */
  readonly centAmount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/shipping_zone_rate#currency_code ShippingZoneRate#currency_code}
  */
  readonly currencyCode: string;
}

export function shippingZoneRatePriceToTerraform(struct?: ShippingZoneRatePriceOutputReference | ShippingZoneRatePrice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cent_amount: cdktf.numberToTerraform(struct!.centAmount),
    currency_code: cdktf.stringToTerraform(struct!.currencyCode),
  }
}


export function shippingZoneRatePriceToHclTerraform(struct?: ShippingZoneRatePriceOutputReference | ShippingZoneRatePrice): any {
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

export class ShippingZoneRatePriceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ShippingZoneRatePrice | undefined {
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

  public set internalValue(value: ShippingZoneRatePrice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._centAmount = undefined;
      this._currencyCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface ShippingZoneRateShippingRatePriceTierPrice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/shipping_zone_rate#cent_amount ShippingZoneRate#cent_amount}
  */
  readonly centAmount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/shipping_zone_rate#currency_code ShippingZoneRate#currency_code}
  */
  readonly currencyCode: string;
}

export function shippingZoneRateShippingRatePriceTierPriceToTerraform(struct?: ShippingZoneRateShippingRatePriceTierPriceOutputReference | ShippingZoneRateShippingRatePriceTierPrice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cent_amount: cdktf.numberToTerraform(struct!.centAmount),
    currency_code: cdktf.stringToTerraform(struct!.currencyCode),
  }
}


export function shippingZoneRateShippingRatePriceTierPriceToHclTerraform(struct?: ShippingZoneRateShippingRatePriceTierPriceOutputReference | ShippingZoneRateShippingRatePriceTierPrice): any {
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

export class ShippingZoneRateShippingRatePriceTierPriceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ShippingZoneRateShippingRatePriceTierPrice | undefined {
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

  public set internalValue(value: ShippingZoneRateShippingRatePriceTierPrice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._centAmount = undefined;
      this._currencyCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface ShippingZoneRateShippingRatePriceTierPriceFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/shipping_zone_rate#currency_code ShippingZoneRate#currency_code}
  */
  readonly currencyCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/shipping_zone_rate#function ShippingZoneRate#function}
  */
  readonly function: string;
}

export function shippingZoneRateShippingRatePriceTierPriceFunctionToTerraform(struct?: ShippingZoneRateShippingRatePriceTierPriceFunctionOutputReference | ShippingZoneRateShippingRatePriceTierPriceFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    currency_code: cdktf.stringToTerraform(struct!.currencyCode),
    function: cdktf.stringToTerraform(struct!.function),
  }
}


export function shippingZoneRateShippingRatePriceTierPriceFunctionToHclTerraform(struct?: ShippingZoneRateShippingRatePriceTierPriceFunctionOutputReference | ShippingZoneRateShippingRatePriceTierPriceFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    currency_code: {
      value: cdktf.stringToHclTerraform(struct!.currencyCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function: {
      value: cdktf.stringToHclTerraform(struct!.function),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ShippingZoneRateShippingRatePriceTierPriceFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ShippingZoneRateShippingRatePriceTierPriceFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currencyCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.currencyCode = this._currencyCode;
    }
    if (this._function !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ShippingZoneRateShippingRatePriceTierPriceFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._currencyCode = undefined;
      this._function = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._currencyCode = value.currencyCode;
      this._function = value.function;
    }
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

  // function - computed: false, optional: false, required: true
  private _function?: string; 
  public get function() {
    return this.getStringAttribute('function');
  }
  public set function(value: string) {
    this._function = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function;
  }
}
export interface ShippingZoneRateShippingRatePriceTier {
  /**
  * If type is CartValue this represents the cent amount of the tier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/shipping_zone_rate#minimum_cent_amount ShippingZoneRate#minimum_cent_amount}
  */
  readonly minimumCentAmount?: number;
  /**
  * If type is CartScore. Sets a fixed price for this score value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/shipping_zone_rate#score ShippingZoneRate#score}
  */
  readonly score?: number;
  /**
  * CartValue, CartScore or CartClassification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/shipping_zone_rate#type ShippingZoneRate#type}
  */
  readonly type: string;
  /**
  * If type is CartClassification, must be a valid key of the CartClassification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/shipping_zone_rate#value ShippingZoneRate#value}
  */
  readonly value?: string;
  /**
  * price block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/shipping_zone_rate#price ShippingZoneRate#price}
  */
  readonly price?: ShippingZoneRateShippingRatePriceTierPrice;
  /**
  * price_function block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/shipping_zone_rate#price_function ShippingZoneRate#price_function}
  */
  readonly priceFunction?: ShippingZoneRateShippingRatePriceTierPriceFunction;
}

export function shippingZoneRateShippingRatePriceTierToTerraform(struct?: ShippingZoneRateShippingRatePriceTier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum_cent_amount: cdktf.numberToTerraform(struct!.minimumCentAmount),
    score: cdktf.numberToTerraform(struct!.score),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    price: shippingZoneRateShippingRatePriceTierPriceToTerraform(struct!.price),
    price_function: shippingZoneRateShippingRatePriceTierPriceFunctionToTerraform(struct!.priceFunction),
  }
}


export function shippingZoneRateShippingRatePriceTierToHclTerraform(struct?: ShippingZoneRateShippingRatePriceTier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minimum_cent_amount: {
      value: cdktf.numberToHclTerraform(struct!.minimumCentAmount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    score: {
      value: cdktf.numberToHclTerraform(struct!.score),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    price: {
      value: shippingZoneRateShippingRatePriceTierPriceToHclTerraform(struct!.price),
      isBlock: true,
      type: "list",
      storageClassType: "ShippingZoneRateShippingRatePriceTierPriceList",
    },
    price_function: {
      value: shippingZoneRateShippingRatePriceTierPriceFunctionToHclTerraform(struct!.priceFunction),
      isBlock: true,
      type: "list",
      storageClassType: "ShippingZoneRateShippingRatePriceTierPriceFunctionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ShippingZoneRateShippingRatePriceTierOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ShippingZoneRateShippingRatePriceTier | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumCentAmount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumCentAmount = this._minimumCentAmount;
    }
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._price?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.price = this._price?.internalValue;
    }
    if (this._priceFunction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.priceFunction = this._priceFunction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ShippingZoneRateShippingRatePriceTier | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumCentAmount = undefined;
      this._score = undefined;
      this._type = undefined;
      this._value = undefined;
      this._price.internalValue = undefined;
      this._priceFunction.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minimumCentAmount = value.minimumCentAmount;
      this._score = value.score;
      this._type = value.type;
      this._value = value.value;
      this._price.internalValue = value.price;
      this._priceFunction.internalValue = value.priceFunction;
    }
  }

  // minimum_cent_amount - computed: false, optional: true, required: false
  private _minimumCentAmount?: number; 
  public get minimumCentAmount() {
    return this.getNumberAttribute('minimum_cent_amount');
  }
  public set minimumCentAmount(value: number) {
    this._minimumCentAmount = value;
  }
  public resetMinimumCentAmount() {
    this._minimumCentAmount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumCentAmountInput() {
    return this._minimumCentAmount;
  }

  // score - computed: false, optional: true, required: false
  private _score?: number; 
  public get score() {
    return this.getNumberAttribute('score');
  }
  public set score(value: number) {
    this._score = value;
  }
  public resetScore() {
    this._score = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // price - computed: false, optional: true, required: false
  private _price = new ShippingZoneRateShippingRatePriceTierPriceOutputReference(this, "price");
  public get price() {
    return this._price;
  }
  public putPrice(value: ShippingZoneRateShippingRatePriceTierPrice) {
    this._price.internalValue = value;
  }
  public resetPrice() {
    this._price.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priceInput() {
    return this._price.internalValue;
  }

  // price_function - computed: false, optional: true, required: false
  private _priceFunction = new ShippingZoneRateShippingRatePriceTierPriceFunctionOutputReference(this, "price_function");
  public get priceFunction() {
    return this._priceFunction;
  }
  public putPriceFunction(value: ShippingZoneRateShippingRatePriceTierPriceFunction) {
    this._priceFunction.internalValue = value;
  }
  public resetPriceFunction() {
    this._priceFunction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priceFunctionInput() {
    return this._priceFunction.internalValue;
  }
}

export class ShippingZoneRateShippingRatePriceTierList extends cdktf.ComplexList {
  public internalValue? : ShippingZoneRateShippingRatePriceTier[] | cdktf.IResolvable

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
  public get(index: number): ShippingZoneRateShippingRatePriceTierOutputReference {
    return new ShippingZoneRateShippingRatePriceTierOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/shipping_zone_rate commercetools_shipping_zone_rate}
*/
export class ShippingZoneRate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commercetools_shipping_zone_rate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ShippingZoneRate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ShippingZoneRate to import
  * @param importFromId The id of the existing ShippingZoneRate that should be imported. Refer to the {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/shipping_zone_rate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ShippingZoneRate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commercetools_shipping_zone_rate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/shipping_zone_rate commercetools_shipping_zone_rate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ShippingZoneRateConfig
  */
  public constructor(scope: Construct, id: string, config: ShippingZoneRateConfig) {
    super(scope, id, {
      terraformResourceType: 'commercetools_shipping_zone_rate',
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
    this._id = config.id;
    this._shippingMethodId = config.shippingMethodId;
    this._shippingZoneId = config.shippingZoneId;
    this._freeAbove.internalValue = config.freeAbove;
    this._price.internalValue = config.price;
    this._shippingRatePriceTier.internalValue = config.shippingRatePriceTier;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // shipping_method_id - computed: false, optional: false, required: true
  private _shippingMethodId?: string; 
  public get shippingMethodId() {
    return this.getStringAttribute('shipping_method_id');
  }
  public set shippingMethodId(value: string) {
    this._shippingMethodId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shippingMethodIdInput() {
    return this._shippingMethodId;
  }

  // shipping_zone_id - computed: false, optional: false, required: true
  private _shippingZoneId?: string; 
  public get shippingZoneId() {
    return this.getStringAttribute('shipping_zone_id');
  }
  public set shippingZoneId(value: string) {
    this._shippingZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shippingZoneIdInput() {
    return this._shippingZoneId;
  }

  // free_above - computed: false, optional: true, required: false
  private _freeAbove = new ShippingZoneRateFreeAboveOutputReference(this, "free_above");
  public get freeAbove() {
    return this._freeAbove;
  }
  public putFreeAbove(value: ShippingZoneRateFreeAbove) {
    this._freeAbove.internalValue = value;
  }
  public resetFreeAbove() {
    this._freeAbove.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeAboveInput() {
    return this._freeAbove.internalValue;
  }

  // price - computed: false, optional: false, required: true
  private _price = new ShippingZoneRatePriceOutputReference(this, "price");
  public get price() {
    return this._price;
  }
  public putPrice(value: ShippingZoneRatePrice) {
    this._price.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priceInput() {
    return this._price.internalValue;
  }

  // shipping_rate_price_tier - computed: false, optional: true, required: false
  private _shippingRatePriceTier = new ShippingZoneRateShippingRatePriceTierList(this, "shipping_rate_price_tier", false);
  public get shippingRatePriceTier() {
    return this._shippingRatePriceTier;
  }
  public putShippingRatePriceTier(value: ShippingZoneRateShippingRatePriceTier[] | cdktf.IResolvable) {
    this._shippingRatePriceTier.internalValue = value;
  }
  public resetShippingRatePriceTier() {
    this._shippingRatePriceTier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shippingRatePriceTierInput() {
    return this._shippingRatePriceTier.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      shipping_method_id: cdktf.stringToTerraform(this._shippingMethodId),
      shipping_zone_id: cdktf.stringToTerraform(this._shippingZoneId),
      free_above: shippingZoneRateFreeAboveToTerraform(this._freeAbove.internalValue),
      price: shippingZoneRatePriceToTerraform(this._price.internalValue),
      shipping_rate_price_tier: cdktf.listMapper(shippingZoneRateShippingRatePriceTierToTerraform, true)(this._shippingRatePriceTier.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shipping_method_id: {
        value: cdktf.stringToHclTerraform(this._shippingMethodId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shipping_zone_id: {
        value: cdktf.stringToHclTerraform(this._shippingZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      free_above: {
        value: shippingZoneRateFreeAboveToHclTerraform(this._freeAbove.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ShippingZoneRateFreeAboveList",
      },
      price: {
        value: shippingZoneRatePriceToHclTerraform(this._price.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ShippingZoneRatePriceList",
      },
      shipping_rate_price_tier: {
        value: cdktf.listMapperHcl(shippingZoneRateShippingRatePriceTierToHclTerraform, true)(this._shippingRatePriceTier.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ShippingZoneRateShippingRatePriceTierList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
