// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_subscription_subscriptions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOsubSubscriptionSubscriptionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_subscription_subscriptions#buyer_email DataOciOsubSubscriptionSubscriptions#buyer_email}
  */
  readonly buyerEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_subscription_subscriptions#compartment_id DataOciOsubSubscriptionSubscriptions#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_subscription_subscriptions#id DataOciOsubSubscriptionSubscriptions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_subscription_subscriptions#is_commit_info_required DataOciOsubSubscriptionSubscriptions#is_commit_info_required}
  */
  readonly isCommitInfoRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_subscription_subscriptions#plan_number DataOciOsubSubscriptionSubscriptions#plan_number}
  */
  readonly planNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_subscription_subscriptions#subscription_id DataOciOsubSubscriptionSubscriptions#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_subscription_subscriptions#x_one_gateway_subscription_id DataOciOsubSubscriptionSubscriptions#x_one_gateway_subscription_id}
  */
  readonly xOneGatewaySubscriptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_subscription_subscriptions#x_one_origin_region DataOciOsubSubscriptionSubscriptions#x_one_origin_region}
  */
  readonly xOneOriginRegion?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_subscription_subscriptions#filter DataOciOsubSubscriptionSubscriptions#filter}
  */
  readonly filter?: DataOciOsubSubscriptionSubscriptionsFilter[] | cdktf.IResolvable;
}
export interface DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrency {
}

export function dataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyToTerraform(struct?: DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyToHclTerraform(struct?: DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // iso_code - computed: true, optional: false, required: false
  public get isoCode() {
    return this.getStringAttribute('iso_code');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // std_precision - computed: true, optional: false, required: false
  public get stdPrecision() {
    return this.getStringAttribute('std_precision');
  }
}

export class DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference {
    return new DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices {
}

export function dataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesToTerraform(struct?: DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesToHclTerraform(struct?: DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_amount - computed: true, optional: false, required: false
  public get availableAmount() {
    return this.getStringAttribute('available_amount');
  }

  // funded_allocation_value - computed: true, optional: false, required: false
  public get fundedAllocationValue() {
    return this.getStringAttribute('funded_allocation_value');
  }

  // line_net_amount - computed: true, optional: false, required: false
  public get lineNetAmount() {
    return this.getStringAttribute('line_net_amount');
  }

  // quantity - computed: true, optional: false, required: false
  public get quantity() {
    return this.getStringAttribute('quantity');
  }

  // time_end - computed: true, optional: false, required: false
  public get timeEnd() {
    return this.getStringAttribute('time_end');
  }

  // time_start - computed: true, optional: false, required: false
  public get timeStart() {
    return this.getStringAttribute('time_start');
  }
}

export class DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference {
    return new DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct {
}

export function dataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductToTerraform(struct?: DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductToHclTerraform(struct?: DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // part_number - computed: true, optional: false, required: false
  public get partNumber() {
    return this.getStringAttribute('part_number');
  }

  // provisioning_group - computed: true, optional: false, required: false
  public get provisioningGroup() {
    return this.getStringAttribute('provisioning_group');
  }

  // unit_of_measure - computed: true, optional: false, required: false
  public get unitOfMeasure() {
    return this.getStringAttribute('unit_of_measure');
  }
}

export class DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference {
    return new DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServices {
}

export function dataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesToTerraform(struct?: DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesToHclTerraform(struct?: DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // booking_opty_number - computed: true, optional: false, required: false
  public get bookingOptyNumber() {
    return this.getStringAttribute('booking_opty_number');
  }

  // commitment_services - computed: true, optional: false, required: false
  private _commitmentServices = new DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList(this, "commitment_services", false);
  public get commitmentServices() {
    return this._commitmentServices;
  }

  // csi - computed: true, optional: false, required: false
  public get csi() {
    return this.getStringAttribute('csi');
  }

  // data_center_region - computed: true, optional: false, required: false
  public get dataCenterRegion() {
    return this.getStringAttribute('data_center_region');
  }

  // funded_allocation_value - computed: true, optional: false, required: false
  public get fundedAllocationValue() {
    return this.getStringAttribute('funded_allocation_value');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_intent_to_pay - computed: true, optional: false, required: false
  public get isIntentToPay() {
    return this.getBooleanAttribute('is_intent_to_pay');
  }

  // net_unit_price - computed: true, optional: false, required: false
  public get netUnitPrice() {
    return this.getStringAttribute('net_unit_price');
  }

  // operation_type - computed: true, optional: false, required: false
  public get operationType() {
    return this.getStringAttribute('operation_type');
  }

  // order_number - computed: true, optional: false, required: false
  public get orderNumber() {
    return this.getStringAttribute('order_number');
  }

  // partner_transaction_type - computed: true, optional: false, required: false
  public get partnerTransactionType() {
    return this.getStringAttribute('partner_transaction_type');
  }

  // pricing_model - computed: true, optional: false, required: false
  public get pricingModel() {
    return this.getStringAttribute('pricing_model');
  }

  // product - computed: true, optional: false, required: false
  private _product = new DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList(this, "product", false);
  public get product() {
    return this._product;
  }

  // program_type - computed: true, optional: false, required: false
  public get programType() {
    return this.getStringAttribute('program_type');
  }

  // promo_type - computed: true, optional: false, required: false
  public get promoType() {
    return this.getStringAttribute('promo_type');
  }

  // quantity - computed: true, optional: false, required: false
  public get quantity() {
    return this.getStringAttribute('quantity');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // term_value - computed: true, optional: false, required: false
  public get termValue() {
    return this.getStringAttribute('term_value');
  }

  // term_value_uom - computed: true, optional: false, required: false
  public get termValueUom() {
    return this.getStringAttribute('term_value_uom');
  }

  // time_end - computed: true, optional: false, required: false
  public get timeEnd() {
    return this.getStringAttribute('time_end');
  }

  // time_start - computed: true, optional: false, required: false
  public get timeStart() {
    return this.getStringAttribute('time_start');
  }

  // total_value - computed: true, optional: false, required: false
  public get totalValue() {
    return this.getStringAttribute('total_value');
  }
}

export class DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference {
    return new DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsubSubscriptionSubscriptionsSubscriptions {
}

export function dataOciOsubSubscriptionSubscriptionsSubscriptionsToTerraform(struct?: DataOciOsubSubscriptionSubscriptionsSubscriptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsubSubscriptionSubscriptionsSubscriptionsToHclTerraform(struct?: DataOciOsubSubscriptionSubscriptionsSubscriptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsubSubscriptionSubscriptionsSubscriptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsubSubscriptionSubscriptionsSubscriptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency - computed: true, optional: false, required: false
  private _currency = new DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList(this, "currency", false);
  public get currency() {
    return this._currency;
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subscribed_services - computed: true, optional: false, required: false
  private _subscribedServices = new DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList(this, "subscribed_services", false);
  public get subscribedServices() {
    return this._subscribedServices;
  }

  // time_end - computed: true, optional: false, required: false
  public get timeEnd() {
    return this.getStringAttribute('time_end');
  }

  // time_start - computed: true, optional: false, required: false
  public get timeStart() {
    return this.getStringAttribute('time_start');
  }
}

export class DataOciOsubSubscriptionSubscriptionsSubscriptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference {
    return new DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsubSubscriptionSubscriptionsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_subscription_subscriptions#name DataOciOsubSubscriptionSubscriptions#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_subscription_subscriptions#regex DataOciOsubSubscriptionSubscriptions#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_subscription_subscriptions#values DataOciOsubSubscriptionSubscriptions#values}
  */
  readonly values: string[];
}

export function dataOciOsubSubscriptionSubscriptionsFilterToTerraform(struct?: DataOciOsubSubscriptionSubscriptionsFilter | cdktf.IResolvable): any {
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


export function dataOciOsubSubscriptionSubscriptionsFilterToHclTerraform(struct?: DataOciOsubSubscriptionSubscriptionsFilter | cdktf.IResolvable): any {
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

export class DataOciOsubSubscriptionSubscriptionsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsubSubscriptionSubscriptionsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciOsubSubscriptionSubscriptionsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciOsubSubscriptionSubscriptionsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciOsubSubscriptionSubscriptionsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciOsubSubscriptionSubscriptionsFilterOutputReference {
    return new DataOciOsubSubscriptionSubscriptionsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_subscription_subscriptions oci_osub_subscription_subscriptions}
*/
export class DataOciOsubSubscriptionSubscriptions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_osub_subscription_subscriptions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOsubSubscriptionSubscriptions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOsubSubscriptionSubscriptions to import
  * @param importFromId The id of the existing DataOciOsubSubscriptionSubscriptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_subscription_subscriptions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOsubSubscriptionSubscriptions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_osub_subscription_subscriptions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osub_subscription_subscriptions oci_osub_subscription_subscriptions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOsubSubscriptionSubscriptionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOsubSubscriptionSubscriptionsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_osub_subscription_subscriptions',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._buyerEmail = config.buyerEmail;
    this._compartmentId = config.compartmentId;
    this._id = config.id;
    this._isCommitInfoRequired = config.isCommitInfoRequired;
    this._planNumber = config.planNumber;
    this._subscriptionId = config.subscriptionId;
    this._xOneGatewaySubscriptionId = config.xOneGatewaySubscriptionId;
    this._xOneOriginRegion = config.xOneOriginRegion;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // buyer_email - computed: false, optional: true, required: false
  private _buyerEmail?: string; 
  public get buyerEmail() {
    return this.getStringAttribute('buyer_email');
  }
  public set buyerEmail(value: string) {
    this._buyerEmail = value;
  }
  public resetBuyerEmail() {
    this._buyerEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buyerEmailInput() {
    return this._buyerEmail;
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

  // is_commit_info_required - computed: false, optional: true, required: false
  private _isCommitInfoRequired?: boolean | cdktf.IResolvable; 
  public get isCommitInfoRequired() {
    return this.getBooleanAttribute('is_commit_info_required');
  }
  public set isCommitInfoRequired(value: boolean | cdktf.IResolvable) {
    this._isCommitInfoRequired = value;
  }
  public resetIsCommitInfoRequired() {
    this._isCommitInfoRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCommitInfoRequiredInput() {
    return this._isCommitInfoRequired;
  }

  // plan_number - computed: false, optional: true, required: false
  private _planNumber?: string; 
  public get planNumber() {
    return this.getStringAttribute('plan_number');
  }
  public set planNumber(value: string) {
    this._planNumber = value;
  }
  public resetPlanNumber() {
    this._planNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planNumberInput() {
    return this._planNumber;
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

  // subscriptions - computed: true, optional: false, required: false
  private _subscriptions = new DataOciOsubSubscriptionSubscriptionsSubscriptionsList(this, "subscriptions", false);
  public get subscriptions() {
    return this._subscriptions;
  }

  // x_one_gateway_subscription_id - computed: false, optional: true, required: false
  private _xOneGatewaySubscriptionId?: string; 
  public get xOneGatewaySubscriptionId() {
    return this.getStringAttribute('x_one_gateway_subscription_id');
  }
  public set xOneGatewaySubscriptionId(value: string) {
    this._xOneGatewaySubscriptionId = value;
  }
  public resetXOneGatewaySubscriptionId() {
    this._xOneGatewaySubscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xOneGatewaySubscriptionIdInput() {
    return this._xOneGatewaySubscriptionId;
  }

  // x_one_origin_region - computed: false, optional: true, required: false
  private _xOneOriginRegion?: string; 
  public get xOneOriginRegion() {
    return this.getStringAttribute('x_one_origin_region');
  }
  public set xOneOriginRegion(value: string) {
    this._xOneOriginRegion = value;
  }
  public resetXOneOriginRegion() {
    this._xOneOriginRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xOneOriginRegionInput() {
    return this._xOneOriginRegion;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciOsubSubscriptionSubscriptionsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciOsubSubscriptionSubscriptionsFilter[] | cdktf.IResolvable) {
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
      buyer_email: cdktf.stringToTerraform(this._buyerEmail),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
      is_commit_info_required: cdktf.booleanToTerraform(this._isCommitInfoRequired),
      plan_number: cdktf.stringToTerraform(this._planNumber),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      x_one_gateway_subscription_id: cdktf.stringToTerraform(this._xOneGatewaySubscriptionId),
      x_one_origin_region: cdktf.stringToTerraform(this._xOneOriginRegion),
      filter: cdktf.listMapper(dataOciOsubSubscriptionSubscriptionsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      buyer_email: {
        value: cdktf.stringToHclTerraform(this._buyerEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
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
      is_commit_info_required: {
        value: cdktf.booleanToHclTerraform(this._isCommitInfoRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      plan_number: {
        value: cdktf.stringToHclTerraform(this._planNumber),
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
      x_one_gateway_subscription_id: {
        value: cdktf.stringToHclTerraform(this._xOneGatewaySubscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      x_one_origin_region: {
        value: cdktf.stringToHclTerraform(this._xOneOriginRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciOsubSubscriptionSubscriptionsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciOsubSubscriptionSubscriptionsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
