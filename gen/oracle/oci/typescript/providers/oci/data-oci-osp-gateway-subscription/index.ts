// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/osp_gateway_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOspGatewaySubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/osp_gateway_subscription#compartment_id DataOciOspGatewaySubscription#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/osp_gateway_subscription#osp_home_region DataOciOspGatewaySubscription#osp_home_region}
  */
  readonly ospHomeRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/osp_gateway_subscription#subscription_id DataOciOspGatewaySubscription#subscription_id}
  */
  readonly subscriptionId: string;
}
export interface DataOciOspGatewaySubscriptionBillingAddress {
}

export function dataOciOspGatewaySubscriptionBillingAddressToTerraform(struct?: DataOciOspGatewaySubscriptionBillingAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOspGatewaySubscriptionBillingAddressToHclTerraform(struct?: DataOciOspGatewaySubscriptionBillingAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOspGatewaySubscriptionBillingAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOspGatewaySubscriptionBillingAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOspGatewaySubscriptionBillingAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_key - computed: true, optional: false, required: false
  public get addressKey() {
    return this.getStringAttribute('address_key');
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // company_name - computed: true, optional: false, required: false
  public get companyName() {
    return this.getStringAttribute('company_name');
  }

  // contributor_class - computed: true, optional: false, required: false
  public get contributorClass() {
    return this.getStringAttribute('contributor_class');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // county - computed: true, optional: false, required: false
  public get county() {
    return this.getStringAttribute('county');
  }

  // department_name - computed: true, optional: false, required: false
  public get departmentName() {
    return this.getStringAttribute('department_name');
  }

  // email_address - computed: true, optional: false, required: false
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // internal_number - computed: true, optional: false, required: false
  public get internalNumber() {
    return this.getStringAttribute('internal_number');
  }

  // job_title - computed: true, optional: false, required: false
  public get jobTitle() {
    return this.getStringAttribute('job_title');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // line1 - computed: true, optional: false, required: false
  public get line1() {
    return this.getStringAttribute('line1');
  }

  // line2 - computed: true, optional: false, required: false
  public get line2() {
    return this.getStringAttribute('line2');
  }

  // line3 - computed: true, optional: false, required: false
  public get line3() {
    return this.getStringAttribute('line3');
  }

  // line4 - computed: true, optional: false, required: false
  public get line4() {
    return this.getStringAttribute('line4');
  }

  // middle_name - computed: true, optional: false, required: false
  public get middleName() {
    return this.getStringAttribute('middle_name');
  }

  // municipal_inscription - computed: true, optional: false, required: false
  public get municipalInscription() {
    return this.getStringAttribute('municipal_inscription');
  }

  // phone_country_code - computed: true, optional: false, required: false
  public get phoneCountryCode() {
    return this.getStringAttribute('phone_country_code');
  }

  // phone_number - computed: true, optional: false, required: false
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }

  // postal_code - computed: true, optional: false, required: false
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }

  // province - computed: true, optional: false, required: false
  public get province() {
    return this.getStringAttribute('province');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_inscription - computed: true, optional: false, required: false
  public get stateInscription() {
    return this.getStringAttribute('state_inscription');
  }

  // street_name - computed: true, optional: false, required: false
  public get streetName() {
    return this.getStringAttribute('street_name');
  }

  // street_number - computed: true, optional: false, required: false
  public get streetNumber() {
    return this.getStringAttribute('street_number');
  }
}

export class DataOciOspGatewaySubscriptionBillingAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOspGatewaySubscriptionBillingAddressOutputReference {
    return new DataOciOspGatewaySubscriptionBillingAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedData {
}

export function dataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataToTerraform(struct?: DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataToHclTerraform(struct?: DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_account_name - computed: true, optional: false, required: false
  public get cloudAccountName() {
    return this.getStringAttribute('cloud_account_name');
  }

  // promo_type - computed: true, optional: false, required: false
  public get promoType() {
    return this.getStringAttribute('promo_type');
  }
}

export class DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference {
    return new DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOspGatewaySubscriptionPaymentGateway {
}

export function dataOciOspGatewaySubscriptionPaymentGatewayToTerraform(struct?: DataOciOspGatewaySubscriptionPaymentGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOspGatewaySubscriptionPaymentGatewayToHclTerraform(struct?: DataOciOspGatewaySubscriptionPaymentGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOspGatewaySubscriptionPaymentGatewayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOspGatewaySubscriptionPaymentGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOspGatewaySubscriptionPaymentGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // merchant_defined_data - computed: true, optional: false, required: false
  private _merchantDefinedData = new DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList(this, "merchant_defined_data", false);
  public get merchantDefinedData() {
    return this._merchantDefinedData;
  }
}

export class DataOciOspGatewaySubscriptionPaymentGatewayList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOspGatewaySubscriptionPaymentGatewayOutputReference {
    return new DataOciOspGatewaySubscriptionPaymentGatewayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOspGatewaySubscriptionPaymentOptions {
}

export function dataOciOspGatewaySubscriptionPaymentOptionsToTerraform(struct?: DataOciOspGatewaySubscriptionPaymentOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOspGatewaySubscriptionPaymentOptionsToHclTerraform(struct?: DataOciOspGatewaySubscriptionPaymentOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOspGatewaySubscriptionPaymentOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOspGatewaySubscriptionPaymentOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOspGatewaySubscriptionPaymentOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credit_card_type - computed: true, optional: false, required: false
  public get creditCardType() {
    return this.getStringAttribute('credit_card_type');
  }

  // email_address - computed: true, optional: false, required: false
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }

  // ext_billing_agreement_id - computed: true, optional: false, required: false
  public get extBillingAgreementId() {
    return this.getStringAttribute('ext_billing_agreement_id');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // last_digits - computed: true, optional: false, required: false
  public get lastDigits() {
    return this.getStringAttribute('last_digits');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // name_on_card - computed: true, optional: false, required: false
  public get nameOnCard() {
    return this.getStringAttribute('name_on_card');
  }

  // payment_method - computed: true, optional: false, required: false
  public get paymentMethod() {
    return this.getStringAttribute('payment_method');
  }

  // time_expiration - computed: true, optional: false, required: false
  public get timeExpiration() {
    return this.getStringAttribute('time_expiration');
  }

  // wallet_instrument_id - computed: true, optional: false, required: false
  public get walletInstrumentId() {
    return this.getStringAttribute('wallet_instrument_id');
  }

  // wallet_transaction_id - computed: true, optional: false, required: false
  public get walletTransactionId() {
    return this.getStringAttribute('wallet_transaction_id');
  }
}

export class DataOciOspGatewaySubscriptionPaymentOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOspGatewaySubscriptionPaymentOptionsOutputReference {
    return new DataOciOspGatewaySubscriptionPaymentOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOspGatewaySubscriptionSubscriptionBillingAddress {
}

export function dataOciOspGatewaySubscriptionSubscriptionBillingAddressToTerraform(struct?: DataOciOspGatewaySubscriptionSubscriptionBillingAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOspGatewaySubscriptionSubscriptionBillingAddressToHclTerraform(struct?: DataOciOspGatewaySubscriptionSubscriptionBillingAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOspGatewaySubscriptionSubscriptionBillingAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOspGatewaySubscriptionSubscriptionBillingAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_key - computed: true, optional: false, required: false
  public get addressKey() {
    return this.getStringAttribute('address_key');
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // company_name - computed: true, optional: false, required: false
  public get companyName() {
    return this.getStringAttribute('company_name');
  }

  // contributor_class - computed: true, optional: false, required: false
  public get contributorClass() {
    return this.getStringAttribute('contributor_class');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // county - computed: true, optional: false, required: false
  public get county() {
    return this.getStringAttribute('county');
  }

  // department_name - computed: true, optional: false, required: false
  public get departmentName() {
    return this.getStringAttribute('department_name');
  }

  // email_address - computed: true, optional: false, required: false
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // internal_number - computed: true, optional: false, required: false
  public get internalNumber() {
    return this.getStringAttribute('internal_number');
  }

  // job_title - computed: true, optional: false, required: false
  public get jobTitle() {
    return this.getStringAttribute('job_title');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // line1 - computed: true, optional: false, required: false
  public get line1() {
    return this.getStringAttribute('line1');
  }

  // line2 - computed: true, optional: false, required: false
  public get line2() {
    return this.getStringAttribute('line2');
  }

  // line3 - computed: true, optional: false, required: false
  public get line3() {
    return this.getStringAttribute('line3');
  }

  // line4 - computed: true, optional: false, required: false
  public get line4() {
    return this.getStringAttribute('line4');
  }

  // middle_name - computed: true, optional: false, required: false
  public get middleName() {
    return this.getStringAttribute('middle_name');
  }

  // municipal_inscription - computed: true, optional: false, required: false
  public get municipalInscription() {
    return this.getStringAttribute('municipal_inscription');
  }

  // phone_country_code - computed: true, optional: false, required: false
  public get phoneCountryCode() {
    return this.getStringAttribute('phone_country_code');
  }

  // phone_number - computed: true, optional: false, required: false
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }

  // postal_code - computed: true, optional: false, required: false
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }

  // province - computed: true, optional: false, required: false
  public get province() {
    return this.getStringAttribute('province');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_inscription - computed: true, optional: false, required: false
  public get stateInscription() {
    return this.getStringAttribute('state_inscription');
  }

  // street_name - computed: true, optional: false, required: false
  public get streetName() {
    return this.getStringAttribute('street_name');
  }

  // street_number - computed: true, optional: false, required: false
  public get streetNumber() {
    return this.getStringAttribute('street_number');
  }
}

export class DataOciOspGatewaySubscriptionSubscriptionBillingAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference {
    return new DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData {
}

export function dataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataToTerraform(struct?: DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataToHclTerraform(struct?: DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_account_name - computed: true, optional: false, required: false
  public get cloudAccountName() {
    return this.getStringAttribute('cloud_account_name');
  }

  // promo_type - computed: true, optional: false, required: false
  public get promoType() {
    return this.getStringAttribute('promo_type');
  }
}

export class DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference {
    return new DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOspGatewaySubscriptionSubscriptionPaymentGateway {
}

export function dataOciOspGatewaySubscriptionSubscriptionPaymentGatewayToTerraform(struct?: DataOciOspGatewaySubscriptionSubscriptionPaymentGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOspGatewaySubscriptionSubscriptionPaymentGatewayToHclTerraform(struct?: DataOciOspGatewaySubscriptionSubscriptionPaymentGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOspGatewaySubscriptionSubscriptionPaymentGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOspGatewaySubscriptionSubscriptionPaymentGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // merchant_defined_data - computed: true, optional: false, required: false
  private _merchantDefinedData = new DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList(this, "merchant_defined_data", false);
  public get merchantDefinedData() {
    return this._merchantDefinedData;
  }
}

export class DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference {
    return new DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOspGatewaySubscriptionSubscriptionPaymentOptions {
}

export function dataOciOspGatewaySubscriptionSubscriptionPaymentOptionsToTerraform(struct?: DataOciOspGatewaySubscriptionSubscriptionPaymentOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOspGatewaySubscriptionSubscriptionPaymentOptionsToHclTerraform(struct?: DataOciOspGatewaySubscriptionSubscriptionPaymentOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOspGatewaySubscriptionSubscriptionPaymentOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOspGatewaySubscriptionSubscriptionPaymentOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credit_card_type - computed: true, optional: false, required: false
  public get creditCardType() {
    return this.getStringAttribute('credit_card_type');
  }

  // email_address - computed: true, optional: false, required: false
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }

  // ext_billing_agreement_id - computed: true, optional: false, required: false
  public get extBillingAgreementId() {
    return this.getStringAttribute('ext_billing_agreement_id');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // last_digits - computed: true, optional: false, required: false
  public get lastDigits() {
    return this.getStringAttribute('last_digits');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // name_on_card - computed: true, optional: false, required: false
  public get nameOnCard() {
    return this.getStringAttribute('name_on_card');
  }

  // payment_method - computed: true, optional: false, required: false
  public get paymentMethod() {
    return this.getStringAttribute('payment_method');
  }

  // time_expiration - computed: true, optional: false, required: false
  public get timeExpiration() {
    return this.getStringAttribute('time_expiration');
  }

  // wallet_instrument_id - computed: true, optional: false, required: false
  public get walletInstrumentId() {
    return this.getStringAttribute('wallet_instrument_id');
  }

  // wallet_transaction_id - computed: true, optional: false, required: false
  public get walletTransactionId() {
    return this.getStringAttribute('wallet_transaction_id');
  }
}

export class DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference {
    return new DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOspGatewaySubscriptionSubscriptionTaxInfo {
}

export function dataOciOspGatewaySubscriptionSubscriptionTaxInfoToTerraform(struct?: DataOciOspGatewaySubscriptionSubscriptionTaxInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOspGatewaySubscriptionSubscriptionTaxInfoToHclTerraform(struct?: DataOciOspGatewaySubscriptionSubscriptionTaxInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOspGatewaySubscriptionSubscriptionTaxInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOspGatewaySubscriptionSubscriptionTaxInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // no_tax_reason_code - computed: true, optional: false, required: false
  public get noTaxReasonCode() {
    return this.getStringAttribute('no_tax_reason_code');
  }

  // no_tax_reason_code_details - computed: true, optional: false, required: false
  public get noTaxReasonCodeDetails() {
    return this.getStringAttribute('no_tax_reason_code_details');
  }

  // tax_cnpj - computed: true, optional: false, required: false
  public get taxCnpj() {
    return this.getStringAttribute('tax_cnpj');
  }

  // tax_payer_id - computed: true, optional: false, required: false
  public get taxPayerId() {
    return this.getStringAttribute('tax_payer_id');
  }

  // tax_reg_number - computed: true, optional: false, required: false
  public get taxRegNumber() {
    return this.getStringAttribute('tax_reg_number');
  }
}

export class DataOciOspGatewaySubscriptionSubscriptionTaxInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference {
    return new DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOspGatewaySubscriptionSubscription {
}

export function dataOciOspGatewaySubscriptionSubscriptionToTerraform(struct?: DataOciOspGatewaySubscriptionSubscription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOspGatewaySubscriptionSubscriptionToHclTerraform(struct?: DataOciOspGatewaySubscriptionSubscription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOspGatewaySubscriptionSubscriptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOspGatewaySubscriptionSubscription | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOspGatewaySubscriptionSubscription | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_type - computed: true, optional: false, required: false
  public get accountType() {
    return this.getStringAttribute('account_type');
  }

  // bill_to_cust_account_id - computed: true, optional: false, required: false
  public get billToCustAccountId() {
    return this.getStringAttribute('bill_to_cust_account_id');
  }

  // billing_address - computed: true, optional: false, required: false
  private _billingAddress = new DataOciOspGatewaySubscriptionSubscriptionBillingAddressList(this, "billing_address", false);
  public get billingAddress() {
    return this._billingAddress;
  }

  // currency_code - computed: true, optional: false, required: false
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }

  // gsi_org_code - computed: true, optional: false, required: false
  public get gsiOrgCode() {
    return this.getStringAttribute('gsi_org_code');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_corporate_conversion_allowed - computed: true, optional: false, required: false
  public get isCorporateConversionAllowed() {
    return this.getBooleanAttribute('is_corporate_conversion_allowed');
  }

  // is_intent_to_pay - computed: true, optional: false, required: false
  public get isIntentToPay() {
    return this.getBooleanAttribute('is_intent_to_pay');
  }

  // language_code - computed: true, optional: false, required: false
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // payment_gateway - computed: true, optional: false, required: false
  private _paymentGateway = new DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList(this, "payment_gateway", false);
  public get paymentGateway() {
    return this._paymentGateway;
  }

  // payment_options - computed: true, optional: false, required: false
  private _paymentOptions = new DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList(this, "payment_options", false);
  public get paymentOptions() {
    return this._paymentOptions;
  }

  // plan_type - computed: true, optional: false, required: false
  public get planType() {
    return this.getStringAttribute('plan_type');
  }

  // ship_to_cust_acct_role_id - computed: true, optional: false, required: false
  public get shipToCustAcctRoleId() {
    return this.getStringAttribute('ship_to_cust_acct_role_id');
  }

  // ship_to_cust_acct_site_id - computed: true, optional: false, required: false
  public get shipToCustAcctSiteId() {
    return this.getStringAttribute('ship_to_cust_acct_site_id');
  }

  // subscription_plan_number - computed: true, optional: false, required: false
  public get subscriptionPlanNumber() {
    return this.getStringAttribute('subscription_plan_number');
  }

  // tax_info - computed: true, optional: false, required: false
  private _taxInfo = new DataOciOspGatewaySubscriptionSubscriptionTaxInfoList(this, "tax_info", false);
  public get taxInfo() {
    return this._taxInfo;
  }

  // time_personal_to_corporate_conv - computed: true, optional: false, required: false
  public get timePersonalToCorporateConv() {
    return this.getStringAttribute('time_personal_to_corporate_conv');
  }

  // time_plan_upgrade - computed: true, optional: false, required: false
  public get timePlanUpgrade() {
    return this.getStringAttribute('time_plan_upgrade');
  }

  // time_start - computed: true, optional: false, required: false
  public get timeStart() {
    return this.getStringAttribute('time_start');
  }

  // upgrade_state - computed: true, optional: false, required: false
  public get upgradeState() {
    return this.getStringAttribute('upgrade_state');
  }

  // upgrade_state_details - computed: true, optional: false, required: false
  public get upgradeStateDetails() {
    return this.getStringAttribute('upgrade_state_details');
  }
}

export class DataOciOspGatewaySubscriptionSubscriptionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOspGatewaySubscriptionSubscriptionOutputReference {
    return new DataOciOspGatewaySubscriptionSubscriptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOspGatewaySubscriptionTaxInfo {
}

export function dataOciOspGatewaySubscriptionTaxInfoToTerraform(struct?: DataOciOspGatewaySubscriptionTaxInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOspGatewaySubscriptionTaxInfoToHclTerraform(struct?: DataOciOspGatewaySubscriptionTaxInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOspGatewaySubscriptionTaxInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOspGatewaySubscriptionTaxInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOspGatewaySubscriptionTaxInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // giro - computed: true, optional: false, required: false
  public get giro() {
    return this.getStringAttribute('giro');
  }

  // no_tax_reason_code - computed: true, optional: false, required: false
  public get noTaxReasonCode() {
    return this.getStringAttribute('no_tax_reason_code');
  }

  // no_tax_reason_code_details - computed: true, optional: false, required: false
  public get noTaxReasonCodeDetails() {
    return this.getStringAttribute('no_tax_reason_code_details');
  }

  // tax_cnpj - computed: true, optional: false, required: false
  public get taxCnpj() {
    return this.getStringAttribute('tax_cnpj');
  }

  // tax_payer_id - computed: true, optional: false, required: false
  public get taxPayerId() {
    return this.getStringAttribute('tax_payer_id');
  }

  // tax_reg_number - computed: true, optional: false, required: false
  public get taxRegNumber() {
    return this.getStringAttribute('tax_reg_number');
  }
}

export class DataOciOspGatewaySubscriptionTaxInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOspGatewaySubscriptionTaxInfoOutputReference {
    return new DataOciOspGatewaySubscriptionTaxInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/osp_gateway_subscription oci_osp_gateway_subscription}
*/
export class DataOciOspGatewaySubscription extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_osp_gateway_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOspGatewaySubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOspGatewaySubscription to import
  * @param importFromId The id of the existing DataOciOspGatewaySubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/osp_gateway_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOspGatewaySubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_osp_gateway_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/osp_gateway_subscription oci_osp_gateway_subscription} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOspGatewaySubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOspGatewaySubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_osp_gateway_subscription',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
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
    this._ospHomeRegion = config.ospHomeRegion;
    this._subscriptionId = config.subscriptionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_type - computed: true, optional: false, required: false
  public get accountType() {
    return this.getStringAttribute('account_type');
  }

  // bill_to_cust_account_id - computed: true, optional: false, required: false
  public get billToCustAccountId() {
    return this.getStringAttribute('bill_to_cust_account_id');
  }

  // billing_address - computed: true, optional: false, required: false
  private _billingAddress = new DataOciOspGatewaySubscriptionBillingAddressList(this, "billing_address", false);
  public get billingAddress() {
    return this._billingAddress;
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

  // currency_code - computed: true, optional: false, required: false
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // gsi_org_code - computed: true, optional: false, required: false
  public get gsiOrgCode() {
    return this.getStringAttribute('gsi_org_code');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_corporate_conversion_allowed - computed: true, optional: false, required: false
  public get isCorporateConversionAllowed() {
    return this.getBooleanAttribute('is_corporate_conversion_allowed');
  }

  // is_intent_to_pay - computed: true, optional: false, required: false
  public get isIntentToPay() {
    return this.getBooleanAttribute('is_intent_to_pay');
  }

  // language_code - computed: true, optional: false, required: false
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // osp_home_region - computed: false, optional: false, required: true
  private _ospHomeRegion?: string; 
  public get ospHomeRegion() {
    return this.getStringAttribute('osp_home_region');
  }
  public set ospHomeRegion(value: string) {
    this._ospHomeRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ospHomeRegionInput() {
    return this._ospHomeRegion;
  }

  // payment_gateway - computed: true, optional: false, required: false
  private _paymentGateway = new DataOciOspGatewaySubscriptionPaymentGatewayList(this, "payment_gateway", false);
  public get paymentGateway() {
    return this._paymentGateway;
  }

  // payment_options - computed: true, optional: false, required: false
  private _paymentOptions = new DataOciOspGatewaySubscriptionPaymentOptionsList(this, "payment_options", false);
  public get paymentOptions() {
    return this._paymentOptions;
  }

  // plan_type - computed: true, optional: false, required: false
  public get planType() {
    return this.getStringAttribute('plan_type');
  }

  // ship_to_cust_acct_role_id - computed: true, optional: false, required: false
  public get shipToCustAcctRoleId() {
    return this.getStringAttribute('ship_to_cust_acct_role_id');
  }

  // ship_to_cust_acct_site_id - computed: true, optional: false, required: false
  public get shipToCustAcctSiteId() {
    return this.getStringAttribute('ship_to_cust_acct_site_id');
  }

  // subscription - computed: true, optional: false, required: false
  private _subscription = new DataOciOspGatewaySubscriptionSubscriptionList(this, "subscription", false);
  public get subscription() {
    return this._subscription;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // subscription_plan_number - computed: true, optional: false, required: false
  public get subscriptionPlanNumber() {
    return this.getStringAttribute('subscription_plan_number');
  }

  // tax_info - computed: true, optional: false, required: false
  private _taxInfo = new DataOciOspGatewaySubscriptionTaxInfoList(this, "tax_info", false);
  public get taxInfo() {
    return this._taxInfo;
  }

  // time_personal_to_corporate_conv - computed: true, optional: false, required: false
  public get timePersonalToCorporateConv() {
    return this.getStringAttribute('time_personal_to_corporate_conv');
  }

  // time_plan_upgrade - computed: true, optional: false, required: false
  public get timePlanUpgrade() {
    return this.getStringAttribute('time_plan_upgrade');
  }

  // time_start - computed: true, optional: false, required: false
  public get timeStart() {
    return this.getStringAttribute('time_start');
  }

  // upgrade_state - computed: true, optional: false, required: false
  public get upgradeState() {
    return this.getStringAttribute('upgrade_state');
  }

  // upgrade_state_details - computed: true, optional: false, required: false
  public get upgradeStateDetails() {
    return this.getStringAttribute('upgrade_state_details');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      osp_home_region: cdktf.stringToTerraform(this._ospHomeRegion),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
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
      osp_home_region: {
        value: cdktf.stringToHclTerraform(this._ospHomeRegion),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
