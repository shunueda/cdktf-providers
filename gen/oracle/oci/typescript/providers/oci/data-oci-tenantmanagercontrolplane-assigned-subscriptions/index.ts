// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/tenantmanagercontrolplane_assigned_subscriptions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciTenantmanagercontrolplaneAssignedSubscriptionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/tenantmanagercontrolplane_assigned_subscriptions#compartment_id DataOciTenantmanagercontrolplaneAssignedSubscriptions#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/tenantmanagercontrolplane_assigned_subscriptions#entity_version DataOciTenantmanagercontrolplaneAssignedSubscriptions#entity_version}
  */
  readonly entityVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/tenantmanagercontrolplane_assigned_subscriptions#id DataOciTenantmanagercontrolplaneAssignedSubscriptions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/tenantmanagercontrolplane_assigned_subscriptions#subscription_id DataOciTenantmanagercontrolplaneAssignedSubscriptions#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/tenantmanagercontrolplane_assigned_subscriptions#filter DataOciTenantmanagercontrolplaneAssignedSubscriptions#filter}
  */
  readonly filter?: DataOciTenantmanagercontrolplaneAssignedSubscriptionsFilter[] | cdktf.IResolvable;
}
export interface DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionItemsPromotion {
}

export function dataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionItemsPromotionToTerraform(struct?: DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionItemsPromotion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionItemsPromotionToHclTerraform(struct?: DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionItemsPromotion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionItemsPromotionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionItemsPromotion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionItemsPromotion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // amount - computed: true, optional: false, required: false
  public get amount() {
    return this.getNumberAttribute('amount');
  }

  // currency_unit - computed: true, optional: false, required: false
  public get currencyUnit() {
    return this.getStringAttribute('currency_unit');
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // duration_unit - computed: true, optional: false, required: false
  public get durationUnit() {
    return this.getStringAttribute('duration_unit');
  }

  // is_intent_to_pay - computed: true, optional: false, required: false
  public get isIntentToPay() {
    return this.getBooleanAttribute('is_intent_to_pay');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // time_expired - computed: true, optional: false, required: false
  public get timeExpired() {
    return this.getStringAttribute('time_expired');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }
}

export class DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionItemsPromotionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionItemsPromotionOutputReference {
    return new DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionItemsPromotionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionItemsSkus {
}

export function dataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionItemsSkusToTerraform(struct?: DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionItemsSkus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionItemsSkusToHclTerraform(struct?: DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionItemsSkus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionItemsSkusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionItemsSkus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionItemsSkus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // end_date - computed: true, optional: false, required: false
  public get endDate() {
    return this.getStringAttribute('end_date');
  }

  // gsi_order_line_id - computed: true, optional: false, required: false
  public get gsiOrderLineId() {
    return this.getStringAttribute('gsi_order_line_id');
  }

  // is_additional_instance - computed: true, optional: false, required: false
  public get isAdditionalInstance() {
    return this.getBooleanAttribute('is_additional_instance');
  }

  // is_base_service_component - computed: true, optional: false, required: false
  public get isBaseServiceComponent() {
    return this.getBooleanAttribute('is_base_service_component');
  }

  // license_part_description - computed: true, optional: false, required: false
  public get licensePartDescription() {
    return this.getStringAttribute('license_part_description');
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // quantity - computed: true, optional: false, required: false
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }

  // sku - computed: true, optional: false, required: false
  public get sku() {
    return this.getStringAttribute('sku');
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
}

export class DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionItemsSkusList extends cdktf.ComplexList {

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
  public get(index: number): DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionItemsSkusOutputReference {
    return new DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionItemsSkusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionItems {
}

export function dataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionItemsToTerraform(struct?: DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionItemsToHclTerraform(struct?: DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // classic_subscription_id - computed: true, optional: false, required: false
  public get classicSubscriptionId() {
    return this.getStringAttribute('classic_subscription_id');
  }

  // cloud_amount_currency - computed: true, optional: false, required: false
  public get cloudAmountCurrency() {
    return this.getStringAttribute('cloud_amount_currency');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // csi_number - computed: true, optional: false, required: false
  public get csiNumber() {
    return this.getStringAttribute('csi_number');
  }

  // currency_code - computed: true, optional: false, required: false
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }

  // customer_country_code - computed: true, optional: false, required: false
  public get customerCountryCode() {
    return this.getStringAttribute('customer_country_code');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // end_date - computed: true, optional: false, required: false
  public get endDate() {
    return this.getStringAttribute('end_date');
  }

  // entity_version - computed: true, optional: false, required: false
  public get entityVersion() {
    return this.getStringAttribute('entity_version');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_classic_subscription - computed: true, optional: false, required: false
  public get isClassicSubscription() {
    return this.getBooleanAttribute('is_classic_subscription');
  }

  // is_government_subscription - computed: true, optional: false, required: false
  public get isGovernmentSubscription() {
    return this.getBooleanAttribute('is_government_subscription');
  }

  // managed_by - computed: true, optional: false, required: false
  public get managedBy() {
    return this.getStringAttribute('managed_by');
  }

  // order_ids - computed: true, optional: false, required: false
  public get orderIds() {
    return this.getListAttribute('order_ids');
  }

  // program_type - computed: true, optional: false, required: false
  public get programType() {
    return this.getStringAttribute('program_type');
  }

  // promotion - computed: true, optional: false, required: false
  private _promotion = new DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionItemsPromotionList(this, "promotion", false);
  public get promotion() {
    return this._promotion;
  }

  // purchase_entitlement_id - computed: true, optional: false, required: false
  public get purchaseEntitlementId() {
    return this.getStringAttribute('purchase_entitlement_id');
  }

  // region_assignment - computed: true, optional: false, required: false
  public get regionAssignment() {
    return this.getStringAttribute('region_assignment');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // skus - computed: true, optional: false, required: false
  private _skus = new DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionItemsSkusList(this, "skus", false);
  public get skus() {
    return this._skus;
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subscription_number - computed: true, optional: false, required: false
  public get subscriptionNumber() {
    return this.getStringAttribute('subscription_number');
  }

  // subscription_tier - computed: true, optional: false, required: false
  public get subscriptionTier() {
    return this.getStringAttribute('subscription_tier');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}

export class DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionItemsOutputReference {
    return new DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollection {
}

export function dataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionToTerraform(struct?: DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionToHclTerraform(struct?: DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionOutputReference {
    return new DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciTenantmanagercontrolplaneAssignedSubscriptionsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/tenantmanagercontrolplane_assigned_subscriptions#name DataOciTenantmanagercontrolplaneAssignedSubscriptions#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/tenantmanagercontrolplane_assigned_subscriptions#regex DataOciTenantmanagercontrolplaneAssignedSubscriptions#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/tenantmanagercontrolplane_assigned_subscriptions#values DataOciTenantmanagercontrolplaneAssignedSubscriptions#values}
  */
  readonly values: string[];
}

export function dataOciTenantmanagercontrolplaneAssignedSubscriptionsFilterToTerraform(struct?: DataOciTenantmanagercontrolplaneAssignedSubscriptionsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciTenantmanagercontrolplaneAssignedSubscriptionsFilterToHclTerraform(struct?: DataOciTenantmanagercontrolplaneAssignedSubscriptionsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciTenantmanagercontrolplaneAssignedSubscriptionsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciTenantmanagercontrolplaneAssignedSubscriptionsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciTenantmanagercontrolplaneAssignedSubscriptionsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciTenantmanagercontrolplaneAssignedSubscriptionsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciTenantmanagercontrolplaneAssignedSubscriptionsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciTenantmanagercontrolplaneAssignedSubscriptionsFilterOutputReference {
    return new DataOciTenantmanagercontrolplaneAssignedSubscriptionsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/tenantmanagercontrolplane_assigned_subscriptions oci_tenantmanagercontrolplane_assigned_subscriptions}
*/
export class DataOciTenantmanagercontrolplaneAssignedSubscriptions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_tenantmanagercontrolplane_assigned_subscriptions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciTenantmanagercontrolplaneAssignedSubscriptions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciTenantmanagercontrolplaneAssignedSubscriptions to import
  * @param importFromId The id of the existing DataOciTenantmanagercontrolplaneAssignedSubscriptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/tenantmanagercontrolplane_assigned_subscriptions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciTenantmanagercontrolplaneAssignedSubscriptions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_tenantmanagercontrolplane_assigned_subscriptions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/tenantmanagercontrolplane_assigned_subscriptions oci_tenantmanagercontrolplane_assigned_subscriptions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciTenantmanagercontrolplaneAssignedSubscriptionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciTenantmanagercontrolplaneAssignedSubscriptionsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_tenantmanagercontrolplane_assigned_subscriptions',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._entityVersion = config.entityVersion;
    this._id = config.id;
    this._subscriptionId = config.subscriptionId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assigned_subscription_collection - computed: true, optional: false, required: false
  private _assignedSubscriptionCollection = new DataOciTenantmanagercontrolplaneAssignedSubscriptionsAssignedSubscriptionCollectionList(this, "assigned_subscription_collection", false);
  public get assignedSubscriptionCollection() {
    return this._assignedSubscriptionCollection;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // entity_version - computed: false, optional: true, required: false
  private _entityVersion?: string; 
  public get entityVersion() {
    return this.getStringAttribute('entity_version');
  }
  public set entityVersion(value: string) {
    this._entityVersion = value;
  }
  public resetEntityVersion() {
    this._entityVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityVersionInput() {
    return this._entityVersion;
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

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciTenantmanagercontrolplaneAssignedSubscriptionsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciTenantmanagercontrolplaneAssignedSubscriptionsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      entity_version: cdktf.stringToTerraform(this._entityVersion),
      id: cdktf.stringToTerraform(this._id),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      filter: cdktf.listMapper(dataOciTenantmanagercontrolplaneAssignedSubscriptionsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_version: {
        value: cdktf.stringToHclTerraform(this._entityVersion),
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
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciTenantmanagercontrolplaneAssignedSubscriptionsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciTenantmanagercontrolplaneAssignedSubscriptionsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
