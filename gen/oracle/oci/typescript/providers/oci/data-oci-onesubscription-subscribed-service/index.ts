// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/onesubscription_subscribed_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOnesubscriptionSubscribedServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/onesubscription_subscribed_service#fields DataOciOnesubscriptionSubscribedService#fields}
  */
  readonly fields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/onesubscription_subscribed_service#id DataOciOnesubscriptionSubscribedService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/onesubscription_subscribed_service#subscribed_service_id DataOciOnesubscriptionSubscribedService#subscribed_service_id}
  */
  readonly subscribedServiceId: string;
}
export interface DataOciOnesubscriptionSubscribedServiceBillToAddressLocation {
}

export function dataOciOnesubscriptionSubscribedServiceBillToAddressLocationToTerraform(struct?: DataOciOnesubscriptionSubscribedServiceBillToAddressLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServiceBillToAddressLocationToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServiceBillToAddressLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServiceBillToAddressLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServiceBillToAddressLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address1 - computed: true, optional: false, required: false
  public get address1() {
    return this.getStringAttribute('address1');
  }

  // address2 - computed: true, optional: false, required: false
  public get address2() {
    return this.getStringAttribute('address2');
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // postal_code - computed: true, optional: false, required: false
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // tca_location_id - computed: true, optional: false, required: false
  public get tcaLocationId() {
    return this.getStringAttribute('tca_location_id');
  }
}

export class DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference {
    return new DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServiceBillToAddress {
}

export function dataOciOnesubscriptionSubscribedServiceBillToAddressToTerraform(struct?: DataOciOnesubscriptionSubscribedServiceBillToAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServiceBillToAddressToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServiceBillToAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServiceBillToAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServiceBillToAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bill_site_use_id - computed: true, optional: false, required: false
  public get billSiteUseId() {
    return this.getStringAttribute('bill_site_use_id');
  }

  // is_bill_to - computed: true, optional: false, required: false
  public get isBillTo() {
    return this.getBooleanAttribute('is_bill_to');
  }

  // is_ship_to - computed: true, optional: false, required: false
  public get isShipTo() {
    return this.getBooleanAttribute('is_ship_to');
  }

  // location - computed: true, optional: false, required: false
  private _location = new DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList(this, "location", false);
  public get location() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // phone - computed: true, optional: false, required: false
  public get phone() {
    return this.getStringAttribute('phone');
  }

  // service2site_use_id - computed: true, optional: false, required: false
  public get service2SiteUseId() {
    return this.getStringAttribute('service2site_use_id');
  }

  // tca_cust_acct_site_id - computed: true, optional: false, required: false
  public get tcaCustAcctSiteId() {
    return this.getStringAttribute('tca_cust_acct_site_id');
  }

  // tca_party_site_number - computed: true, optional: false, required: false
  public get tcaPartySiteNumber() {
    return this.getStringAttribute('tca_party_site_number');
  }
}

export class DataOciOnesubscriptionSubscribedServiceBillToAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference {
    return new DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServiceBillToContact {
}

export function dataOciOnesubscriptionSubscribedServiceBillToContactToTerraform(struct?: DataOciOnesubscriptionSubscribedServiceBillToContact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServiceBillToContactToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServiceBillToContact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServiceBillToContact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServiceBillToContact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tca_contact_id - computed: true, optional: false, required: false
  public get tcaContactId() {
    return this.getStringAttribute('tca_contact_id');
  }

  // tca_cust_accnt_site_id - computed: true, optional: false, required: false
  public get tcaCustAccntSiteId() {
    return this.getStringAttribute('tca_cust_accnt_site_id');
  }

  // tca_party_id - computed: true, optional: false, required: false
  public get tcaPartyId() {
    return this.getStringAttribute('tca_party_id');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataOciOnesubscriptionSubscribedServiceBillToContactList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference {
    return new DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServiceBillToCustomer {
}

export function dataOciOnesubscriptionSubscribedServiceBillToCustomerToTerraform(struct?: DataOciOnesubscriptionSubscribedServiceBillToCustomer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServiceBillToCustomerToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServiceBillToCustomer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServiceBillToCustomer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServiceBillToCustomer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // customer_chain_type - computed: true, optional: false, required: false
  public get customerChainType() {
    return this.getStringAttribute('customer_chain_type');
  }

  // is_chain_customer - computed: true, optional: false, required: false
  public get isChainCustomer() {
    return this.getBooleanAttribute('is_chain_customer');
  }

  // is_public_sector - computed: true, optional: false, required: false
  public get isPublicSector() {
    return this.getBooleanAttribute('is_public_sector');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_phonetic - computed: true, optional: false, required: false
  public get namePhonetic() {
    return this.getStringAttribute('name_phonetic');
  }

  // tca_cust_account_number - computed: true, optional: false, required: false
  public get tcaCustAccountNumber() {
    return this.getStringAttribute('tca_cust_account_number');
  }

  // tca_customer_account_id - computed: true, optional: false, required: false
  public get tcaCustomerAccountId() {
    return this.getStringAttribute('tca_customer_account_id');
  }

  // tca_party_id - computed: true, optional: false, required: false
  public get tcaPartyId() {
    return this.getStringAttribute('tca_party_id');
  }

  // tca_party_number - computed: true, optional: false, required: false
  public get tcaPartyNumber() {
    return this.getStringAttribute('tca_party_number');
  }
}

export class DataOciOnesubscriptionSubscribedServiceBillToCustomerList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference {
    return new DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServiceCommitmentServices {
}

export function dataOciOnesubscriptionSubscribedServiceCommitmentServicesToTerraform(struct?: DataOciOnesubscriptionSubscribedServiceCommitmentServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServiceCommitmentServicesToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServiceCommitmentServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServiceCommitmentServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServiceCommitmentServices | undefined) {
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

export class DataOciOnesubscriptionSubscribedServiceCommitmentServicesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference {
    return new DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServiceEndUserAddressLocation {
}

export function dataOciOnesubscriptionSubscribedServiceEndUserAddressLocationToTerraform(struct?: DataOciOnesubscriptionSubscribedServiceEndUserAddressLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServiceEndUserAddressLocationToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServiceEndUserAddressLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServiceEndUserAddressLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServiceEndUserAddressLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address1 - computed: true, optional: false, required: false
  public get address1() {
    return this.getStringAttribute('address1');
  }

  // address2 - computed: true, optional: false, required: false
  public get address2() {
    return this.getStringAttribute('address2');
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // postal_code - computed: true, optional: false, required: false
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // tca_location_id - computed: true, optional: false, required: false
  public get tcaLocationId() {
    return this.getStringAttribute('tca_location_id');
  }
}

export class DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference {
    return new DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServiceEndUserAddress {
}

export function dataOciOnesubscriptionSubscribedServiceEndUserAddressToTerraform(struct?: DataOciOnesubscriptionSubscribedServiceEndUserAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServiceEndUserAddressToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServiceEndUserAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServiceEndUserAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServiceEndUserAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bill_site_use_id - computed: true, optional: false, required: false
  public get billSiteUseId() {
    return this.getStringAttribute('bill_site_use_id');
  }

  // is_bill_to - computed: true, optional: false, required: false
  public get isBillTo() {
    return this.getBooleanAttribute('is_bill_to');
  }

  // is_ship_to - computed: true, optional: false, required: false
  public get isShipTo() {
    return this.getBooleanAttribute('is_ship_to');
  }

  // location - computed: true, optional: false, required: false
  private _location = new DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList(this, "location", false);
  public get location() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // phone - computed: true, optional: false, required: false
  public get phone() {
    return this.getStringAttribute('phone');
  }

  // service2site_use_id - computed: true, optional: false, required: false
  public get service2SiteUseId() {
    return this.getStringAttribute('service2site_use_id');
  }

  // tca_cust_acct_site_id - computed: true, optional: false, required: false
  public get tcaCustAcctSiteId() {
    return this.getStringAttribute('tca_cust_acct_site_id');
  }

  // tca_party_site_number - computed: true, optional: false, required: false
  public get tcaPartySiteNumber() {
    return this.getStringAttribute('tca_party_site_number');
  }
}

export class DataOciOnesubscriptionSubscribedServiceEndUserAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference {
    return new DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServiceEndUserContact {
}

export function dataOciOnesubscriptionSubscribedServiceEndUserContactToTerraform(struct?: DataOciOnesubscriptionSubscribedServiceEndUserContact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServiceEndUserContactToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServiceEndUserContact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServiceEndUserContact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServiceEndUserContact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tca_contact_id - computed: true, optional: false, required: false
  public get tcaContactId() {
    return this.getStringAttribute('tca_contact_id');
  }

  // tca_cust_accnt_site_id - computed: true, optional: false, required: false
  public get tcaCustAccntSiteId() {
    return this.getStringAttribute('tca_cust_accnt_site_id');
  }

  // tca_party_id - computed: true, optional: false, required: false
  public get tcaPartyId() {
    return this.getStringAttribute('tca_party_id');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataOciOnesubscriptionSubscribedServiceEndUserContactList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference {
    return new DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServiceEndUserCustomer {
}

export function dataOciOnesubscriptionSubscribedServiceEndUserCustomerToTerraform(struct?: DataOciOnesubscriptionSubscribedServiceEndUserCustomer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServiceEndUserCustomerToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServiceEndUserCustomer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServiceEndUserCustomer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServiceEndUserCustomer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // customer_chain_type - computed: true, optional: false, required: false
  public get customerChainType() {
    return this.getStringAttribute('customer_chain_type');
  }

  // is_chain_customer - computed: true, optional: false, required: false
  public get isChainCustomer() {
    return this.getBooleanAttribute('is_chain_customer');
  }

  // is_public_sector - computed: true, optional: false, required: false
  public get isPublicSector() {
    return this.getBooleanAttribute('is_public_sector');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_phonetic - computed: true, optional: false, required: false
  public get namePhonetic() {
    return this.getStringAttribute('name_phonetic');
  }

  // tca_cust_account_number - computed: true, optional: false, required: false
  public get tcaCustAccountNumber() {
    return this.getStringAttribute('tca_cust_account_number');
  }

  // tca_customer_account_id - computed: true, optional: false, required: false
  public get tcaCustomerAccountId() {
    return this.getStringAttribute('tca_customer_account_id');
  }

  // tca_party_id - computed: true, optional: false, required: false
  public get tcaPartyId() {
    return this.getStringAttribute('tca_party_id');
  }

  // tca_party_number - computed: true, optional: false, required: false
  public get tcaPartyNumber() {
    return this.getStringAttribute('tca_party_number');
  }
}

export class DataOciOnesubscriptionSubscribedServiceEndUserCustomerList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference {
    return new DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServicePaymentTerm {
}

export function dataOciOnesubscriptionSubscribedServicePaymentTermToTerraform(struct?: DataOciOnesubscriptionSubscribedServicePaymentTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServicePaymentTermToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServicePaymentTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServicePaymentTerm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServicePaymentTerm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciOnesubscriptionSubscribedServicePaymentTermList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference {
    return new DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServiceProduct {
}

export function dataOciOnesubscriptionSubscribedServiceProductToTerraform(struct?: DataOciOnesubscriptionSubscribedServiceProduct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServiceProductToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServiceProduct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServiceProductOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServiceProduct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServiceProduct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // billing_category - computed: true, optional: false, required: false
  public get billingCategory() {
    return this.getStringAttribute('billing_category');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // part_number - computed: true, optional: false, required: false
  public get partNumber() {
    return this.getStringAttribute('part_number');
  }

  // product_category - computed: true, optional: false, required: false
  public get productCategory() {
    return this.getStringAttribute('product_category');
  }

  // ucm_rate_card_part_type - computed: true, optional: false, required: false
  public get ucmRateCardPartType() {
    return this.getStringAttribute('ucm_rate_card_part_type');
  }

  // unit_of_measure - computed: true, optional: false, required: false
  public get unitOfMeasure() {
    return this.getStringAttribute('unit_of_measure');
  }
}

export class DataOciOnesubscriptionSubscribedServiceProductList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServiceProductOutputReference {
    return new DataOciOnesubscriptionSubscribedServiceProductOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServiceRateCardsCurrency {
}

export function dataOciOnesubscriptionSubscribedServiceRateCardsCurrencyToTerraform(struct?: DataOciOnesubscriptionSubscribedServiceRateCardsCurrency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServiceRateCardsCurrencyToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServiceRateCardsCurrency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServiceRateCardsCurrency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServiceRateCardsCurrency | undefined) {
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

export class DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference {
    return new DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServiceRateCardsProduct {
}

export function dataOciOnesubscriptionSubscribedServiceRateCardsProductToTerraform(struct?: DataOciOnesubscriptionSubscribedServiceRateCardsProduct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServiceRateCardsProductToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServiceRateCardsProduct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServiceRateCardsProduct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServiceRateCardsProduct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // billing_category - computed: true, optional: false, required: false
  public get billingCategory() {
    return this.getStringAttribute('billing_category');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // part_number - computed: true, optional: false, required: false
  public get partNumber() {
    return this.getStringAttribute('part_number');
  }

  // product_category - computed: true, optional: false, required: false
  public get productCategory() {
    return this.getStringAttribute('product_category');
  }

  // ucm_rate_card_part_type - computed: true, optional: false, required: false
  public get ucmRateCardPartType() {
    return this.getStringAttribute('ucm_rate_card_part_type');
  }

  // unit_of_measure - computed: true, optional: false, required: false
  public get unitOfMeasure() {
    return this.getStringAttribute('unit_of_measure');
  }
}

export class DataOciOnesubscriptionSubscribedServiceRateCardsProductList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference {
    return new DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiers {
}

export function dataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersToTerraform(struct?: DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // net_unit_price - computed: true, optional: false, required: false
  public get netUnitPrice() {
    return this.getStringAttribute('net_unit_price');
  }

  // overage_price - computed: true, optional: false, required: false
  public get overagePrice() {
    return this.getStringAttribute('overage_price');
  }

  // up_to_quantity - computed: true, optional: false, required: false
  public get upToQuantity() {
    return this.getStringAttribute('up_to_quantity');
  }
}

export class DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference {
    return new DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServiceRateCards {
}

export function dataOciOnesubscriptionSubscribedServiceRateCardsToTerraform(struct?: DataOciOnesubscriptionSubscribedServiceRateCards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServiceRateCardsToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServiceRateCards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServiceRateCards | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServiceRateCards | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency - computed: true, optional: false, required: false
  private _currency = new DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList(this, "currency", false);
  public get currency() {
    return this._currency;
  }

  // discretionary_discount_percentage - computed: true, optional: false, required: false
  public get discretionaryDiscountPercentage() {
    return this.getStringAttribute('discretionary_discount_percentage');
  }

  // is_tier - computed: true, optional: false, required: false
  public get isTier() {
    return this.getBooleanAttribute('is_tier');
  }

  // net_unit_price - computed: true, optional: false, required: false
  public get netUnitPrice() {
    return this.getStringAttribute('net_unit_price');
  }

  // overage_price - computed: true, optional: false, required: false
  public get overagePrice() {
    return this.getStringAttribute('overage_price');
  }

  // product - computed: true, optional: false, required: false
  private _product = new DataOciOnesubscriptionSubscribedServiceRateCardsProductList(this, "product", false);
  public get product() {
    return this._product;
  }

  // rate_card_tiers - computed: true, optional: false, required: false
  private _rateCardTiers = new DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList(this, "rate_card_tiers", false);
  public get rateCardTiers() {
    return this._rateCardTiers;
  }

  // subscribed_service_id - computed: true, optional: false, required: false
  public get subscribedServiceId() {
    return this.getStringAttribute('subscribed_service_id');
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

export class DataOciOnesubscriptionSubscribedServiceRateCardsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference {
    return new DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServiceResellerAddressLocation {
}

export function dataOciOnesubscriptionSubscribedServiceResellerAddressLocationToTerraform(struct?: DataOciOnesubscriptionSubscribedServiceResellerAddressLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServiceResellerAddressLocationToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServiceResellerAddressLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServiceResellerAddressLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServiceResellerAddressLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address1 - computed: true, optional: false, required: false
  public get address1() {
    return this.getStringAttribute('address1');
  }

  // address2 - computed: true, optional: false, required: false
  public get address2() {
    return this.getStringAttribute('address2');
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // postal_code - computed: true, optional: false, required: false
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // tca_location_id - computed: true, optional: false, required: false
  public get tcaLocationId() {
    return this.getStringAttribute('tca_location_id');
  }
}

export class DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference {
    return new DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServiceResellerAddress {
}

export function dataOciOnesubscriptionSubscribedServiceResellerAddressToTerraform(struct?: DataOciOnesubscriptionSubscribedServiceResellerAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServiceResellerAddressToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServiceResellerAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServiceResellerAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServiceResellerAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bill_site_use_id - computed: true, optional: false, required: false
  public get billSiteUseId() {
    return this.getStringAttribute('bill_site_use_id');
  }

  // is_bill_to - computed: true, optional: false, required: false
  public get isBillTo() {
    return this.getBooleanAttribute('is_bill_to');
  }

  // is_ship_to - computed: true, optional: false, required: false
  public get isShipTo() {
    return this.getBooleanAttribute('is_ship_to');
  }

  // location - computed: true, optional: false, required: false
  private _location = new DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList(this, "location", false);
  public get location() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // phone - computed: true, optional: false, required: false
  public get phone() {
    return this.getStringAttribute('phone');
  }

  // service2site_use_id - computed: true, optional: false, required: false
  public get service2SiteUseId() {
    return this.getStringAttribute('service2site_use_id');
  }

  // tca_cust_acct_site_id - computed: true, optional: false, required: false
  public get tcaCustAcctSiteId() {
    return this.getStringAttribute('tca_cust_acct_site_id');
  }

  // tca_party_site_number - computed: true, optional: false, required: false
  public get tcaPartySiteNumber() {
    return this.getStringAttribute('tca_party_site_number');
  }
}

export class DataOciOnesubscriptionSubscribedServiceResellerAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference {
    return new DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServiceResellerContact {
}

export function dataOciOnesubscriptionSubscribedServiceResellerContactToTerraform(struct?: DataOciOnesubscriptionSubscribedServiceResellerContact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServiceResellerContactToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServiceResellerContact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServiceResellerContact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServiceResellerContact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tca_contact_id - computed: true, optional: false, required: false
  public get tcaContactId() {
    return this.getStringAttribute('tca_contact_id');
  }

  // tca_cust_accnt_site_id - computed: true, optional: false, required: false
  public get tcaCustAccntSiteId() {
    return this.getStringAttribute('tca_cust_accnt_site_id');
  }

  // tca_party_id - computed: true, optional: false, required: false
  public get tcaPartyId() {
    return this.getStringAttribute('tca_party_id');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataOciOnesubscriptionSubscribedServiceResellerContactList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference {
    return new DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServiceResellerCustomer {
}

export function dataOciOnesubscriptionSubscribedServiceResellerCustomerToTerraform(struct?: DataOciOnesubscriptionSubscribedServiceResellerCustomer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServiceResellerCustomerToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServiceResellerCustomer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServiceResellerCustomer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServiceResellerCustomer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // customer_chain_type - computed: true, optional: false, required: false
  public get customerChainType() {
    return this.getStringAttribute('customer_chain_type');
  }

  // is_chain_customer - computed: true, optional: false, required: false
  public get isChainCustomer() {
    return this.getBooleanAttribute('is_chain_customer');
  }

  // is_public_sector - computed: true, optional: false, required: false
  public get isPublicSector() {
    return this.getBooleanAttribute('is_public_sector');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_phonetic - computed: true, optional: false, required: false
  public get namePhonetic() {
    return this.getStringAttribute('name_phonetic');
  }

  // tca_cust_account_number - computed: true, optional: false, required: false
  public get tcaCustAccountNumber() {
    return this.getStringAttribute('tca_cust_account_number');
  }

  // tca_customer_account_id - computed: true, optional: false, required: false
  public get tcaCustomerAccountId() {
    return this.getStringAttribute('tca_customer_account_id');
  }

  // tca_party_id - computed: true, optional: false, required: false
  public get tcaPartyId() {
    return this.getStringAttribute('tca_party_id');
  }

  // tca_party_number - computed: true, optional: false, required: false
  public get tcaPartyNumber() {
    return this.getStringAttribute('tca_party_number');
  }
}

export class DataOciOnesubscriptionSubscribedServiceResellerCustomerList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference {
    return new DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServiceServiceToAddressLocation {
}

export function dataOciOnesubscriptionSubscribedServiceServiceToAddressLocationToTerraform(struct?: DataOciOnesubscriptionSubscribedServiceServiceToAddressLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServiceServiceToAddressLocationToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServiceServiceToAddressLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServiceServiceToAddressLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServiceServiceToAddressLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address1 - computed: true, optional: false, required: false
  public get address1() {
    return this.getStringAttribute('address1');
  }

  // address2 - computed: true, optional: false, required: false
  public get address2() {
    return this.getStringAttribute('address2');
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // postal_code - computed: true, optional: false, required: false
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // tca_location_id - computed: true, optional: false, required: false
  public get tcaLocationId() {
    return this.getStringAttribute('tca_location_id');
  }
}

export class DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference {
    return new DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServiceServiceToAddress {
}

export function dataOciOnesubscriptionSubscribedServiceServiceToAddressToTerraform(struct?: DataOciOnesubscriptionSubscribedServiceServiceToAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServiceServiceToAddressToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServiceServiceToAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServiceServiceToAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServiceServiceToAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bill_site_use_id - computed: true, optional: false, required: false
  public get billSiteUseId() {
    return this.getStringAttribute('bill_site_use_id');
  }

  // is_bill_to - computed: true, optional: false, required: false
  public get isBillTo() {
    return this.getBooleanAttribute('is_bill_to');
  }

  // is_ship_to - computed: true, optional: false, required: false
  public get isShipTo() {
    return this.getBooleanAttribute('is_ship_to');
  }

  // location - computed: true, optional: false, required: false
  private _location = new DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList(this, "location", false);
  public get location() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // phone - computed: true, optional: false, required: false
  public get phone() {
    return this.getStringAttribute('phone');
  }

  // service2site_use_id - computed: true, optional: false, required: false
  public get service2SiteUseId() {
    return this.getStringAttribute('service2site_use_id');
  }

  // tca_cust_acct_site_id - computed: true, optional: false, required: false
  public get tcaCustAcctSiteId() {
    return this.getStringAttribute('tca_cust_acct_site_id');
  }

  // tca_party_site_number - computed: true, optional: false, required: false
  public get tcaPartySiteNumber() {
    return this.getStringAttribute('tca_party_site_number');
  }
}

export class DataOciOnesubscriptionSubscribedServiceServiceToAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference {
    return new DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServiceServiceToContact {
}

export function dataOciOnesubscriptionSubscribedServiceServiceToContactToTerraform(struct?: DataOciOnesubscriptionSubscribedServiceServiceToContact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServiceServiceToContactToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServiceServiceToContact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServiceServiceToContact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServiceServiceToContact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tca_contact_id - computed: true, optional: false, required: false
  public get tcaContactId() {
    return this.getStringAttribute('tca_contact_id');
  }

  // tca_cust_accnt_site_id - computed: true, optional: false, required: false
  public get tcaCustAccntSiteId() {
    return this.getStringAttribute('tca_cust_accnt_site_id');
  }

  // tca_party_id - computed: true, optional: false, required: false
  public get tcaPartyId() {
    return this.getStringAttribute('tca_party_id');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataOciOnesubscriptionSubscribedServiceServiceToContactList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference {
    return new DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServiceServiceToCustomer {
}

export function dataOciOnesubscriptionSubscribedServiceServiceToCustomerToTerraform(struct?: DataOciOnesubscriptionSubscribedServiceServiceToCustomer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServiceServiceToCustomerToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServiceServiceToCustomer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServiceServiceToCustomer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServiceServiceToCustomer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // customer_chain_type - computed: true, optional: false, required: false
  public get customerChainType() {
    return this.getStringAttribute('customer_chain_type');
  }

  // is_chain_customer - computed: true, optional: false, required: false
  public get isChainCustomer() {
    return this.getBooleanAttribute('is_chain_customer');
  }

  // is_public_sector - computed: true, optional: false, required: false
  public get isPublicSector() {
    return this.getBooleanAttribute('is_public_sector');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_phonetic - computed: true, optional: false, required: false
  public get namePhonetic() {
    return this.getStringAttribute('name_phonetic');
  }

  // tca_cust_account_number - computed: true, optional: false, required: false
  public get tcaCustAccountNumber() {
    return this.getStringAttribute('tca_cust_account_number');
  }

  // tca_customer_account_id - computed: true, optional: false, required: false
  public get tcaCustomerAccountId() {
    return this.getStringAttribute('tca_customer_account_id');
  }

  // tca_party_id - computed: true, optional: false, required: false
  public get tcaPartyId() {
    return this.getStringAttribute('tca_party_id');
  }

  // tca_party_number - computed: true, optional: false, required: false
  public get tcaPartyNumber() {
    return this.getStringAttribute('tca_party_number');
  }
}

export class DataOciOnesubscriptionSubscribedServiceServiceToCustomerList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference {
    return new DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServiceSoldToContact {
}

export function dataOciOnesubscriptionSubscribedServiceSoldToContactToTerraform(struct?: DataOciOnesubscriptionSubscribedServiceSoldToContact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServiceSoldToContactToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServiceSoldToContact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServiceSoldToContact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServiceSoldToContact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tca_contact_id - computed: true, optional: false, required: false
  public get tcaContactId() {
    return this.getStringAttribute('tca_contact_id');
  }

  // tca_cust_accnt_site_id - computed: true, optional: false, required: false
  public get tcaCustAccntSiteId() {
    return this.getStringAttribute('tca_cust_accnt_site_id');
  }

  // tca_party_id - computed: true, optional: false, required: false
  public get tcaPartyId() {
    return this.getStringAttribute('tca_party_id');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataOciOnesubscriptionSubscribedServiceSoldToContactList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference {
    return new DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServiceSoldToCustomer {
}

export function dataOciOnesubscriptionSubscribedServiceSoldToCustomerToTerraform(struct?: DataOciOnesubscriptionSubscribedServiceSoldToCustomer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServiceSoldToCustomerToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServiceSoldToCustomer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServiceSoldToCustomer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServiceSoldToCustomer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // customer_chain_type - computed: true, optional: false, required: false
  public get customerChainType() {
    return this.getStringAttribute('customer_chain_type');
  }

  // is_chain_customer - computed: true, optional: false, required: false
  public get isChainCustomer() {
    return this.getBooleanAttribute('is_chain_customer');
  }

  // is_public_sector - computed: true, optional: false, required: false
  public get isPublicSector() {
    return this.getBooleanAttribute('is_public_sector');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_phonetic - computed: true, optional: false, required: false
  public get namePhonetic() {
    return this.getStringAttribute('name_phonetic');
  }

  // tca_cust_account_number - computed: true, optional: false, required: false
  public get tcaCustAccountNumber() {
    return this.getStringAttribute('tca_cust_account_number');
  }

  // tca_customer_account_id - computed: true, optional: false, required: false
  public get tcaCustomerAccountId() {
    return this.getStringAttribute('tca_customer_account_id');
  }

  // tca_party_id - computed: true, optional: false, required: false
  public get tcaPartyId() {
    return this.getStringAttribute('tca_party_id');
  }

  // tca_party_number - computed: true, optional: false, required: false
  public get tcaPartyNumber() {
    return this.getStringAttribute('tca_party_number');
  }
}

export class DataOciOnesubscriptionSubscribedServiceSoldToCustomerList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference {
    return new DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/onesubscription_subscribed_service oci_onesubscription_subscribed_service}
*/
export class DataOciOnesubscriptionSubscribedService extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_onesubscription_subscribed_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOnesubscriptionSubscribedService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOnesubscriptionSubscribedService to import
  * @param importFromId The id of the existing DataOciOnesubscriptionSubscribedService that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/onesubscription_subscribed_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOnesubscriptionSubscribedService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_onesubscription_subscribed_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/onesubscription_subscribed_service oci_onesubscription_subscribed_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOnesubscriptionSubscribedServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOnesubscriptionSubscribedServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_onesubscription_subscribed_service',
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
    this._fields = config.fields;
    this._id = config.id;
    this._subscribedServiceId = config.subscribedServiceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_email - computed: true, optional: false, required: false
  public get adminEmail() {
    return this.getStringAttribute('admin_email');
  }

  // agreement_id - computed: true, optional: false, required: false
  public get agreementId() {
    return this.getStringAttribute('agreement_id');
  }

  // agreement_name - computed: true, optional: false, required: false
  public get agreementName() {
    return this.getStringAttribute('agreement_name');
  }

  // agreement_type - computed: true, optional: false, required: false
  public get agreementType() {
    return this.getStringAttribute('agreement_type');
  }

  // available_amount - computed: true, optional: false, required: false
  public get availableAmount() {
    return this.getStringAttribute('available_amount');
  }

  // bill_to_address - computed: true, optional: false, required: false
  private _billToAddress = new DataOciOnesubscriptionSubscribedServiceBillToAddressList(this, "bill_to_address", false);
  public get billToAddress() {
    return this._billToAddress;
  }

  // bill_to_contact - computed: true, optional: false, required: false
  private _billToContact = new DataOciOnesubscriptionSubscribedServiceBillToContactList(this, "bill_to_contact", false);
  public get billToContact() {
    return this._billToContact;
  }

  // bill_to_customer - computed: true, optional: false, required: false
  private _billToCustomer = new DataOciOnesubscriptionSubscribedServiceBillToCustomerList(this, "bill_to_customer", false);
  public get billToCustomer() {
    return this._billToCustomer;
  }

  // billing_frequency - computed: true, optional: false, required: false
  public get billingFrequency() {
    return this.getStringAttribute('billing_frequency');
  }

  // booking_opty_number - computed: true, optional: false, required: false
  public get bookingOptyNumber() {
    return this.getStringAttribute('booking_opty_number');
  }

  // buyer_email - computed: true, optional: false, required: false
  public get buyerEmail() {
    return this.getStringAttribute('buyer_email');
  }

  // commitment_schedule_id - computed: true, optional: false, required: false
  public get commitmentScheduleId() {
    return this.getStringAttribute('commitment_schedule_id');
  }

  // commitment_services - computed: true, optional: false, required: false
  private _commitmentServices = new DataOciOnesubscriptionSubscribedServiceCommitmentServicesList(this, "commitment_services", false);
  public get commitmentServices() {
    return this._commitmentServices;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // credit_percentage - computed: true, optional: false, required: false
  public get creditPercentage() {
    return this.getStringAttribute('credit_percentage');
  }

  // csi - computed: true, optional: false, required: false
  public get csi() {
    return this.getStringAttribute('csi');
  }

  // customer_transaction_reference - computed: true, optional: false, required: false
  public get customerTransactionReference() {
    return this.getStringAttribute('customer_transaction_reference');
  }

  // data_center - computed: true, optional: false, required: false
  public get dataCenter() {
    return this.getStringAttribute('data_center');
  }

  // data_center_region - computed: true, optional: false, required: false
  public get dataCenterRegion() {
    return this.getStringAttribute('data_center_region');
  }

  // eligible_to_renew - computed: true, optional: false, required: false
  public get eligibleToRenew() {
    return this.getStringAttribute('eligible_to_renew');
  }

  // end_user_address - computed: true, optional: false, required: false
  private _endUserAddress = new DataOciOnesubscriptionSubscribedServiceEndUserAddressList(this, "end_user_address", false);
  public get endUserAddress() {
    return this._endUserAddress;
  }

  // end_user_contact - computed: true, optional: false, required: false
  private _endUserContact = new DataOciOnesubscriptionSubscribedServiceEndUserContactList(this, "end_user_contact", false);
  public get endUserContact() {
    return this._endUserContact;
  }

  // end_user_customer - computed: true, optional: false, required: false
  private _endUserCustomer = new DataOciOnesubscriptionSubscribedServiceEndUserCustomerList(this, "end_user_customer", false);
  public get endUserCustomer() {
    return this._endUserCustomer;
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string[]; 
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // fulfillment_set - computed: true, optional: false, required: false
  public get fulfillmentSet() {
    return this.getStringAttribute('fulfillment_set');
  }

  // funded_allocation_value - computed: true, optional: false, required: false
  public get fundedAllocationValue() {
    return this.getStringAttribute('funded_allocation_value');
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

  // is_allowance - computed: true, optional: false, required: false
  public get isAllowance() {
    return this.getBooleanAttribute('is_allowance');
  }

  // is_cap_to_price_list - computed: true, optional: false, required: false
  public get isCapToPriceList() {
    return this.getBooleanAttribute('is_cap_to_price_list');
  }

  // is_credit_enabled - computed: true, optional: false, required: false
  public get isCreditEnabled() {
    return this.getBooleanAttribute('is_credit_enabled');
  }

  // is_having_usage - computed: true, optional: false, required: false
  public get isHavingUsage() {
    return this.getBooleanAttribute('is_having_usage');
  }

  // is_intent_to_pay - computed: true, optional: false, required: false
  public get isIntentToPay() {
    return this.getBooleanAttribute('is_intent_to_pay');
  }

  // is_payg - computed: true, optional: false, required: false
  public get isPayg() {
    return this.getBooleanAttribute('is_payg');
  }

  // is_single_rate_card - computed: true, optional: false, required: false
  public get isSingleRateCard() {
    return this.getBooleanAttribute('is_single_rate_card');
  }

  // is_variable_commitment - computed: true, optional: false, required: false
  public get isVariableCommitment() {
    return this.getBooleanAttribute('is_variable_commitment');
  }

  // line_net_amount - computed: true, optional: false, required: false
  public get lineNetAmount() {
    return this.getStringAttribute('line_net_amount');
  }

  // major_set - computed: true, optional: false, required: false
  public get majorSet() {
    return this.getStringAttribute('major_set');
  }

  // net_unit_price - computed: true, optional: false, required: false
  public get netUnitPrice() {
    return this.getStringAttribute('net_unit_price');
  }

  // operation_type - computed: true, optional: false, required: false
  public get operationType() {
    return this.getStringAttribute('operation_type');
  }

  // order_header_id - computed: true, optional: false, required: false
  public get orderHeaderId() {
    return this.getStringAttribute('order_header_id');
  }

  // order_line_id - computed: true, optional: false, required: false
  public get orderLineId() {
    return this.getStringAttribute('order_line_id');
  }

  // order_line_number - computed: true, optional: false, required: false
  public get orderLineNumber() {
    return this.getNumberAttribute('order_line_number');
  }

  // order_number - computed: true, optional: false, required: false
  public get orderNumber() {
    return this.getStringAttribute('order_number');
  }

  // order_type - computed: true, optional: false, required: false
  public get orderType() {
    return this.getStringAttribute('order_type');
  }

  // original_promo_amount - computed: true, optional: false, required: false
  public get originalPromoAmount() {
    return this.getStringAttribute('original_promo_amount');
  }

  // overage_bill_to - computed: true, optional: false, required: false
  public get overageBillTo() {
    return this.getStringAttribute('overage_bill_to');
  }

  // overage_discount_percentage - computed: true, optional: false, required: false
  public get overageDiscountPercentage() {
    return this.getStringAttribute('overage_discount_percentage');
  }

  // overage_policy - computed: true, optional: false, required: false
  public get overagePolicy() {
    return this.getStringAttribute('overage_policy');
  }

  // partner_credit_amount - computed: true, optional: false, required: false
  public get partnerCreditAmount() {
    return this.getStringAttribute('partner_credit_amount');
  }

  // partner_transaction_type - computed: true, optional: false, required: false
  public get partnerTransactionType() {
    return this.getStringAttribute('partner_transaction_type');
  }

  // payg_policy - computed: true, optional: false, required: false
  public get paygPolicy() {
    return this.getStringAttribute('payg_policy');
  }

  // payment_method - computed: true, optional: false, required: false
  public get paymentMethod() {
    return this.getStringAttribute('payment_method');
  }

  // payment_number - computed: true, optional: false, required: false
  public get paymentNumber() {
    return this.getStringAttribute('payment_number');
  }

  // payment_term - computed: true, optional: false, required: false
  private _paymentTerm = new DataOciOnesubscriptionSubscribedServicePaymentTermList(this, "payment_term", false);
  public get paymentTerm() {
    return this._paymentTerm;
  }

  // price_period - computed: true, optional: false, required: false
  public get pricePeriod() {
    return this.getStringAttribute('price_period');
  }

  // pricing_model - computed: true, optional: false, required: false
  public get pricingModel() {
    return this.getStringAttribute('pricing_model');
  }

  // product - computed: true, optional: false, required: false
  private _product = new DataOciOnesubscriptionSubscribedServiceProductList(this, "product", false);
  public get product() {
    return this._product;
  }

  // program_type - computed: true, optional: false, required: false
  public get programType() {
    return this.getStringAttribute('program_type');
  }

  // promo_order_line_id - computed: true, optional: false, required: false
  public get promoOrderLineId() {
    return this.getStringAttribute('promo_order_line_id');
  }

  // promo_type - computed: true, optional: false, required: false
  public get promoType() {
    return this.getStringAttribute('promo_type');
  }

  // promotion_pricing_type - computed: true, optional: false, required: false
  public get promotionPricingType() {
    return this.getStringAttribute('promotion_pricing_type');
  }

  // provisioning_source - computed: true, optional: false, required: false
  public get provisioningSource() {
    return this.getStringAttribute('provisioning_source');
  }

  // quantity - computed: true, optional: false, required: false
  public get quantity() {
    return this.getStringAttribute('quantity');
  }

  // rate_card_discount_percentage - computed: true, optional: false, required: false
  public get rateCardDiscountPercentage() {
    return this.getStringAttribute('rate_card_discount_percentage');
  }

  // rate_cards - computed: true, optional: false, required: false
  private _rateCards = new DataOciOnesubscriptionSubscribedServiceRateCardsList(this, "rate_cards", false);
  public get rateCards() {
    return this._rateCards;
  }

  // ratecard_type - computed: true, optional: false, required: false
  public get ratecardType() {
    return this.getStringAttribute('ratecard_type');
  }

  // renewal_opty_id - computed: true, optional: false, required: false
  public get renewalOptyId() {
    return this.getStringAttribute('renewal_opty_id');
  }

  // renewal_opty_number - computed: true, optional: false, required: false
  public get renewalOptyNumber() {
    return this.getStringAttribute('renewal_opty_number');
  }

  // renewal_opty_type - computed: true, optional: false, required: false
  public get renewalOptyType() {
    return this.getStringAttribute('renewal_opty_type');
  }

  // renewed_subscribed_service_id - computed: true, optional: false, required: false
  public get renewedSubscribedServiceId() {
    return this.getStringAttribute('renewed_subscribed_service_id');
  }

  // reseller_address - computed: true, optional: false, required: false
  private _resellerAddress = new DataOciOnesubscriptionSubscribedServiceResellerAddressList(this, "reseller_address", false);
  public get resellerAddress() {
    return this._resellerAddress;
  }

  // reseller_contact - computed: true, optional: false, required: false
  private _resellerContact = new DataOciOnesubscriptionSubscribedServiceResellerContactList(this, "reseller_contact", false);
  public get resellerContact() {
    return this._resellerContact;
  }

  // reseller_customer - computed: true, optional: false, required: false
  private _resellerCustomer = new DataOciOnesubscriptionSubscribedServiceResellerCustomerList(this, "reseller_customer", false);
  public get resellerCustomer() {
    return this._resellerCustomer;
  }

  // revenue_line_id - computed: true, optional: false, required: false
  public get revenueLineId() {
    return this.getStringAttribute('revenue_line_id');
  }

  // revenue_line_number - computed: true, optional: false, required: false
  public get revenueLineNumber() {
    return this.getStringAttribute('revenue_line_number');
  }

  // revised_arr_in_lc - computed: true, optional: false, required: false
  public get revisedArrInLc() {
    return this.getStringAttribute('revised_arr_in_lc');
  }

  // revised_arr_in_sc - computed: true, optional: false, required: false
  public get revisedArrInSc() {
    return this.getStringAttribute('revised_arr_in_sc');
  }

  // sales_account_party_id - computed: true, optional: false, required: false
  public get salesAccountPartyId() {
    return this.getStringAttribute('sales_account_party_id');
  }

  // sales_channel - computed: true, optional: false, required: false
  public get salesChannel() {
    return this.getStringAttribute('sales_channel');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // service_to_address - computed: true, optional: false, required: false
  private _serviceToAddress = new DataOciOnesubscriptionSubscribedServiceServiceToAddressList(this, "service_to_address", false);
  public get serviceToAddress() {
    return this._serviceToAddress;
  }

  // service_to_contact - computed: true, optional: false, required: false
  private _serviceToContact = new DataOciOnesubscriptionSubscribedServiceServiceToContactList(this, "service_to_contact", false);
  public get serviceToContact() {
    return this._serviceToContact;
  }

  // service_to_customer - computed: true, optional: false, required: false
  private _serviceToCustomer = new DataOciOnesubscriptionSubscribedServiceServiceToCustomerList(this, "service_to_customer", false);
  public get serviceToCustomer() {
    return this._serviceToCustomer;
  }

  // sold_to_contact - computed: true, optional: false, required: false
  private _soldToContact = new DataOciOnesubscriptionSubscribedServiceSoldToContactList(this, "sold_to_contact", false);
  public get soldToContact() {
    return this._soldToContact;
  }

  // sold_to_customer - computed: true, optional: false, required: false
  private _soldToCustomer = new DataOciOnesubscriptionSubscribedServiceSoldToCustomerList(this, "sold_to_customer", false);
  public get soldToCustomer() {
    return this._soldToCustomer;
  }

  // start_date_type - computed: true, optional: false, required: false
  public get startDateType() {
    return this.getStringAttribute('start_date_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subscribed_service_id - computed: false, optional: false, required: true
  private _subscribedServiceId?: string; 
  public get subscribedServiceId() {
    return this.getStringAttribute('subscribed_service_id');
  }
  public set subscribedServiceId(value: string) {
    this._subscribedServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribedServiceIdInput() {
    return this._subscribedServiceId;
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }

  // subscription_source - computed: true, optional: false, required: false
  public get subscriptionSource() {
    return this.getStringAttribute('subscription_source');
  }

  // system_arr_in_lc - computed: true, optional: false, required: false
  public get systemArrInLc() {
    return this.getStringAttribute('system_arr_in_lc');
  }

  // system_arr_in_sc - computed: true, optional: false, required: false
  public get systemArrInSc() {
    return this.getStringAttribute('system_arr_in_sc');
  }

  // system_atr_arr_in_lc - computed: true, optional: false, required: false
  public get systemAtrArrInLc() {
    return this.getStringAttribute('system_atr_arr_in_lc');
  }

  // system_atr_arr_in_sc - computed: true, optional: false, required: false
  public get systemAtrArrInSc() {
    return this.getStringAttribute('system_atr_arr_in_sc');
  }

  // term_value - computed: true, optional: false, required: false
  public get termValue() {
    return this.getStringAttribute('term_value');
  }

  // term_value_uom - computed: true, optional: false, required: false
  public get termValueUom() {
    return this.getStringAttribute('term_value_uom');
  }

  // time_agreement_end - computed: true, optional: false, required: false
  public get timeAgreementEnd() {
    return this.getStringAttribute('time_agreement_end');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_customer_config - computed: true, optional: false, required: false
  public get timeCustomerConfig() {
    return this.getStringAttribute('time_customer_config');
  }

  // time_end - computed: true, optional: false, required: false
  public get timeEnd() {
    return this.getStringAttribute('time_end');
  }

  // time_majorset_end - computed: true, optional: false, required: false
  public get timeMajorsetEnd() {
    return this.getStringAttribute('time_majorset_end');
  }

  // time_majorset_start - computed: true, optional: false, required: false
  public get timeMajorsetStart() {
    return this.getStringAttribute('time_majorset_start');
  }

  // time_payment_expiry - computed: true, optional: false, required: false
  public get timePaymentExpiry() {
    return this.getStringAttribute('time_payment_expiry');
  }

  // time_provisioned - computed: true, optional: false, required: false
  public get timeProvisioned() {
    return this.getStringAttribute('time_provisioned');
  }

  // time_service_configuration_email_sent - computed: true, optional: false, required: false
  public get timeServiceConfigurationEmailSent() {
    return this.getStringAttribute('time_service_configuration_email_sent');
  }

  // time_start - computed: true, optional: false, required: false
  public get timeStart() {
    return this.getStringAttribute('time_start');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // time_welcome_email_sent - computed: true, optional: false, required: false
  public get timeWelcomeEmailSent() {
    return this.getStringAttribute('time_welcome_email_sent');
  }

  // total_value - computed: true, optional: false, required: false
  public get totalValue() {
    return this.getStringAttribute('total_value');
  }

  // transaction_extension_id - computed: true, optional: false, required: false
  public get transactionExtensionId() {
    return this.getStringAttribute('transaction_extension_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // used_amount - computed: true, optional: false, required: false
  public get usedAmount() {
    return this.getStringAttribute('used_amount');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fields),
      id: cdktf.stringToTerraform(this._id),
      subscribed_service_id: cdktf.stringToTerraform(this._subscribedServiceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fields),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscribed_service_id: {
        value: cdktf.stringToHclTerraform(this._subscribedServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
