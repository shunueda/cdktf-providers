// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osp_gateway_invoice
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOspGatewayInvoiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osp_gateway_invoice#compartment_id DataOciOspGatewayInvoice#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osp_gateway_invoice#id DataOciOspGatewayInvoice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osp_gateway_invoice#internal_invoice_id DataOciOspGatewayInvoice#internal_invoice_id}
  */
  readonly internalInvoiceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osp_gateway_invoice#osp_home_region DataOciOspGatewayInvoice#osp_home_region}
  */
  readonly ospHomeRegion: string;
}
export interface DataOciOspGatewayInvoiceBillToAddressCountry {
}

export function dataOciOspGatewayInvoiceBillToAddressCountryToTerraform(struct?: DataOciOspGatewayInvoiceBillToAddressCountry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOspGatewayInvoiceBillToAddressCountryToHclTerraform(struct?: DataOciOspGatewayInvoiceBillToAddressCountry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOspGatewayInvoiceBillToAddressCountryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOspGatewayInvoiceBillToAddressCountry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOspGatewayInvoiceBillToAddressCountry | undefined) {
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

export class DataOciOspGatewayInvoiceBillToAddressCountryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOspGatewayInvoiceBillToAddressCountryOutputReference {
    return new DataOciOspGatewayInvoiceBillToAddressCountryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOspGatewayInvoiceBillToAddress {
}

export function dataOciOspGatewayInvoiceBillToAddressToTerraform(struct?: DataOciOspGatewayInvoiceBillToAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOspGatewayInvoiceBillToAddressToHclTerraform(struct?: DataOciOspGatewayInvoiceBillToAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOspGatewayInvoiceBillToAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOspGatewayInvoiceBillToAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOspGatewayInvoiceBillToAddress | undefined) {
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
  private _country = new DataOciOspGatewayInvoiceBillToAddressCountryList(this, "country", false);
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

export class DataOciOspGatewayInvoiceBillToAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOspGatewayInvoiceBillToAddressOutputReference {
    return new DataOciOspGatewayInvoiceBillToAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOspGatewayInvoiceCurrency {
}

export function dataOciOspGatewayInvoiceCurrencyToTerraform(struct?: DataOciOspGatewayInvoiceCurrency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOspGatewayInvoiceCurrencyToHclTerraform(struct?: DataOciOspGatewayInvoiceCurrency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOspGatewayInvoiceCurrencyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOspGatewayInvoiceCurrency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOspGatewayInvoiceCurrency | undefined) {
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

export class DataOciOspGatewayInvoiceCurrencyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOspGatewayInvoiceCurrencyOutputReference {
    return new DataOciOspGatewayInvoiceCurrencyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOspGatewayInvoiceLastPaymentDetail {
}

export function dataOciOspGatewayInvoiceLastPaymentDetailToTerraform(struct?: DataOciOspGatewayInvoiceLastPaymentDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOspGatewayInvoiceLastPaymentDetailToHclTerraform(struct?: DataOciOspGatewayInvoiceLastPaymentDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOspGatewayInvoiceLastPaymentDetailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOspGatewayInvoiceLastPaymentDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOspGatewayInvoiceLastPaymentDetail | undefined) {
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

export class DataOciOspGatewayInvoiceLastPaymentDetailList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOspGatewayInvoiceLastPaymentDetailOutputReference {
    return new DataOciOspGatewayInvoiceLastPaymentDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osp_gateway_invoice oci_osp_gateway_invoice}
*/
export class DataOciOspGatewayInvoice extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_osp_gateway_invoice";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOspGatewayInvoice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOspGatewayInvoice to import
  * @param importFromId The id of the existing DataOciOspGatewayInvoice that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osp_gateway_invoice#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOspGatewayInvoice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_osp_gateway_invoice", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/osp_gateway_invoice oci_osp_gateway_invoice} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOspGatewayInvoiceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOspGatewayInvoiceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_osp_gateway_invoice',
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
    this._id = config.id;
    this._internalInvoiceId = config.internalInvoiceId;
    this._ospHomeRegion = config.ospHomeRegion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bill_to_address - computed: true, optional: false, required: false
  private _billToAddress = new DataOciOspGatewayInvoiceBillToAddressList(this, "bill_to_address", false);
  public get billToAddress() {
    return this._billToAddress;
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

  // currency - computed: true, optional: false, required: false
  private _currency = new DataOciOspGatewayInvoiceCurrencyList(this, "currency", false);
  public get currency() {
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

  // internal_invoice_id - computed: false, optional: false, required: true
  private _internalInvoiceId?: string; 
  public get internalInvoiceId() {
    return this.getStringAttribute('internal_invoice_id');
  }
  public set internalInvoiceId(value: string) {
    this._internalInvoiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internalInvoiceIdInput() {
    return this._internalInvoiceId;
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

  // is_payable - computed: true, optional: false, required: false
  public get isPayable() {
    return this.getBooleanAttribute('is_payable');
  }

  // is_pdf_email_available - computed: true, optional: false, required: false
  public get isPdfEmailAvailable() {
    return this.getBooleanAttribute('is_pdf_email_available');
  }

  // last_payment_detail - computed: true, optional: false, required: false
  private _lastPaymentDetail = new DataOciOspGatewayInvoiceLastPaymentDetailList(this, "last_payment_detail", false);
  public get lastPaymentDetail() {
    return this._lastPaymentDetail;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
      internal_invoice_id: cdktf.stringToTerraform(this._internalInvoiceId),
      osp_home_region: cdktf.stringToTerraform(this._ospHomeRegion),
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
      internal_invoice_id: {
        value: cdktf.stringToHclTerraform(this._internalInvoiceId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
