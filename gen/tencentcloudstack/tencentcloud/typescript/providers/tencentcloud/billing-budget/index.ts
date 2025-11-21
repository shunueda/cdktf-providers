// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BillingBudgetConfig extends cdktf.TerraformMetaArguments {
  /**
  * BILL: system bill, CONSUMPTION: consumption bill.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget#bill_type BillingBudget#bill_type}
  */
  readonly billType: string;
  /**
  * Budget name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget#budget_name BillingBudget#budget_name}
  */
  readonly budgetName: string;
  /**
  * Budget remarks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget#budget_note BillingBudget#budget_note}
  */
  readonly budgetNote?: string;
  /**
  * Budget value limit. Transfer fixed value when the budget plan type is FIX(Fixed Budget); Passed when the budget plan type is CYCLE(Planned Budget)[{"dateDesc":"2025-07","quota":"1000"},{"dateDesc":"2025-08","quota":"2000"}].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget#budget_quota BillingBudget#budget_quota}
  */
  readonly budgetQuota: string;
  /**
  * Cycle type, valid values: DAY, MONTH, QUARTER, YEAR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget#cycle_type BillingBudget#cycle_type}
  */
  readonly cycleType: string;
  /**
  * COST original price, REAL_COST actual cost, CASH cash, INCENTIVE gift, VOUCHER voucher, TRANSFER share, TAX tax, AMOUNT_BEFORE_TAX cash payment (before tax).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget#fee_type BillingBudget#fee_type}
  */
  readonly feeType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget#id BillingBudget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Valid period starting time 2025-01-01(cycle: days) / 2025-01 (cycle: months).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget#period_begin BillingBudget#period_begin}
  */
  readonly periodBegin: string;
  /**
  * Expiration period end time 2025-12-01(cycle: days) / 2025-12 (cycle: months).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget#period_end BillingBudget#period_end}
  */
  readonly periodEnd: string;
  /**
  * FIX: fixed budget, CYCLE: planned budget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget#plan_type BillingBudget#plan_type}
  */
  readonly planType: string;
  /**
  * dimensions_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget#dimensions_range BillingBudget#dimensions_range}
  */
  readonly dimensionsRange?: BillingBudgetDimensionsRange;
  /**
  * warn_json block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget#warn_json BillingBudget#warn_json}
  */
  readonly warnJson: BillingBudgetWarnJson[] | cdktf.IResolvable;
  /**
  * wave_threshold_json block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget#wave_threshold_json BillingBudget#wave_threshold_json}
  */
  readonly waveThresholdJson?: BillingBudgetWaveThresholdJson[] | cdktf.IResolvable;
}
export interface BillingBudgetDimensionsRangeTags {
  /**
  * Tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget#tag_key BillingBudget#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget#tag_value BillingBudget#tag_value}
  */
  readonly tagValue?: string[];
}

export function billingBudgetDimensionsRangeTagsToTerraform(struct?: BillingBudgetDimensionsRangeTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tagValue),
  }
}


export function billingBudgetDimensionsRangeTagsToHclTerraform(struct?: BillingBudgetDimensionsRangeTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tagValue),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BillingBudgetDimensionsRangeTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BillingBudgetDimensionsRangeTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BillingBudgetDimensionsRangeTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // tag_key - computed: false, optional: true, required: false
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  public resetTagKey() {
    this._tagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: true, required: false
  private _tagValue?: string[]; 
  public get tagValue() {
    return cdktf.Fn.tolist(this.getListAttribute('tag_value'));
  }
  public set tagValue(value: string[]) {
    this._tagValue = value;
  }
  public resetTagValue() {
    this._tagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}

export class BillingBudgetDimensionsRangeTagsList extends cdktf.ComplexList {
  public internalValue? : BillingBudgetDimensionsRangeTags[] | cdktf.IResolvable

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
  public get(index: number): BillingBudgetDimensionsRangeTagsOutputReference {
    return new BillingBudgetDimensionsRangeTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BillingBudgetDimensionsRange {
  /**
  * Action types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget#action_types BillingBudget#action_types}
  */
  readonly actionTypes?: string[];
  /**
  * Products.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget#business BillingBudget#business}
  */
  readonly business?: string[];
  /**
  * Component codes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget#component_codes BillingBudget#component_codes}
  */
  readonly componentCodes?: string[];
  /**
  * Consumption types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget#consumption_types BillingBudget#consumption_types}
  */
  readonly consumptionTypes?: string[];
  /**
  * Owner uins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget#owner_uins BillingBudget#owner_uins}
  */
  readonly ownerUins?: string[];
  /**
  * Pay mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget#pay_mode BillingBudget#pay_mode}
  */
  readonly payMode?: string[];
  /**
  * Payer uins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget#payer_uins BillingBudget#payer_uins}
  */
  readonly payerUins?: string[];
  /**
  * Sub-product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget#product_codes BillingBudget#product_codes}
  */
  readonly productCodes?: string[];
  /**
  * Project ids.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget#project_ids BillingBudget#project_ids}
  */
  readonly projectIds?: string[];
  /**
  * Region ids.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget#region_ids BillingBudget#region_ids}
  */
  readonly regionIds?: string[];
  /**
  * Unique key for end-level ledger unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget#tree_node_uniq_keys BillingBudget#tree_node_uniq_keys}
  */
  readonly treeNodeUniqKeys?: string[];
  /**
  * Zone ids.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget#zone_ids BillingBudget#zone_ids}
  */
  readonly zoneIds?: string[];
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget#tags BillingBudget#tags}
  */
  readonly tags?: BillingBudgetDimensionsRangeTags[] | cdktf.IResolvable;
}

export function billingBudgetDimensionsRangeToTerraform(struct?: BillingBudgetDimensionsRangeOutputReference | BillingBudgetDimensionsRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actionTypes),
    business: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.business),
    component_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.componentCodes),
    consumption_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.consumptionTypes),
    owner_uins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ownerUins),
    pay_mode: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.payMode),
    payer_uins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.payerUins),
    product_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.productCodes),
    project_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.projectIds),
    region_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regionIds),
    tree_node_uniq_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.treeNodeUniqKeys),
    zone_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.zoneIds),
    tags: cdktf.listMapper(billingBudgetDimensionsRangeTagsToTerraform, true)(struct!.tags),
  }
}


export function billingBudgetDimensionsRangeToHclTerraform(struct?: BillingBudgetDimensionsRangeOutputReference | BillingBudgetDimensionsRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actionTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    business: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.business),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    component_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.componentCodes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    consumption_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.consumptionTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    owner_uins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ownerUins),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    pay_mode: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.payMode),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    payer_uins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.payerUins),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    product_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.productCodes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    project_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.projectIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    region_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regionIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tree_node_uniq_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.treeNodeUniqKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    zone_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.zoneIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktf.listMapperHcl(billingBudgetDimensionsRangeTagsToHclTerraform, true)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "BillingBudgetDimensionsRangeTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BillingBudgetDimensionsRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BillingBudgetDimensionsRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionTypes = this._actionTypes;
    }
    if (this._business !== undefined) {
      hasAnyValues = true;
      internalValueResult.business = this._business;
    }
    if (this._componentCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentCodes = this._componentCodes;
    }
    if (this._consumptionTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumptionTypes = this._consumptionTypes;
    }
    if (this._ownerUins !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerUins = this._ownerUins;
    }
    if (this._payMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.payMode = this._payMode;
    }
    if (this._payerUins !== undefined) {
      hasAnyValues = true;
      internalValueResult.payerUins = this._payerUins;
    }
    if (this._productCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.productCodes = this._productCodes;
    }
    if (this._projectIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectIds = this._projectIds;
    }
    if (this._regionIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionIds = this._regionIds;
    }
    if (this._treeNodeUniqKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.treeNodeUniqKeys = this._treeNodeUniqKeys;
    }
    if (this._zoneIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneIds = this._zoneIds;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BillingBudgetDimensionsRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionTypes = undefined;
      this._business = undefined;
      this._componentCodes = undefined;
      this._consumptionTypes = undefined;
      this._ownerUins = undefined;
      this._payMode = undefined;
      this._payerUins = undefined;
      this._productCodes = undefined;
      this._projectIds = undefined;
      this._regionIds = undefined;
      this._treeNodeUniqKeys = undefined;
      this._zoneIds = undefined;
      this._tags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionTypes = value.actionTypes;
      this._business = value.business;
      this._componentCodes = value.componentCodes;
      this._consumptionTypes = value.consumptionTypes;
      this._ownerUins = value.ownerUins;
      this._payMode = value.payMode;
      this._payerUins = value.payerUins;
      this._productCodes = value.productCodes;
      this._projectIds = value.projectIds;
      this._regionIds = value.regionIds;
      this._treeNodeUniqKeys = value.treeNodeUniqKeys;
      this._zoneIds = value.zoneIds;
      this._tags.internalValue = value.tags;
    }
  }

  // action_types - computed: false, optional: true, required: false
  private _actionTypes?: string[]; 
  public get actionTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('action_types'));
  }
  public set actionTypes(value: string[]) {
    this._actionTypes = value;
  }
  public resetActionTypes() {
    this._actionTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypesInput() {
    return this._actionTypes;
  }

  // business - computed: false, optional: true, required: false
  private _business?: string[]; 
  public get business() {
    return cdktf.Fn.tolist(this.getListAttribute('business'));
  }
  public set business(value: string[]) {
    this._business = value;
  }
  public resetBusiness() {
    this._business = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessInput() {
    return this._business;
  }

  // component_codes - computed: false, optional: true, required: false
  private _componentCodes?: string[]; 
  public get componentCodes() {
    return cdktf.Fn.tolist(this.getListAttribute('component_codes'));
  }
  public set componentCodes(value: string[]) {
    this._componentCodes = value;
  }
  public resetComponentCodes() {
    this._componentCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentCodesInput() {
    return this._componentCodes;
  }

  // consumption_types - computed: false, optional: true, required: false
  private _consumptionTypes?: string[]; 
  public get consumptionTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('consumption_types'));
  }
  public set consumptionTypes(value: string[]) {
    this._consumptionTypes = value;
  }
  public resetConsumptionTypes() {
    this._consumptionTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumptionTypesInput() {
    return this._consumptionTypes;
  }

  // owner_uins - computed: false, optional: true, required: false
  private _ownerUins?: string[]; 
  public get ownerUins() {
    return cdktf.Fn.tolist(this.getListAttribute('owner_uins'));
  }
  public set ownerUins(value: string[]) {
    this._ownerUins = value;
  }
  public resetOwnerUins() {
    this._ownerUins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUinsInput() {
    return this._ownerUins;
  }

  // pay_mode - computed: false, optional: true, required: false
  private _payMode?: string[]; 
  public get payMode() {
    return cdktf.Fn.tolist(this.getListAttribute('pay_mode'));
  }
  public set payMode(value: string[]) {
    this._payMode = value;
  }
  public resetPayMode() {
    this._payMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payModeInput() {
    return this._payMode;
  }

  // payer_uins - computed: false, optional: true, required: false
  private _payerUins?: string[]; 
  public get payerUins() {
    return cdktf.Fn.tolist(this.getListAttribute('payer_uins'));
  }
  public set payerUins(value: string[]) {
    this._payerUins = value;
  }
  public resetPayerUins() {
    this._payerUins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payerUinsInput() {
    return this._payerUins;
  }

  // product_codes - computed: false, optional: true, required: false
  private _productCodes?: string[]; 
  public get productCodes() {
    return cdktf.Fn.tolist(this.getListAttribute('product_codes'));
  }
  public set productCodes(value: string[]) {
    this._productCodes = value;
  }
  public resetProductCodes() {
    this._productCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productCodesInput() {
    return this._productCodes;
  }

  // project_ids - computed: false, optional: true, required: false
  private _projectIds?: string[]; 
  public get projectIds() {
    return cdktf.Fn.tolist(this.getListAttribute('project_ids'));
  }
  public set projectIds(value: string[]) {
    this._projectIds = value;
  }
  public resetProjectIds() {
    this._projectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdsInput() {
    return this._projectIds;
  }

  // region_ids - computed: false, optional: true, required: false
  private _regionIds?: string[]; 
  public get regionIds() {
    return cdktf.Fn.tolist(this.getListAttribute('region_ids'));
  }
  public set regionIds(value: string[]) {
    this._regionIds = value;
  }
  public resetRegionIds() {
    this._regionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdsInput() {
    return this._regionIds;
  }

  // tree_node_uniq_keys - computed: false, optional: true, required: false
  private _treeNodeUniqKeys?: string[]; 
  public get treeNodeUniqKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('tree_node_uniq_keys'));
  }
  public set treeNodeUniqKeys(value: string[]) {
    this._treeNodeUniqKeys = value;
  }
  public resetTreeNodeUniqKeys() {
    this._treeNodeUniqKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get treeNodeUniqKeysInput() {
    return this._treeNodeUniqKeys;
  }

  // zone_ids - computed: false, optional: true, required: false
  private _zoneIds?: string[]; 
  public get zoneIds() {
    return cdktf.Fn.tolist(this.getListAttribute('zone_ids'));
  }
  public set zoneIds(value: string[]) {
    this._zoneIds = value;
  }
  public resetZoneIds() {
    this._zoneIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdsInput() {
    return this._zoneIds;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new BillingBudgetDimensionsRangeTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: BillingBudgetDimensionsRangeTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface BillingBudgetWarnJson {
  /**
  * PERCENTAGE: Percentage of budget amount, ABS: fixed value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget#cal_type BillingBudget#cal_type}
  */
  readonly calType: string;
  /**
  * Threshold (greater than or equal to 0).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget#threshold_value BillingBudget#threshold_value}
  */
  readonly thresholdValue: string;
  /**
  * ACTUAL: actual amount, FORECAST: forecast amount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget#warn_type BillingBudget#warn_type}
  */
  readonly warnType: string;
}

export function billingBudgetWarnJsonToTerraform(struct?: BillingBudgetWarnJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cal_type: cdktf.stringToTerraform(struct!.calType),
    threshold_value: cdktf.stringToTerraform(struct!.thresholdValue),
    warn_type: cdktf.stringToTerraform(struct!.warnType),
  }
}


export function billingBudgetWarnJsonToHclTerraform(struct?: BillingBudgetWarnJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cal_type: {
      value: cdktf.stringToHclTerraform(struct!.calType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_value: {
      value: cdktf.stringToHclTerraform(struct!.thresholdValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warn_type: {
      value: cdktf.stringToHclTerraform(struct!.warnType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BillingBudgetWarnJsonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BillingBudgetWarnJson | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._calType !== undefined) {
      hasAnyValues = true;
      internalValueResult.calType = this._calType;
    }
    if (this._thresholdValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdValue = this._thresholdValue;
    }
    if (this._warnType !== undefined) {
      hasAnyValues = true;
      internalValueResult.warnType = this._warnType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BillingBudgetWarnJson | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._calType = undefined;
      this._thresholdValue = undefined;
      this._warnType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._calType = value.calType;
      this._thresholdValue = value.thresholdValue;
      this._warnType = value.warnType;
    }
  }

  // cal_type - computed: false, optional: false, required: true
  private _calType?: string; 
  public get calType() {
    return this.getStringAttribute('cal_type');
  }
  public set calType(value: string) {
    this._calType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get calTypeInput() {
    return this._calType;
  }

  // threshold_value - computed: false, optional: false, required: true
  private _thresholdValue?: string; 
  public get thresholdValue() {
    return this.getStringAttribute('threshold_value');
  }
  public set thresholdValue(value: string) {
    this._thresholdValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdValueInput() {
    return this._thresholdValue;
  }

  // warn_type - computed: false, optional: false, required: true
  private _warnType?: string; 
  public get warnType() {
    return this.getStringAttribute('warn_type');
  }
  public set warnType(value: string) {
    this._warnType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get warnTypeInput() {
    return this._warnType;
  }
}

export class BillingBudgetWarnJsonList extends cdktf.ComplexList {
  public internalValue? : BillingBudgetWarnJson[] | cdktf.IResolvable

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
  public get(index: number): BillingBudgetWarnJsonOutputReference {
    return new BillingBudgetWarnJsonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BillingBudgetWaveThresholdJson {
  /**
  * Alarm type: chain month-on-month, yoy year-on-year, fix fixed value
  *  (Supported types: daily month-on-month chain day, daily month-on-year chain weekday, daily month-on-year monthly month-on-year fixed value fix day, month-on-month chain month, monthly fixed value fix month).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget#meta_type BillingBudget#meta_type}
  */
  readonly metaType?: string;
  /**
  * Alarm dimension: day day, month month, weekday week
  *  (Support types: day-to-day chain day, day-to-year weekly dimension chain weekday, day-to-year monthly dimension yoy day, daily fixed value fix day, month-to-month chain month, monthly fixed value fix month).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget#period_type BillingBudget#period_type}
  */
  readonly periodType?: string;
  /**
  * Volatility threshold (greater than or equal to 0).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget#threshold BillingBudget#threshold}
  */
  readonly threshold?: string;
  /**
  * ACTUAL: actual amount, FORECAST: forecast amount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget#warn_type BillingBudget#warn_type}
  */
  readonly warnType?: string;
}

export function billingBudgetWaveThresholdJsonToTerraform(struct?: BillingBudgetWaveThresholdJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    meta_type: cdktf.stringToTerraform(struct!.metaType),
    period_type: cdktf.stringToTerraform(struct!.periodType),
    threshold: cdktf.stringToTerraform(struct!.threshold),
    warn_type: cdktf.stringToTerraform(struct!.warnType),
  }
}


export function billingBudgetWaveThresholdJsonToHclTerraform(struct?: BillingBudgetWaveThresholdJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    meta_type: {
      value: cdktf.stringToHclTerraform(struct!.metaType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period_type: {
      value: cdktf.stringToHclTerraform(struct!.periodType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.stringToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warn_type: {
      value: cdktf.stringToHclTerraform(struct!.warnType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BillingBudgetWaveThresholdJsonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BillingBudgetWaveThresholdJson | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metaType = this._metaType;
    }
    if (this._periodType !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodType = this._periodType;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._warnType !== undefined) {
      hasAnyValues = true;
      internalValueResult.warnType = this._warnType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BillingBudgetWaveThresholdJson | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metaType = undefined;
      this._periodType = undefined;
      this._threshold = undefined;
      this._warnType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metaType = value.metaType;
      this._periodType = value.periodType;
      this._threshold = value.threshold;
      this._warnType = value.warnType;
    }
  }

  // meta_type - computed: false, optional: true, required: false
  private _metaType?: string; 
  public get metaType() {
    return this.getStringAttribute('meta_type');
  }
  public set metaType(value: string) {
    this._metaType = value;
  }
  public resetMetaType() {
    this._metaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaTypeInput() {
    return this._metaType;
  }

  // period_type - computed: false, optional: true, required: false
  private _periodType?: string; 
  public get periodType() {
    return this.getStringAttribute('period_type');
  }
  public set periodType(value: string) {
    this._periodType = value;
  }
  public resetPeriodType() {
    this._periodType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodTypeInput() {
    return this._periodType;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // warn_type - computed: false, optional: true, required: false
  private _warnType?: string; 
  public get warnType() {
    return this.getStringAttribute('warn_type');
  }
  public set warnType(value: string) {
    this._warnType = value;
  }
  public resetWarnType() {
    this._warnType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warnTypeInput() {
    return this._warnType;
  }
}

export class BillingBudgetWaveThresholdJsonList extends cdktf.ComplexList {
  public internalValue? : BillingBudgetWaveThresholdJson[] | cdktf.IResolvable

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
  public get(index: number): BillingBudgetWaveThresholdJsonOutputReference {
    return new BillingBudgetWaveThresholdJsonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget tencentcloud_billing_budget}
*/
export class BillingBudget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_billing_budget";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BillingBudget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BillingBudget to import
  * @param importFromId The id of the existing BillingBudget that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BillingBudget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_billing_budget", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/billing_budget tencentcloud_billing_budget} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BillingBudgetConfig
  */
  public constructor(scope: Construct, id: string, config: BillingBudgetConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_billing_budget',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.37',
        providerVersionConstraint: '1.82.37'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._billType = config.billType;
    this._budgetName = config.budgetName;
    this._budgetNote = config.budgetNote;
    this._budgetQuota = config.budgetQuota;
    this._cycleType = config.cycleType;
    this._feeType = config.feeType;
    this._id = config.id;
    this._periodBegin = config.periodBegin;
    this._periodEnd = config.periodEnd;
    this._planType = config.planType;
    this._dimensionsRange.internalValue = config.dimensionsRange;
    this._warnJson.internalValue = config.warnJson;
    this._waveThresholdJson.internalValue = config.waveThresholdJson;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bill_type - computed: false, optional: false, required: true
  private _billType?: string; 
  public get billType() {
    return this.getStringAttribute('bill_type');
  }
  public set billType(value: string) {
    this._billType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billTypeInput() {
    return this._billType;
  }

  // budget_name - computed: false, optional: false, required: true
  private _budgetName?: string; 
  public get budgetName() {
    return this.getStringAttribute('budget_name');
  }
  public set budgetName(value: string) {
    this._budgetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetNameInput() {
    return this._budgetName;
  }

  // budget_note - computed: false, optional: true, required: false
  private _budgetNote?: string; 
  public get budgetNote() {
    return this.getStringAttribute('budget_note');
  }
  public set budgetNote(value: string) {
    this._budgetNote = value;
  }
  public resetBudgetNote() {
    this._budgetNote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetNoteInput() {
    return this._budgetNote;
  }

  // budget_quota - computed: false, optional: false, required: true
  private _budgetQuota?: string; 
  public get budgetQuota() {
    return this.getStringAttribute('budget_quota');
  }
  public set budgetQuota(value: string) {
    this._budgetQuota = value;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetQuotaInput() {
    return this._budgetQuota;
  }

  // cycle_type - computed: false, optional: false, required: true
  private _cycleType?: string; 
  public get cycleType() {
    return this.getStringAttribute('cycle_type');
  }
  public set cycleType(value: string) {
    this._cycleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cycleTypeInput() {
    return this._cycleType;
  }

  // fee_type - computed: false, optional: false, required: true
  private _feeType?: string; 
  public get feeType() {
    return this.getStringAttribute('fee_type');
  }
  public set feeType(value: string) {
    this._feeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get feeTypeInput() {
    return this._feeType;
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

  // period_begin - computed: false, optional: false, required: true
  private _periodBegin?: string; 
  public get periodBegin() {
    return this.getStringAttribute('period_begin');
  }
  public set periodBegin(value: string) {
    this._periodBegin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodBeginInput() {
    return this._periodBegin;
  }

  // period_end - computed: false, optional: false, required: true
  private _periodEnd?: string; 
  public get periodEnd() {
    return this.getStringAttribute('period_end');
  }
  public set periodEnd(value: string) {
    this._periodEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodEndInput() {
    return this._periodEnd;
  }

  // plan_type - computed: false, optional: false, required: true
  private _planType?: string; 
  public get planType() {
    return this.getStringAttribute('plan_type');
  }
  public set planType(value: string) {
    this._planType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planTypeInput() {
    return this._planType;
  }

  // dimensions_range - computed: false, optional: true, required: false
  private _dimensionsRange = new BillingBudgetDimensionsRangeOutputReference(this, "dimensions_range");
  public get dimensionsRange() {
    return this._dimensionsRange;
  }
  public putDimensionsRange(value: BillingBudgetDimensionsRange) {
    this._dimensionsRange.internalValue = value;
  }
  public resetDimensionsRange() {
    this._dimensionsRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsRangeInput() {
    return this._dimensionsRange.internalValue;
  }

  // warn_json - computed: false, optional: false, required: true
  private _warnJson = new BillingBudgetWarnJsonList(this, "warn_json", false);
  public get warnJson() {
    return this._warnJson;
  }
  public putWarnJson(value: BillingBudgetWarnJson[] | cdktf.IResolvable) {
    this._warnJson.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get warnJsonInput() {
    return this._warnJson.internalValue;
  }

  // wave_threshold_json - computed: false, optional: true, required: false
  private _waveThresholdJson = new BillingBudgetWaveThresholdJsonList(this, "wave_threshold_json", false);
  public get waveThresholdJson() {
    return this._waveThresholdJson;
  }
  public putWaveThresholdJson(value: BillingBudgetWaveThresholdJson[] | cdktf.IResolvable) {
    this._waveThresholdJson.internalValue = value;
  }
  public resetWaveThresholdJson() {
    this._waveThresholdJson.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waveThresholdJsonInput() {
    return this._waveThresholdJson.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bill_type: cdktf.stringToTerraform(this._billType),
      budget_name: cdktf.stringToTerraform(this._budgetName),
      budget_note: cdktf.stringToTerraform(this._budgetNote),
      budget_quota: cdktf.stringToTerraform(this._budgetQuota),
      cycle_type: cdktf.stringToTerraform(this._cycleType),
      fee_type: cdktf.stringToTerraform(this._feeType),
      id: cdktf.stringToTerraform(this._id),
      period_begin: cdktf.stringToTerraform(this._periodBegin),
      period_end: cdktf.stringToTerraform(this._periodEnd),
      plan_type: cdktf.stringToTerraform(this._planType),
      dimensions_range: billingBudgetDimensionsRangeToTerraform(this._dimensionsRange.internalValue),
      warn_json: cdktf.listMapper(billingBudgetWarnJsonToTerraform, true)(this._warnJson.internalValue),
      wave_threshold_json: cdktf.listMapper(billingBudgetWaveThresholdJsonToTerraform, true)(this._waveThresholdJson.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bill_type: {
        value: cdktf.stringToHclTerraform(this._billType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      budget_name: {
        value: cdktf.stringToHclTerraform(this._budgetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      budget_note: {
        value: cdktf.stringToHclTerraform(this._budgetNote),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      budget_quota: {
        value: cdktf.stringToHclTerraform(this._budgetQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cycle_type: {
        value: cdktf.stringToHclTerraform(this._cycleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fee_type: {
        value: cdktf.stringToHclTerraform(this._feeType),
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
      period_begin: {
        value: cdktf.stringToHclTerraform(this._periodBegin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period_end: {
        value: cdktf.stringToHclTerraform(this._periodEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan_type: {
        value: cdktf.stringToHclTerraform(this._planType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dimensions_range: {
        value: billingBudgetDimensionsRangeToHclTerraform(this._dimensionsRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BillingBudgetDimensionsRangeList",
      },
      warn_json: {
        value: cdktf.listMapperHcl(billingBudgetWarnJsonToHclTerraform, true)(this._warnJson.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BillingBudgetWarnJsonList",
      },
      wave_threshold_json: {
        value: cdktf.listMapperHcl(billingBudgetWaveThresholdJsonToHclTerraform, true)(this._waveThresholdJson.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BillingBudgetWaveThresholdJsonList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
