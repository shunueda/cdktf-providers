// https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/promotion_code
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PromotionCodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the promotion code is currently active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/promotion_code#active PromotionCode#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * The customer-facing code. Regardless of case, this code must be unique across all active promotion codes for a specific customer. If left blank, we will generate one automatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/promotion_code#code PromotionCode#code}
  */
  readonly code?: string;
  /**
  * The coupon for this promotion code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/promotion_code#coupon PromotionCode#coupon}
  */
  readonly coupon: string;
  /**
  * The customer that this promotion code can be used by. If not set, the promotion code can be used by all customers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/promotion_code#customer PromotionCode#customer}
  */
  readonly customer?: string;
  /**
  * The timestamp at which this promotion code will expire. If the coupon has specified a redeems_by, then this value cannot be after the coupon’s redeems_by. Expected format is RFC3339
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/promotion_code#expires_at PromotionCode#expires_at}
  */
  readonly expiresAt?: string;
  /**
  * A positive integer specifying the number of times the promotion code can be redeemed. If the coupon has specified a max_redemptions, then this value cannot be greater than the coupon’s max_redemptions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/promotion_code#max_redemptions PromotionCode#max_redemptions}
  */
  readonly maxRedemptions?: number;
  /**
  * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/promotion_code#metadata PromotionCode#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * restrictions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/promotion_code#restrictions PromotionCode#restrictions}
  */
  readonly restrictions?: PromotionCodeRestrictions;
}
export interface PromotionCodeRestrictions {
  /**
  * A Boolean indicating if the Promotion Code should only be redeemed for Customers without any successful payments or invoices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/promotion_code#first_time_transaction PromotionCode#first_time_transaction}
  */
  readonly firstTimeTransaction: boolean | cdktf.IResolvable;
  /**
  * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/promotion_code#minimum_amount PromotionCode#minimum_amount}
  */
  readonly minimumAmount?: number;
  /**
  * Three-letter ISO code for minimum_amount
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/promotion_code#minimum_amount_currency PromotionCode#minimum_amount_currency}
  */
  readonly minimumAmountCurrency?: string;
}

export function promotionCodeRestrictionsToTerraform(struct?: PromotionCodeRestrictionsOutputReference | PromotionCodeRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    first_time_transaction: cdktf.booleanToTerraform(struct!.firstTimeTransaction),
    minimum_amount: cdktf.numberToTerraform(struct!.minimumAmount),
    minimum_amount_currency: cdktf.stringToTerraform(struct!.minimumAmountCurrency),
  }
}


export function promotionCodeRestrictionsToHclTerraform(struct?: PromotionCodeRestrictionsOutputReference | PromotionCodeRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    first_time_transaction: {
      value: cdktf.booleanToHclTerraform(struct!.firstTimeTransaction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    minimum_amount: {
      value: cdktf.numberToHclTerraform(struct!.minimumAmount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_amount_currency: {
      value: cdktf.stringToHclTerraform(struct!.minimumAmountCurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PromotionCodeRestrictionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PromotionCodeRestrictions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firstTimeTransaction !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstTimeTransaction = this._firstTimeTransaction;
    }
    if (this._minimumAmount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumAmount = this._minimumAmount;
    }
    if (this._minimumAmountCurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumAmountCurrency = this._minimumAmountCurrency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PromotionCodeRestrictions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._firstTimeTransaction = undefined;
      this._minimumAmount = undefined;
      this._minimumAmountCurrency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._firstTimeTransaction = value.firstTimeTransaction;
      this._minimumAmount = value.minimumAmount;
      this._minimumAmountCurrency = value.minimumAmountCurrency;
    }
  }

  // first_time_transaction - computed: false, optional: false, required: true
  private _firstTimeTransaction?: boolean | cdktf.IResolvable; 
  public get firstTimeTransaction() {
    return this.getBooleanAttribute('first_time_transaction');
  }
  public set firstTimeTransaction(value: boolean | cdktf.IResolvable) {
    this._firstTimeTransaction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firstTimeTransactionInput() {
    return this._firstTimeTransaction;
  }

  // minimum_amount - computed: false, optional: true, required: false
  private _minimumAmount?: number; 
  public get minimumAmount() {
    return this.getNumberAttribute('minimum_amount');
  }
  public set minimumAmount(value: number) {
    this._minimumAmount = value;
  }
  public resetMinimumAmount() {
    this._minimumAmount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumAmountInput() {
    return this._minimumAmount;
  }

  // minimum_amount_currency - computed: false, optional: true, required: false
  private _minimumAmountCurrency?: string; 
  public get minimumAmountCurrency() {
    return this.getStringAttribute('minimum_amount_currency');
  }
  public set minimumAmountCurrency(value: string) {
    this._minimumAmountCurrency = value;
  }
  public resetMinimumAmountCurrency() {
    this._minimumAmountCurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumAmountCurrencyInput() {
    return this._minimumAmountCurrency;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/promotion_code stripe_promotion_code}
*/
export class PromotionCode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stripe_promotion_code";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PromotionCode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PromotionCode to import
  * @param importFromId The id of the existing PromotionCode that should be imported. Refer to the {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/promotion_code#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PromotionCode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stripe_promotion_code", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/promotion_code stripe_promotion_code} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PromotionCodeConfig
  */
  public constructor(scope: Construct, id: string, config: PromotionCodeConfig) {
    super(scope, id, {
      terraformResourceType: 'stripe_promotion_code',
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
    this._code = config.code;
    this._coupon = config.coupon;
    this._customer = config.customer;
    this._expiresAt = config.expiresAt;
    this._maxRedemptions = config.maxRedemptions;
    this._metadata = config.metadata;
    this._restrictions.internalValue = config.restrictions;
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

  // code - computed: false, optional: true, required: false
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // coupon - computed: false, optional: false, required: true
  private _coupon?: string; 
  public get coupon() {
    return this.getStringAttribute('coupon');
  }
  public set coupon(value: string) {
    this._coupon = value;
  }
  // Temporarily expose input value. Use with caution.
  public get couponInput() {
    return this._coupon;
  }

  // customer - computed: false, optional: true, required: false
  private _customer?: string; 
  public get customer() {
    return this.getStringAttribute('customer');
  }
  public set customer(value: string) {
    this._customer = value;
  }
  public resetCustomer() {
    this._customer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerInput() {
    return this._customer;
  }

  // expires_at - computed: false, optional: true, required: false
  private _expiresAt?: string; 
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }
  public set expiresAt(value: string) {
    this._expiresAt = value;
  }
  public resetExpiresAt() {
    this._expiresAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresAtInput() {
    return this._expiresAt;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_redemptions - computed: false, optional: true, required: false
  private _maxRedemptions?: number; 
  public get maxRedemptions() {
    return this.getNumberAttribute('max_redemptions');
  }
  public set maxRedemptions(value: number) {
    this._maxRedemptions = value;
  }
  public resetMaxRedemptions() {
    this._maxRedemptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRedemptionsInput() {
    return this._maxRedemptions;
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

  // restrictions - computed: false, optional: true, required: false
  private _restrictions = new PromotionCodeRestrictionsOutputReference(this, "restrictions");
  public get restrictions() {
    return this._restrictions;
  }
  public putRestrictions(value: PromotionCodeRestrictions) {
    this._restrictions.internalValue = value;
  }
  public resetRestrictions() {
    this._restrictions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionsInput() {
    return this._restrictions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      code: cdktf.stringToTerraform(this._code),
      coupon: cdktf.stringToTerraform(this._coupon),
      customer: cdktf.stringToTerraform(this._customer),
      expires_at: cdktf.stringToTerraform(this._expiresAt),
      max_redemptions: cdktf.numberToTerraform(this._maxRedemptions),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      restrictions: promotionCodeRestrictionsToTerraform(this._restrictions.internalValue),
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
      code: {
        value: cdktf.stringToHclTerraform(this._code),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      coupon: {
        value: cdktf.stringToHclTerraform(this._coupon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer: {
        value: cdktf.stringToHclTerraform(this._customer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expires_at: {
        value: cdktf.stringToHclTerraform(this._expiresAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_redemptions: {
        value: cdktf.numberToHclTerraform(this._maxRedemptions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      restrictions: {
        value: promotionCodeRestrictionsToHclTerraform(this._restrictions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PromotionCodeRestrictionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
