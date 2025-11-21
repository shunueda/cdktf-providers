// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/onesubscription_subscribed_services
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOnesubscriptionSubscribedServicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/onesubscription_subscribed_services#compartment_id DataOciOnesubscriptionSubscribedServices#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/onesubscription_subscribed_services#id DataOciOnesubscriptionSubscribedServices#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/onesubscription_subscribed_services#order_line_id DataOciOnesubscriptionSubscribedServices#order_line_id}
  */
  readonly orderLineId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/onesubscription_subscribed_services#status DataOciOnesubscriptionSubscribedServices#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/onesubscription_subscribed_services#subscription_id DataOciOnesubscriptionSubscribedServices#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/onesubscription_subscribed_services#filter DataOciOnesubscriptionSubscribedServices#filter}
  */
  readonly filter?: DataOciOnesubscriptionSubscribedServicesFilter[] | cdktf.IResolvable;
}
export interface DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation {
}

export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationToTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation | undefined) {
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

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference {
    return new DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress {
}

export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressToTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress | undefined) {
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
  private _location = new DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList(this, "location", false);
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

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference {
    return new DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact {
}

export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactToTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact | undefined) {
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

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference {
    return new DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer {
}

export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerToTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer | undefined) {
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

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference {
    return new DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices {
}

export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesToTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices | undefined) {
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

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference {
    return new DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation {
}

export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationToTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation | undefined) {
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

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference {
    return new DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress {
}

export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressToTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress | undefined) {
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
  private _location = new DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList(this, "location", false);
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

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference {
    return new DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact {
}

export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactToTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact | undefined) {
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

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference {
    return new DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer {
}

export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerToTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer | undefined) {
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

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference {
    return new DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm {
}

export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermToTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm | undefined) {
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

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference {
    return new DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct {
}

export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesProductToTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesProductToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct | undefined) {
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

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference {
    return new DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency {
}

export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyToTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency | undefined) {
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

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference {
    return new DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct {
}

export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductToTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct | undefined) {
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

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference {
    return new DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers {
}

export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersToTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers | undefined) {
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

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference {
    return new DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards {
}

export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsToTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency - computed: true, optional: false, required: false
  private _currency = new DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList(this, "currency", false);
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
  private _product = new DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList(this, "product", false);
  public get product() {
    return this._product;
  }

  // rate_card_tiers - computed: true, optional: false, required: false
  private _rateCardTiers = new DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList(this, "rate_card_tiers", false);
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

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference {
    return new DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation {
}

export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationToTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation | undefined) {
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

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference {
    return new DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress {
}

export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressToTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress | undefined) {
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
  private _location = new DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList(this, "location", false);
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

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference {
    return new DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact {
}

export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactToTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact | undefined) {
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

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference {
    return new DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer {
}

export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerToTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer | undefined) {
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

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference {
    return new DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation {
}

export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationToTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation | undefined) {
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

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference {
    return new DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress {
}

export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressToTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress | undefined) {
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
  private _location = new DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList(this, "location", false);
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

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference {
    return new DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact {
}

export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactToTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact | undefined) {
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

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference {
    return new DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer {
}

export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerToTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer | undefined) {
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

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference {
    return new DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact {
}

export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactToTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact | undefined) {
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

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference {
    return new DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer {
}

export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerToTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer | undefined) {
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

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference {
    return new DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServicesSubscribedServices {
}

export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesToTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionSubscribedServicesSubscribedServicesToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServicesSubscribedServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServicesSubscribedServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionSubscribedServicesSubscribedServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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
  private _billToAddress = new DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList(this, "bill_to_address", false);
  public get billToAddress() {
    return this._billToAddress;
  }

  // bill_to_contact - computed: true, optional: false, required: false
  private _billToContact = new DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList(this, "bill_to_contact", false);
  public get billToContact() {
    return this._billToContact;
  }

  // bill_to_customer - computed: true, optional: false, required: false
  private _billToCustomer = new DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList(this, "bill_to_customer", false);
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
  private _commitmentServices = new DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList(this, "commitment_services", false);
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
  private _endUserAddress = new DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList(this, "end_user_address", false);
  public get endUserAddress() {
    return this._endUserAddress;
  }

  // end_user_contact - computed: true, optional: false, required: false
  private _endUserContact = new DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList(this, "end_user_contact", false);
  public get endUserContact() {
    return this._endUserContact;
  }

  // end_user_customer - computed: true, optional: false, required: false
  private _endUserCustomer = new DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList(this, "end_user_customer", false);
  public get endUserCustomer() {
    return this._endUserCustomer;
  }

  // fulfillment_set - computed: true, optional: false, required: false
  public get fulfillmentSet() {
    return this.getStringAttribute('fulfillment_set');
  }

  // funded_allocation_value - computed: true, optional: false, required: false
  public get fundedAllocationValue() {
    return this.getStringAttribute('funded_allocation_value');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
  private _paymentTerm = new DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList(this, "payment_term", false);
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
  private _product = new DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList(this, "product", false);
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
  private _rateCards = new DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList(this, "rate_cards", false);
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
  private _resellerAddress = new DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList(this, "reseller_address", false);
  public get resellerAddress() {
    return this._resellerAddress;
  }

  // reseller_contact - computed: true, optional: false, required: false
  private _resellerContact = new DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList(this, "reseller_contact", false);
  public get resellerContact() {
    return this._resellerContact;
  }

  // reseller_customer - computed: true, optional: false, required: false
  private _resellerCustomer = new DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList(this, "reseller_customer", false);
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
  private _serviceToAddress = new DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList(this, "service_to_address", false);
  public get serviceToAddress() {
    return this._serviceToAddress;
  }

  // service_to_contact - computed: true, optional: false, required: false
  private _serviceToContact = new DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList(this, "service_to_contact", false);
  public get serviceToContact() {
    return this._serviceToContact;
  }

  // service_to_customer - computed: true, optional: false, required: false
  private _serviceToCustomer = new DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList(this, "service_to_customer", false);
  public get serviceToCustomer() {
    return this._serviceToCustomer;
  }

  // sold_to_contact - computed: true, optional: false, required: false
  private _soldToContact = new DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList(this, "sold_to_contact", false);
  public get soldToContact() {
    return this._soldToContact;
  }

  // sold_to_customer - computed: true, optional: false, required: false
  private _soldToCustomer = new DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList(this, "sold_to_customer", false);
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
}

export class DataOciOnesubscriptionSubscribedServicesSubscribedServicesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference {
    return new DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionSubscribedServicesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/onesubscription_subscribed_services#name DataOciOnesubscriptionSubscribedServices#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/onesubscription_subscribed_services#regex DataOciOnesubscriptionSubscribedServices#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/onesubscription_subscribed_services#values DataOciOnesubscriptionSubscribedServices#values}
  */
  readonly values: string[];
}

export function dataOciOnesubscriptionSubscribedServicesFilterToTerraform(struct?: DataOciOnesubscriptionSubscribedServicesFilter | cdktf.IResolvable): any {
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


export function dataOciOnesubscriptionSubscribedServicesFilterToHclTerraform(struct?: DataOciOnesubscriptionSubscribedServicesFilter | cdktf.IResolvable): any {
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

export class DataOciOnesubscriptionSubscribedServicesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionSubscribedServicesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciOnesubscriptionSubscribedServicesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciOnesubscriptionSubscribedServicesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciOnesubscriptionSubscribedServicesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciOnesubscriptionSubscribedServicesFilterOutputReference {
    return new DataOciOnesubscriptionSubscribedServicesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/onesubscription_subscribed_services oci_onesubscription_subscribed_services}
*/
export class DataOciOnesubscriptionSubscribedServices extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_onesubscription_subscribed_services";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOnesubscriptionSubscribedServices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOnesubscriptionSubscribedServices to import
  * @param importFromId The id of the existing DataOciOnesubscriptionSubscribedServices that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/onesubscription_subscribed_services#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOnesubscriptionSubscribedServices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_onesubscription_subscribed_services", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/onesubscription_subscribed_services oci_onesubscription_subscribed_services} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOnesubscriptionSubscribedServicesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOnesubscriptionSubscribedServicesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_onesubscription_subscribed_services',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
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
    this._orderLineId = config.orderLineId;
    this._status = config.status;
    this._subscriptionId = config.subscriptionId;
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

  // order_line_id - computed: false, optional: true, required: false
  private _orderLineId?: string; 
  public get orderLineId() {
    return this.getStringAttribute('order_line_id');
  }
  public set orderLineId(value: string) {
    this._orderLineId = value;
  }
  public resetOrderLineId() {
    this._orderLineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderLineIdInput() {
    return this._orderLineId;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // subscribed_services - computed: true, optional: false, required: false
  private _subscribedServices = new DataOciOnesubscriptionSubscribedServicesSubscribedServicesList(this, "subscribed_services", false);
  public get subscribedServices() {
    return this._subscribedServices;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciOnesubscriptionSubscribedServicesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciOnesubscriptionSubscribedServicesFilter[] | cdktf.IResolvable) {
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
      order_line_id: cdktf.stringToTerraform(this._orderLineId),
      status: cdktf.stringToTerraform(this._status),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      filter: cdktf.listMapper(dataOciOnesubscriptionSubscribedServicesFilterToTerraform, true)(this._filter.internalValue),
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
      order_line_id: {
        value: cdktf.stringToHclTerraform(this._orderLineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
        value: cdktf.listMapperHcl(dataOciOnesubscriptionSubscribedServicesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciOnesubscriptionSubscribedServicesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
