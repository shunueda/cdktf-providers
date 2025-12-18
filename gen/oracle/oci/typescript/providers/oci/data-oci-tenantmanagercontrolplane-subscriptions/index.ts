// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/tenantmanagercontrolplane_subscriptions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciTenantmanagercontrolplaneSubscriptionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/tenantmanagercontrolplane_subscriptions#compartment_id DataOciTenantmanagercontrolplaneSubscriptions#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/tenantmanagercontrolplane_subscriptions#entity_version DataOciTenantmanagercontrolplaneSubscriptions#entity_version}
  */
  readonly entityVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/tenantmanagercontrolplane_subscriptions#id DataOciTenantmanagercontrolplaneSubscriptions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/tenantmanagercontrolplane_subscriptions#subscription_id DataOciTenantmanagercontrolplaneSubscriptions#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/tenantmanagercontrolplane_subscriptions#filter DataOciTenantmanagercontrolplaneSubscriptions#filter}
  */
  readonly filter?: DataOciTenantmanagercontrolplaneSubscriptionsFilter[] | cdktf.IResolvable;
}
export interface DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionItemsPromotion {
}

export function dataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionItemsPromotionToTerraform(struct?: DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionItemsPromotion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionItemsPromotionToHclTerraform(struct?: DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionItemsPromotion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionItemsPromotionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionItemsPromotion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionItemsPromotion | undefined) {
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

export class DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionItemsPromotionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionItemsPromotionOutputReference {
    return new DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionItemsPromotionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionItemsSkus {
}

export function dataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionItemsSkusToTerraform(struct?: DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionItemsSkus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionItemsSkusToHclTerraform(struct?: DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionItemsSkus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionItemsSkusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionItemsSkus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionItemsSkus | undefined) {
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

export class DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionItemsSkusList extends cdktf.ComplexList {

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
  public get(index: number): DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionItemsSkusOutputReference {
    return new DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionItemsSkusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionItems {
}

export function dataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionItemsToTerraform(struct?: DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionItemsToHclTerraform(struct?: DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionItems | undefined) {
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

  // payment_model - computed: true, optional: false, required: false
  public get paymentModel() {
    return this.getStringAttribute('payment_model');
  }

  // program_type - computed: true, optional: false, required: false
  public get programType() {
    return this.getStringAttribute('program_type');
  }

  // promotion - computed: true, optional: false, required: false
  private _promotion = new DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionItemsPromotionList(this, "promotion", false);
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
  private _skus = new DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionItemsSkusList(this, "skus", false);
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

export class DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionItemsOutputReference {
    return new DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollection {
}

export function dataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionToTerraform(struct?: DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionToHclTerraform(struct?: DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionOutputReference {
    return new DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciTenantmanagercontrolplaneSubscriptionsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/tenantmanagercontrolplane_subscriptions#name DataOciTenantmanagercontrolplaneSubscriptions#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/tenantmanagercontrolplane_subscriptions#regex DataOciTenantmanagercontrolplaneSubscriptions#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/tenantmanagercontrolplane_subscriptions#values DataOciTenantmanagercontrolplaneSubscriptions#values}
  */
  readonly values: string[];
}

export function dataOciTenantmanagercontrolplaneSubscriptionsFilterToTerraform(struct?: DataOciTenantmanagercontrolplaneSubscriptionsFilter | cdktf.IResolvable): any {
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


export function dataOciTenantmanagercontrolplaneSubscriptionsFilterToHclTerraform(struct?: DataOciTenantmanagercontrolplaneSubscriptionsFilter | cdktf.IResolvable): any {
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

export class DataOciTenantmanagercontrolplaneSubscriptionsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciTenantmanagercontrolplaneSubscriptionsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciTenantmanagercontrolplaneSubscriptionsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciTenantmanagercontrolplaneSubscriptionsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciTenantmanagercontrolplaneSubscriptionsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciTenantmanagercontrolplaneSubscriptionsFilterOutputReference {
    return new DataOciTenantmanagercontrolplaneSubscriptionsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/tenantmanagercontrolplane_subscriptions oci_tenantmanagercontrolplane_subscriptions}
*/
export class DataOciTenantmanagercontrolplaneSubscriptions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_tenantmanagercontrolplane_subscriptions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciTenantmanagercontrolplaneSubscriptions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciTenantmanagercontrolplaneSubscriptions to import
  * @param importFromId The id of the existing DataOciTenantmanagercontrolplaneSubscriptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/tenantmanagercontrolplane_subscriptions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciTenantmanagercontrolplaneSubscriptions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_tenantmanagercontrolplane_subscriptions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/tenantmanagercontrolplane_subscriptions oci_tenantmanagercontrolplane_subscriptions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciTenantmanagercontrolplaneSubscriptionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOciTenantmanagercontrolplaneSubscriptionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_tenantmanagercontrolplane_subscriptions',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
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

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
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

  // subscription_collection - computed: true, optional: false, required: false
  private _subscriptionCollection = new DataOciTenantmanagercontrolplaneSubscriptionsSubscriptionCollectionList(this, "subscription_collection", false);
  public get subscriptionCollection() {
    return this._subscriptionCollection;
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
  private _filter = new DataOciTenantmanagercontrolplaneSubscriptionsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciTenantmanagercontrolplaneSubscriptionsFilter[] | cdktf.IResolvable) {
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
      filter: cdktf.listMapper(dataOciTenantmanagercontrolplaneSubscriptionsFilterToTerraform, true)(this._filter.internalValue),
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
        value: cdktf.listMapperHcl(dataOciTenantmanagercontrolplaneSubscriptionsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciTenantmanagercontrolplaneSubscriptionsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
