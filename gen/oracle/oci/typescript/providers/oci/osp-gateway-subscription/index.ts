// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OspGatewaySubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#compartment_id OspGatewaySubscription#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#email OspGatewaySubscription#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#id OspGatewaySubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#osp_home_region OspGatewaySubscription#osp_home_region}
  */
  readonly ospHomeRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#subscription_id OspGatewaySubscription#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * subscription block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#subscription OspGatewaySubscription#subscription}
  */
  readonly subscription: OspGatewaySubscriptionSubscription;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#timeouts OspGatewaySubscription#timeouts}
  */
  readonly timeouts?: OspGatewaySubscriptionTimeouts;
}
export interface OspGatewaySubscriptionBillingAddress {
}

export function ospGatewaySubscriptionBillingAddressToTerraform(struct?: OspGatewaySubscriptionBillingAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ospGatewaySubscriptionBillingAddressToHclTerraform(struct?: OspGatewaySubscriptionBillingAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OspGatewaySubscriptionBillingAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspGatewaySubscriptionBillingAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspGatewaySubscriptionBillingAddress | undefined) {
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

export class OspGatewaySubscriptionBillingAddressList extends cdktf.ComplexList {

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
  public get(index: number): OspGatewaySubscriptionBillingAddressOutputReference {
    return new OspGatewaySubscriptionBillingAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspGatewaySubscriptionPaymentGatewayMerchantDefinedData {
}

export function ospGatewaySubscriptionPaymentGatewayMerchantDefinedDataToTerraform(struct?: OspGatewaySubscriptionPaymentGatewayMerchantDefinedData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ospGatewaySubscriptionPaymentGatewayMerchantDefinedDataToHclTerraform(struct?: OspGatewaySubscriptionPaymentGatewayMerchantDefinedData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspGatewaySubscriptionPaymentGatewayMerchantDefinedData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspGatewaySubscriptionPaymentGatewayMerchantDefinedData | undefined) {
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

export class OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList extends cdktf.ComplexList {

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
  public get(index: number): OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference {
    return new OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspGatewaySubscriptionPaymentGateway {
}

export function ospGatewaySubscriptionPaymentGatewayToTerraform(struct?: OspGatewaySubscriptionPaymentGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ospGatewaySubscriptionPaymentGatewayToHclTerraform(struct?: OspGatewaySubscriptionPaymentGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OspGatewaySubscriptionPaymentGatewayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspGatewaySubscriptionPaymentGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspGatewaySubscriptionPaymentGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // merchant_defined_data - computed: true, optional: false, required: false
  private _merchantDefinedData = new OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList(this, "merchant_defined_data", false);
  public get merchantDefinedData() {
    return this._merchantDefinedData;
  }
}

export class OspGatewaySubscriptionPaymentGatewayList extends cdktf.ComplexList {

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
  public get(index: number): OspGatewaySubscriptionPaymentGatewayOutputReference {
    return new OspGatewaySubscriptionPaymentGatewayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspGatewaySubscriptionPaymentOptions {
}

export function ospGatewaySubscriptionPaymentOptionsToTerraform(struct?: OspGatewaySubscriptionPaymentOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ospGatewaySubscriptionPaymentOptionsToHclTerraform(struct?: OspGatewaySubscriptionPaymentOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OspGatewaySubscriptionPaymentOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspGatewaySubscriptionPaymentOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspGatewaySubscriptionPaymentOptions | undefined) {
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

export class OspGatewaySubscriptionPaymentOptionsList extends cdktf.ComplexList {

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
  public get(index: number): OspGatewaySubscriptionPaymentOptionsOutputReference {
    return new OspGatewaySubscriptionPaymentOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspGatewaySubscriptionTaxInfo {
}

export function ospGatewaySubscriptionTaxInfoToTerraform(struct?: OspGatewaySubscriptionTaxInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ospGatewaySubscriptionTaxInfoToHclTerraform(struct?: OspGatewaySubscriptionTaxInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OspGatewaySubscriptionTaxInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspGatewaySubscriptionTaxInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspGatewaySubscriptionTaxInfo | undefined) {
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

export class OspGatewaySubscriptionTaxInfoList extends cdktf.ComplexList {

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
  public get(index: number): OspGatewaySubscriptionTaxInfoOutputReference {
    return new OspGatewaySubscriptionTaxInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspGatewaySubscriptionSubscriptionBillingAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#address_key OspGatewaySubscription#address_key}
  */
  readonly addressKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#city OspGatewaySubscription#city}
  */
  readonly city?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#company_name OspGatewaySubscription#company_name}
  */
  readonly companyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#contributor_class OspGatewaySubscription#contributor_class}
  */
  readonly contributorClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#country OspGatewaySubscription#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#county OspGatewaySubscription#county}
  */
  readonly county?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#department_name OspGatewaySubscription#department_name}
  */
  readonly departmentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#email_address OspGatewaySubscription#email_address}
  */
  readonly emailAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#first_name OspGatewaySubscription#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#internal_number OspGatewaySubscription#internal_number}
  */
  readonly internalNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#job_title OspGatewaySubscription#job_title}
  */
  readonly jobTitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#last_name OspGatewaySubscription#last_name}
  */
  readonly lastName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#line1 OspGatewaySubscription#line1}
  */
  readonly line1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#line2 OspGatewaySubscription#line2}
  */
  readonly line2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#line3 OspGatewaySubscription#line3}
  */
  readonly line3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#line4 OspGatewaySubscription#line4}
  */
  readonly line4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#middle_name OspGatewaySubscription#middle_name}
  */
  readonly middleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#municipal_inscription OspGatewaySubscription#municipal_inscription}
  */
  readonly municipalInscription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#phone_country_code OspGatewaySubscription#phone_country_code}
  */
  readonly phoneCountryCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#phone_number OspGatewaySubscription#phone_number}
  */
  readonly phoneNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#postal_code OspGatewaySubscription#postal_code}
  */
  readonly postalCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#province OspGatewaySubscription#province}
  */
  readonly province?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#state OspGatewaySubscription#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#state_inscription OspGatewaySubscription#state_inscription}
  */
  readonly stateInscription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#street_name OspGatewaySubscription#street_name}
  */
  readonly streetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#street_number OspGatewaySubscription#street_number}
  */
  readonly streetNumber?: string;
}

export function ospGatewaySubscriptionSubscriptionBillingAddressToTerraform(struct?: OspGatewaySubscriptionSubscriptionBillingAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_key: cdktf.stringToTerraform(struct!.addressKey),
    city: cdktf.stringToTerraform(struct!.city),
    company_name: cdktf.stringToTerraform(struct!.companyName),
    contributor_class: cdktf.stringToTerraform(struct!.contributorClass),
    country: cdktf.stringToTerraform(struct!.country),
    county: cdktf.stringToTerraform(struct!.county),
    department_name: cdktf.stringToTerraform(struct!.departmentName),
    email_address: cdktf.stringToTerraform(struct!.emailAddress),
    first_name: cdktf.stringToTerraform(struct!.firstName),
    internal_number: cdktf.stringToTerraform(struct!.internalNumber),
    job_title: cdktf.stringToTerraform(struct!.jobTitle),
    last_name: cdktf.stringToTerraform(struct!.lastName),
    line1: cdktf.stringToTerraform(struct!.line1),
    line2: cdktf.stringToTerraform(struct!.line2),
    line3: cdktf.stringToTerraform(struct!.line3),
    line4: cdktf.stringToTerraform(struct!.line4),
    middle_name: cdktf.stringToTerraform(struct!.middleName),
    municipal_inscription: cdktf.stringToTerraform(struct!.municipalInscription),
    phone_country_code: cdktf.stringToTerraform(struct!.phoneCountryCode),
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
    postal_code: cdktf.stringToTerraform(struct!.postalCode),
    province: cdktf.stringToTerraform(struct!.province),
    state: cdktf.stringToTerraform(struct!.state),
    state_inscription: cdktf.stringToTerraform(struct!.stateInscription),
    street_name: cdktf.stringToTerraform(struct!.streetName),
    street_number: cdktf.stringToTerraform(struct!.streetNumber),
  }
}


export function ospGatewaySubscriptionSubscriptionBillingAddressToHclTerraform(struct?: OspGatewaySubscriptionSubscriptionBillingAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_key: {
      value: cdktf.stringToHclTerraform(struct!.addressKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    city: {
      value: cdktf.stringToHclTerraform(struct!.city),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    company_name: {
      value: cdktf.stringToHclTerraform(struct!.companyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contributor_class: {
      value: cdktf.stringToHclTerraform(struct!.contributorClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    county: {
      value: cdktf.stringToHclTerraform(struct!.county),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    department_name: {
      value: cdktf.stringToHclTerraform(struct!.departmentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_address: {
      value: cdktf.stringToHclTerraform(struct!.emailAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_name: {
      value: cdktf.stringToHclTerraform(struct!.firstName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internal_number: {
      value: cdktf.stringToHclTerraform(struct!.internalNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_title: {
      value: cdktf.stringToHclTerraform(struct!.jobTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_name: {
      value: cdktf.stringToHclTerraform(struct!.lastName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    line1: {
      value: cdktf.stringToHclTerraform(struct!.line1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    line2: {
      value: cdktf.stringToHclTerraform(struct!.line2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    line3: {
      value: cdktf.stringToHclTerraform(struct!.line3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    line4: {
      value: cdktf.stringToHclTerraform(struct!.line4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    middle_name: {
      value: cdktf.stringToHclTerraform(struct!.middleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    municipal_inscription: {
      value: cdktf.stringToHclTerraform(struct!.municipalInscription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone_country_code: {
      value: cdktf.stringToHclTerraform(struct!.phoneCountryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone_number: {
      value: cdktf.stringToHclTerraform(struct!.phoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postal_code: {
      value: cdktf.stringToHclTerraform(struct!.postalCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    province: {
      value: cdktf.stringToHclTerraform(struct!.province),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_inscription: {
      value: cdktf.stringToHclTerraform(struct!.stateInscription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    street_name: {
      value: cdktf.stringToHclTerraform(struct!.streetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    street_number: {
      value: cdktf.stringToHclTerraform(struct!.streetNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspGatewaySubscriptionSubscriptionBillingAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspGatewaySubscriptionSubscriptionBillingAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressKey = this._addressKey;
    }
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._companyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.companyName = this._companyName;
    }
    if (this._contributorClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.contributorClass = this._contributorClass;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._county !== undefined) {
      hasAnyValues = true;
      internalValueResult.county = this._county;
    }
    if (this._departmentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.departmentName = this._departmentName;
    }
    if (this._emailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddress = this._emailAddress;
    }
    if (this._firstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstName = this._firstName;
    }
    if (this._internalNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalNumber = this._internalNumber;
    }
    if (this._jobTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobTitle = this._jobTitle;
    }
    if (this._lastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName;
    }
    if (this._line1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.line1 = this._line1;
    }
    if (this._line2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.line2 = this._line2;
    }
    if (this._line3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.line3 = this._line3;
    }
    if (this._line4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.line4 = this._line4;
    }
    if (this._middleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.middleName = this._middleName;
    }
    if (this._municipalInscription !== undefined) {
      hasAnyValues = true;
      internalValueResult.municipalInscription = this._municipalInscription;
    }
    if (this._phoneCountryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneCountryCode = this._phoneCountryCode;
    }
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    if (this._postalCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalCode = this._postalCode;
    }
    if (this._province !== undefined) {
      hasAnyValues = true;
      internalValueResult.province = this._province;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._stateInscription !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateInscription = this._stateInscription;
    }
    if (this._streetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.streetName = this._streetName;
    }
    if (this._streetNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.streetNumber = this._streetNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspGatewaySubscriptionSubscriptionBillingAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressKey = undefined;
      this._city = undefined;
      this._companyName = undefined;
      this._contributorClass = undefined;
      this._country = undefined;
      this._county = undefined;
      this._departmentName = undefined;
      this._emailAddress = undefined;
      this._firstName = undefined;
      this._internalNumber = undefined;
      this._jobTitle = undefined;
      this._lastName = undefined;
      this._line1 = undefined;
      this._line2 = undefined;
      this._line3 = undefined;
      this._line4 = undefined;
      this._middleName = undefined;
      this._municipalInscription = undefined;
      this._phoneCountryCode = undefined;
      this._phoneNumber = undefined;
      this._postalCode = undefined;
      this._province = undefined;
      this._state = undefined;
      this._stateInscription = undefined;
      this._streetName = undefined;
      this._streetNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressKey = value.addressKey;
      this._city = value.city;
      this._companyName = value.companyName;
      this._contributorClass = value.contributorClass;
      this._country = value.country;
      this._county = value.county;
      this._departmentName = value.departmentName;
      this._emailAddress = value.emailAddress;
      this._firstName = value.firstName;
      this._internalNumber = value.internalNumber;
      this._jobTitle = value.jobTitle;
      this._lastName = value.lastName;
      this._line1 = value.line1;
      this._line2 = value.line2;
      this._line3 = value.line3;
      this._line4 = value.line4;
      this._middleName = value.middleName;
      this._municipalInscription = value.municipalInscription;
      this._phoneCountryCode = value.phoneCountryCode;
      this._phoneNumber = value.phoneNumber;
      this._postalCode = value.postalCode;
      this._province = value.province;
      this._state = value.state;
      this._stateInscription = value.stateInscription;
      this._streetName = value.streetName;
      this._streetNumber = value.streetNumber;
    }
  }

  // address_key - computed: true, optional: true, required: false
  private _addressKey?: string; 
  public get addressKey() {
    return this.getStringAttribute('address_key');
  }
  public set addressKey(value: string) {
    this._addressKey = value;
  }
  public resetAddressKey() {
    this._addressKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressKeyInput() {
    return this._addressKey;
  }

  // city - computed: true, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // company_name - computed: true, optional: true, required: false
  private _companyName?: string; 
  public get companyName() {
    return this.getStringAttribute('company_name');
  }
  public set companyName(value: string) {
    this._companyName = value;
  }
  public resetCompanyName() {
    this._companyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyNameInput() {
    return this._companyName;
  }

  // contributor_class - computed: true, optional: true, required: false
  private _contributorClass?: string; 
  public get contributorClass() {
    return this.getStringAttribute('contributor_class');
  }
  public set contributorClass(value: string) {
    this._contributorClass = value;
  }
  public resetContributorClass() {
    this._contributorClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contributorClassInput() {
    return this._contributorClass;
  }

  // country - computed: true, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // county - computed: true, optional: true, required: false
  private _county?: string; 
  public get county() {
    return this.getStringAttribute('county');
  }
  public set county(value: string) {
    this._county = value;
  }
  public resetCounty() {
    this._county = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countyInput() {
    return this._county;
  }

  // department_name - computed: true, optional: true, required: false
  private _departmentName?: string; 
  public get departmentName() {
    return this.getStringAttribute('department_name');
  }
  public set departmentName(value: string) {
    this._departmentName = value;
  }
  public resetDepartmentName() {
    this._departmentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get departmentNameInput() {
    return this._departmentName;
  }

  // email_address - computed: true, optional: true, required: false
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  public resetEmailAddress() {
    this._emailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // first_name - computed: true, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // internal_number - computed: true, optional: true, required: false
  private _internalNumber?: string; 
  public get internalNumber() {
    return this.getStringAttribute('internal_number');
  }
  public set internalNumber(value: string) {
    this._internalNumber = value;
  }
  public resetInternalNumber() {
    this._internalNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalNumberInput() {
    return this._internalNumber;
  }

  // job_title - computed: true, optional: true, required: false
  private _jobTitle?: string; 
  public get jobTitle() {
    return this.getStringAttribute('job_title');
  }
  public set jobTitle(value: string) {
    this._jobTitle = value;
  }
  public resetJobTitle() {
    this._jobTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTitleInput() {
    return this._jobTitle;
  }

  // last_name - computed: true, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // line1 - computed: true, optional: true, required: false
  private _line1?: string; 
  public get line1() {
    return this.getStringAttribute('line1');
  }
  public set line1(value: string) {
    this._line1 = value;
  }
  public resetLine1() {
    this._line1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get line1Input() {
    return this._line1;
  }

  // line2 - computed: true, optional: true, required: false
  private _line2?: string; 
  public get line2() {
    return this.getStringAttribute('line2');
  }
  public set line2(value: string) {
    this._line2 = value;
  }
  public resetLine2() {
    this._line2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get line2Input() {
    return this._line2;
  }

  // line3 - computed: true, optional: true, required: false
  private _line3?: string; 
  public get line3() {
    return this.getStringAttribute('line3');
  }
  public set line3(value: string) {
    this._line3 = value;
  }
  public resetLine3() {
    this._line3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get line3Input() {
    return this._line3;
  }

  // line4 - computed: true, optional: true, required: false
  private _line4?: string; 
  public get line4() {
    return this.getStringAttribute('line4');
  }
  public set line4(value: string) {
    this._line4 = value;
  }
  public resetLine4() {
    this._line4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get line4Input() {
    return this._line4;
  }

  // middle_name - computed: true, optional: true, required: false
  private _middleName?: string; 
  public get middleName() {
    return this.getStringAttribute('middle_name');
  }
  public set middleName(value: string) {
    this._middleName = value;
  }
  public resetMiddleName() {
    this._middleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get middleNameInput() {
    return this._middleName;
  }

  // municipal_inscription - computed: true, optional: true, required: false
  private _municipalInscription?: string; 
  public get municipalInscription() {
    return this.getStringAttribute('municipal_inscription');
  }
  public set municipalInscription(value: string) {
    this._municipalInscription = value;
  }
  public resetMunicipalInscription() {
    this._municipalInscription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get municipalInscriptionInput() {
    return this._municipalInscription;
  }

  // phone_country_code - computed: true, optional: true, required: false
  private _phoneCountryCode?: string; 
  public get phoneCountryCode() {
    return this.getStringAttribute('phone_country_code');
  }
  public set phoneCountryCode(value: string) {
    this._phoneCountryCode = value;
  }
  public resetPhoneCountryCode() {
    this._phoneCountryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneCountryCodeInput() {
    return this._phoneCountryCode;
  }

  // phone_number - computed: true, optional: true, required: false
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  public resetPhoneNumber() {
    this._phoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }

  // postal_code - computed: true, optional: true, required: false
  private _postalCode?: string; 
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }
  public set postalCode(value: string) {
    this._postalCode = value;
  }
  public resetPostalCode() {
    this._postalCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode;
  }

  // province - computed: true, optional: true, required: false
  private _province?: string; 
  public get province() {
    return this.getStringAttribute('province');
  }
  public set province(value: string) {
    this._province = value;
  }
  public resetProvince() {
    this._province = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provinceInput() {
    return this._province;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // state_inscription - computed: true, optional: true, required: false
  private _stateInscription?: string; 
  public get stateInscription() {
    return this.getStringAttribute('state_inscription');
  }
  public set stateInscription(value: string) {
    this._stateInscription = value;
  }
  public resetStateInscription() {
    this._stateInscription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInscriptionInput() {
    return this._stateInscription;
  }

  // street_name - computed: true, optional: true, required: false
  private _streetName?: string; 
  public get streetName() {
    return this.getStringAttribute('street_name');
  }
  public set streetName(value: string) {
    this._streetName = value;
  }
  public resetStreetName() {
    this._streetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streetNameInput() {
    return this._streetName;
  }

  // street_number - computed: true, optional: true, required: false
  private _streetNumber?: string; 
  public get streetNumber() {
    return this.getStringAttribute('street_number');
  }
  public set streetNumber(value: string) {
    this._streetNumber = value;
  }
  public resetStreetNumber() {
    this._streetNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streetNumberInput() {
    return this._streetNumber;
  }
}

export class OspGatewaySubscriptionSubscriptionBillingAddressList extends cdktf.ComplexList {
  public internalValue? : OspGatewaySubscriptionSubscriptionBillingAddress[] | cdktf.IResolvable

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
  public get(index: number): OspGatewaySubscriptionSubscriptionBillingAddressOutputReference {
    return new OspGatewaySubscriptionSubscriptionBillingAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#cloud_account_name OspGatewaySubscription#cloud_account_name}
  */
  readonly cloudAccountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#promo_type OspGatewaySubscription#promo_type}
  */
  readonly promoType?: string;
}

export function ospGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataToTerraform(struct?: OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference | OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_account_name: cdktf.stringToTerraform(struct!.cloudAccountName),
    promo_type: cdktf.stringToTerraform(struct!.promoType),
  }
}


export function ospGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataToHclTerraform(struct?: OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference | OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_account_name: {
      value: cdktf.stringToHclTerraform(struct!.cloudAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    promo_type: {
      value: cdktf.stringToHclTerraform(struct!.promoType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudAccountName = this._cloudAccountName;
    }
    if (this._promoType !== undefined) {
      hasAnyValues = true;
      internalValueResult.promoType = this._promoType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudAccountName = undefined;
      this._promoType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudAccountName = value.cloudAccountName;
      this._promoType = value.promoType;
    }
  }

  // cloud_account_name - computed: true, optional: true, required: false
  private _cloudAccountName?: string; 
  public get cloudAccountName() {
    return this.getStringAttribute('cloud_account_name');
  }
  public set cloudAccountName(value: string) {
    this._cloudAccountName = value;
  }
  public resetCloudAccountName() {
    this._cloudAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAccountNameInput() {
    return this._cloudAccountName;
  }

  // promo_type - computed: true, optional: true, required: false
  private _promoType?: string; 
  public get promoType() {
    return this.getStringAttribute('promo_type');
  }
  public set promoType(value: string) {
    this._promoType = value;
  }
  public resetPromoType() {
    this._promoType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promoTypeInput() {
    return this._promoType;
  }
}
export interface OspGatewaySubscriptionSubscriptionPaymentGateway {
  /**
  * merchant_defined_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#merchant_defined_data OspGatewaySubscription#merchant_defined_data}
  */
  readonly merchantDefinedData?: OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData;
}

export function ospGatewaySubscriptionSubscriptionPaymentGatewayToTerraform(struct?: OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference | OspGatewaySubscriptionSubscriptionPaymentGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    merchant_defined_data: ospGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataToTerraform(struct!.merchantDefinedData),
  }
}


export function ospGatewaySubscriptionSubscriptionPaymentGatewayToHclTerraform(struct?: OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference | OspGatewaySubscriptionSubscriptionPaymentGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    merchant_defined_data: {
      value: ospGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataToHclTerraform(struct!.merchantDefinedData),
      isBlock: true,
      type: "list",
      storageClassType: "OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OspGatewaySubscriptionSubscriptionPaymentGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._merchantDefinedData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.merchantDefinedData = this._merchantDefinedData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspGatewaySubscriptionSubscriptionPaymentGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._merchantDefinedData.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._merchantDefinedData.internalValue = value.merchantDefinedData;
    }
  }

  // merchant_defined_data - computed: false, optional: true, required: false
  private _merchantDefinedData = new OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference(this, "merchant_defined_data");
  public get merchantDefinedData() {
    return this._merchantDefinedData;
  }
  public putMerchantDefinedData(value: OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData) {
    this._merchantDefinedData.internalValue = value;
  }
  public resetMerchantDefinedData() {
    this._merchantDefinedData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get merchantDefinedDataInput() {
    return this._merchantDefinedData.internalValue;
  }
}
export interface OspGatewaySubscriptionSubscriptionPaymentOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#credit_card_type OspGatewaySubscription#credit_card_type}
  */
  readonly creditCardType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#email_address OspGatewaySubscription#email_address}
  */
  readonly emailAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#ext_billing_agreement_id OspGatewaySubscription#ext_billing_agreement_id}
  */
  readonly extBillingAgreementId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#first_name OspGatewaySubscription#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#last_digits OspGatewaySubscription#last_digits}
  */
  readonly lastDigits?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#last_name OspGatewaySubscription#last_name}
  */
  readonly lastName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#name_on_card OspGatewaySubscription#name_on_card}
  */
  readonly nameOnCard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#payment_method OspGatewaySubscription#payment_method}
  */
  readonly paymentMethod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#time_expiration OspGatewaySubscription#time_expiration}
  */
  readonly timeExpiration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#wallet_instrument_id OspGatewaySubscription#wallet_instrument_id}
  */
  readonly walletInstrumentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#wallet_transaction_id OspGatewaySubscription#wallet_transaction_id}
  */
  readonly walletTransactionId?: string;
}

export function ospGatewaySubscriptionSubscriptionPaymentOptionsToTerraform(struct?: OspGatewaySubscriptionSubscriptionPaymentOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credit_card_type: cdktf.stringToTerraform(struct!.creditCardType),
    email_address: cdktf.stringToTerraform(struct!.emailAddress),
    ext_billing_agreement_id: cdktf.stringToTerraform(struct!.extBillingAgreementId),
    first_name: cdktf.stringToTerraform(struct!.firstName),
    last_digits: cdktf.stringToTerraform(struct!.lastDigits),
    last_name: cdktf.stringToTerraform(struct!.lastName),
    name_on_card: cdktf.stringToTerraform(struct!.nameOnCard),
    payment_method: cdktf.stringToTerraform(struct!.paymentMethod),
    time_expiration: cdktf.stringToTerraform(struct!.timeExpiration),
    wallet_instrument_id: cdktf.stringToTerraform(struct!.walletInstrumentId),
    wallet_transaction_id: cdktf.stringToTerraform(struct!.walletTransactionId),
  }
}


export function ospGatewaySubscriptionSubscriptionPaymentOptionsToHclTerraform(struct?: OspGatewaySubscriptionSubscriptionPaymentOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credit_card_type: {
      value: cdktf.stringToHclTerraform(struct!.creditCardType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_address: {
      value: cdktf.stringToHclTerraform(struct!.emailAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ext_billing_agreement_id: {
      value: cdktf.stringToHclTerraform(struct!.extBillingAgreementId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_name: {
      value: cdktf.stringToHclTerraform(struct!.firstName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_digits: {
      value: cdktf.stringToHclTerraform(struct!.lastDigits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_name: {
      value: cdktf.stringToHclTerraform(struct!.lastName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_on_card: {
      value: cdktf.stringToHclTerraform(struct!.nameOnCard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payment_method: {
      value: cdktf.stringToHclTerraform(struct!.paymentMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_expiration: {
      value: cdktf.stringToHclTerraform(struct!.timeExpiration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wallet_instrument_id: {
      value: cdktf.stringToHclTerraform(struct!.walletInstrumentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wallet_transaction_id: {
      value: cdktf.stringToHclTerraform(struct!.walletTransactionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspGatewaySubscriptionSubscriptionPaymentOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._creditCardType !== undefined) {
      hasAnyValues = true;
      internalValueResult.creditCardType = this._creditCardType;
    }
    if (this._emailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddress = this._emailAddress;
    }
    if (this._extBillingAgreementId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extBillingAgreementId = this._extBillingAgreementId;
    }
    if (this._firstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstName = this._firstName;
    }
    if (this._lastDigits !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastDigits = this._lastDigits;
    }
    if (this._lastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName;
    }
    if (this._nameOnCard !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameOnCard = this._nameOnCard;
    }
    if (this._paymentMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.paymentMethod = this._paymentMethod;
    }
    if (this._timeExpiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeExpiration = this._timeExpiration;
    }
    if (this._walletInstrumentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.walletInstrumentId = this._walletInstrumentId;
    }
    if (this._walletTransactionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.walletTransactionId = this._walletTransactionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspGatewaySubscriptionSubscriptionPaymentOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._creditCardType = undefined;
      this._emailAddress = undefined;
      this._extBillingAgreementId = undefined;
      this._firstName = undefined;
      this._lastDigits = undefined;
      this._lastName = undefined;
      this._nameOnCard = undefined;
      this._paymentMethod = undefined;
      this._timeExpiration = undefined;
      this._walletInstrumentId = undefined;
      this._walletTransactionId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._creditCardType = value.creditCardType;
      this._emailAddress = value.emailAddress;
      this._extBillingAgreementId = value.extBillingAgreementId;
      this._firstName = value.firstName;
      this._lastDigits = value.lastDigits;
      this._lastName = value.lastName;
      this._nameOnCard = value.nameOnCard;
      this._paymentMethod = value.paymentMethod;
      this._timeExpiration = value.timeExpiration;
      this._walletInstrumentId = value.walletInstrumentId;
      this._walletTransactionId = value.walletTransactionId;
    }
  }

  // credit_card_type - computed: true, optional: true, required: false
  private _creditCardType?: string; 
  public get creditCardType() {
    return this.getStringAttribute('credit_card_type');
  }
  public set creditCardType(value: string) {
    this._creditCardType = value;
  }
  public resetCreditCardType() {
    this._creditCardType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creditCardTypeInput() {
    return this._creditCardType;
  }

  // email_address - computed: true, optional: true, required: false
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  public resetEmailAddress() {
    this._emailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // ext_billing_agreement_id - computed: true, optional: true, required: false
  private _extBillingAgreementId?: string; 
  public get extBillingAgreementId() {
    return this.getStringAttribute('ext_billing_agreement_id');
  }
  public set extBillingAgreementId(value: string) {
    this._extBillingAgreementId = value;
  }
  public resetExtBillingAgreementId() {
    this._extBillingAgreementId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extBillingAgreementIdInput() {
    return this._extBillingAgreementId;
  }

  // first_name - computed: true, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // last_digits - computed: true, optional: true, required: false
  private _lastDigits?: string; 
  public get lastDigits() {
    return this.getStringAttribute('last_digits');
  }
  public set lastDigits(value: string) {
    this._lastDigits = value;
  }
  public resetLastDigits() {
    this._lastDigits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastDigitsInput() {
    return this._lastDigits;
  }

  // last_name - computed: true, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // name_on_card - computed: true, optional: true, required: false
  private _nameOnCard?: string; 
  public get nameOnCard() {
    return this.getStringAttribute('name_on_card');
  }
  public set nameOnCard(value: string) {
    this._nameOnCard = value;
  }
  public resetNameOnCard() {
    this._nameOnCard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameOnCardInput() {
    return this._nameOnCard;
  }

  // payment_method - computed: false, optional: false, required: true
  private _paymentMethod?: string; 
  public get paymentMethod() {
    return this.getStringAttribute('payment_method');
  }
  public set paymentMethod(value: string) {
    this._paymentMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentMethodInput() {
    return this._paymentMethod;
  }

  // time_expiration - computed: true, optional: true, required: false
  private _timeExpiration?: string; 
  public get timeExpiration() {
    return this.getStringAttribute('time_expiration');
  }
  public set timeExpiration(value: string) {
    this._timeExpiration = value;
  }
  public resetTimeExpiration() {
    this._timeExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeExpirationInput() {
    return this._timeExpiration;
  }

  // wallet_instrument_id - computed: true, optional: true, required: false
  private _walletInstrumentId?: string; 
  public get walletInstrumentId() {
    return this.getStringAttribute('wallet_instrument_id');
  }
  public set walletInstrumentId(value: string) {
    this._walletInstrumentId = value;
  }
  public resetWalletInstrumentId() {
    this._walletInstrumentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walletInstrumentIdInput() {
    return this._walletInstrumentId;
  }

  // wallet_transaction_id - computed: true, optional: true, required: false
  private _walletTransactionId?: string; 
  public get walletTransactionId() {
    return this.getStringAttribute('wallet_transaction_id');
  }
  public set walletTransactionId(value: string) {
    this._walletTransactionId = value;
  }
  public resetWalletTransactionId() {
    this._walletTransactionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walletTransactionIdInput() {
    return this._walletTransactionId;
  }
}

export class OspGatewaySubscriptionSubscriptionPaymentOptionsList extends cdktf.ComplexList {
  public internalValue? : OspGatewaySubscriptionSubscriptionPaymentOptions[] | cdktf.IResolvable

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
  public get(index: number): OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference {
    return new OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspGatewaySubscriptionSubscriptionTaxInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#no_tax_reason_code OspGatewaySubscription#no_tax_reason_code}
  */
  readonly noTaxReasonCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#no_tax_reason_code_details OspGatewaySubscription#no_tax_reason_code_details}
  */
  readonly noTaxReasonCodeDetails?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#tax_cnpj OspGatewaySubscription#tax_cnpj}
  */
  readonly taxCnpj?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#tax_payer_id OspGatewaySubscription#tax_payer_id}
  */
  readonly taxPayerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#tax_reg_number OspGatewaySubscription#tax_reg_number}
  */
  readonly taxRegNumber?: string;
}

export function ospGatewaySubscriptionSubscriptionTaxInfoToTerraform(struct?: OspGatewaySubscriptionSubscriptionTaxInfoOutputReference | OspGatewaySubscriptionSubscriptionTaxInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_tax_reason_code: cdktf.stringToTerraform(struct!.noTaxReasonCode),
    no_tax_reason_code_details: cdktf.stringToTerraform(struct!.noTaxReasonCodeDetails),
    tax_cnpj: cdktf.stringToTerraform(struct!.taxCnpj),
    tax_payer_id: cdktf.stringToTerraform(struct!.taxPayerId),
    tax_reg_number: cdktf.stringToTerraform(struct!.taxRegNumber),
  }
}


export function ospGatewaySubscriptionSubscriptionTaxInfoToHclTerraform(struct?: OspGatewaySubscriptionSubscriptionTaxInfoOutputReference | OspGatewaySubscriptionSubscriptionTaxInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_tax_reason_code: {
      value: cdktf.stringToHclTerraform(struct!.noTaxReasonCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_tax_reason_code_details: {
      value: cdktf.stringToHclTerraform(struct!.noTaxReasonCodeDetails),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tax_cnpj: {
      value: cdktf.stringToHclTerraform(struct!.taxCnpj),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tax_payer_id: {
      value: cdktf.stringToHclTerraform(struct!.taxPayerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tax_reg_number: {
      value: cdktf.stringToHclTerraform(struct!.taxRegNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspGatewaySubscriptionSubscriptionTaxInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OspGatewaySubscriptionSubscriptionTaxInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noTaxReasonCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTaxReasonCode = this._noTaxReasonCode;
    }
    if (this._noTaxReasonCodeDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTaxReasonCodeDetails = this._noTaxReasonCodeDetails;
    }
    if (this._taxCnpj !== undefined) {
      hasAnyValues = true;
      internalValueResult.taxCnpj = this._taxCnpj;
    }
    if (this._taxPayerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.taxPayerId = this._taxPayerId;
    }
    if (this._taxRegNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.taxRegNumber = this._taxRegNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspGatewaySubscriptionSubscriptionTaxInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noTaxReasonCode = undefined;
      this._noTaxReasonCodeDetails = undefined;
      this._taxCnpj = undefined;
      this._taxPayerId = undefined;
      this._taxRegNumber = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noTaxReasonCode = value.noTaxReasonCode;
      this._noTaxReasonCodeDetails = value.noTaxReasonCodeDetails;
      this._taxCnpj = value.taxCnpj;
      this._taxPayerId = value.taxPayerId;
      this._taxRegNumber = value.taxRegNumber;
    }
  }

  // no_tax_reason_code - computed: true, optional: true, required: false
  private _noTaxReasonCode?: string; 
  public get noTaxReasonCode() {
    return this.getStringAttribute('no_tax_reason_code');
  }
  public set noTaxReasonCode(value: string) {
    this._noTaxReasonCode = value;
  }
  public resetNoTaxReasonCode() {
    this._noTaxReasonCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTaxReasonCodeInput() {
    return this._noTaxReasonCode;
  }

  // no_tax_reason_code_details - computed: true, optional: true, required: false
  private _noTaxReasonCodeDetails?: string; 
  public get noTaxReasonCodeDetails() {
    return this.getStringAttribute('no_tax_reason_code_details');
  }
  public set noTaxReasonCodeDetails(value: string) {
    this._noTaxReasonCodeDetails = value;
  }
  public resetNoTaxReasonCodeDetails() {
    this._noTaxReasonCodeDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTaxReasonCodeDetailsInput() {
    return this._noTaxReasonCodeDetails;
  }

  // tax_cnpj - computed: true, optional: true, required: false
  private _taxCnpj?: string; 
  public get taxCnpj() {
    return this.getStringAttribute('tax_cnpj');
  }
  public set taxCnpj(value: string) {
    this._taxCnpj = value;
  }
  public resetTaxCnpj() {
    this._taxCnpj = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taxCnpjInput() {
    return this._taxCnpj;
  }

  // tax_payer_id - computed: true, optional: true, required: false
  private _taxPayerId?: string; 
  public get taxPayerId() {
    return this.getStringAttribute('tax_payer_id');
  }
  public set taxPayerId(value: string) {
    this._taxPayerId = value;
  }
  public resetTaxPayerId() {
    this._taxPayerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taxPayerIdInput() {
    return this._taxPayerId;
  }

  // tax_reg_number - computed: true, optional: true, required: false
  private _taxRegNumber?: string; 
  public get taxRegNumber() {
    return this.getStringAttribute('tax_reg_number');
  }
  public set taxRegNumber(value: string) {
    this._taxRegNumber = value;
  }
  public resetTaxRegNumber() {
    this._taxRegNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taxRegNumberInput() {
    return this._taxRegNumber;
  }
}
export interface OspGatewaySubscriptionSubscription {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#account_type OspGatewaySubscription#account_type}
  */
  readonly accountType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#bill_to_cust_account_id OspGatewaySubscription#bill_to_cust_account_id}
  */
  readonly billToCustAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#currency_code OspGatewaySubscription#currency_code}
  */
  readonly currencyCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#gsi_org_code OspGatewaySubscription#gsi_org_code}
  */
  readonly gsiOrgCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#id OspGatewaySubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#is_corporate_conversion_allowed OspGatewaySubscription#is_corporate_conversion_allowed}
  */
  readonly isCorporateConversionAllowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#is_intent_to_pay OspGatewaySubscription#is_intent_to_pay}
  */
  readonly isIntentToPay?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#language_code OspGatewaySubscription#language_code}
  */
  readonly languageCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#organization_id OspGatewaySubscription#organization_id}
  */
  readonly organizationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#plan_type OspGatewaySubscription#plan_type}
  */
  readonly planType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#ship_to_cust_acct_role_id OspGatewaySubscription#ship_to_cust_acct_role_id}
  */
  readonly shipToCustAcctRoleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#ship_to_cust_acct_site_id OspGatewaySubscription#ship_to_cust_acct_site_id}
  */
  readonly shipToCustAcctSiteId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#subscription_plan_number OspGatewaySubscription#subscription_plan_number}
  */
  readonly subscriptionPlanNumber: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#time_personal_to_corporate_conv OspGatewaySubscription#time_personal_to_corporate_conv}
  */
  readonly timePersonalToCorporateConv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#time_plan_upgrade OspGatewaySubscription#time_plan_upgrade}
  */
  readonly timePlanUpgrade?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#time_start OspGatewaySubscription#time_start}
  */
  readonly timeStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#upgrade_state OspGatewaySubscription#upgrade_state}
  */
  readonly upgradeState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#upgrade_state_details OspGatewaySubscription#upgrade_state_details}
  */
  readonly upgradeStateDetails?: string;
  /**
  * billing_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#billing_address OspGatewaySubscription#billing_address}
  */
  readonly billingAddress?: OspGatewaySubscriptionSubscriptionBillingAddress[] | cdktf.IResolvable;
  /**
  * payment_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#payment_gateway OspGatewaySubscription#payment_gateway}
  */
  readonly paymentGateway?: OspGatewaySubscriptionSubscriptionPaymentGateway;
  /**
  * payment_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#payment_options OspGatewaySubscription#payment_options}
  */
  readonly paymentOptions?: OspGatewaySubscriptionSubscriptionPaymentOptions[] | cdktf.IResolvable;
  /**
  * tax_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#tax_info OspGatewaySubscription#tax_info}
  */
  readonly taxInfo?: OspGatewaySubscriptionSubscriptionTaxInfo;
}

export function ospGatewaySubscriptionSubscriptionToTerraform(struct?: OspGatewaySubscriptionSubscriptionOutputReference | OspGatewaySubscriptionSubscription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_type: cdktf.stringToTerraform(struct!.accountType),
    bill_to_cust_account_id: cdktf.stringToTerraform(struct!.billToCustAccountId),
    currency_code: cdktf.stringToTerraform(struct!.currencyCode),
    gsi_org_code: cdktf.stringToTerraform(struct!.gsiOrgCode),
    id: cdktf.stringToTerraform(struct!.id),
    is_corporate_conversion_allowed: cdktf.booleanToTerraform(struct!.isCorporateConversionAllowed),
    is_intent_to_pay: cdktf.booleanToTerraform(struct!.isIntentToPay),
    language_code: cdktf.stringToTerraform(struct!.languageCode),
    organization_id: cdktf.stringToTerraform(struct!.organizationId),
    plan_type: cdktf.stringToTerraform(struct!.planType),
    ship_to_cust_acct_role_id: cdktf.stringToTerraform(struct!.shipToCustAcctRoleId),
    ship_to_cust_acct_site_id: cdktf.stringToTerraform(struct!.shipToCustAcctSiteId),
    subscription_plan_number: cdktf.stringToTerraform(struct!.subscriptionPlanNumber),
    time_personal_to_corporate_conv: cdktf.stringToTerraform(struct!.timePersonalToCorporateConv),
    time_plan_upgrade: cdktf.stringToTerraform(struct!.timePlanUpgrade),
    time_start: cdktf.stringToTerraform(struct!.timeStart),
    upgrade_state: cdktf.stringToTerraform(struct!.upgradeState),
    upgrade_state_details: cdktf.stringToTerraform(struct!.upgradeStateDetails),
    billing_address: cdktf.listMapper(ospGatewaySubscriptionSubscriptionBillingAddressToTerraform, true)(struct!.billingAddress),
    payment_gateway: ospGatewaySubscriptionSubscriptionPaymentGatewayToTerraform(struct!.paymentGateway),
    payment_options: cdktf.listMapper(ospGatewaySubscriptionSubscriptionPaymentOptionsToTerraform, true)(struct!.paymentOptions),
    tax_info: ospGatewaySubscriptionSubscriptionTaxInfoToTerraform(struct!.taxInfo),
  }
}


export function ospGatewaySubscriptionSubscriptionToHclTerraform(struct?: OspGatewaySubscriptionSubscriptionOutputReference | OspGatewaySubscriptionSubscription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_type: {
      value: cdktf.stringToHclTerraform(struct!.accountType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bill_to_cust_account_id: {
      value: cdktf.stringToHclTerraform(struct!.billToCustAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    currency_code: {
      value: cdktf.stringToHclTerraform(struct!.currencyCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gsi_org_code: {
      value: cdktf.stringToHclTerraform(struct!.gsiOrgCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_corporate_conversion_allowed: {
      value: cdktf.booleanToHclTerraform(struct!.isCorporateConversionAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_intent_to_pay: {
      value: cdktf.booleanToHclTerraform(struct!.isIntentToPay),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    language_code: {
      value: cdktf.stringToHclTerraform(struct!.languageCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_id: {
      value: cdktf.stringToHclTerraform(struct!.organizationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plan_type: {
      value: cdktf.stringToHclTerraform(struct!.planType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ship_to_cust_acct_role_id: {
      value: cdktf.stringToHclTerraform(struct!.shipToCustAcctRoleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ship_to_cust_acct_site_id: {
      value: cdktf.stringToHclTerraform(struct!.shipToCustAcctSiteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_plan_number: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionPlanNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_personal_to_corporate_conv: {
      value: cdktf.stringToHclTerraform(struct!.timePersonalToCorporateConv),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_plan_upgrade: {
      value: cdktf.stringToHclTerraform(struct!.timePlanUpgrade),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_start: {
      value: cdktf.stringToHclTerraform(struct!.timeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upgrade_state: {
      value: cdktf.stringToHclTerraform(struct!.upgradeState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upgrade_state_details: {
      value: cdktf.stringToHclTerraform(struct!.upgradeStateDetails),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    billing_address: {
      value: cdktf.listMapperHcl(ospGatewaySubscriptionSubscriptionBillingAddressToHclTerraform, true)(struct!.billingAddress),
      isBlock: true,
      type: "list",
      storageClassType: "OspGatewaySubscriptionSubscriptionBillingAddressList",
    },
    payment_gateway: {
      value: ospGatewaySubscriptionSubscriptionPaymentGatewayToHclTerraform(struct!.paymentGateway),
      isBlock: true,
      type: "list",
      storageClassType: "OspGatewaySubscriptionSubscriptionPaymentGatewayList",
    },
    payment_options: {
      value: cdktf.listMapperHcl(ospGatewaySubscriptionSubscriptionPaymentOptionsToHclTerraform, true)(struct!.paymentOptions),
      isBlock: true,
      type: "list",
      storageClassType: "OspGatewaySubscriptionSubscriptionPaymentOptionsList",
    },
    tax_info: {
      value: ospGatewaySubscriptionSubscriptionTaxInfoToHclTerraform(struct!.taxInfo),
      isBlock: true,
      type: "list",
      storageClassType: "OspGatewaySubscriptionSubscriptionTaxInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspGatewaySubscriptionSubscriptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OspGatewaySubscriptionSubscription | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountType = this._accountType;
    }
    if (this._billToCustAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.billToCustAccountId = this._billToCustAccountId;
    }
    if (this._currencyCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.currencyCode = this._currencyCode;
    }
    if (this._gsiOrgCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.gsiOrgCode = this._gsiOrgCode;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._isCorporateConversionAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCorporateConversionAllowed = this._isCorporateConversionAllowed;
    }
    if (this._isIntentToPay !== undefined) {
      hasAnyValues = true;
      internalValueResult.isIntentToPay = this._isIntentToPay;
    }
    if (this._languageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageCode = this._languageCode;
    }
    if (this._organizationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationId = this._organizationId;
    }
    if (this._planType !== undefined) {
      hasAnyValues = true;
      internalValueResult.planType = this._planType;
    }
    if (this._shipToCustAcctRoleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.shipToCustAcctRoleId = this._shipToCustAcctRoleId;
    }
    if (this._shipToCustAcctSiteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.shipToCustAcctSiteId = this._shipToCustAcctSiteId;
    }
    if (this._subscriptionPlanNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionPlanNumber = this._subscriptionPlanNumber;
    }
    if (this._timePersonalToCorporateConv !== undefined) {
      hasAnyValues = true;
      internalValueResult.timePersonalToCorporateConv = this._timePersonalToCorporateConv;
    }
    if (this._timePlanUpgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.timePlanUpgrade = this._timePlanUpgrade;
    }
    if (this._timeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeStart = this._timeStart;
    }
    if (this._upgradeState !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeState = this._upgradeState;
    }
    if (this._upgradeStateDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeStateDetails = this._upgradeStateDetails;
    }
    if (this._billingAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.billingAddress = this._billingAddress?.internalValue;
    }
    if (this._paymentGateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paymentGateway = this._paymentGateway?.internalValue;
    }
    if (this._paymentOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paymentOptions = this._paymentOptions?.internalValue;
    }
    if (this._taxInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taxInfo = this._taxInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspGatewaySubscriptionSubscription | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountType = undefined;
      this._billToCustAccountId = undefined;
      this._currencyCode = undefined;
      this._gsiOrgCode = undefined;
      this._id = undefined;
      this._isCorporateConversionAllowed = undefined;
      this._isIntentToPay = undefined;
      this._languageCode = undefined;
      this._organizationId = undefined;
      this._planType = undefined;
      this._shipToCustAcctRoleId = undefined;
      this._shipToCustAcctSiteId = undefined;
      this._subscriptionPlanNumber = undefined;
      this._timePersonalToCorporateConv = undefined;
      this._timePlanUpgrade = undefined;
      this._timeStart = undefined;
      this._upgradeState = undefined;
      this._upgradeStateDetails = undefined;
      this._billingAddress.internalValue = undefined;
      this._paymentGateway.internalValue = undefined;
      this._paymentOptions.internalValue = undefined;
      this._taxInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountType = value.accountType;
      this._billToCustAccountId = value.billToCustAccountId;
      this._currencyCode = value.currencyCode;
      this._gsiOrgCode = value.gsiOrgCode;
      this._id = value.id;
      this._isCorporateConversionAllowed = value.isCorporateConversionAllowed;
      this._isIntentToPay = value.isIntentToPay;
      this._languageCode = value.languageCode;
      this._organizationId = value.organizationId;
      this._planType = value.planType;
      this._shipToCustAcctRoleId = value.shipToCustAcctRoleId;
      this._shipToCustAcctSiteId = value.shipToCustAcctSiteId;
      this._subscriptionPlanNumber = value.subscriptionPlanNumber;
      this._timePersonalToCorporateConv = value.timePersonalToCorporateConv;
      this._timePlanUpgrade = value.timePlanUpgrade;
      this._timeStart = value.timeStart;
      this._upgradeState = value.upgradeState;
      this._upgradeStateDetails = value.upgradeStateDetails;
      this._billingAddress.internalValue = value.billingAddress;
      this._paymentGateway.internalValue = value.paymentGateway;
      this._paymentOptions.internalValue = value.paymentOptions;
      this._taxInfo.internalValue = value.taxInfo;
    }
  }

  // account_type - computed: true, optional: true, required: false
  private _accountType?: string; 
  public get accountType() {
    return this.getStringAttribute('account_type');
  }
  public set accountType(value: string) {
    this._accountType = value;
  }
  public resetAccountType() {
    this._accountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTypeInput() {
    return this._accountType;
  }

  // bill_to_cust_account_id - computed: true, optional: true, required: false
  private _billToCustAccountId?: string; 
  public get billToCustAccountId() {
    return this.getStringAttribute('bill_to_cust_account_id');
  }
  public set billToCustAccountId(value: string) {
    this._billToCustAccountId = value;
  }
  public resetBillToCustAccountId() {
    this._billToCustAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billToCustAccountIdInput() {
    return this._billToCustAccountId;
  }

  // currency_code - computed: true, optional: true, required: false
  private _currencyCode?: string; 
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }
  public set currencyCode(value: string) {
    this._currencyCode = value;
  }
  public resetCurrencyCode() {
    this._currencyCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currencyCodeInput() {
    return this._currencyCode;
  }

  // gsi_org_code - computed: true, optional: true, required: false
  private _gsiOrgCode?: string; 
  public get gsiOrgCode() {
    return this.getStringAttribute('gsi_org_code');
  }
  public set gsiOrgCode(value: string) {
    this._gsiOrgCode = value;
  }
  public resetGsiOrgCode() {
    this._gsiOrgCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gsiOrgCodeInput() {
    return this._gsiOrgCode;
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

  // is_corporate_conversion_allowed - computed: true, optional: true, required: false
  private _isCorporateConversionAllowed?: boolean | cdktf.IResolvable; 
  public get isCorporateConversionAllowed() {
    return this.getBooleanAttribute('is_corporate_conversion_allowed');
  }
  public set isCorporateConversionAllowed(value: boolean | cdktf.IResolvable) {
    this._isCorporateConversionAllowed = value;
  }
  public resetIsCorporateConversionAllowed() {
    this._isCorporateConversionAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCorporateConversionAllowedInput() {
    return this._isCorporateConversionAllowed;
  }

  // is_intent_to_pay - computed: true, optional: true, required: false
  private _isIntentToPay?: boolean | cdktf.IResolvable; 
  public get isIntentToPay() {
    return this.getBooleanAttribute('is_intent_to_pay');
  }
  public set isIntentToPay(value: boolean | cdktf.IResolvable) {
    this._isIntentToPay = value;
  }
  public resetIsIntentToPay() {
    this._isIntentToPay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIntentToPayInput() {
    return this._isIntentToPay;
  }

  // language_code - computed: true, optional: true, required: false
  private _languageCode?: string; 
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }
  public set languageCode(value: string) {
    this._languageCode = value;
  }
  public resetLanguageCode() {
    this._languageCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeInput() {
    return this._languageCode;
  }

  // organization_id - computed: true, optional: true, required: false
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  public resetOrganizationId() {
    this._organizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // plan_type - computed: true, optional: true, required: false
  private _planType?: string; 
  public get planType() {
    return this.getStringAttribute('plan_type');
  }
  public set planType(value: string) {
    this._planType = value;
  }
  public resetPlanType() {
    this._planType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planTypeInput() {
    return this._planType;
  }

  // ship_to_cust_acct_role_id - computed: true, optional: true, required: false
  private _shipToCustAcctRoleId?: string; 
  public get shipToCustAcctRoleId() {
    return this.getStringAttribute('ship_to_cust_acct_role_id');
  }
  public set shipToCustAcctRoleId(value: string) {
    this._shipToCustAcctRoleId = value;
  }
  public resetShipToCustAcctRoleId() {
    this._shipToCustAcctRoleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shipToCustAcctRoleIdInput() {
    return this._shipToCustAcctRoleId;
  }

  // ship_to_cust_acct_site_id - computed: true, optional: true, required: false
  private _shipToCustAcctSiteId?: string; 
  public get shipToCustAcctSiteId() {
    return this.getStringAttribute('ship_to_cust_acct_site_id');
  }
  public set shipToCustAcctSiteId(value: string) {
    this._shipToCustAcctSiteId = value;
  }
  public resetShipToCustAcctSiteId() {
    this._shipToCustAcctSiteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shipToCustAcctSiteIdInput() {
    return this._shipToCustAcctSiteId;
  }

  // subscription_plan_number - computed: false, optional: false, required: true
  private _subscriptionPlanNumber?: string; 
  public get subscriptionPlanNumber() {
    return this.getStringAttribute('subscription_plan_number');
  }
  public set subscriptionPlanNumber(value: string) {
    this._subscriptionPlanNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionPlanNumberInput() {
    return this._subscriptionPlanNumber;
  }

  // time_personal_to_corporate_conv - computed: true, optional: true, required: false
  private _timePersonalToCorporateConv?: string; 
  public get timePersonalToCorporateConv() {
    return this.getStringAttribute('time_personal_to_corporate_conv');
  }
  public set timePersonalToCorporateConv(value: string) {
    this._timePersonalToCorporateConv = value;
  }
  public resetTimePersonalToCorporateConv() {
    this._timePersonalToCorporateConv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timePersonalToCorporateConvInput() {
    return this._timePersonalToCorporateConv;
  }

  // time_plan_upgrade - computed: true, optional: true, required: false
  private _timePlanUpgrade?: string; 
  public get timePlanUpgrade() {
    return this.getStringAttribute('time_plan_upgrade');
  }
  public set timePlanUpgrade(value: string) {
    this._timePlanUpgrade = value;
  }
  public resetTimePlanUpgrade() {
    this._timePlanUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timePlanUpgradeInput() {
    return this._timePlanUpgrade;
  }

  // time_start - computed: true, optional: true, required: false
  private _timeStart?: string; 
  public get timeStart() {
    return this.getStringAttribute('time_start');
  }
  public set timeStart(value: string) {
    this._timeStart = value;
  }
  public resetTimeStart() {
    this._timeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeStartInput() {
    return this._timeStart;
  }

  // upgrade_state - computed: true, optional: true, required: false
  private _upgradeState?: string; 
  public get upgradeState() {
    return this.getStringAttribute('upgrade_state');
  }
  public set upgradeState(value: string) {
    this._upgradeState = value;
  }
  public resetUpgradeState() {
    this._upgradeState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeStateInput() {
    return this._upgradeState;
  }

  // upgrade_state_details - computed: true, optional: true, required: false
  private _upgradeStateDetails?: string; 
  public get upgradeStateDetails() {
    return this.getStringAttribute('upgrade_state_details');
  }
  public set upgradeStateDetails(value: string) {
    this._upgradeStateDetails = value;
  }
  public resetUpgradeStateDetails() {
    this._upgradeStateDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeStateDetailsInput() {
    return this._upgradeStateDetails;
  }

  // billing_address - computed: false, optional: true, required: false
  private _billingAddress = new OspGatewaySubscriptionSubscriptionBillingAddressList(this, "billing_address", false);
  public get billingAddress() {
    return this._billingAddress;
  }
  public putBillingAddress(value: OspGatewaySubscriptionSubscriptionBillingAddress[] | cdktf.IResolvable) {
    this._billingAddress.internalValue = value;
  }
  public resetBillingAddress() {
    this._billingAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingAddressInput() {
    return this._billingAddress.internalValue;
  }

  // payment_gateway - computed: false, optional: true, required: false
  private _paymentGateway = new OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference(this, "payment_gateway");
  public get paymentGateway() {
    return this._paymentGateway;
  }
  public putPaymentGateway(value: OspGatewaySubscriptionSubscriptionPaymentGateway) {
    this._paymentGateway.internalValue = value;
  }
  public resetPaymentGateway() {
    this._paymentGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentGatewayInput() {
    return this._paymentGateway.internalValue;
  }

  // payment_options - computed: false, optional: true, required: false
  private _paymentOptions = new OspGatewaySubscriptionSubscriptionPaymentOptionsList(this, "payment_options", false);
  public get paymentOptions() {
    return this._paymentOptions;
  }
  public putPaymentOptions(value: OspGatewaySubscriptionSubscriptionPaymentOptions[] | cdktf.IResolvable) {
    this._paymentOptions.internalValue = value;
  }
  public resetPaymentOptions() {
    this._paymentOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentOptionsInput() {
    return this._paymentOptions.internalValue;
  }

  // tax_info - computed: false, optional: true, required: false
  private _taxInfo = new OspGatewaySubscriptionSubscriptionTaxInfoOutputReference(this, "tax_info");
  public get taxInfo() {
    return this._taxInfo;
  }
  public putTaxInfo(value: OspGatewaySubscriptionSubscriptionTaxInfo) {
    this._taxInfo.internalValue = value;
  }
  public resetTaxInfo() {
    this._taxInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taxInfoInput() {
    return this._taxInfo.internalValue;
  }
}
export interface OspGatewaySubscriptionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#create OspGatewaySubscription#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#delete OspGatewaySubscription#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#update OspGatewaySubscription#update}
  */
  readonly update?: string;
}

export function ospGatewaySubscriptionTimeoutsToTerraform(struct?: OspGatewaySubscriptionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function ospGatewaySubscriptionTimeoutsToHclTerraform(struct?: OspGatewaySubscriptionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspGatewaySubscriptionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OspGatewaySubscriptionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspGatewaySubscriptionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription oci_osp_gateway_subscription}
*/
export class OspGatewaySubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_osp_gateway_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OspGatewaySubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OspGatewaySubscription to import
  * @param importFromId The id of the existing OspGatewaySubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OspGatewaySubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_osp_gateway_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/osp_gateway_subscription oci_osp_gateway_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OspGatewaySubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: OspGatewaySubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_osp_gateway_subscription',
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
    this._compartmentId = config.compartmentId;
    this._email = config.email;
    this._id = config.id;
    this._ospHomeRegion = config.ospHomeRegion;
    this._subscriptionId = config.subscriptionId;
    this._subscription.internalValue = config.subscription;
    this._timeouts.internalValue = config.timeouts;
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
  private _billingAddress = new OspGatewaySubscriptionBillingAddressList(this, "billing_address", false);
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

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // gsi_org_code - computed: true, optional: false, required: false
  public get gsiOrgCode() {
    return this.getStringAttribute('gsi_org_code');
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
  private _paymentGateway = new OspGatewaySubscriptionPaymentGatewayList(this, "payment_gateway", false);
  public get paymentGateway() {
    return this._paymentGateway;
  }

  // payment_options - computed: true, optional: false, required: false
  private _paymentOptions = new OspGatewaySubscriptionPaymentOptionsList(this, "payment_options", false);
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
  private _taxInfo = new OspGatewaySubscriptionTaxInfoList(this, "tax_info", false);
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

  // subscription - computed: false, optional: false, required: true
  private _subscription = new OspGatewaySubscriptionSubscriptionOutputReference(this, "subscription");
  public get subscription() {
    return this._subscription;
  }
  public putSubscription(value: OspGatewaySubscriptionSubscription) {
    this._subscription.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionInput() {
    return this._subscription.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OspGatewaySubscriptionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OspGatewaySubscriptionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      email: cdktf.stringToTerraform(this._email),
      id: cdktf.stringToTerraform(this._id),
      osp_home_region: cdktf.stringToTerraform(this._ospHomeRegion),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      subscription: ospGatewaySubscriptionSubscriptionToTerraform(this._subscription.internalValue),
      timeouts: ospGatewaySubscriptionTimeoutsToTerraform(this._timeouts.internalValue),
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
      email: {
        value: cdktf.stringToHclTerraform(this._email),
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
      subscription: {
        value: ospGatewaySubscriptionSubscriptionToHclTerraform(this._subscription.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OspGatewaySubscriptionSubscriptionList",
      },
      timeouts: {
        value: ospGatewaySubscriptionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OspGatewaySubscriptionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
