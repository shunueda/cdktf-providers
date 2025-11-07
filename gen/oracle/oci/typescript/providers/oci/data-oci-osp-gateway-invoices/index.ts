// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/osp_gateway_invoices
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOspGatewayInvoicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/osp_gateway_invoices#compartment_id DataOciOspGatewayInvoices#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/osp_gateway_invoices#id DataOciOspGatewayInvoices#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/osp_gateway_invoices#invoice_id DataOciOspGatewayInvoices#invoice_id}
  */
  readonly invoiceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/osp_gateway_invoices#osp_home_region DataOciOspGatewayInvoices#osp_home_region}
  */
  readonly ospHomeRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/osp_gateway_invoices#search_text DataOciOspGatewayInvoices#search_text}
  */
  readonly searchText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/osp_gateway_invoices#status DataOciOspGatewayInvoices#status}
  */
  readonly status?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/osp_gateway_invoices#time_invoice_end DataOciOspGatewayInvoices#time_invoice_end}
  */
  readonly timeInvoiceEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/osp_gateway_invoices#time_invoice_start DataOciOspGatewayInvoices#time_invoice_start}
  */
  readonly timeInvoiceStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/osp_gateway_invoices#time_payment_end DataOciOspGatewayInvoices#time_payment_end}
  */
  readonly timePaymentEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/osp_gateway_invoices#time_payment_start DataOciOspGatewayInvoices#time_payment_start}
  */
  readonly timePaymentStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/osp_gateway_invoices#type DataOciOspGatewayInvoices#type}
  */
  readonly type?: string[];
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/osp_gateway_invoices#filter DataOciOspGatewayInvoices#filter}
  */
  readonly filter?: DataOciOspGatewayInvoicesFilter[] | cdktf.IResolvable;
}
export interface DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry {
}

export function dataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryToTerraform(struct?: DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryToHclTerraform(struct?: DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ascii3country_code - computed: true, optional: false, required: false
  public get ascii3CountryCode() {
    return this.getStringAttribute('ascii3country_code');
  }

  // country_code - computed: true, optional: false, required: false
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }

  // country_id - computed: true, optional: false, required: false
  public get countryId() {
    return this.getNumberAttribute('country_id');
  }

  // country_name - computed: true, optional: false, required: false
  public get countryName() {
    return this.getStringAttribute('country_name');
  }

  // language_id - computed: true, optional: false, required: false
  public get languageId() {
    return this.getNumberAttribute('language_id');
  }
}

export class DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference {
    return new DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress {
}

export function dataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressToTerraform(struct?: DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressToHclTerraform(struct?: DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_line1 - computed: true, optional: false, required: false
  public get addressLine1() {
    return this.getStringAttribute('address_line1');
  }

  // address_line2 - computed: true, optional: false, required: false
  public get addressLine2() {
    return this.getStringAttribute('address_line2');
  }

  // address_line3 - computed: true, optional: false, required: false
  public get addressLine3() {
    return this.getStringAttribute('address_line3');
  }

  // address_line4 - computed: true, optional: false, required: false
  public get addressLine4() {
    return this.getStringAttribute('address_line4');
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // company_name - computed: true, optional: false, required: false
  public get companyName() {
    return this.getStringAttribute('company_name');
  }

  // contact_name - computed: true, optional: false, required: false
  public get contactName() {
    return this.getStringAttribute('contact_name');
  }

  // country - computed: true, optional: false, required: false
  private _country = new DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList(this, "country", false);
  public get country() {
    return this._country;
  }

  // county - computed: true, optional: false, required: false
  public get county() {
    return this.getStringAttribute('county');
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

  // street_name - computed: true, optional: false, required: false
  public get streetName() {
    return this.getStringAttribute('street_name');
  }

  // street_number - computed: true, optional: false, required: false
  public get streetNumber() {
    return this.getStringAttribute('street_number');
  }
}

export class DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference {
    return new DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency {
}

export function dataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyToTerraform(struct?: DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyToHclTerraform(struct?: DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency_code - computed: true, optional: false, required: false
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }

  // currency_symbol - computed: true, optional: false, required: false
  public get currencySymbol() {
    return this.getStringAttribute('currency_symbol');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // round_decimal_point - computed: true, optional: false, required: false
  public get roundDecimalPoint() {
    return this.getNumberAttribute('round_decimal_point');
  }

  // usd_conversion - computed: true, optional: false, required: false
  public get usdConversion() {
    return this.getNumberAttribute('usd_conversion');
  }
}

export class DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference {
    return new DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail {
}

export function dataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailToTerraform(struct?: DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailToHclTerraform(struct?: DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_number - computed: true, optional: false, required: false
  public get accountNumber() {
    return this.getStringAttribute('account_number');
  }

  // amount_paid - computed: true, optional: false, required: false
  public get amountPaid() {
    return this.getNumberAttribute('amount_paid');
  }

  // card_type - computed: true, optional: false, required: false
  public get cardType() {
    return this.getStringAttribute('card_type');
  }

  // credit_card_type - computed: true, optional: false, required: false
  public get creditCardType() {
    return this.getStringAttribute('credit_card_type');
  }

  // echeck_routing - computed: true, optional: false, required: false
  public get echeckRouting() {
    return this.getStringAttribute('echeck_routing');
  }

  // last_digits - computed: true, optional: false, required: false
  public get lastDigits() {
    return this.getStringAttribute('last_digits');
  }

  // name_on_card - computed: true, optional: false, required: false
  public get nameOnCard() {
    return this.getStringAttribute('name_on_card');
  }

  // paid_by - computed: true, optional: false, required: false
  public get paidBy() {
    return this.getStringAttribute('paid_by');
  }

  // payment_method - computed: true, optional: false, required: false
  public get paymentMethod() {
    return this.getStringAttribute('payment_method');
  }

  // paypal_id - computed: true, optional: false, required: false
  public get paypalId() {
    return this.getStringAttribute('paypal_id');
  }

  // paypal_reference - computed: true, optional: false, required: false
  public get paypalReference() {
    return this.getStringAttribute('paypal_reference');
  }

  // routing_number - computed: true, optional: false, required: false
  public get routingNumber() {
    return this.getStringAttribute('routing_number');
  }

  // time_expiration - computed: true, optional: false, required: false
  public get timeExpiration() {
    return this.getStringAttribute('time_expiration');
  }

  // time_paid_on - computed: true, optional: false, required: false
  public get timePaidOn() {
    return this.getStringAttribute('time_paid_on');
  }
}

export class DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference {
    return new DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOspGatewayInvoicesInvoiceCollectionItems {
}

export function dataOciOspGatewayInvoicesInvoiceCollectionItemsToTerraform(struct?: DataOciOspGatewayInvoicesInvoiceCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOspGatewayInvoicesInvoiceCollectionItemsToHclTerraform(struct?: DataOciOspGatewayInvoicesInvoiceCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOspGatewayInvoicesInvoiceCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOspGatewayInvoicesInvoiceCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bill_to_address - computed: true, optional: false, required: false
  private _billToAddress = new DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList(this, "bill_to_address", false);
  public get billToAddress() {
    return this._billToAddress;
  }

  // currency - computed: true, optional: false, required: false
  private _currency = new DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList(this, "currency", false);
  public get currency() {
    return this._currency;
  }

  // internal_invoice_id - computed: true, optional: false, required: false
  public get internalInvoiceId() {
    return this.getStringAttribute('internal_invoice_id');
  }

  // invoice_amount - computed: true, optional: false, required: false
  public get invoiceAmount() {
    return this.getNumberAttribute('invoice_amount');
  }

  // invoice_amount_adjusted - computed: true, optional: false, required: false
  public get invoiceAmountAdjusted() {
    return this.getNumberAttribute('invoice_amount_adjusted');
  }

  // invoice_amount_applied - computed: true, optional: false, required: false
  public get invoiceAmountApplied() {
    return this.getNumberAttribute('invoice_amount_applied');
  }

  // invoice_amount_credited - computed: true, optional: false, required: false
  public get invoiceAmountCredited() {
    return this.getNumberAttribute('invoice_amount_credited');
  }

  // invoice_amount_due - computed: true, optional: false, required: false
  public get invoiceAmountDue() {
    return this.getNumberAttribute('invoice_amount_due');
  }

  // invoice_amount_in_dispute - computed: true, optional: false, required: false
  public get invoiceAmountInDispute() {
    return this.getNumberAttribute('invoice_amount_in_dispute');
  }

  // invoice_id - computed: true, optional: false, required: false
  public get invoiceId() {
    return this.getStringAttribute('invoice_id');
  }

  // invoice_number - computed: true, optional: false, required: false
  public get invoiceNumber() {
    return this.getStringAttribute('invoice_number');
  }

  // invoice_po_number - computed: true, optional: false, required: false
  public get invoicePoNumber() {
    return this.getStringAttribute('invoice_po_number');
  }

  // invoice_ref_number - computed: true, optional: false, required: false
  public get invoiceRefNumber() {
    return this.getStringAttribute('invoice_ref_number');
  }

  // invoice_status - computed: true, optional: false, required: false
  public get invoiceStatus() {
    return this.getStringAttribute('invoice_status');
  }

  // invoice_type - computed: true, optional: false, required: false
  public get invoiceType() {
    return this.getStringAttribute('invoice_type');
  }

  // is_credit_card_payable - computed: true, optional: false, required: false
  public get isCreditCardPayable() {
    return this.getBooleanAttribute('is_credit_card_payable');
  }

  // is_display_download_pdf - computed: true, optional: false, required: false
  public get isDisplayDownloadPdf() {
    return this.getBooleanAttribute('is_display_download_pdf');
  }

  // is_display_view_pdf - computed: true, optional: false, required: false
  public get isDisplayViewPdf() {
    return this.getBooleanAttribute('is_display_view_pdf');
  }

  // is_paid - computed: true, optional: false, required: false
  public get isPaid() {
    return this.getBooleanAttribute('is_paid');
  }

  // is_payable - computed: true, optional: false, required: false
  public get isPayable() {
    return this.getBooleanAttribute('is_payable');
  }

  // is_payment_failed - computed: true, optional: false, required: false
  public get isPaymentFailed() {
    return this.getBooleanAttribute('is_payment_failed');
  }

  // is_pdf_email_available - computed: true, optional: false, required: false
  public get isPdfEmailAvailable() {
    return this.getBooleanAttribute('is_pdf_email_available');
  }

  // last_payment_detail - computed: true, optional: false, required: false
  private _lastPaymentDetail = new DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList(this, "last_payment_detail", false);
  public get lastPaymentDetail() {
    return this._lastPaymentDetail;
  }

  // party_name - computed: true, optional: false, required: false
  public get partyName() {
    return this.getStringAttribute('party_name');
  }

  // payment_terms - computed: true, optional: false, required: false
  public get paymentTerms() {
    return this.getStringAttribute('payment_terms');
  }

  // preferred_email - computed: true, optional: false, required: false
  public get preferredEmail() {
    return this.getStringAttribute('preferred_email');
  }

  // subscription_ids - computed: true, optional: false, required: false
  public get subscriptionIds() {
    return this.getListAttribute('subscription_ids');
  }

  // tax - computed: true, optional: false, required: false
  public get tax() {
    return this.getNumberAttribute('tax');
  }

  // time_invoice - computed: true, optional: false, required: false
  public get timeInvoice() {
    return this.getStringAttribute('time_invoice');
  }

  // time_invoice_due - computed: true, optional: false, required: false
  public get timeInvoiceDue() {
    return this.getStringAttribute('time_invoice_due');
  }
}

export class DataOciOspGatewayInvoicesInvoiceCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference {
    return new DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOspGatewayInvoicesInvoiceCollection {
}

export function dataOciOspGatewayInvoicesInvoiceCollectionToTerraform(struct?: DataOciOspGatewayInvoicesInvoiceCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOspGatewayInvoicesInvoiceCollectionToHclTerraform(struct?: DataOciOspGatewayInvoicesInvoiceCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOspGatewayInvoicesInvoiceCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOspGatewayInvoicesInvoiceCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOspGatewayInvoicesInvoiceCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciOspGatewayInvoicesInvoiceCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciOspGatewayInvoicesInvoiceCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOspGatewayInvoicesInvoiceCollectionOutputReference {
    return new DataOciOspGatewayInvoicesInvoiceCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOspGatewayInvoicesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/osp_gateway_invoices#name DataOciOspGatewayInvoices#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/osp_gateway_invoices#regex DataOciOspGatewayInvoices#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/osp_gateway_invoices#values DataOciOspGatewayInvoices#values}
  */
  readonly values: string[];
}

export function dataOciOspGatewayInvoicesFilterToTerraform(struct?: DataOciOspGatewayInvoicesFilter | cdktf.IResolvable): any {
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


export function dataOciOspGatewayInvoicesFilterToHclTerraform(struct?: DataOciOspGatewayInvoicesFilter | cdktf.IResolvable): any {
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

export class DataOciOspGatewayInvoicesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOspGatewayInvoicesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciOspGatewayInvoicesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciOspGatewayInvoicesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciOspGatewayInvoicesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciOspGatewayInvoicesFilterOutputReference {
    return new DataOciOspGatewayInvoicesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/osp_gateway_invoices oci_osp_gateway_invoices}
*/
export class DataOciOspGatewayInvoices extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_osp_gateway_invoices";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOspGatewayInvoices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOspGatewayInvoices to import
  * @param importFromId The id of the existing DataOciOspGatewayInvoices that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/osp_gateway_invoices#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOspGatewayInvoices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_osp_gateway_invoices", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/osp_gateway_invoices oci_osp_gateway_invoices} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOspGatewayInvoicesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOspGatewayInvoicesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_osp_gateway_invoices',
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
    this._id = config.id;
    this._invoiceId = config.invoiceId;
    this._ospHomeRegion = config.ospHomeRegion;
    this._searchText = config.searchText;
    this._status = config.status;
    this._timeInvoiceEnd = config.timeInvoiceEnd;
    this._timeInvoiceStart = config.timeInvoiceStart;
    this._timePaymentEnd = config.timePaymentEnd;
    this._timePaymentStart = config.timePaymentStart;
    this._type = config.type;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // invoice_collection - computed: true, optional: false, required: false
  private _invoiceCollection = new DataOciOspGatewayInvoicesInvoiceCollectionList(this, "invoice_collection", false);
  public get invoiceCollection() {
    return this._invoiceCollection;
  }

  // invoice_id - computed: false, optional: true, required: false
  private _invoiceId?: string; 
  public get invoiceId() {
    return this.getStringAttribute('invoice_id');
  }
  public set invoiceId(value: string) {
    this._invoiceId = value;
  }
  public resetInvoiceId() {
    this._invoiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invoiceIdInput() {
    return this._invoiceId;
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

  // search_text - computed: false, optional: true, required: false
  private _searchText?: string; 
  public get searchText() {
    return this.getStringAttribute('search_text');
  }
  public set searchText(value: string) {
    this._searchText = value;
  }
  public resetSearchText() {
    this._searchText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchTextInput() {
    return this._searchText;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string[]; 
  public get status() {
    return this.getListAttribute('status');
  }
  public set status(value: string[]) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // time_invoice_end - computed: false, optional: true, required: false
  private _timeInvoiceEnd?: string; 
  public get timeInvoiceEnd() {
    return this.getStringAttribute('time_invoice_end');
  }
  public set timeInvoiceEnd(value: string) {
    this._timeInvoiceEnd = value;
  }
  public resetTimeInvoiceEnd() {
    this._timeInvoiceEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInvoiceEndInput() {
    return this._timeInvoiceEnd;
  }

  // time_invoice_start - computed: false, optional: true, required: false
  private _timeInvoiceStart?: string; 
  public get timeInvoiceStart() {
    return this.getStringAttribute('time_invoice_start');
  }
  public set timeInvoiceStart(value: string) {
    this._timeInvoiceStart = value;
  }
  public resetTimeInvoiceStart() {
    this._timeInvoiceStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInvoiceStartInput() {
    return this._timeInvoiceStart;
  }

  // time_payment_end - computed: false, optional: true, required: false
  private _timePaymentEnd?: string; 
  public get timePaymentEnd() {
    return this.getStringAttribute('time_payment_end');
  }
  public set timePaymentEnd(value: string) {
    this._timePaymentEnd = value;
  }
  public resetTimePaymentEnd() {
    this._timePaymentEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timePaymentEndInput() {
    return this._timePaymentEnd;
  }

  // time_payment_start - computed: false, optional: true, required: false
  private _timePaymentStart?: string; 
  public get timePaymentStart() {
    return this.getStringAttribute('time_payment_start');
  }
  public set timePaymentStart(value: string) {
    this._timePaymentStart = value;
  }
  public resetTimePaymentStart() {
    this._timePaymentStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timePaymentStartInput() {
    return this._timePaymentStart;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string[]; 
  public get type() {
    return this.getListAttribute('type');
  }
  public set type(value: string[]) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciOspGatewayInvoicesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciOspGatewayInvoicesFilter[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      invoice_id: cdktf.stringToTerraform(this._invoiceId),
      osp_home_region: cdktf.stringToTerraform(this._ospHomeRegion),
      search_text: cdktf.stringToTerraform(this._searchText),
      status: cdktf.listMapper(cdktf.stringToTerraform, false)(this._status),
      time_invoice_end: cdktf.stringToTerraform(this._timeInvoiceEnd),
      time_invoice_start: cdktf.stringToTerraform(this._timeInvoiceStart),
      time_payment_end: cdktf.stringToTerraform(this._timePaymentEnd),
      time_payment_start: cdktf.stringToTerraform(this._timePaymentStart),
      type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._type),
      filter: cdktf.listMapper(dataOciOspGatewayInvoicesFilterToTerraform, true)(this._filter.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      invoice_id: {
        value: cdktf.stringToHclTerraform(this._invoiceId),
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
      search_text: {
        value: cdktf.stringToHclTerraform(this._searchText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._status),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      time_invoice_end: {
        value: cdktf.stringToHclTerraform(this._timeInvoiceEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_invoice_start: {
        value: cdktf.stringToHclTerraform(this._timeInvoiceStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_payment_end: {
        value: cdktf.stringToHclTerraform(this._timePaymentEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_payment_start: {
        value: cdktf.stringToHclTerraform(this._timePaymentStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._type),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciOspGatewayInvoicesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciOspGatewayInvoicesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
