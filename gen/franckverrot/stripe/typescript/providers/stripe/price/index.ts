// https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/price
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PriceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/price#active Price#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/price#billing_scheme Price#billing_scheme}
  */
  readonly billingScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/price#currency Price#currency}
  */
  readonly currency: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/price#id Price#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/price#metadata Price#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/price#nickname Price#nickname}
  */
  readonly nickname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/price#price_id Price#price_id}
  */
  readonly priceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/price#product Price#product}
  */
  readonly product?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/price#recurring Price#recurring}
  */
  readonly recurring?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/price#tiers_mode Price#tiers_mode}
  */
  readonly tiersMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/price#unit_amount Price#unit_amount}
  */
  readonly unitAmount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/price#unit_amount_decimal Price#unit_amount_decimal}
  */
  readonly unitAmountDecimal?: number;
  /**
  * tier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/price#tier Price#tier}
  */
  readonly tier?: PriceTier[] | cdktf.IResolvable;
}
export interface PriceTier {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/price#flat_amount Price#flat_amount}
  */
  readonly flatAmount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/price#flat_amount_decimal Price#flat_amount_decimal}
  */
  readonly flatAmountDecimal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/price#unit_amount Price#unit_amount}
  */
  readonly unitAmount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/price#unit_amount_decimal Price#unit_amount_decimal}
  */
  readonly unitAmountDecimal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/price#up_to Price#up_to}
  */
  readonly upTo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/price#up_to_inf Price#up_to_inf}
  */
  readonly upToInf?: boolean | cdktf.IResolvable;
}

export function priceTierToTerraform(struct?: PriceTier | cdktf.IResolvable): any {
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
    up_to_inf: cdktf.booleanToTerraform(struct!.upToInf),
  }
}


export function priceTierToHclTerraform(struct?: PriceTier | cdktf.IResolvable): any {
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
    up_to_inf: {
      value: cdktf.booleanToHclTerraform(struct!.upToInf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PriceTierOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PriceTier | cdktf.IResolvable | undefined {
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
    if (this._upToInf !== undefined) {
      hasAnyValues = true;
      internalValueResult.upToInf = this._upToInf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PriceTier | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flatAmount = undefined;
      this._flatAmountDecimal = undefined;
      this._unitAmount = undefined;
      this._unitAmountDecimal = undefined;
      this._upTo = undefined;
      this._upToInf = undefined;
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
      this._upToInf = value.upToInf;
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

  // up_to_inf - computed: false, optional: true, required: false
  private _upToInf?: boolean | cdktf.IResolvable; 
  public get upToInf() {
    return this.getBooleanAttribute('up_to_inf');
  }
  public set upToInf(value: boolean | cdktf.IResolvable) {
    this._upToInf = value;
  }
  public resetUpToInf() {
    this._upToInf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upToInfInput() {
    return this._upToInf;
  }
}

export class PriceTierList extends cdktf.ComplexList {
  public internalValue? : PriceTier[] | cdktf.IResolvable

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
  public get(index: number): PriceTierOutputReference {
    return new PriceTierOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/price stripe_price}
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
  * @param importFromId The id of the existing Price that should be imported. Refer to the {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/price#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Price to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stripe_price", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/price stripe_price} Resource
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
        providerVersion: '1.9.0',
        providerVersionConstraint: '1.9.0'
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
    this._id = config.id;
    this._metadata = config.metadata;
    this._nickname = config.nickname;
    this._priceId = config.priceId;
    this._product = config.product;
    this._recurring = config.recurring;
    this._tiersMode = config.tiersMode;
    this._unitAmount = config.unitAmount;
    this._unitAmountDecimal = config.unitAmountDecimal;
    this._tier.internalValue = config.tier;
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

  // billing_scheme - computed: false, optional: true, required: false
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

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getNumberAttribute('created');
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

  // price_id - computed: true, optional: true, required: false
  private _priceId?: string; 
  public get priceId() {
    return this.getStringAttribute('price_id');
  }
  public set priceId(value: string) {
    this._priceId = value;
  }
  public resetPriceId() {
    this._priceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priceIdInput() {
    return this._priceId;
  }

  // product - computed: false, optional: true, required: false
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  public resetProduct() {
    this._product = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // recurring - computed: false, optional: true, required: false
  private _recurring?: { [key: string]: string }; 
  public get recurring() {
    return this.getStringMapAttribute('recurring');
  }
  public set recurring(value: { [key: string]: string }) {
    this._recurring = value;
  }
  public resetRecurring() {
    this._recurring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringInput() {
    return this._recurring;
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

  // tier - computed: false, optional: true, required: false
  private _tier = new PriceTierList(this, "tier", false);
  public get tier() {
    return this._tier;
  }
  public putTier(value: PriceTier[] | cdktf.IResolvable) {
    this._tier.internalValue = value;
  }
  public resetTier() {
    this._tier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      billing_scheme: cdktf.stringToTerraform(this._billingScheme),
      currency: cdktf.stringToTerraform(this._currency),
      id: cdktf.stringToTerraform(this._id),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      nickname: cdktf.stringToTerraform(this._nickname),
      price_id: cdktf.stringToTerraform(this._priceId),
      product: cdktf.stringToTerraform(this._product),
      recurring: cdktf.hashMapper(cdktf.stringToTerraform)(this._recurring),
      tiers_mode: cdktf.stringToTerraform(this._tiersMode),
      unit_amount: cdktf.numberToTerraform(this._unitAmount),
      unit_amount_decimal: cdktf.numberToTerraform(this._unitAmountDecimal),
      tier: cdktf.listMapper(priceTierToTerraform, true)(this._tier.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      price_id: {
        value: cdktf.stringToHclTerraform(this._priceId),
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
      recurring: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._recurring),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tiers_mode: {
        value: cdktf.stringToHclTerraform(this._tiersMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      tier: {
        value: cdktf.listMapperHcl(priceTierToHclTerraform, true)(this._tier.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PriceTierList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
