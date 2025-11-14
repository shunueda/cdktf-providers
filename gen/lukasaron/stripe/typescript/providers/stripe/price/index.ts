// https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PriceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the price can be used for new purchases. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#active Price#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Describes how to compute the price per period. Either per_unit or tiered. per_unit indicates that the fixed amount (specified in unit_amount or unit_amount_decimal) will be charged per unit in quantity (for prices with usage_type=licensed), or per unit of total usage (for prices with usage_type=metered). tiered indicates that the unit pricing will be computed using a tiering strategy as defined using the tiers and tiers_mode attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#billing_scheme Price#billing_scheme}
  */
  readonly billingScheme?: string;
  /**
  * Three-letter ISO currency code, in lowercase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#currency Price#currency}
  */
  readonly currency: string;
  /**
  * A lookup key used to retrieve prices dynamically from a static string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#lookup_key Price#lookup_key}
  */
  readonly lookupKey?: string;
  /**
  * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#metadata Price#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * A brief description of the price, hidden from customers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#nickname Price#nickname}
  */
  readonly nickname?: string;
  /**
  * The ID of the product that this price will belong to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#product Price#product}
  */
  readonly product: string;
  /**
  * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of inclusive, exclusive, or unspecified. Once specified as either inclusive or exclusive, it cannot be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#tax_behavior Price#tax_behavior}
  */
  readonly taxBehavior?: string;
  /**
  * Defines if the tiering price should be graduated or volume based. In volume-based tiering, the maximum quantity within a period determines the per unit price, in graduated tiering pricing can successively change as the quantity grows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#tiers_mode Price#tiers_mode}
  */
  readonly tiersMode?: string;
  /**
  * If set to true, will atomically remove the lookup key from the existing price, and assign it to this price.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#transfer_lookup_key Price#transfer_lookup_key}
  */
  readonly transferLookupKey?: boolean | cdktf.IResolvable;
  /**
  * A positive integer in cents (or -1 for a free price) representing how much to charge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#unit_amount Price#unit_amount}
  */
  readonly unitAmount?: number;
  /**
  * Same as unit_amount, but accepts a decimal value in cents with at most 12 decimal places. Only one of unit_amount and unit_amount_decimal can be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#unit_amount_decimal Price#unit_amount_decimal}
  */
  readonly unitAmountDecimal?: number;
  /**
  * currency_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#currency_options Price#currency_options}
  */
  readonly currencyOptions?: PriceCurrencyOptions[] | cdktf.IResolvable;
  /**
  * custom_unit_amount block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#custom_unit_amount Price#custom_unit_amount}
  */
  readonly customUnitAmount?: PriceCustomUnitAmount;
  /**
  * recurring block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#recurring Price#recurring}
  */
  readonly recurring?: PriceRecurring;
  /**
  * tiers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#tiers Price#tiers}
  */
  readonly tiers?: PriceTiers[] | cdktf.IResolvable;
  /**
  * transform_quantity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#transform_quantity Price#transform_quantity}
  */
  readonly transformQuantity?: PriceTransformQuantity;
}
export interface PriceCurrencyOptionsCustomUnitAmount {
  /**
  * Pass in true to enable custom_unit_amount, otherwise omit custom_unit_amount
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#enabled Price#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The maximum unit amount the customer can specify for this item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#maximum Price#maximum}
  */
  readonly maximum?: number;
  /**
  * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#minimum Price#minimum}
  */
  readonly minimum?: number;
  /**
  * The starting unit amount which can be updated by the customer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#preset Price#preset}
  */
  readonly preset?: number;
}

export function priceCurrencyOptionsCustomUnitAmountToTerraform(struct?: PriceCurrencyOptionsCustomUnitAmountOutputReference | PriceCurrencyOptionsCustomUnitAmount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    maximum: cdktf.numberToTerraform(struct!.maximum),
    minimum: cdktf.numberToTerraform(struct!.minimum),
    preset: cdktf.numberToTerraform(struct!.preset),
  }
}


export function priceCurrencyOptionsCustomUnitAmountToHclTerraform(struct?: PriceCurrencyOptionsCustomUnitAmountOutputReference | PriceCurrencyOptionsCustomUnitAmount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    maximum: {
      value: cdktf.numberToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum: {
      value: cdktf.numberToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preset: {
      value: cdktf.numberToHclTerraform(struct!.preset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PriceCurrencyOptionsCustomUnitAmountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PriceCurrencyOptionsCustomUnitAmount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._preset !== undefined) {
      hasAnyValues = true;
      internalValueResult.preset = this._preset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PriceCurrencyOptionsCustomUnitAmount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._maximum = undefined;
      this._minimum = undefined;
      this._preset = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._maximum = value.maximum;
      this._minimum = value.minimum;
      this._preset = value.preset;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: number; 
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
  public set minimum(value: number) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // preset - computed: false, optional: true, required: false
  private _preset?: number; 
  public get preset() {
    return this.getNumberAttribute('preset');
  }
  public set preset(value: number) {
    this._preset = value;
  }
  public resetPreset() {
    this._preset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetInput() {
    return this._preset;
  }
}
export interface PriceCurrencyOptionsTiers {
  /**
  * The flat billing amount for an entire tier, regardless of the number of units in the tier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#flat_amount Price#flat_amount}
  */
  readonly flatAmount?: number;
  /**
  * Same as flat_amount, but accepts a decimal value representing an integer in the minor units of the currency. Only one of flat_amount and flat_amount_decimal can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#flat_amount_decimal Price#flat_amount_decimal}
  */
  readonly flatAmountDecimal?: number;
  /**
  * The per unit billing amount for each individual unit for which this tier applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#unit_amount Price#unit_amount}
  */
  readonly unitAmount?: number;
  /**
  * Same as unit_amount, but accepts a decimal value in cents with at most 12 decimal places. Only one of unit_amount and unit_amount_decimal can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#unit_amount_decimal Price#unit_amount_decimal}
  */
  readonly unitAmountDecimal?: number;
  /**
  * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use -1 to define a fallback tier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#up_to Price#up_to}
  */
  readonly upTo?: number;
}

export function priceCurrencyOptionsTiersToTerraform(struct?: PriceCurrencyOptionsTiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flat_amount: cdktf.numberToTerraform(struct!.flatAmount),
    flat_amount_decimal: cdktf.numberToTerraform(struct!.flatAmountDecimal),
    unit_amount: cdktf.numberToTerraform(struct!.unitAmount),
    unit_amount_decimal: cdktf.numberToTerraform(struct!.unitAmountDecimal),
    up_to: cdktf.numberToTerraform(struct!.upTo),
  }
}


export function priceCurrencyOptionsTiersToHclTerraform(struct?: PriceCurrencyOptionsTiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flat_amount: {
      value: cdktf.numberToHclTerraform(struct!.flatAmount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flat_amount_decimal: {
      value: cdktf.numberToHclTerraform(struct!.flatAmountDecimal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit_amount: {
      value: cdktf.numberToHclTerraform(struct!.unitAmount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit_amount_decimal: {
      value: cdktf.numberToHclTerraform(struct!.unitAmountDecimal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    up_to: {
      value: cdktf.numberToHclTerraform(struct!.upTo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PriceCurrencyOptionsTiersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PriceCurrencyOptionsTiers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flatAmount !== undefined) {
      hasAnyValues = true;
      internalValueResult.flatAmount = this._flatAmount;
    }
    if (this._flatAmountDecimal !== undefined) {
      hasAnyValues = true;
      internalValueResult.flatAmountDecimal = this._flatAmountDecimal;
    }
    if (this._unitAmount !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitAmount = this._unitAmount;
    }
    if (this._unitAmountDecimal !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitAmountDecimal = this._unitAmountDecimal;
    }
    if (this._upTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.upTo = this._upTo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PriceCurrencyOptionsTiers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flatAmount = undefined;
      this._flatAmountDecimal = undefined;
      this._unitAmount = undefined;
      this._unitAmountDecimal = undefined;
      this._upTo = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flatAmount = value.flatAmount;
      this._flatAmountDecimal = value.flatAmountDecimal;
      this._unitAmount = value.unitAmount;
      this._unitAmountDecimal = value.unitAmountDecimal;
      this._upTo = value.upTo;
    }
  }

  // flat_amount - computed: false, optional: true, required: false
  private _flatAmount?: number; 
  public get flatAmount() {
    return this.getNumberAttribute('flat_amount');
  }
  public set flatAmount(value: number) {
    this._flatAmount = value;
  }
  public resetFlatAmount() {
    this._flatAmount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flatAmountInput() {
    return this._flatAmount;
  }

  // flat_amount_decimal - computed: false, optional: true, required: false
  private _flatAmountDecimal?: number; 
  public get flatAmountDecimal() {
    return this.getNumberAttribute('flat_amount_decimal');
  }
  public set flatAmountDecimal(value: number) {
    this._flatAmountDecimal = value;
  }
  public resetFlatAmountDecimal() {
    this._flatAmountDecimal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flatAmountDecimalInput() {
    return this._flatAmountDecimal;
  }

  // unit_amount - computed: false, optional: true, required: false
  private _unitAmount?: number; 
  public get unitAmount() {
    return this.getNumberAttribute('unit_amount');
  }
  public set unitAmount(value: number) {
    this._unitAmount = value;
  }
  public resetUnitAmount() {
    this._unitAmount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitAmountInput() {
    return this._unitAmount;
  }

  // unit_amount_decimal - computed: false, optional: true, required: false
  private _unitAmountDecimal?: number; 
  public get unitAmountDecimal() {
    return this.getNumberAttribute('unit_amount_decimal');
  }
  public set unitAmountDecimal(value: number) {
    this._unitAmountDecimal = value;
  }
  public resetUnitAmountDecimal() {
    this._unitAmountDecimal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitAmountDecimalInput() {
    return this._unitAmountDecimal;
  }

  // up_to - computed: false, optional: true, required: false
  private _upTo?: number; 
  public get upTo() {
    return this.getNumberAttribute('up_to');
  }
  public set upTo(value: number) {
    this._upTo = value;
  }
  public resetUpTo() {
    this._upTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upToInput() {
    return this._upTo;
  }
}

export class PriceCurrencyOptionsTiersList extends cdktf.ComplexList {
  public internalValue? : PriceCurrencyOptionsTiers[] | cdktf.IResolvable

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
  public get(index: number): PriceCurrencyOptionsTiersOutputReference {
    return new PriceCurrencyOptionsTiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PriceCurrencyOptions {
  /**
  * Each currency must be a three-letter ISO currency code and a supported currency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#currency Price#currency}
  */
  readonly currency: string;
  /**
  * Only required if a default tax behavior was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of inclusive, exclusive, or unspecified. Once specified as either inclusive or exclusive, it cannot be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#tax_behavior Price#tax_behavior}
  */
  readonly taxBehavior?: string;
  /**
  * A positive integer in cents (or -1 for a free price) representing how much to charge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#unit_amount Price#unit_amount}
  */
  readonly unitAmount?: number;
  /**
  * Same as unit_amount, but accepts a decimal value in cents with at most 12 decimal places. Only one of unit_amount and unit_amount_decimal can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#unit_amount_decimal Price#unit_amount_decimal}
  */
  readonly unitAmountDecimal?: number;
  /**
  * custom_unit_amount block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#custom_unit_amount Price#custom_unit_amount}
  */
  readonly customUnitAmount?: PriceCurrencyOptionsCustomUnitAmount;
  /**
  * tiers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#tiers Price#tiers}
  */
  readonly tiers?: PriceCurrencyOptionsTiers[] | cdktf.IResolvable;
}

export function priceCurrencyOptionsToTerraform(struct?: PriceCurrencyOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    currency: cdktf.stringToTerraform(struct!.currency),
    tax_behavior: cdktf.stringToTerraform(struct!.taxBehavior),
    unit_amount: cdktf.numberToTerraform(struct!.unitAmount),
    unit_amount_decimal: cdktf.numberToTerraform(struct!.unitAmountDecimal),
    custom_unit_amount: priceCurrencyOptionsCustomUnitAmountToTerraform(struct!.customUnitAmount),
    tiers: cdktf.listMapper(priceCurrencyOptionsTiersToTerraform, true)(struct!.tiers),
  }
}


export function priceCurrencyOptionsToHclTerraform(struct?: PriceCurrencyOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    unit_amount: {
      value: cdktf.numberToHclTerraform(struct!.unitAmount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit_amount_decimal: {
      value: cdktf.numberToHclTerraform(struct!.unitAmountDecimal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_unit_amount: {
      value: priceCurrencyOptionsCustomUnitAmountToHclTerraform(struct!.customUnitAmount),
      isBlock: true,
      type: "list",
      storageClassType: "PriceCurrencyOptionsCustomUnitAmountList",
    },
    tiers: {
      value: cdktf.listMapperHcl(priceCurrencyOptionsTiersToHclTerraform, true)(struct!.tiers),
      isBlock: true,
      type: "list",
      storageClassType: "PriceCurrencyOptionsTiersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PriceCurrencyOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PriceCurrencyOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currency !== undefined) {
      hasAnyValues = true;
      internalValueResult.currency = this._currency;
    }
    if (this._taxBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.taxBehavior = this._taxBehavior;
    }
    if (this._unitAmount !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitAmount = this._unitAmount;
    }
    if (this._unitAmountDecimal !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitAmountDecimal = this._unitAmountDecimal;
    }
    if (this._customUnitAmount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customUnitAmount = this._customUnitAmount?.internalValue;
    }
    if (this._tiers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tiers = this._tiers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PriceCurrencyOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._currency = undefined;
      this._taxBehavior = undefined;
      this._unitAmount = undefined;
      this._unitAmountDecimal = undefined;
      this._customUnitAmount.internalValue = undefined;
      this._tiers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._currency = value.currency;
      this._taxBehavior = value.taxBehavior;
      this._unitAmount = value.unitAmount;
      this._unitAmountDecimal = value.unitAmountDecimal;
      this._customUnitAmount.internalValue = value.customUnitAmount;
      this._tiers.internalValue = value.tiers;
    }
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

  // unit_amount - computed: false, optional: true, required: false
  private _unitAmount?: number; 
  public get unitAmount() {
    return this.getNumberAttribute('unit_amount');
  }
  public set unitAmount(value: number) {
    this._unitAmount = value;
  }
  public resetUnitAmount() {
    this._unitAmount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitAmountInput() {
    return this._unitAmount;
  }

  // unit_amount_decimal - computed: false, optional: true, required: false
  private _unitAmountDecimal?: number; 
  public get unitAmountDecimal() {
    return this.getNumberAttribute('unit_amount_decimal');
  }
  public set unitAmountDecimal(value: number) {
    this._unitAmountDecimal = value;
  }
  public resetUnitAmountDecimal() {
    this._unitAmountDecimal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitAmountDecimalInput() {
    return this._unitAmountDecimal;
  }

  // custom_unit_amount - computed: false, optional: true, required: false
  private _customUnitAmount = new PriceCurrencyOptionsCustomUnitAmountOutputReference(this, "custom_unit_amount");
  public get customUnitAmount() {
    return this._customUnitAmount;
  }
  public putCustomUnitAmount(value: PriceCurrencyOptionsCustomUnitAmount) {
    this._customUnitAmount.internalValue = value;
  }
  public resetCustomUnitAmount() {
    this._customUnitAmount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customUnitAmountInput() {
    return this._customUnitAmount.internalValue;
  }

  // tiers - computed: false, optional: true, required: false
  private _tiers = new PriceCurrencyOptionsTiersList(this, "tiers", false);
  public get tiers() {
    return this._tiers;
  }
  public putTiers(value: PriceCurrencyOptionsTiers[] | cdktf.IResolvable) {
    this._tiers.internalValue = value;
  }
  public resetTiers() {
    this._tiers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tiersInput() {
    return this._tiers.internalValue;
  }
}

export class PriceCurrencyOptionsList extends cdktf.ComplexList {
  public internalValue? : PriceCurrencyOptions[] | cdktf.IResolvable

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
  public get(index: number): PriceCurrencyOptionsOutputReference {
    return new PriceCurrencyOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PriceCustomUnitAmount {
  /**
  * Pass in true to enable custom_unit_amount, otherwise omit custom_unit_amount
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#enabled Price#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The maximum unit amount the customer can specify for this item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#maximum Price#maximum}
  */
  readonly maximum?: number;
  /**
  * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#minimum Price#minimum}
  */
  readonly minimum?: number;
  /**
  * The starting unit amount which can be updated by the customer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#preset Price#preset}
  */
  readonly preset?: number;
}

export function priceCustomUnitAmountToTerraform(struct?: PriceCustomUnitAmountOutputReference | PriceCustomUnitAmount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    maximum: cdktf.numberToTerraform(struct!.maximum),
    minimum: cdktf.numberToTerraform(struct!.minimum),
    preset: cdktf.numberToTerraform(struct!.preset),
  }
}


export function priceCustomUnitAmountToHclTerraform(struct?: PriceCustomUnitAmountOutputReference | PriceCustomUnitAmount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    maximum: {
      value: cdktf.numberToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum: {
      value: cdktf.numberToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preset: {
      value: cdktf.numberToHclTerraform(struct!.preset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PriceCustomUnitAmountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PriceCustomUnitAmount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._preset !== undefined) {
      hasAnyValues = true;
      internalValueResult.preset = this._preset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PriceCustomUnitAmount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._maximum = undefined;
      this._minimum = undefined;
      this._preset = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._maximum = value.maximum;
      this._minimum = value.minimum;
      this._preset = value.preset;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: number; 
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
  public set minimum(value: number) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // preset - computed: false, optional: true, required: false
  private _preset?: number; 
  public get preset() {
    return this.getNumberAttribute('preset');
  }
  public set preset(value: number) {
    this._preset = value;
  }
  public resetPreset() {
    this._preset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetInput() {
    return this._preset;
  }
}
export interface PriceRecurring {
  /**
  * Specifies a usage aggregation strategy for prices of usage_type=metered. Allowed values are sum for summing up all usage during a period, last_during_period for using the last usage record reported within a period, last_ever for using the last usage record ever (across period bounds) or max which uses the usage record with the maximum reported usage during a period. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#aggregate_usage Price#aggregate_usage}
  */
  readonly aggregateUsage?: string;
  /**
  * Specifies billing frequency. Either day, week, month or year.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#interval Price#interval}
  */
  readonly interval: string;
  /**
  * The number of intervals between subscription billings. For example, interval=month and interval_count=3 bills every 3 months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#interval_count Price#interval_count}
  */
  readonly intervalCount?: number;
  /**
  * The meter tracking the usage of a metered price
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#meter Price#meter}
  */
  readonly meter?: string;
  /**
  * Configures how the quantity per period should be determined. Can be either metered or licensed. licensed automatically bills the quantity set when adding it to a subscription. metered aggregates the total usage based on usage records. Defaults to licensed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#usage_type Price#usage_type}
  */
  readonly usageType?: string;
}

export function priceRecurringToTerraform(struct?: PriceRecurringOutputReference | PriceRecurring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregate_usage: cdktf.stringToTerraform(struct!.aggregateUsage),
    interval: cdktf.stringToTerraform(struct!.interval),
    interval_count: cdktf.numberToTerraform(struct!.intervalCount),
    meter: cdktf.stringToTerraform(struct!.meter),
    usage_type: cdktf.stringToTerraform(struct!.usageType),
  }
}


export function priceRecurringToHclTerraform(struct?: PriceRecurringOutputReference | PriceRecurring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregate_usage: {
      value: cdktf.stringToHclTerraform(struct!.aggregateUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval_count: {
      value: cdktf.numberToHclTerraform(struct!.intervalCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    meter: {
      value: cdktf.stringToHclTerraform(struct!.meter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usage_type: {
      value: cdktf.stringToHclTerraform(struct!.usageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PriceRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PriceRecurring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregateUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregateUsage = this._aggregateUsage;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalCount = this._intervalCount;
    }
    if (this._meter !== undefined) {
      hasAnyValues = true;
      internalValueResult.meter = this._meter;
    }
    if (this._usageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.usageType = this._usageType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PriceRecurring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregateUsage = undefined;
      this._interval = undefined;
      this._intervalCount = undefined;
      this._meter = undefined;
      this._usageType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregateUsage = value.aggregateUsage;
      this._interval = value.interval;
      this._intervalCount = value.intervalCount;
      this._meter = value.meter;
      this._usageType = value.usageType;
    }
  }

  // aggregate_usage - computed: false, optional: true, required: false
  private _aggregateUsage?: string; 
  public get aggregateUsage() {
    return this.getStringAttribute('aggregate_usage');
  }
  public set aggregateUsage(value: string) {
    this._aggregateUsage = value;
  }
  public resetAggregateUsage() {
    this._aggregateUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateUsageInput() {
    return this._aggregateUsage;
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_count - computed: false, optional: true, required: false
  private _intervalCount?: number; 
  public get intervalCount() {
    return this.getNumberAttribute('interval_count');
  }
  public set intervalCount(value: number) {
    this._intervalCount = value;
  }
  public resetIntervalCount() {
    this._intervalCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalCountInput() {
    return this._intervalCount;
  }

  // meter - computed: false, optional: true, required: false
  private _meter?: string; 
  public get meter() {
    return this.getStringAttribute('meter');
  }
  public set meter(value: string) {
    this._meter = value;
  }
  public resetMeter() {
    this._meter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meterInput() {
    return this._meter;
  }

  // usage_type - computed: false, optional: true, required: false
  private _usageType?: string; 
  public get usageType() {
    return this.getStringAttribute('usage_type');
  }
  public set usageType(value: string) {
    this._usageType = value;
  }
  public resetUsageType() {
    this._usageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageTypeInput() {
    return this._usageType;
  }
}
export interface PriceTiers {
  /**
  * The flat billing amount for an entire tier, regardless of the number of units in the tier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#flat_amount Price#flat_amount}
  */
  readonly flatAmount?: number;
  /**
  * Same as flat_amount, but accepts a decimal value representing an integer in the minor units of the currency. Only one of flat_amount and flat_amount_decimal can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#flat_amount_decimal Price#flat_amount_decimal}
  */
  readonly flatAmountDecimal?: number;
  /**
  * The per unit billing amount for each individual unit for which this tier applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#unit_amount Price#unit_amount}
  */
  readonly unitAmount?: number;
  /**
  * Same as unit_amount, but accepts a decimal value in cents with at most 12 decimal places. Only one of unit_amount and unit_amount_decimal can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#unit_amount_decimal Price#unit_amount_decimal}
  */
  readonly unitAmountDecimal?: number;
  /**
  * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use -1 to define a fallback tier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#up_to Price#up_to}
  */
  readonly upTo?: number;
}

export function priceTiersToTerraform(struct?: PriceTiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flat_amount: cdktf.numberToTerraform(struct!.flatAmount),
    flat_amount_decimal: cdktf.numberToTerraform(struct!.flatAmountDecimal),
    unit_amount: cdktf.numberToTerraform(struct!.unitAmount),
    unit_amount_decimal: cdktf.numberToTerraform(struct!.unitAmountDecimal),
    up_to: cdktf.numberToTerraform(struct!.upTo),
  }
}


export function priceTiersToHclTerraform(struct?: PriceTiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flat_amount: {
      value: cdktf.numberToHclTerraform(struct!.flatAmount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flat_amount_decimal: {
      value: cdktf.numberToHclTerraform(struct!.flatAmountDecimal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit_amount: {
      value: cdktf.numberToHclTerraform(struct!.unitAmount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit_amount_decimal: {
      value: cdktf.numberToHclTerraform(struct!.unitAmountDecimal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    up_to: {
      value: cdktf.numberToHclTerraform(struct!.upTo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PriceTiersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PriceTiers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flatAmount !== undefined) {
      hasAnyValues = true;
      internalValueResult.flatAmount = this._flatAmount;
    }
    if (this._flatAmountDecimal !== undefined) {
      hasAnyValues = true;
      internalValueResult.flatAmountDecimal = this._flatAmountDecimal;
    }
    if (this._unitAmount !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitAmount = this._unitAmount;
    }
    if (this._unitAmountDecimal !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitAmountDecimal = this._unitAmountDecimal;
    }
    if (this._upTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.upTo = this._upTo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PriceTiers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flatAmount = undefined;
      this._flatAmountDecimal = undefined;
      this._unitAmount = undefined;
      this._unitAmountDecimal = undefined;
      this._upTo = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flatAmount = value.flatAmount;
      this._flatAmountDecimal = value.flatAmountDecimal;
      this._unitAmount = value.unitAmount;
      this._unitAmountDecimal = value.unitAmountDecimal;
      this._upTo = value.upTo;
    }
  }

  // flat_amount - computed: true, optional: true, required: false
  private _flatAmount?: number; 
  public get flatAmount() {
    return this.getNumberAttribute('flat_amount');
  }
  public set flatAmount(value: number) {
    this._flatAmount = value;
  }
  public resetFlatAmount() {
    this._flatAmount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flatAmountInput() {
    return this._flatAmount;
  }

  // flat_amount_decimal - computed: true, optional: true, required: false
  private _flatAmountDecimal?: number; 
  public get flatAmountDecimal() {
    return this.getNumberAttribute('flat_amount_decimal');
  }
  public set flatAmountDecimal(value: number) {
    this._flatAmountDecimal = value;
  }
  public resetFlatAmountDecimal() {
    this._flatAmountDecimal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flatAmountDecimalInput() {
    return this._flatAmountDecimal;
  }

  // unit_amount - computed: true, optional: true, required: false
  private _unitAmount?: number; 
  public get unitAmount() {
    return this.getNumberAttribute('unit_amount');
  }
  public set unitAmount(value: number) {
    this._unitAmount = value;
  }
  public resetUnitAmount() {
    this._unitAmount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitAmountInput() {
    return this._unitAmount;
  }

  // unit_amount_decimal - computed: true, optional: true, required: false
  private _unitAmountDecimal?: number; 
  public get unitAmountDecimal() {
    return this.getNumberAttribute('unit_amount_decimal');
  }
  public set unitAmountDecimal(value: number) {
    this._unitAmountDecimal = value;
  }
  public resetUnitAmountDecimal() {
    this._unitAmountDecimal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitAmountDecimalInput() {
    return this._unitAmountDecimal;
  }

  // up_to - computed: true, optional: true, required: false
  private _upTo?: number; 
  public get upTo() {
    return this.getNumberAttribute('up_to');
  }
  public set upTo(value: number) {
    this._upTo = value;
  }
  public resetUpTo() {
    this._upTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upToInput() {
    return this._upTo;
  }
}

export class PriceTiersList extends cdktf.ComplexList {
  public internalValue? : PriceTiers[] | cdktf.IResolvable

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
  public get(index: number): PriceTiersOutputReference {
    return new PriceTiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PriceTransformQuantity {
  /**
  * Divide usage by this number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#divide_by Price#divide_by}
  */
  readonly divideBy: number;
  /**
  * After division, either round the result up or down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#round Price#round}
  */
  readonly round: string;
}

export function priceTransformQuantityToTerraform(struct?: PriceTransformQuantityOutputReference | PriceTransformQuantity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    divide_by: cdktf.numberToTerraform(struct!.divideBy),
    round: cdktf.stringToTerraform(struct!.round),
  }
}


export function priceTransformQuantityToHclTerraform(struct?: PriceTransformQuantityOutputReference | PriceTransformQuantity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    divide_by: {
      value: cdktf.numberToHclTerraform(struct!.divideBy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    round: {
      value: cdktf.stringToHclTerraform(struct!.round),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PriceTransformQuantityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PriceTransformQuantity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._divideBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.divideBy = this._divideBy;
    }
    if (this._round !== undefined) {
      hasAnyValues = true;
      internalValueResult.round = this._round;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PriceTransformQuantity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._divideBy = undefined;
      this._round = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._divideBy = value.divideBy;
      this._round = value.round;
    }
  }

  // divide_by - computed: false, optional: false, required: true
  private _divideBy?: number; 
  public get divideBy() {
    return this.getNumberAttribute('divide_by');
  }
  public set divideBy(value: number) {
    this._divideBy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get divideByInput() {
    return this._divideBy;
  }

  // round - computed: false, optional: false, required: true
  private _round?: string; 
  public get round() {
    return this.getStringAttribute('round');
  }
  public set round(value: string) {
    this._round = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roundInput() {
    return this._round;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price stripe_price}
*/
export class Price extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stripe_price";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Price resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Price to import
  * @param importFromId The id of the existing Price that should be imported. Refer to the {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Price to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stripe_price", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/price stripe_price} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PriceConfig
  */
  public constructor(scope: Construct, id: string, config: PriceConfig) {
    super(scope, id, {
      terraformResourceType: 'stripe_price',
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
    this._active = config.active;
    this._billingScheme = config.billingScheme;
    this._currency = config.currency;
    this._lookupKey = config.lookupKey;
    this._metadata = config.metadata;
    this._nickname = config.nickname;
    this._product = config.product;
    this._taxBehavior = config.taxBehavior;
    this._tiersMode = config.tiersMode;
    this._transferLookupKey = config.transferLookupKey;
    this._unitAmount = config.unitAmount;
    this._unitAmountDecimal = config.unitAmountDecimal;
    this._currencyOptions.internalValue = config.currencyOptions;
    this._customUnitAmount.internalValue = config.customUnitAmount;
    this._recurring.internalValue = config.recurring;
    this._tiers.internalValue = config.tiers;
    this._transformQuantity.internalValue = config.transformQuantity;
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

  // billing_scheme - computed: true, optional: true, required: false
  private _billingScheme?: string; 
  public get billingScheme() {
    return this.getStringAttribute('billing_scheme');
  }
  public set billingScheme(value: string) {
    this._billingScheme = value;
  }
  public resetBillingScheme() {
    this._billingScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingSchemeInput() {
    return this._billingScheme;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lookup_key - computed: false, optional: true, required: false
  private _lookupKey?: string; 
  public get lookupKey() {
    return this.getStringAttribute('lookup_key');
  }
  public set lookupKey(value: string) {
    this._lookupKey = value;
  }
  public resetLookupKey() {
    this._lookupKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupKeyInput() {
    return this._lookupKey;
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

  // nickname - computed: false, optional: true, required: false
  private _nickname?: string; 
  public get nickname() {
    return this.getStringAttribute('nickname');
  }
  public set nickname(value: string) {
    this._nickname = value;
  }
  public resetNickname() {
    this._nickname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicknameInput() {
    return this._nickname;
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

  // tiers_mode - computed: false, optional: true, required: false
  private _tiersMode?: string; 
  public get tiersMode() {
    return this.getStringAttribute('tiers_mode');
  }
  public set tiersMode(value: string) {
    this._tiersMode = value;
  }
  public resetTiersMode() {
    this._tiersMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tiersModeInput() {
    return this._tiersMode;
  }

  // transfer_lookup_key - computed: false, optional: true, required: false
  private _transferLookupKey?: boolean | cdktf.IResolvable; 
  public get transferLookupKey() {
    return this.getBooleanAttribute('transfer_lookup_key');
  }
  public set transferLookupKey(value: boolean | cdktf.IResolvable) {
    this._transferLookupKey = value;
  }
  public resetTransferLookupKey() {
    this._transferLookupKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferLookupKeyInput() {
    return this._transferLookupKey;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unit_amount - computed: true, optional: true, required: false
  private _unitAmount?: number; 
  public get unitAmount() {
    return this.getNumberAttribute('unit_amount');
  }
  public set unitAmount(value: number) {
    this._unitAmount = value;
  }
  public resetUnitAmount() {
    this._unitAmount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitAmountInput() {
    return this._unitAmount;
  }

  // unit_amount_decimal - computed: true, optional: true, required: false
  private _unitAmountDecimal?: number; 
  public get unitAmountDecimal() {
    return this.getNumberAttribute('unit_amount_decimal');
  }
  public set unitAmountDecimal(value: number) {
    this._unitAmountDecimal = value;
  }
  public resetUnitAmountDecimal() {
    this._unitAmountDecimal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitAmountDecimalInput() {
    return this._unitAmountDecimal;
  }

  // currency_options - computed: false, optional: true, required: false
  private _currencyOptions = new PriceCurrencyOptionsList(this, "currency_options", false);
  public get currencyOptions() {
    return this._currencyOptions;
  }
  public putCurrencyOptions(value: PriceCurrencyOptions[] | cdktf.IResolvable) {
    this._currencyOptions.internalValue = value;
  }
  public resetCurrencyOptions() {
    this._currencyOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currencyOptionsInput() {
    return this._currencyOptions.internalValue;
  }

  // custom_unit_amount - computed: false, optional: true, required: false
  private _customUnitAmount = new PriceCustomUnitAmountOutputReference(this, "custom_unit_amount");
  public get customUnitAmount() {
    return this._customUnitAmount;
  }
  public putCustomUnitAmount(value: PriceCustomUnitAmount) {
    this._customUnitAmount.internalValue = value;
  }
  public resetCustomUnitAmount() {
    this._customUnitAmount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customUnitAmountInput() {
    return this._customUnitAmount.internalValue;
  }

  // recurring - computed: false, optional: true, required: false
  private _recurring = new PriceRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
  public putRecurring(value: PriceRecurring) {
    this._recurring.internalValue = value;
  }
  public resetRecurring() {
    this._recurring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringInput() {
    return this._recurring.internalValue;
  }

  // tiers - computed: false, optional: true, required: false
  private _tiers = new PriceTiersList(this, "tiers", false);
  public get tiers() {
    return this._tiers;
  }
  public putTiers(value: PriceTiers[] | cdktf.IResolvable) {
    this._tiers.internalValue = value;
  }
  public resetTiers() {
    this._tiers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tiersInput() {
    return this._tiers.internalValue;
  }

  // transform_quantity - computed: false, optional: true, required: false
  private _transformQuantity = new PriceTransformQuantityOutputReference(this, "transform_quantity");
  public get transformQuantity() {
    return this._transformQuantity;
  }
  public putTransformQuantity(value: PriceTransformQuantity) {
    this._transformQuantity.internalValue = value;
  }
  public resetTransformQuantity() {
    this._transformQuantity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformQuantityInput() {
    return this._transformQuantity.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      billing_scheme: cdktf.stringToTerraform(this._billingScheme),
      currency: cdktf.stringToTerraform(this._currency),
      lookup_key: cdktf.stringToTerraform(this._lookupKey),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      nickname: cdktf.stringToTerraform(this._nickname),
      product: cdktf.stringToTerraform(this._product),
      tax_behavior: cdktf.stringToTerraform(this._taxBehavior),
      tiers_mode: cdktf.stringToTerraform(this._tiersMode),
      transfer_lookup_key: cdktf.booleanToTerraform(this._transferLookupKey),
      unit_amount: cdktf.numberToTerraform(this._unitAmount),
      unit_amount_decimal: cdktf.numberToTerraform(this._unitAmountDecimal),
      currency_options: cdktf.listMapper(priceCurrencyOptionsToTerraform, true)(this._currencyOptions.internalValue),
      custom_unit_amount: priceCustomUnitAmountToTerraform(this._customUnitAmount.internalValue),
      recurring: priceRecurringToTerraform(this._recurring.internalValue),
      tiers: cdktf.listMapper(priceTiersToTerraform, true)(this._tiers.internalValue),
      transform_quantity: priceTransformQuantityToTerraform(this._transformQuantity.internalValue),
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
      billing_scheme: {
        value: cdktf.stringToHclTerraform(this._billingScheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      currency: {
        value: cdktf.stringToHclTerraform(this._currency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lookup_key: {
        value: cdktf.stringToHclTerraform(this._lookupKey),
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
      nickname: {
        value: cdktf.stringToHclTerraform(this._nickname),
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
      tax_behavior: {
        value: cdktf.stringToHclTerraform(this._taxBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tiers_mode: {
        value: cdktf.stringToHclTerraform(this._tiersMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transfer_lookup_key: {
        value: cdktf.booleanToHclTerraform(this._transferLookupKey),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unit_amount: {
        value: cdktf.numberToHclTerraform(this._unitAmount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unit_amount_decimal: {
        value: cdktf.numberToHclTerraform(this._unitAmountDecimal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      currency_options: {
        value: cdktf.listMapperHcl(priceCurrencyOptionsToHclTerraform, true)(this._currencyOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PriceCurrencyOptionsList",
      },
      custom_unit_amount: {
        value: priceCustomUnitAmountToHclTerraform(this._customUnitAmount.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PriceCustomUnitAmountList",
      },
      recurring: {
        value: priceRecurringToHclTerraform(this._recurring.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PriceRecurringList",
      },
      tiers: {
        value: cdktf.listMapperHcl(priceTiersToHclTerraform, true)(this._tiers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PriceTiersList",
      },
      transform_quantity: {
        value: priceTransformQuantityToHclTerraform(this._transformQuantity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PriceTransformQuantityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
