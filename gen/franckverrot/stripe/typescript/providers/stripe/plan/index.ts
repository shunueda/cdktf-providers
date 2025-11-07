// https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/plan#active Plan#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/plan#aggregate_usage Plan#aggregate_usage}
  */
  readonly aggregateUsage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/plan#amount Plan#amount}
  */
  readonly amount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/plan#amount_decimal Plan#amount_decimal}
  */
  readonly amountDecimal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/plan#billing_scheme Plan#billing_scheme}
  */
  readonly billingScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/plan#currency Plan#currency}
  */
  readonly currency: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/plan#id Plan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/plan#interval Plan#interval}
  */
  readonly interval: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/plan#interval_count Plan#interval_count}
  */
  readonly intervalCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/plan#metadata Plan#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/plan#nickname Plan#nickname}
  */
  readonly nickname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/plan#plan_id Plan#plan_id}
  */
  readonly planId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/plan#product Plan#product}
  */
  readonly product: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/plan#tiers_mode Plan#tiers_mode}
  */
  readonly tiersMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/plan#trial_period_days Plan#trial_period_days}
  */
  readonly trialPeriodDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/plan#usage_type Plan#usage_type}
  */
  readonly usageType?: string;
  /**
  * tier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/plan#tier Plan#tier}
  */
  readonly tier?: PlanTier[] | cdktf.IResolvable;
  /**
  * transform_usage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/plan#transform_usage Plan#transform_usage}
  */
  readonly transformUsage?: PlanTransformUsage;
}
export interface PlanTier {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/plan#flat_amount Plan#flat_amount}
  */
  readonly flatAmount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/plan#flat_amount_decimal Plan#flat_amount_decimal}
  */
  readonly flatAmountDecimal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/plan#unit_amount Plan#unit_amount}
  */
  readonly unitAmount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/plan#unit_amount_decimal Plan#unit_amount_decimal}
  */
  readonly unitAmountDecimal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/plan#up_to Plan#up_to}
  */
  readonly upTo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/plan#up_to_inf Plan#up_to_inf}
  */
  readonly upToInf?: boolean | cdktf.IResolvable;
}

export function planTierToTerraform(struct?: PlanTier | cdktf.IResolvable): any {
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


export function planTierToHclTerraform(struct?: PlanTier | cdktf.IResolvable): any {
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

export class PlanTierOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanTier | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PlanTier | cdktf.IResolvable | undefined) {
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

export class PlanTierList extends cdktf.ComplexList {
  public internalValue? : PlanTier[] | cdktf.IResolvable

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
  public get(index: number): PlanTierOutputReference {
    return new PlanTierOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanTransformUsage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/plan#divide_by Plan#divide_by}
  */
  readonly divideBy: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/plan#round Plan#round}
  */
  readonly round: string;
}

export function planTransformUsageToTerraform(struct?: PlanTransformUsageOutputReference | PlanTransformUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    divide_by: cdktf.numberToTerraform(struct!.divideBy),
    round: cdktf.stringToTerraform(struct!.round),
  }
}


export function planTransformUsageToHclTerraform(struct?: PlanTransformUsageOutputReference | PlanTransformUsage): any {
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

export class PlanTransformUsageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlanTransformUsage | undefined {
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

  public set internalValue(value: PlanTransformUsage | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/plan stripe_plan}
*/
export class Plan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stripe_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Plan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Plan to import
  * @param importFromId The id of the existing Plan that should be imported. Refer to the {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Plan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stripe_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/plan stripe_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlanConfig
  */
  public constructor(scope: Construct, id: string, config: PlanConfig) {
    super(scope, id, {
      terraformResourceType: 'stripe_plan',
      terraformGeneratorMetadata: {
        providerName: 'stripe',
        providerVersion: '1.9.0'
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
    this._aggregateUsage = config.aggregateUsage;
    this._amount = config.amount;
    this._amountDecimal = config.amountDecimal;
    this._billingScheme = config.billingScheme;
    this._currency = config.currency;
    this._id = config.id;
    this._interval = config.interval;
    this._intervalCount = config.intervalCount;
    this._metadata = config.metadata;
    this._nickname = config.nickname;
    this._planId = config.planId;
    this._product = config.product;
    this._tiersMode = config.tiersMode;
    this._trialPeriodDays = config.trialPeriodDays;
    this._usageType = config.usageType;
    this._tier.internalValue = config.tier;
    this._transformUsage.internalValue = config.transformUsage;
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

  // amount - computed: true, optional: true, required: false
  private _amount?: number; 
  public get amount() {
    return this.getNumberAttribute('amount');
  }
  public set amount(value: number) {
    this._amount = value;
  }
  public resetAmount() {
    this._amount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
  }

  // amount_decimal - computed: true, optional: true, required: false
  private _amountDecimal?: number; 
  public get amountDecimal() {
    return this.getNumberAttribute('amount_decimal');
  }
  public set amountDecimal(value: number) {
    this._amountDecimal = value;
  }
  public resetAmountDecimal() {
    this._amountDecimal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amountDecimalInput() {
    return this._amountDecimal;
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

  // plan_id - computed: true, optional: true, required: false
  private _planId?: string; 
  public get planId() {
    return this.getStringAttribute('plan_id');
  }
  public set planId(value: string) {
    this._planId = value;
  }
  public resetPlanId() {
    this._planId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planIdInput() {
    return this._planId;
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

  // trial_period_days - computed: false, optional: true, required: false
  private _trialPeriodDays?: number; 
  public get trialPeriodDays() {
    return this.getNumberAttribute('trial_period_days');
  }
  public set trialPeriodDays(value: number) {
    this._trialPeriodDays = value;
  }
  public resetTrialPeriodDays() {
    this._trialPeriodDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trialPeriodDaysInput() {
    return this._trialPeriodDays;
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

  // tier - computed: false, optional: true, required: false
  private _tier = new PlanTierList(this, "tier", false);
  public get tier() {
    return this._tier;
  }
  public putTier(value: PlanTier[] | cdktf.IResolvable) {
    this._tier.internalValue = value;
  }
  public resetTier() {
    this._tier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier.internalValue;
  }

  // transform_usage - computed: false, optional: true, required: false
  private _transformUsage = new PlanTransformUsageOutputReference(this, "transform_usage");
  public get transformUsage() {
    return this._transformUsage;
  }
  public putTransformUsage(value: PlanTransformUsage) {
    this._transformUsage.internalValue = value;
  }
  public resetTransformUsage() {
    this._transformUsage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformUsageInput() {
    return this._transformUsage.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      aggregate_usage: cdktf.stringToTerraform(this._aggregateUsage),
      amount: cdktf.numberToTerraform(this._amount),
      amount_decimal: cdktf.numberToTerraform(this._amountDecimal),
      billing_scheme: cdktf.stringToTerraform(this._billingScheme),
      currency: cdktf.stringToTerraform(this._currency),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.stringToTerraform(this._interval),
      interval_count: cdktf.numberToTerraform(this._intervalCount),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      nickname: cdktf.stringToTerraform(this._nickname),
      plan_id: cdktf.stringToTerraform(this._planId),
      product: cdktf.stringToTerraform(this._product),
      tiers_mode: cdktf.stringToTerraform(this._tiersMode),
      trial_period_days: cdktf.numberToTerraform(this._trialPeriodDays),
      usage_type: cdktf.stringToTerraform(this._usageType),
      tier: cdktf.listMapper(planTierToTerraform, true)(this._tier.internalValue),
      transform_usage: planTransformUsageToTerraform(this._transformUsage.internalValue),
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
      aggregate_usage: {
        value: cdktf.stringToHclTerraform(this._aggregateUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      amount: {
        value: cdktf.numberToHclTerraform(this._amount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      amount_decimal: {
        value: cdktf.numberToHclTerraform(this._amountDecimal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      interval: {
        value: cdktf.stringToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval_count: {
        value: cdktf.numberToHclTerraform(this._intervalCount),
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
      nickname: {
        value: cdktf.stringToHclTerraform(this._nickname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan_id: {
        value: cdktf.stringToHclTerraform(this._planId),
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
      tiers_mode: {
        value: cdktf.stringToHclTerraform(this._tiersMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trial_period_days: {
        value: cdktf.numberToHclTerraform(this._trialPeriodDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      usage_type: {
        value: cdktf.stringToHclTerraform(this._usageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tier: {
        value: cdktf.listMapperHcl(planTierToHclTerraform, true)(this._tier.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlanTierList",
      },
      transform_usage: {
        value: planTransformUsageToHclTerraform(this._transformUsage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlanTransformUsageList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
