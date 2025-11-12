// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_users
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciIdentityDomainsUsersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_users#attribute_sets DataOciIdentityDomainsUsers#attribute_sets}
  */
  readonly attributeSets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_users#attributes DataOciIdentityDomainsUsers#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_users#authorization DataOciIdentityDomainsUsers#authorization}
  */
  readonly authorization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_users#compartment_id DataOciIdentityDomainsUsers#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_users#id DataOciIdentityDomainsUsers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_users#idcs_endpoint DataOciIdentityDomainsUsers#idcs_endpoint}
  */
  readonly idcsEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_users#resource_type_schema_version DataOciIdentityDomainsUsers#resource_type_schema_version}
  */
  readonly resourceTypeSchemaVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_users#sort_by DataOciIdentityDomainsUsers#sort_by}
  */
  readonly sortBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_users#sort_order DataOciIdentityDomainsUsers#sort_order}
  */
  readonly sortOrder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_users#start_index DataOciIdentityDomainsUsers#start_index}
  */
  readonly startIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_users#user_count DataOciIdentityDomainsUsers#user_count}
  */
  readonly userCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_users#user_filter DataOciIdentityDomainsUsers#user_filter}
  */
  readonly userFilter?: string;
}
export interface DataOciIdentityDomainsUsersUsersAddresses {
}

export function dataOciIdentityDomainsUsersUsersAddressesToTerraform(struct?: DataOciIdentityDomainsUsersUsersAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersAddressesToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // formatted - computed: true, optional: false, required: false
  public get formatted() {
    return this.getStringAttribute('formatted');
  }

  // locality - computed: true, optional: false, required: false
  public get locality() {
    return this.getStringAttribute('locality');
  }

  // postal_code - computed: true, optional: false, required: false
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getBooleanAttribute('primary');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // street_address - computed: true, optional: false, required: false
  public get streetAddress() {
    return this.getStringAttribute('street_address');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciIdentityDomainsUsersUsersAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersAddressesOutputReference {
    return new DataOciIdentityDomainsUsersUsersAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersEmails {
}

export function dataOciIdentityDomainsUsersUsersEmailsToTerraform(struct?: DataOciIdentityDomainsUsersUsersEmails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersEmailsToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersEmails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersEmailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersEmails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersEmails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pending_verification_data - computed: true, optional: false, required: false
  public get pendingVerificationData() {
    return this.getStringAttribute('pending_verification_data');
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getBooleanAttribute('primary');
  }

  // secondary - computed: true, optional: false, required: false
  public get secondary() {
    return this.getBooleanAttribute('secondary');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // verified - computed: true, optional: false, required: false
  public get verified() {
    return this.getBooleanAttribute('verified');
  }
}

export class DataOciIdentityDomainsUsersUsersEmailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersEmailsOutputReference {
    return new DataOciIdentityDomainsUsersUsersEmailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersEntitlements {
}

export function dataOciIdentityDomainsUsersUsersEntitlementsToTerraform(struct?: DataOciIdentityDomainsUsersUsersEntitlements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersEntitlementsToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersEntitlements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersEntitlementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersEntitlements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersEntitlements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getBooleanAttribute('primary');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersEntitlementsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersEntitlementsOutputReference {
    return new DataOciIdentityDomainsUsersUsersEntitlementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersGroups {
}

export function dataOciIdentityDomainsUsersUsersGroupsToTerraform(struct?: DataOciIdentityDomainsUsersUsersGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersGroupsToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // date_added - computed: true, optional: false, required: false
  public get dateAdded() {
    return this.getStringAttribute('date_added');
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // membership_ocid - computed: true, optional: false, required: false
  public get membershipOcid() {
    return this.getStringAttribute('membership_ocid');
  }

  // non_unique_display - computed: true, optional: false, required: false
  public get nonUniqueDisplay() {
    return this.getStringAttribute('non_unique_display');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersGroupsOutputReference {
    return new DataOciIdentityDomainsUsersUsersGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersIdcsCreatedBy {
}

export function dataOciIdentityDomainsUsersUsersIdcsCreatedByToTerraform(struct?: DataOciIdentityDomainsUsersUsersIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersIdcsCreatedByToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersIdcsCreatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersIdcsCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersIdcsCreatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersIdcsCreatedByList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersIdcsCreatedByOutputReference {
    return new DataOciIdentityDomainsUsersUsersIdcsCreatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersIdcsLastModifiedBy {
}

export function dataOciIdentityDomainsUsersUsersIdcsLastModifiedByToTerraform(struct?: DataOciIdentityDomainsUsersUsersIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersIdcsLastModifiedByToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersIdcsLastModifiedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersIdcsLastModifiedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersIdcsLastModifiedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersIdcsLastModifiedByList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersIdcsLastModifiedByOutputReference {
    return new DataOciIdentityDomainsUsersUsersIdcsLastModifiedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersIms {
}

export function dataOciIdentityDomainsUsersUsersImsToTerraform(struct?: DataOciIdentityDomainsUsersUsersIms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersImsToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersIms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersImsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersIms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersIms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getBooleanAttribute('primary');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersImsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersImsOutputReference {
    return new DataOciIdentityDomainsUsersUsersImsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersMeta {
}

export function dataOciIdentityDomainsUsersUsersMetaToTerraform(struct?: DataOciIdentityDomainsUsersUsersMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersMetaToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersMetaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataOciIdentityDomainsUsersUsersMetaList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersMetaOutputReference {
    return new DataOciIdentityDomainsUsersUsersMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersName {
}

export function dataOciIdentityDomainsUsersUsersNameToTerraform(struct?: DataOciIdentityDomainsUsersUsersName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersNameToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // family_name - computed: true, optional: false, required: false
  public get familyName() {
    return this.getStringAttribute('family_name');
  }

  // formatted - computed: true, optional: false, required: false
  public get formatted() {
    return this.getStringAttribute('formatted');
  }

  // given_name - computed: true, optional: false, required: false
  public get givenName() {
    return this.getStringAttribute('given_name');
  }

  // honorific_prefix - computed: true, optional: false, required: false
  public get honorificPrefix() {
    return this.getStringAttribute('honorific_prefix');
  }

  // honorific_suffix - computed: true, optional: false, required: false
  public get honorificSuffix() {
    return this.getStringAttribute('honorific_suffix');
  }

  // middle_name - computed: true, optional: false, required: false
  public get middleName() {
    return this.getStringAttribute('middle_name');
  }
}

export class DataOciIdentityDomainsUsersUsersNameList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersNameOutputReference {
    return new DataOciIdentityDomainsUsersUsersNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersPhoneNumbers {
}

export function dataOciIdentityDomainsUsersUsersPhoneNumbersToTerraform(struct?: DataOciIdentityDomainsUsersUsersPhoneNumbers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersPhoneNumbersToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersPhoneNumbers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersPhoneNumbersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersPhoneNumbers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersPhoneNumbers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getBooleanAttribute('primary');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // verified - computed: true, optional: false, required: false
  public get verified() {
    return this.getBooleanAttribute('verified');
  }
}

export class DataOciIdentityDomainsUsersUsersPhoneNumbersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersPhoneNumbersOutputReference {
    return new DataOciIdentityDomainsUsersUsersPhoneNumbersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersPhotos {
}

export function dataOciIdentityDomainsUsersUsersPhotosToTerraform(struct?: DataOciIdentityDomainsUsersUsersPhotos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersPhotosToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersPhotos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersPhotosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersPhotos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersPhotos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getBooleanAttribute('primary');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersPhotosList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersPhotosOutputReference {
    return new DataOciIdentityDomainsUsersUsersPhotosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersRoles {
}

export function dataOciIdentityDomainsUsersUsersRolesToTerraform(struct?: DataOciIdentityDomainsUsersUsersRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersRolesToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getBooleanAttribute('primary');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersRolesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersRolesOutputReference {
    return new DataOciIdentityDomainsUsersUsersRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersTags {
}

export function dataOciIdentityDomainsUsersUsersTagsToTerraform(struct?: DataOciIdentityDomainsUsersUsersTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersTagsToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersTagsOutputReference {
    return new DataOciIdentityDomainsUsersUsersTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasextensionenterprise20UserManager {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasextensionenterprise20UserManagerToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasextensionenterprise20UserManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasextensionenterprise20UserManagerToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasextensionenterprise20UserManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasextensionenterprise20UserManagerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasextensionenterprise20UserManager | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasextensionenterprise20UserManager | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasextensionenterprise20UserManagerList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasextensionenterprise20UserManagerOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasextensionenterprise20UserManagerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasextensionenterprise20User {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasextensionenterprise20UserToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasextensionenterprise20User): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasextensionenterprise20UserToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasextensionenterprise20User): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasextensionenterprise20UserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasextensionenterprise20User | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasextensionenterprise20User | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cost_center - computed: true, optional: false, required: false
  public get costCenter() {
    return this.getStringAttribute('cost_center');
  }

  // department - computed: true, optional: false, required: false
  public get department() {
    return this.getStringAttribute('department');
  }

  // division - computed: true, optional: false, required: false
  public get division() {
    return this.getStringAttribute('division');
  }

  // employee_number - computed: true, optional: false, required: false
  public get employeeNumber() {
    return this.getStringAttribute('employee_number');
  }

  // manager - computed: true, optional: false, required: false
  private _manager = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasextensionenterprise20UserManagerList(this, "manager", false);
  public get manager() {
    return this._manager;
  }

  // organization - computed: true, optional: false, required: false
  public get organization() {
    return this.getStringAttribute('organization');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasextensionenterprise20UserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasextensionenterprise20UserOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasextensionenterprise20UserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionOciTags {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionOciTagsToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionOciTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionOciTagsToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionOciTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionOciTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionOciTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList(this, "defined_tags", false);
  public get definedTags() {
    return this._definedTags;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList(this, "freeform_tags", false);
  public get freeformTags() {
    return this._freeformTags;
  }

  // tag_slug - computed: true, optional: false, required: false
  public get tagSlug() {
    return this.getStringAttribute('tag_slug');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionOciTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScores {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScoresToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScores): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScoresToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScores): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScoresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScores | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScores | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_update_timestamp - computed: true, optional: false, required: false
  public get lastUpdateTimestamp() {
    return this.getStringAttribute('last_update_timestamp');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // risk_level - computed: true, optional: false, required: false
  public get riskLevel() {
    return this.getStringAttribute('risk_level');
  }

  // score - computed: true, optional: false, required: false
  public get score() {
    return this.getNumberAttribute('score');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScoresList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScoresOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScoresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionadaptiveUser {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionadaptiveUserToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionadaptiveUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionadaptiveUserToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionadaptiveUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionadaptiveUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionadaptiveUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionadaptiveUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // risk_level - computed: true, optional: false, required: false
  public get riskLevel() {
    return this.getStringAttribute('risk_level');
  }

  // risk_scores - computed: true, optional: false, required: false
  private _riskScores = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScoresList(this, "risk_scores", false);
  public get riskScores() {
    return this._riskScores;
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionadaptiveUserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionadaptiveUserOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionadaptiveUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUser {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUserToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUserToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // can_use_api_keys - computed: true, optional: false, required: false
  public get canUseApiKeys() {
    return this.getBooleanAttribute('can_use_api_keys');
  }

  // can_use_auth_tokens - computed: true, optional: false, required: false
  public get canUseAuthTokens() {
    return this.getBooleanAttribute('can_use_auth_tokens');
  }

  // can_use_console - computed: true, optional: false, required: false
  public get canUseConsole() {
    return this.getBooleanAttribute('can_use_console');
  }

  // can_use_console_password - computed: true, optional: false, required: false
  public get canUseConsolePassword() {
    return this.getBooleanAttribute('can_use_console_password');
  }

  // can_use_customer_secret_keys - computed: true, optional: false, required: false
  public get canUseCustomerSecretKeys() {
    return this.getBooleanAttribute('can_use_customer_secret_keys');
  }

  // can_use_db_credentials - computed: true, optional: false, required: false
  public get canUseDbCredentials() {
    return this.getBooleanAttribute('can_use_db_credentials');
  }

  // can_use_oauth2client_credentials - computed: true, optional: false, required: false
  public get canUseOauth2ClientCredentials() {
    return this.getBooleanAttribute('can_use_oauth2client_credentials');
  }

  // can_use_smtp_credentials - computed: true, optional: false, required: false
  public get canUseSmtpCredentials() {
    return this.getBooleanAttribute('can_use_smtp_credentials');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUserOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUser {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUserToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUserToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // db_login_attempts - computed: true, optional: false, required: false
  public get dbLoginAttempts() {
    return this.getNumberAttribute('db_login_attempts');
  }

  // db_user_name - computed: true, optional: false, required: false
  public get dbUserName() {
    return this.getStringAttribute('db_user_name');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUserOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiondbUserUserPasswordVerifiers {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiondbUserUserPasswordVerifiersToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiondbUserUserPasswordVerifiers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiondbUserUserPasswordVerifiersToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiondbUserUserPasswordVerifiers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiondbUserUserPasswordVerifiersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiondbUserUserPasswordVerifiers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiondbUserUserPasswordVerifiers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiondbUserUserPasswordVerifiersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiondbUserUserPasswordVerifiersOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiondbUserUserPasswordVerifiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiondbUserUser {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiondbUserUserToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiondbUserUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiondbUserUserToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiondbUserUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiondbUserUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiondbUserUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiondbUserUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // db_global_roles - computed: true, optional: false, required: false
  public get dbGlobalRoles() {
    return this.getListAttribute('db_global_roles');
  }

  // domain_level_schema - computed: true, optional: false, required: false
  public get domainLevelSchema() {
    return this.getStringAttribute('domain_level_schema');
  }

  // instance_level_schema - computed: true, optional: false, required: false
  public get instanceLevelSchema() {
    return this.getStringAttribute('instance_level_schema');
  }

  // is_db_user - computed: true, optional: false, required: false
  public get isDbUser() {
    return this.getBooleanAttribute('is_db_user');
  }

  // password_verifiers - computed: true, optional: false, required: false
  private _passwordVerifiers = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiondbUserUserPasswordVerifiersList(this, "password_verifiers", false);
  public get passwordVerifiers() {
    return this._passwordVerifiers;
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiondbUserUserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiondbUserUserOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiondbUserUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsers {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsersToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsersToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // principal_name - computed: true, optional: false, required: false
  public get principalName() {
    return this.getStringAttribute('principal_name');
  }

  // realm_name - computed: true, optional: false, required: false
  public get realmName() {
    return this.getStringAttribute('realm_name');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsersOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionkerberosUserUser {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionkerberosUserUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionkerberosUserUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionkerberosUserUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionkerberosUserUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // realm_users - computed: true, optional: false, required: false
  private _realmUsers = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsersList(this, "realm_users", false);
  public get realmUsers() {
    return this._realmUsers;
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodes {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodesToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodesToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodesOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserDevices {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserDevicesToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserDevicesToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserDevices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_method - computed: true, optional: false, required: false
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // factor_status - computed: true, optional: false, required: false
  public get factorStatus() {
    return this.getStringAttribute('factor_status');
  }

  // factor_type - computed: true, optional: false, required: false
  public get factorType() {
    return this.getStringAttribute('factor_type');
  }

  // last_sync_time - computed: true, optional: false, required: false
  public get lastSyncTime() {
    return this.getStringAttribute('last_sync_time');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // third_party_vendor_name - computed: true, optional: false, required: false
  public get thirdPartyVendorName() {
    return this.getStringAttribute('third_party_vendor_name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserDevicesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserDevicesOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDevice {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDeviceToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDeviceToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDeviceList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDeviceOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgents {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgentsToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgentsToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgentsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgentsOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUser {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bypass_codes - computed: true, optional: false, required: false
  private _bypassCodes = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodesList(this, "bypass_codes", false);
  public get bypassCodes() {
    return this._bypassCodes;
  }

  // devices - computed: true, optional: false, required: false
  private _devices = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }

  // login_attempts - computed: true, optional: false, required: false
  public get loginAttempts() {
    return this.getNumberAttribute('login_attempts');
  }

  // mfa_enabled_on - computed: true, optional: false, required: false
  public get mfaEnabledOn() {
    return this.getStringAttribute('mfa_enabled_on');
  }

  // mfa_ignored_apps - computed: true, optional: false, required: false
  public get mfaIgnoredApps() {
    return this.getListAttribute('mfa_ignored_apps');
  }

  // mfa_status - computed: true, optional: false, required: false
  public get mfaStatus() {
    return this.getStringAttribute('mfa_status');
  }

  // preferred_authentication_factor - computed: true, optional: false, required: false
  public get preferredAuthenticationFactor() {
    return this.getStringAttribute('preferred_authentication_factor');
  }

  // preferred_authentication_method - computed: true, optional: false, required: false
  public get preferredAuthenticationMethod() {
    return this.getStringAttribute('preferred_authentication_method');
  }

  // preferred_device - computed: true, optional: false, required: false
  private _preferredDevice = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDeviceList(this, "preferred_device", false);
  public get preferredDevice() {
    return this._preferredDevice;
  }

  // preferred_third_party_vendor - computed: true, optional: false, required: false
  public get preferredThirdPartyVendor() {
    return this.getStringAttribute('preferred_third_party_vendor');
  }

  // trusted_user_agents - computed: true, optional: false, required: false
  private _trustedUserAgents = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgentsList(this, "trusted_user_agents", false);
  public get trustedUserAgents() {
    return this._trustedUserAgents;
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserApplicablePasswordPolicy {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserApplicablePasswordPolicyToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserApplicablePasswordPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserApplicablePasswordPolicyToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserApplicablePasswordPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserApplicablePasswordPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserApplicablePasswordPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserApplicablePasswordPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserApplicablePasswordPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserApplicablePasswordPolicyOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserApplicablePasswordPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordStateUser {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordStateUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordStateUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordStateUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordStateUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // applicable_password_policy - computed: true, optional: false, required: false
  private _applicablePasswordPolicy = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserApplicablePasswordPolicyList(this, "applicable_password_policy", false);
  public get applicablePasswordPolicy() {
    return this._applicablePasswordPolicy;
  }

  // cant_change - computed: true, optional: false, required: false
  public get cantChange() {
    return this.getBooleanAttribute('cant_change');
  }

  // cant_expire - computed: true, optional: false, required: false
  public get cantExpire() {
    return this.getBooleanAttribute('cant_expire');
  }

  // expired - computed: true, optional: false, required: false
  public get expired() {
    return this.getBooleanAttribute('expired');
  }

  // last_failed_validation_date - computed: true, optional: false, required: false
  public get lastFailedValidationDate() {
    return this.getStringAttribute('last_failed_validation_date');
  }

  // last_successful_set_date - computed: true, optional: false, required: false
  public get lastSuccessfulSetDate() {
    return this.getStringAttribute('last_successful_set_date');
  }

  // last_successful_validation_date - computed: true, optional: false, required: false
  public get lastSuccessfulValidationDate() {
    return this.getStringAttribute('last_successful_validation_date');
  }

  // must_change - computed: true, optional: false, required: false
  public get mustChange() {
    return this.getBooleanAttribute('must_change');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifier {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifierToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifierToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifierOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifierList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifierOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifierOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordlessUser {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordlessUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordlessUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordlessUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordlessUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // factor_identifier - computed: true, optional: false, required: false
  private _factorIdentifier = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifierList(this, "factor_identifier", false);
  public get factorIdentifier() {
    return this._factorIdentifier;
  }

  // factor_method - computed: true, optional: false, required: false
  public get factorMethod() {
    return this.getStringAttribute('factor_method');
  }

  // factor_type - computed: true, optional: false, required: false
  public get factorType() {
    return this.getStringAttribute('factor_type');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionposixUser {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionposixUserToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionposixUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionposixUserToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionposixUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionposixUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionposixUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionposixUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gecos - computed: true, optional: false, required: false
  public get gecos() {
    return this.getStringAttribute('gecos');
  }

  // gid_number - computed: true, optional: false, required: false
  public get gidNumber() {
    return this.getNumberAttribute('gid_number');
  }

  // home_directory - computed: true, optional: false, required: false
  public get homeDirectory() {
    return this.getStringAttribute('home_directory');
  }

  // login_shell - computed: true, optional: false, required: false
  public get loginShell() {
    return this.getStringAttribute('login_shell');
  }

  // uid_number - computed: true, optional: false, required: false
  public get uidNumber() {
    return this.getNumberAttribute('uid_number');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionposixUserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionposixUserOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionposixUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestions {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestionsToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestionsToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // answer - computed: true, optional: false, required: false
  public get answer() {
    return this.getStringAttribute('answer');
  }

  // hint_text - computed: true, optional: false, required: false
  public get hintText() {
    return this.getStringAttribute('hint_text');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestionsOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUser {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sec_questions - computed: true, optional: false, required: false
  private _secQuestions = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestionsList(this, "sec_questions", false);
  public get secQuestions() {
    return this._secQuestions;
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionselfChangeUser {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionselfChangeUserToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionselfChangeUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionselfChangeUserToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionselfChangeUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionselfChangeUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionselfChangeUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_self_change - computed: true, optional: false, required: false
  public get allowSelfChange() {
    return this.getBooleanAttribute('allow_self_change');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfile {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfileToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfileToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfileOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUser {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consent_granted - computed: true, optional: false, required: false
  public get consentGranted() {
    return this.getBooleanAttribute('consent_granted');
  }

  // self_registration_profile - computed: true, optional: false, required: false
  private _selfRegistrationProfile = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfileList(this, "self_registration_profile", false);
  public get selfRegistrationProfile() {
    return this._selfRegistrationProfile;
  }

  // user_token - computed: true, optional: false, required: false
  public get userToken() {
    return this.getStringAttribute('user_token');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsffUser {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsffUserToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsffUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsffUserToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsffUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsffUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsffUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsffUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sff_auth_keys - computed: true, optional: false, required: false
  public get sffAuthKeys() {
    return this.getStringAttribute('sff_auth_keys');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsffUserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsffUserOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsffUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccounts {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccountsToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccountsToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccountsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccountsOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsocialAccountUser {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsocialAccountUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsocialAccountUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsocialAccountUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsocialAccountUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // social_accounts - computed: true, optional: false, required: false
  private _socialAccounts = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccountsList(this, "social_accounts", false);
  public get socialAccounts() {
    return this._socialAccounts;
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsents {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsentsToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsentsToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsentsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsentsOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUser {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // terms_of_use_consents - computed: true, optional: false, required: false
  private _termsOfUseConsents = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsentsList(this, "terms_of_use_consents", false);
  public get termsOfUseConsents() {
    return this._termsOfUseConsents;
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserApiKeys {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserApiKeysToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserApiKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserApiKeysToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserApiKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserApiKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserApiKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserApiKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserApiKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserApiKeysOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserApiKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserAuthTokens {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserAuthTokensToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserAuthTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserAuthTokensToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserAuthTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserAuthTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserAuthTokens | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserAuthTokens | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserAuthTokensList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserAuthTokensOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserAuthTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserCustomerSecretKeys {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserCustomerSecretKeysToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserCustomerSecretKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserCustomerSecretKeysToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserCustomerSecretKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserCustomerSecretKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserCustomerSecretKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserCustomerSecretKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserCustomerSecretKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserCustomerSecretKeysOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserCustomerSecretKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserDbCredentials {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserDbCredentialsToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserDbCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserDbCredentialsToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserDbCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserDbCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserDbCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserDbCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserDbCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserDbCredentialsOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserDbCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOAuth2ClientCredentials {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOAuth2ClientCredentialsToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOAuth2ClientCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOAuth2ClientCredentialsToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOAuth2ClientCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOAuth2ClientCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOAuth2ClientCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOAuth2ClientCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOAuth2ClientCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOAuth2ClientCredentialsOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOAuth2ClientCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserSmtpCredentials {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserSmtpCredentialsToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserSmtpCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserSmtpCredentialsToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserSmtpCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserSmtpCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserSmtpCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserSmtpCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserSmtpCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserSmtpCredentialsOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserSmtpCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUser {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_keys - computed: true, optional: false, required: false
  private _apiKeys = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserApiKeysList(this, "api_keys", false);
  public get apiKeys() {
    return this._apiKeys;
  }

  // auth_tokens - computed: true, optional: false, required: false
  private _authTokens = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserAuthTokensList(this, "auth_tokens", false);
  public get authTokens() {
    return this._authTokens;
  }

  // customer_secret_keys - computed: true, optional: false, required: false
  private _customerSecretKeys = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserCustomerSecretKeysList(this, "customer_secret_keys", false);
  public get customerSecretKeys() {
    return this._customerSecretKeys;
  }

  // db_credentials - computed: true, optional: false, required: false
  private _dbCredentials = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserDbCredentialsList(this, "db_credentials", false);
  public get dbCredentials() {
    return this._dbCredentials;
  }

  // o_auth2client_credentials - computed: true, optional: false, required: false
  private _oAuth2ClientCredentials = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOAuth2ClientCredentialsList(this, "o_auth2client_credentials", false);
  public get oAuth2ClientCredentials() {
    return this._oAuth2ClientCredentials;
  }

  // smtp_credentials - computed: true, optional: false, required: false
  private _smtpCredentials = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserSmtpCredentialsList(this, "smtp_credentials", false);
  public get smtpCredentials() {
    return this._smtpCredentials;
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserStateUserLocked {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserStateUserLockedToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserStateUserLocked): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserStateUserLockedToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserStateUserLocked): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserStateUserLockedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserStateUserLocked | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserStateUserLocked | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expired - computed: true, optional: false, required: false
  public get expired() {
    return this.getBooleanAttribute('expired');
  }

  // lock_date - computed: true, optional: false, required: false
  public get lockDate() {
    return this.getStringAttribute('lock_date');
  }

  // on - computed: true, optional: false, required: false
  public get on() {
    return this.getBooleanAttribute('on');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getNumberAttribute('reason');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserStateUserLockedList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserStateUserLockedOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserStateUserLockedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLocked {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLockedToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLocked): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLockedToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLocked): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLockedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLocked | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLocked | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lock_date - computed: true, optional: false, required: false
  public get lockDate() {
    return this.getStringAttribute('lock_date');
  }

  // on - computed: true, optional: false, required: false
  public get on() {
    return this.getBooleanAttribute('on');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLockedList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLockedOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLockedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserStateUser {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserStateUserToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserStateUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserStateUserToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserStateUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserStateUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserStateUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserStateUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_failed_login_date - computed: true, optional: false, required: false
  public get lastFailedLoginDate() {
    return this.getStringAttribute('last_failed_login_date');
  }

  // last_successful_login_date - computed: true, optional: false, required: false
  public get lastSuccessfulLoginDate() {
    return this.getStringAttribute('last_successful_login_date');
  }

  // locked - computed: true, optional: false, required: false
  private _locked = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserStateUserLockedList(this, "locked", false);
  public get locked() {
    return this._locked;
  }

  // login_attempts - computed: true, optional: false, required: false
  public get loginAttempts() {
    return this.getNumberAttribute('login_attempts');
  }

  // max_concurrent_sessions - computed: true, optional: false, required: false
  public get maxConcurrentSessions() {
    return this.getNumberAttribute('max_concurrent_sessions');
  }

  // previous_successful_login_date - computed: true, optional: false, required: false
  public get previousSuccessfulLoginDate() {
    return this.getStringAttribute('previous_successful_login_date');
  }

  // recovery_attempts - computed: true, optional: false, required: false
  public get recoveryAttempts() {
    return this.getNumberAttribute('recovery_attempts');
  }

  // recovery_enroll_attempts - computed: true, optional: false, required: false
  public get recoveryEnrollAttempts() {
    return this.getNumberAttribute('recovery_enroll_attempts');
  }

  // recovery_locked - computed: true, optional: false, required: false
  private _recoveryLocked = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLockedList(this, "recovery_locked", false);
  public get recoveryLocked() {
    return this._recoveryLocked;
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserStateUserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserStateUserOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserStateUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserAccounts {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserAccountsToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserAccountsToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserAccounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserAccounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserAccountsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserAccountsOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserAppRoles {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserAppRolesToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserAppRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserAppRolesToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserAppRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserAppRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserAppRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserAppRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_role - computed: true, optional: false, required: false
  public get adminRole() {
    return this.getBooleanAttribute('admin_role');
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // app_name - computed: true, optional: false, required: false
  public get appName() {
    return this.getStringAttribute('app_name');
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // legacy_group_name - computed: true, optional: false, required: false
  public get legacyGroupName() {
    return this.getStringAttribute('legacy_group_name');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserAppRolesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserAppRolesOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserAppRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserApplicableAuthenticationTargetApp {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserApplicableAuthenticationTargetAppToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserApplicableAuthenticationTargetApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserApplicableAuthenticationTargetAppToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserApplicableAuthenticationTargetApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserApplicableAuthenticationTargetAppOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserApplicableAuthenticationTargetApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserApplicableAuthenticationTargetApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // target_request_timeout - computed: true, optional: false, required: false
  public get targetRequestTimeout() {
    return this.getNumberAttribute('target_request_timeout');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserApplicableAuthenticationTargetAppList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserApplicableAuthenticationTargetAppOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserApplicableAuthenticationTargetAppOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetApp {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetAppToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetAppToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetAppOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetAppList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetAppOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetAppOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserGrants {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserGrantsToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserGrants): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserGrantsToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserGrants): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserGrantsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserGrants | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserGrants | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // grant_mechanism - computed: true, optional: false, required: false
  public get grantMechanism() {
    return this.getStringAttribute('grant_mechanism');
  }

  // grantor_id - computed: true, optional: false, required: false
  public get grantorId() {
    return this.getStringAttribute('grantor_id');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserGrantsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserGrantsOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserGrantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserIdcsAppRolesLimitedToGroups {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserIdcsAppRolesLimitedToGroupsToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserIdcsAppRolesLimitedToGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserIdcsAppRolesLimitedToGroupsToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserIdcsAppRolesLimitedToGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserIdcsAppRolesLimitedToGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserIdcsAppRolesLimitedToGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserIdcsAppRolesLimitedToGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // idcs_app_role_id - computed: true, optional: false, required: false
  public get idcsAppRoleId() {
    return this.getStringAttribute('idcs_app_role_id');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserIdcsAppRolesLimitedToGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserIdcsAppRolesLimitedToGroupsOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserIdcsAppRolesLimitedToGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserSupportAccounts {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserSupportAccountsToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserSupportAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserSupportAccountsToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserSupportAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserSupportAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserSupportAccounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserSupportAccounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // user_provider - computed: true, optional: false, required: false
  public get userProvider() {
    return this.getStringAttribute('user_provider');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserSupportAccountsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserSupportAccountsOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserSupportAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromApp {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromAppToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromAppToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromAppOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromAppList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromAppOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromAppOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserUserToken {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserUserTokenToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserUserToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserUserTokenToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserUserToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserUserTokenOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserUserToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserUserToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserUserTokenList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserUserTokenOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserUserTokenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUser {
}

export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserToTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_recovery_required - computed: true, optional: false, required: false
  public get accountRecoveryRequired() {
    return this.getBooleanAttribute('account_recovery_required');
  }

  // accounts - computed: true, optional: false, required: false
  private _accounts = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserAccountsList(this, "accounts", false);
  public get accounts() {
    return this._accounts;
  }

  // app_roles - computed: true, optional: false, required: false
  private _appRoles = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserAppRolesList(this, "app_roles", false);
  public get appRoles() {
    return this._appRoles;
  }

  // applicable_authentication_target_app - computed: true, optional: false, required: false
  private _applicableAuthenticationTargetApp = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserApplicableAuthenticationTargetAppList(this, "applicable_authentication_target_app", false);
  public get applicableAuthenticationTargetApp() {
    return this._applicableAuthenticationTargetApp;
  }

  // bypass_notification - computed: true, optional: false, required: false
  public get bypassNotification() {
    return this.getBooleanAttribute('bypass_notification');
  }

  // creation_mechanism - computed: true, optional: false, required: false
  public get creationMechanism() {
    return this.getStringAttribute('creation_mechanism');
  }

  // delegated_authentication_target_app - computed: true, optional: false, required: false
  private _delegatedAuthenticationTargetApp = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetAppList(this, "delegated_authentication_target_app", false);
  public get delegatedAuthenticationTargetApp() {
    return this._delegatedAuthenticationTargetApp;
  }

  // do_not_show_getting_started - computed: true, optional: false, required: false
  public get doNotShowGettingStarted() {
    return this.getBooleanAttribute('do_not_show_getting_started');
  }

  // grants - computed: true, optional: false, required: false
  private _grants = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserGrantsList(this, "grants", false);
  public get grants() {
    return this._grants;
  }

  // group_membership_last_modified - computed: true, optional: false, required: false
  public get groupMembershipLastModified() {
    return this.getStringAttribute('group_membership_last_modified');
  }

  // idcs_app_roles_limited_to_groups - computed: true, optional: false, required: false
  private _idcsAppRolesLimitedToGroups = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserIdcsAppRolesLimitedToGroupsList(this, "idcs_app_roles_limited_to_groups", false);
  public get idcsAppRolesLimitedToGroups() {
    return this._idcsAppRolesLimitedToGroups;
  }

  // is_account_recovery_enrolled - computed: true, optional: false, required: false
  public get isAccountRecoveryEnrolled() {
    return this.getBooleanAttribute('is_account_recovery_enrolled');
  }

  // is_authentication_delegated - computed: true, optional: false, required: false
  public get isAuthenticationDelegated() {
    return this.getBooleanAttribute('is_authentication_delegated');
  }

  // is_federated_user - computed: true, optional: false, required: false
  public get isFederatedUser() {
    return this.getBooleanAttribute('is_federated_user');
  }

  // is_group_membership_normalized - computed: true, optional: false, required: false
  public get isGroupMembershipNormalized() {
    return this.getBooleanAttribute('is_group_membership_normalized');
  }

  // is_group_membership_synced_to_users_groups - computed: true, optional: false, required: false
  public get isGroupMembershipSyncedToUsersGroups() {
    return this.getBooleanAttribute('is_group_membership_synced_to_users_groups');
  }

  // notification_email_template_id - computed: true, optional: false, required: false
  public get notificationEmailTemplateId() {
    return this.getStringAttribute('notification_email_template_id');
  }

  // preferred_ui_landing_page - computed: true, optional: false, required: false
  public get preferredUiLandingPage() {
    return this.getStringAttribute('preferred_ui_landing_page');
  }

  // service_user - computed: true, optional: false, required: false
  public get serviceUser() {
    return this.getBooleanAttribute('service_user');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // support_accounts - computed: true, optional: false, required: false
  private _supportAccounts = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserSupportAccountsList(this, "support_accounts", false);
  public get supportAccounts() {
    return this._supportAccounts;
  }

  // synced_from_app - computed: true, optional: false, required: false
  private _syncedFromApp = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromAppList(this, "synced_from_app", false);
  public get syncedFromApp() {
    return this._syncedFromApp;
  }

  // user_flow_controlled_by_external_client - computed: true, optional: false, required: false
  public get userFlowControlledByExternalClient() {
    return this.getBooleanAttribute('user_flow_controlled_by_external_client');
  }

  // user_provider - computed: true, optional: false, required: false
  public get userProvider() {
    return this.getStringAttribute('user_provider');
  }

  // user_token - computed: true, optional: false, required: false
  private _userToken = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserUserTokenList(this, "user_token", false);
  public get userToken() {
    return this._userToken;
  }
}

export class DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserOutputReference {
    return new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsersX509Certificates {
}

export function dataOciIdentityDomainsUsersUsersX509CertificatesToTerraform(struct?: DataOciIdentityDomainsUsersUsersX509Certificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersX509CertificatesToHclTerraform(struct?: DataOciIdentityDomainsUsersUsersX509Certificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersX509CertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsersX509Certificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsersX509Certificates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getBooleanAttribute('primary');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsUsersUsersX509CertificatesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersX509CertificatesOutputReference {
    return new DataOciIdentityDomainsUsersUsersX509CertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUsersUsers {
}

export function dataOciIdentityDomainsUsersUsersToTerraform(struct?: DataOciIdentityDomainsUsersUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUsersUsersToHclTerraform(struct?: DataOciIdentityDomainsUsersUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUsersUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUsersUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUsersUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // addresses - computed: true, optional: false, required: false
  private _addresses = new DataOciIdentityDomainsUsersUsersAddressesList(this, "addresses", false);
  public get addresses() {
    return this._addresses;
  }

  // attribute_sets - computed: true, optional: false, required: false
  public get attributeSets() {
    return this.getListAttribute('attribute_sets');
  }

  // attributes - computed: true, optional: false, required: false
  public get attributes() {
    return this.getStringAttribute('attributes');
  }

  // authorization - computed: true, optional: false, required: false
  public get authorization() {
    return this.getStringAttribute('authorization');
  }

  // compartment_ocid - computed: true, optional: false, required: false
  public get compartmentOcid() {
    return this.getStringAttribute('compartment_ocid');
  }

  // delete_in_progress - computed: true, optional: false, required: false
  public get deleteInProgress() {
    return this.getBooleanAttribute('delete_in_progress');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // domain_ocid - computed: true, optional: false, required: false
  public get domainOcid() {
    return this.getStringAttribute('domain_ocid');
  }

  // emails - computed: true, optional: false, required: false
  private _emails = new DataOciIdentityDomainsUsersUsersEmailsList(this, "emails", false);
  public get emails() {
    return this._emails;
  }

  // entitlements - computed: true, optional: false, required: false
  private _entitlements = new DataOciIdentityDomainsUsersUsersEntitlementsList(this, "entitlements", false);
  public get entitlements() {
    return this._entitlements;
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // force_delete - computed: true, optional: false, required: false
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataOciIdentityDomainsUsersUsersGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idcs_created_by - computed: true, optional: false, required: false
  private _idcsCreatedBy = new DataOciIdentityDomainsUsersUsersIdcsCreatedByList(this, "idcs_created_by", false);
  public get idcsCreatedBy() {
    return this._idcsCreatedBy;
  }

  // idcs_endpoint - computed: true, optional: false, required: false
  public get idcsEndpoint() {
    return this.getStringAttribute('idcs_endpoint');
  }

  // idcs_last_modified_by - computed: true, optional: false, required: false
  private _idcsLastModifiedBy = new DataOciIdentityDomainsUsersUsersIdcsLastModifiedByList(this, "idcs_last_modified_by", false);
  public get idcsLastModifiedBy() {
    return this._idcsLastModifiedBy;
  }

  // idcs_last_upgraded_in_release - computed: true, optional: false, required: false
  public get idcsLastUpgradedInRelease() {
    return this.getStringAttribute('idcs_last_upgraded_in_release');
  }

  // idcs_prevented_operations - computed: true, optional: false, required: false
  public get idcsPreventedOperations() {
    return this.getListAttribute('idcs_prevented_operations');
  }

  // ims - computed: true, optional: false, required: false
  private _ims = new DataOciIdentityDomainsUsersUsersImsList(this, "ims", false);
  public get ims() {
    return this._ims;
  }

  // locale - computed: true, optional: false, required: false
  public get locale() {
    return this.getStringAttribute('locale');
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new DataOciIdentityDomainsUsersUsersMetaList(this, "meta", false);
  public get meta() {
    return this._meta;
  }

  // name - computed: true, optional: false, required: false
  private _name = new DataOciIdentityDomainsUsersUsersNameList(this, "name", false);
  public get name() {
    return this._name;
  }

  // nick_name - computed: true, optional: false, required: false
  public get nickName() {
    return this.getStringAttribute('nick_name');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // phone_numbers - computed: true, optional: false, required: false
  private _phoneNumbers = new DataOciIdentityDomainsUsersUsersPhoneNumbersList(this, "phone_numbers", false);
  public get phoneNumbers() {
    return this._phoneNumbers;
  }

  // photos - computed: true, optional: false, required: false
  private _photos = new DataOciIdentityDomainsUsersUsersPhotosList(this, "photos", false);
  public get photos() {
    return this._photos;
  }

  // preferred_language - computed: true, optional: false, required: false
  public get preferredLanguage() {
    return this.getStringAttribute('preferred_language');
  }

  // profile_url - computed: true, optional: false, required: false
  public get profileUrl() {
    return this.getStringAttribute('profile_url');
  }

  // resource_type_schema_version - computed: true, optional: false, required: false
  public get resourceTypeSchemaVersion() {
    return this.getStringAttribute('resource_type_schema_version');
  }

  // roles - computed: true, optional: false, required: false
  private _roles = new DataOciIdentityDomainsUsersUsersRolesList(this, "roles", false);
  public get roles() {
    return this._roles;
  }

  // schemas - computed: true, optional: false, required: false
  public get schemas() {
    return this.getListAttribute('schemas');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataOciIdentityDomainsUsersUsersTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // tenancy_ocid - computed: true, optional: false, required: false
  public get tenancyOcid() {
    return this.getStringAttribute('tenancy_ocid');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // urnietfparamsscimschemasextensionenterprise20user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasextensionenterprise20User = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasextensionenterprise20UserList(this, "urnietfparamsscimschemasextensionenterprise20user", false);
  public get urnietfparamsscimschemasextensionenterprise20User() {
    return this._urnietfparamsscimschemasextensionenterprise20User;
  }

  // urnietfparamsscimschemasoracleidcsextension_oci_tags - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionOciTags = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionOciTagsList(this, "urnietfparamsscimschemasoracleidcsextension_oci_tags", false);
  public get urnietfparamsscimschemasoracleidcsextensionOciTags() {
    return this._urnietfparamsscimschemasoracleidcsextensionOciTags;
  }

  // urnietfparamsscimschemasoracleidcsextensionadaptive_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionadaptiveUser = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionadaptiveUserList(this, "urnietfparamsscimschemasoracleidcsextensionadaptive_user", false);
  public get urnietfparamsscimschemasoracleidcsextensionadaptiveUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionadaptiveUser;
  }

  // urnietfparamsscimschemasoracleidcsextensioncapabilities_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensioncapabilitiesUser = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUserList(this, "urnietfparamsscimschemasoracleidcsextensioncapabilities_user", false);
  public get urnietfparamsscimschemasoracleidcsextensioncapabilitiesUser() {
    return this._urnietfparamsscimschemasoracleidcsextensioncapabilitiesUser;
  }

  // urnietfparamsscimschemasoracleidcsextensiondb_credentials_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensiondbCredentialsUser = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUserList(this, "urnietfparamsscimschemasoracleidcsextensiondb_credentials_user", false);
  public get urnietfparamsscimschemasoracleidcsextensiondbCredentialsUser() {
    return this._urnietfparamsscimschemasoracleidcsextensiondbCredentialsUser;
  }

  // urnietfparamsscimschemasoracleidcsextensiondb_user_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensiondbUserUser = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiondbUserUserList(this, "urnietfparamsscimschemasoracleidcsextensiondb_user_user", false);
  public get urnietfparamsscimschemasoracleidcsextensiondbUserUser() {
    return this._urnietfparamsscimschemasoracleidcsextensiondbUserUser;
  }

  // urnietfparamsscimschemasoracleidcsextensionkerberos_user_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionkerberosUserUser = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserList(this, "urnietfparamsscimschemasoracleidcsextensionkerberos_user_user", false);
  public get urnietfparamsscimschemasoracleidcsextensionkerberosUserUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionkerberosUserUser;
  }

  // urnietfparamsscimschemasoracleidcsextensionmfa_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionmfaUser = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionmfaUserList(this, "urnietfparamsscimschemasoracleidcsextensionmfa_user", false);
  public get urnietfparamsscimschemasoracleidcsextensionmfaUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionmfaUser;
  }

  // urnietfparamsscimschemasoracleidcsextensionpassword_state_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionpasswordStateUser = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserList(this, "urnietfparamsscimschemasoracleidcsextensionpassword_state_user", false);
  public get urnietfparamsscimschemasoracleidcsextensionpasswordStateUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionpasswordStateUser;
  }

  // urnietfparamsscimschemasoracleidcsextensionpasswordless_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionpasswordlessUser = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserList(this, "urnietfparamsscimschemasoracleidcsextensionpasswordless_user", false);
  public get urnietfparamsscimschemasoracleidcsextensionpasswordlessUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionpasswordlessUser;
  }

  // urnietfparamsscimschemasoracleidcsextensionposix_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionposixUser = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionposixUserList(this, "urnietfparamsscimschemasoracleidcsextensionposix_user", false);
  public get urnietfparamsscimschemasoracleidcsextensionposixUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionposixUser;
  }

  // urnietfparamsscimschemasoracleidcsextensionsecurity_questions_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUser = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserList(this, "urnietfparamsscimschemasoracleidcsextensionsecurity_questions_user", false);
  public get urnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUser;
  }

  // urnietfparamsscimschemasoracleidcsextensionself_change_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionselfChangeUser = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList(this, "urnietfparamsscimschemasoracleidcsextensionself_change_user", false);
  public get urnietfparamsscimschemasoracleidcsextensionselfChangeUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionselfChangeUser;
  }

  // urnietfparamsscimschemasoracleidcsextensionself_registration_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionselfRegistrationUser = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserList(this, "urnietfparamsscimschemasoracleidcsextensionself_registration_user", false);
  public get urnietfparamsscimschemasoracleidcsextensionselfRegistrationUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionselfRegistrationUser;
  }

  // urnietfparamsscimschemasoracleidcsextensionsff_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionsffUser = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsffUserList(this, "urnietfparamsscimschemasoracleidcsextensionsff_user", false);
  public get urnietfparamsscimschemasoracleidcsextensionsffUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionsffUser;
  }

  // urnietfparamsscimschemasoracleidcsextensionsocial_account_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionsocialAccountUser = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserList(this, "urnietfparamsscimschemasoracleidcsextensionsocial_account_user", false);
  public get urnietfparamsscimschemasoracleidcsextensionsocialAccountUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionsocialAccountUser;
  }

  // urnietfparamsscimschemasoracleidcsextensionterms_of_use_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensiontermsOfUseUser = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserList(this, "urnietfparamsscimschemasoracleidcsextensionterms_of_use_user", false);
  public get urnietfparamsscimschemasoracleidcsextensiontermsOfUseUser() {
    return this._urnietfparamsscimschemasoracleidcsextensiontermsOfUseUser;
  }

  // urnietfparamsscimschemasoracleidcsextensionuser_credentials_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionuserCredentialsUser = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserList(this, "urnietfparamsscimschemasoracleidcsextensionuser_credentials_user", false);
  public get urnietfparamsscimschemasoracleidcsextensionuserCredentialsUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionuserCredentialsUser;
  }

  // urnietfparamsscimschemasoracleidcsextensionuser_state_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionuserStateUser = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserStateUserList(this, "urnietfparamsscimschemasoracleidcsextensionuser_state_user", false);
  public get urnietfparamsscimschemasoracleidcsextensionuserStateUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionuserStateUser;
  }

  // urnietfparamsscimschemasoracleidcsextensionuser_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionuserUser = new DataOciIdentityDomainsUsersUsersUrnietfparamsscimschemasoracleidcsextensionuserUserList(this, "urnietfparamsscimschemasoracleidcsextensionuser_user", false);
  public get urnietfparamsscimschemasoracleidcsextensionuserUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionuserUser;
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // user_type - computed: true, optional: false, required: false
  public get userType() {
    return this.getStringAttribute('user_type');
  }

  // x509certificates - computed: true, optional: false, required: false
  private _x509Certificates = new DataOciIdentityDomainsUsersUsersX509CertificatesList(this, "x509certificates", false);
  public get x509Certificates() {
    return this._x509Certificates;
  }
}

export class DataOciIdentityDomainsUsersUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUsersUsersOutputReference {
    return new DataOciIdentityDomainsUsersUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_users oci_identity_domains_users}
*/
export class DataOciIdentityDomainsUsers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_identity_domains_users";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciIdentityDomainsUsers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciIdentityDomainsUsers to import
  * @param importFromId The id of the existing DataOciIdentityDomainsUsers that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_users#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciIdentityDomainsUsers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_identity_domains_users", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_users oci_identity_domains_users} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciIdentityDomainsUsersConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciIdentityDomainsUsersConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_domains_users',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attributeSets = config.attributeSets;
    this._attributes = config.attributes;
    this._authorization = config.authorization;
    this._compartmentId = config.compartmentId;
    this._id = config.id;
    this._idcsEndpoint = config.idcsEndpoint;
    this._resourceTypeSchemaVersion = config.resourceTypeSchemaVersion;
    this._sortBy = config.sortBy;
    this._sortOrder = config.sortOrder;
    this._startIndex = config.startIndex;
    this._userCount = config.userCount;
    this._userFilter = config.userFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attribute_sets - computed: false, optional: true, required: false
  private _attributeSets?: string[]; 
  public get attributeSets() {
    return this.getListAttribute('attribute_sets');
  }
  public set attributeSets(value: string[]) {
    this._attributeSets = value;
  }
  public resetAttributeSets() {
    this._attributeSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeSetsInput() {
    return this._attributeSets;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: string; 
  public get attributes() {
    return this.getStringAttribute('attributes');
  }
  public set attributes(value: string) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization?: string; 
  public get authorization() {
    return this.getStringAttribute('authorization');
  }
  public set authorization(value: string) {
    this._authorization = value;
  }
  public resetAuthorization() {
    this._authorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization;
  }

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

  // idcs_endpoint - computed: false, optional: false, required: true
  private _idcsEndpoint?: string; 
  public get idcsEndpoint() {
    return this.getStringAttribute('idcs_endpoint');
  }
  public set idcsEndpoint(value: string) {
    this._idcsEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idcsEndpointInput() {
    return this._idcsEndpoint;
  }

  // items_per_page - computed: true, optional: false, required: false
  public get itemsPerPage() {
    return this.getNumberAttribute('items_per_page');
  }

  // resource_type_schema_version - computed: false, optional: true, required: false
  private _resourceTypeSchemaVersion?: string; 
  public get resourceTypeSchemaVersion() {
    return this.getStringAttribute('resource_type_schema_version');
  }
  public set resourceTypeSchemaVersion(value: string) {
    this._resourceTypeSchemaVersion = value;
  }
  public resetResourceTypeSchemaVersion() {
    this._resourceTypeSchemaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeSchemaVersionInput() {
    return this._resourceTypeSchemaVersion;
  }

  // schemas - computed: true, optional: false, required: false
  public get schemas() {
    return this.getListAttribute('schemas');
  }

  // sort_by - computed: false, optional: true, required: false
  private _sortBy?: string; 
  public get sortBy() {
    return this.getStringAttribute('sort_by');
  }
  public set sortBy(value: string) {
    this._sortBy = value;
  }
  public resetSortBy() {
    this._sortBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortByInput() {
    return this._sortBy;
  }

  // sort_order - computed: false, optional: true, required: false
  private _sortOrder?: string; 
  public get sortOrder() {
    return this.getStringAttribute('sort_order');
  }
  public set sortOrder(value: string) {
    this._sortOrder = value;
  }
  public resetSortOrder() {
    this._sortOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrderInput() {
    return this._sortOrder;
  }

  // start_index - computed: false, optional: true, required: false
  private _startIndex?: number; 
  public get startIndex() {
    return this.getNumberAttribute('start_index');
  }
  public set startIndex(value: number) {
    this._startIndex = value;
  }
  public resetStartIndex() {
    this._startIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIndexInput() {
    return this._startIndex;
  }

  // total_results - computed: true, optional: false, required: false
  public get totalResults() {
    return this.getNumberAttribute('total_results');
  }

  // user_count - computed: false, optional: true, required: false
  private _userCount?: number; 
  public get userCount() {
    return this.getNumberAttribute('user_count');
  }
  public set userCount(value: number) {
    this._userCount = value;
  }
  public resetUserCount() {
    this._userCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCountInput() {
    return this._userCount;
  }

  // user_filter - computed: false, optional: true, required: false
  private _userFilter?: string; 
  public get userFilter() {
    return this.getStringAttribute('user_filter');
  }
  public set userFilter(value: string) {
    this._userFilter = value;
  }
  public resetUserFilter() {
    this._userFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userFilterInput() {
    return this._userFilter;
  }

  // users - computed: true, optional: false, required: false
  private _users = new DataOciIdentityDomainsUsersUsersList(this, "users", false);
  public get users() {
    return this._users;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attribute_sets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attributeSets),
      attributes: cdktf.stringToTerraform(this._attributes),
      authorization: cdktf.stringToTerraform(this._authorization),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
      idcs_endpoint: cdktf.stringToTerraform(this._idcsEndpoint),
      resource_type_schema_version: cdktf.stringToTerraform(this._resourceTypeSchemaVersion),
      sort_by: cdktf.stringToTerraform(this._sortBy),
      sort_order: cdktf.stringToTerraform(this._sortOrder),
      start_index: cdktf.numberToTerraform(this._startIndex),
      user_count: cdktf.numberToTerraform(this._userCount),
      user_filter: cdktf.stringToTerraform(this._userFilter),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attribute_sets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._attributeSets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      attributes: {
        value: cdktf.stringToHclTerraform(this._attributes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization: {
        value: cdktf.stringToHclTerraform(this._authorization),
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
      idcs_endpoint: {
        value: cdktf.stringToHclTerraform(this._idcsEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type_schema_version: {
        value: cdktf.stringToHclTerraform(this._resourceTypeSchemaVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_by: {
        value: cdktf.stringToHclTerraform(this._sortBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_order: {
        value: cdktf.stringToHclTerraform(this._sortOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_index: {
        value: cdktf.numberToHclTerraform(this._startIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_count: {
        value: cdktf.numberToHclTerraform(this._userCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_filter: {
        value: cdktf.stringToHclTerraform(this._userFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
