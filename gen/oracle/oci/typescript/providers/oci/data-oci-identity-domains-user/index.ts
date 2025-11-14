// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/identity_domains_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciIdentityDomainsUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/identity_domains_user#attribute_sets DataOciIdentityDomainsUser#attribute_sets}
  */
  readonly attributeSets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/identity_domains_user#attributes DataOciIdentityDomainsUser#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/identity_domains_user#authorization DataOciIdentityDomainsUser#authorization}
  */
  readonly authorization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/identity_domains_user#idcs_endpoint DataOciIdentityDomainsUser#idcs_endpoint}
  */
  readonly idcsEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/identity_domains_user#resource_type_schema_version DataOciIdentityDomainsUser#resource_type_schema_version}
  */
  readonly resourceTypeSchemaVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/identity_domains_user#user_id DataOciIdentityDomainsUser#user_id}
  */
  readonly userId: string;
}
export interface DataOciIdentityDomainsUserAddresses {
}

export function dataOciIdentityDomainsUserAddressesToTerraform(struct?: DataOciIdentityDomainsUserAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserAddressesToHclTerraform(struct?: DataOciIdentityDomainsUserAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserAddresses | undefined) {
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

export class DataOciIdentityDomainsUserAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserAddressesOutputReference {
    return new DataOciIdentityDomainsUserAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserEmails {
}

export function dataOciIdentityDomainsUserEmailsToTerraform(struct?: DataOciIdentityDomainsUserEmails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserEmailsToHclTerraform(struct?: DataOciIdentityDomainsUserEmails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserEmailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserEmails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserEmails | undefined) {
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

export class DataOciIdentityDomainsUserEmailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserEmailsOutputReference {
    return new DataOciIdentityDomainsUserEmailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserEntitlements {
}

export function dataOciIdentityDomainsUserEntitlementsToTerraform(struct?: DataOciIdentityDomainsUserEntitlements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserEntitlementsToHclTerraform(struct?: DataOciIdentityDomainsUserEntitlements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserEntitlementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserEntitlements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserEntitlements | undefined) {
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

export class DataOciIdentityDomainsUserEntitlementsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserEntitlementsOutputReference {
    return new DataOciIdentityDomainsUserEntitlementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserGroups {
}

export function dataOciIdentityDomainsUserGroupsToTerraform(struct?: DataOciIdentityDomainsUserGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserGroupsToHclTerraform(struct?: DataOciIdentityDomainsUserGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserGroups | undefined) {
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

export class DataOciIdentityDomainsUserGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserGroupsOutputReference {
    return new DataOciIdentityDomainsUserGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserIdcsCreatedBy {
}

export function dataOciIdentityDomainsUserIdcsCreatedByToTerraform(struct?: DataOciIdentityDomainsUserIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserIdcsCreatedByToHclTerraform(struct?: DataOciIdentityDomainsUserIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserIdcsCreatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserIdcsCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserIdcsCreatedBy | undefined) {
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

export class DataOciIdentityDomainsUserIdcsCreatedByList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserIdcsCreatedByOutputReference {
    return new DataOciIdentityDomainsUserIdcsCreatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserIdcsLastModifiedBy {
}

export function dataOciIdentityDomainsUserIdcsLastModifiedByToTerraform(struct?: DataOciIdentityDomainsUserIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserIdcsLastModifiedByToHclTerraform(struct?: DataOciIdentityDomainsUserIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserIdcsLastModifiedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserIdcsLastModifiedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserIdcsLastModifiedBy | undefined) {
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

export class DataOciIdentityDomainsUserIdcsLastModifiedByList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserIdcsLastModifiedByOutputReference {
    return new DataOciIdentityDomainsUserIdcsLastModifiedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserIms {
}

export function dataOciIdentityDomainsUserImsToTerraform(struct?: DataOciIdentityDomainsUserIms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserImsToHclTerraform(struct?: DataOciIdentityDomainsUserIms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserImsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserIms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserIms | undefined) {
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

export class DataOciIdentityDomainsUserImsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserImsOutputReference {
    return new DataOciIdentityDomainsUserImsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserMeta {
}

export function dataOciIdentityDomainsUserMetaToTerraform(struct?: DataOciIdentityDomainsUserMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserMetaToHclTerraform(struct?: DataOciIdentityDomainsUserMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserMetaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserMeta | undefined) {
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

export class DataOciIdentityDomainsUserMetaList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserMetaOutputReference {
    return new DataOciIdentityDomainsUserMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserName {
}

export function dataOciIdentityDomainsUserNameToTerraform(struct?: DataOciIdentityDomainsUserName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserNameToHclTerraform(struct?: DataOciIdentityDomainsUserName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserName | undefined) {
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

export class DataOciIdentityDomainsUserNameList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserNameOutputReference {
    return new DataOciIdentityDomainsUserNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserPhoneNumbers {
}

export function dataOciIdentityDomainsUserPhoneNumbersToTerraform(struct?: DataOciIdentityDomainsUserPhoneNumbers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserPhoneNumbersToHclTerraform(struct?: DataOciIdentityDomainsUserPhoneNumbers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserPhoneNumbersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserPhoneNumbers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserPhoneNumbers | undefined) {
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

export class DataOciIdentityDomainsUserPhoneNumbersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserPhoneNumbersOutputReference {
    return new DataOciIdentityDomainsUserPhoneNumbersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserPhotos {
}

export function dataOciIdentityDomainsUserPhotosToTerraform(struct?: DataOciIdentityDomainsUserPhotos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserPhotosToHclTerraform(struct?: DataOciIdentityDomainsUserPhotos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserPhotosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserPhotos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserPhotos | undefined) {
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

export class DataOciIdentityDomainsUserPhotosList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserPhotosOutputReference {
    return new DataOciIdentityDomainsUserPhotosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserRoles {
}

export function dataOciIdentityDomainsUserRolesToTerraform(struct?: DataOciIdentityDomainsUserRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserRolesToHclTerraform(struct?: DataOciIdentityDomainsUserRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserRoles | undefined) {
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

export class DataOciIdentityDomainsUserRolesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserRolesOutputReference {
    return new DataOciIdentityDomainsUserRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserTags {
}

export function dataOciIdentityDomainsUserTagsToTerraform(struct?: DataOciIdentityDomainsUserTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserTagsToHclTerraform(struct?: DataOciIdentityDomainsUserTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserTags | undefined) {
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

export class DataOciIdentityDomainsUserTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserTagsOutputReference {
    return new DataOciIdentityDomainsUserTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserManager {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserManagerToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserManagerToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserManagerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserManager | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserManager | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserManagerList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserManagerOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserManagerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20User {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20User): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20User): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20User | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20User | undefined) {
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
  private _manager = new DataOciIdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserManagerList(this, "manager", false);
  public get manager() {
    return this._manager;
  }

  // organization - computed: true, optional: false, required: false
  public get organization() {
    return this.getStringAttribute('organization');
  }
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTags {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList(this, "defined_tags", false);
  public get definedTags() {
    return this._definedTags;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList(this, "freeform_tags", false);
  public get freeformTags() {
    return this._freeformTags;
  }

  // tag_slug - computed: true, optional: false, required: false
  public get tagSlug() {
    return this.getStringAttribute('tag_slug');
  }
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScores {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScoresToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScores): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScoresToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScores): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScoresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScores | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScores | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScoresList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScoresOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScoresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUser {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUser | undefined) {
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
  private _riskScores = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserRiskScoresList(this, "risk_scores", false);
  public get riskScores() {
    return this._riskScores;
  }
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUser {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUserToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUserToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUser | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUserOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUser {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUserToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUserToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUser | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUserOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserPasswordVerifiers {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserPasswordVerifiersToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserPasswordVerifiers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserPasswordVerifiersToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserPasswordVerifiers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserPasswordVerifiersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserPasswordVerifiers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserPasswordVerifiers | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserPasswordVerifiersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserPasswordVerifiersOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserPasswordVerifiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUser {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUser | undefined) {
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
  private _passwordVerifiers = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserPasswordVerifiersList(this, "password_verifiers", false);
  public get passwordVerifiers() {
    return this._passwordVerifiers;
  }
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsers {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsersToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsersToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsers | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsersOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUser {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // realm_users - computed: true, optional: false, required: false
  private _realmUsers = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserRealmUsersList(this, "realm_users", false);
  public get realmUsers() {
    return this._realmUsers;
  }
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodes {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodesToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodesToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodes | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodesOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserDevices {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserDevicesToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserDevicesToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserDevices | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserDevicesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserDevicesOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDevice {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDeviceToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDeviceToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDevice | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDeviceList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDeviceOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgents {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgentsToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgentsToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgents | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgentsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgentsOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUser {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bypass_codes - computed: true, optional: false, required: false
  private _bypassCodes = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserBypassCodesList(this, "bypass_codes", false);
  public get bypassCodes() {
    return this._bypassCodes;
  }

  // devices - computed: true, optional: false, required: false
  private _devices = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserDevicesList(this, "devices", false);
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
  private _preferredDevice = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserPreferredDeviceList(this, "preferred_device", false);
  public get preferredDevice() {
    return this._preferredDevice;
  }

  // preferred_third_party_vendor - computed: true, optional: false, required: false
  public get preferredThirdPartyVendor() {
    return this.getStringAttribute('preferred_third_party_vendor');
  }

  // trusted_user_agents - computed: true, optional: false, required: false
  private _trustedUserAgents = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserTrustedUserAgentsList(this, "trusted_user_agents", false);
  public get trustedUserAgents() {
    return this._trustedUserAgents;
  }
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserApplicablePasswordPolicy {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserApplicablePasswordPolicyToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserApplicablePasswordPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserApplicablePasswordPolicyToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserApplicablePasswordPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserApplicablePasswordPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserApplicablePasswordPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserApplicablePasswordPolicy | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserApplicablePasswordPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserApplicablePasswordPolicyOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserApplicablePasswordPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUser {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // applicable_password_policy - computed: true, optional: false, required: false
  private _applicablePasswordPolicy = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserApplicablePasswordPolicyList(this, "applicable_password_policy", false);
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifier {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifierToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifierToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifierOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifier | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifierList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifierOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifierOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUser {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // factor_identifier - computed: true, optional: false, required: false
  private _factorIdentifier = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserFactorIdentifierList(this, "factor_identifier", false);
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionposixUser {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionposixUserToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionposixUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionposixUserToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionposixUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionposixUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionposixUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionposixUser | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionposixUserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionposixUserOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionposixUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestions {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestionsToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestionsToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestions | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestionsOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUser {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sec_questions - computed: true, optional: false, required: false
  private _secQuestions = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserSecQuestionsList(this, "sec_questions", false);
  public get secQuestions() {
    return this._secQuestions;
  }
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfChangeUser {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfChangeUserToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfChangeUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfChangeUserToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfChangeUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfChangeUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfChangeUser | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfile {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfileToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfileToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfile | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfileOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUser {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUser | undefined) {
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
  private _selfRegistrationProfile = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserSelfRegistrationProfileList(this, "self_registration_profile", false);
  public get selfRegistrationProfile() {
    return this._selfRegistrationProfile;
  }

  // user_token - computed: true, optional: false, required: false
  public get userToken() {
    return this.getStringAttribute('user_token');
  }
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsffUser {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsffUserToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsffUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsffUserToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsffUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsffUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsffUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsffUser | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsffUserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsffUserOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsffUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccounts {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccountsToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccountsToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccounts | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccountsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccountsOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUser {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // social_accounts - computed: true, optional: false, required: false
  private _socialAccounts = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserSocialAccountsList(this, "social_accounts", false);
  public get socialAccounts() {
    return this._socialAccounts;
  }
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsents {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsentsToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsentsToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsents | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsentsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsentsOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUser {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // terms_of_use_consents - computed: true, optional: false, required: false
  private _termsOfUseConsents = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserTermsOfUseConsentsList(this, "terms_of_use_consents", false);
  public get termsOfUseConsents() {
    return this._termsOfUseConsents;
  }
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserApiKeys {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserApiKeysToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserApiKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserApiKeysToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserApiKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserApiKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserApiKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserApiKeys | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserApiKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserApiKeysOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserApiKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserAuthTokens {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserAuthTokensToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserAuthTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserAuthTokensToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserAuthTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserAuthTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserAuthTokens | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserAuthTokens | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserAuthTokensList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserAuthTokensOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserAuthTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserCustomerSecretKeys {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserCustomerSecretKeysToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserCustomerSecretKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserCustomerSecretKeysToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserCustomerSecretKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserCustomerSecretKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserCustomerSecretKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserCustomerSecretKeys | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserCustomerSecretKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserCustomerSecretKeysOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserCustomerSecretKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserDbCredentials {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserDbCredentialsToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserDbCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserDbCredentialsToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserDbCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserDbCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserDbCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserDbCredentials | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserDbCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserDbCredentialsOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserDbCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOAuth2ClientCredentials {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOAuth2ClientCredentialsToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOAuth2ClientCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOAuth2ClientCredentialsToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOAuth2ClientCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOAuth2ClientCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOAuth2ClientCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOAuth2ClientCredentials | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOAuth2ClientCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOAuth2ClientCredentialsOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOAuth2ClientCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserSmtpCredentials {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserSmtpCredentialsToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserSmtpCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserSmtpCredentialsToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserSmtpCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserSmtpCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserSmtpCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserSmtpCredentials | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserSmtpCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserSmtpCredentialsOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserSmtpCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUser {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_keys - computed: true, optional: false, required: false
  private _apiKeys = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserApiKeysList(this, "api_keys", false);
  public get apiKeys() {
    return this._apiKeys;
  }

  // auth_tokens - computed: true, optional: false, required: false
  private _authTokens = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserAuthTokensList(this, "auth_tokens", false);
  public get authTokens() {
    return this._authTokens;
  }

  // customer_secret_keys - computed: true, optional: false, required: false
  private _customerSecretKeys = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserCustomerSecretKeysList(this, "customer_secret_keys", false);
  public get customerSecretKeys() {
    return this._customerSecretKeys;
  }

  // db_credentials - computed: true, optional: false, required: false
  private _dbCredentials = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserDbCredentialsList(this, "db_credentials", false);
  public get dbCredentials() {
    return this._dbCredentials;
  }

  // o_auth2client_credentials - computed: true, optional: false, required: false
  private _oAuth2ClientCredentials = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOAuth2ClientCredentialsList(this, "o_auth2client_credentials", false);
  public get oAuth2ClientCredentials() {
    return this._oAuth2ClientCredentials;
  }

  // smtp_credentials - computed: true, optional: false, required: false
  private _smtpCredentials = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserSmtpCredentialsList(this, "smtp_credentials", false);
  public get smtpCredentials() {
    return this._smtpCredentials;
  }
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserLocked {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserLockedToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserLocked): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserLockedToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserLocked): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserLockedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserLocked | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserLocked | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserLockedList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserLockedOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserLockedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLocked {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLockedToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLocked): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLockedToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLocked): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLockedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLocked | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLocked | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLockedList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLockedOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLockedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUser {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUser | undefined) {
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
  private _locked = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserLockedList(this, "locked", false);
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
  private _recoveryLocked = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserRecoveryLockedList(this, "recovery_locked", false);
  public get recoveryLocked() {
    return this._recoveryLocked;
  }
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAccounts {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAccountsToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAccountsToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAccounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAccounts | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAccountsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAccountsOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAppRoles {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAppRolesToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAppRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAppRolesToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAppRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAppRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAppRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAppRoles | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAppRolesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAppRolesOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAppRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserApplicableAuthenticationTargetApp {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserApplicableAuthenticationTargetAppToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserApplicableAuthenticationTargetApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserApplicableAuthenticationTargetAppToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserApplicableAuthenticationTargetApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserApplicableAuthenticationTargetAppOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserApplicableAuthenticationTargetApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserApplicableAuthenticationTargetApp | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserApplicableAuthenticationTargetAppList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserApplicableAuthenticationTargetAppOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserApplicableAuthenticationTargetAppOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetApp {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetAppToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetAppToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetAppOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetApp | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetAppList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetAppOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetAppOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserGrants {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserGrantsToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserGrants): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserGrantsToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserGrants): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserGrantsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserGrants | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserGrants | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserGrantsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserGrantsOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserGrantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserIdcsAppRolesLimitedToGroups {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserIdcsAppRolesLimitedToGroupsToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserIdcsAppRolesLimitedToGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserIdcsAppRolesLimitedToGroupsToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserIdcsAppRolesLimitedToGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserIdcsAppRolesLimitedToGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserIdcsAppRolesLimitedToGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserIdcsAppRolesLimitedToGroups | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserIdcsAppRolesLimitedToGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserIdcsAppRolesLimitedToGroupsOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserIdcsAppRolesLimitedToGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSupportAccounts {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSupportAccountsToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSupportAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSupportAccountsToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSupportAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSupportAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSupportAccounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSupportAccounts | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSupportAccountsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSupportAccountsOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSupportAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromApp {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromAppToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromAppToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromAppOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromApp | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromAppList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromAppOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromAppOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserUserToken {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserUserTokenToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserUserToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserUserTokenToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserUserToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserUserTokenOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserUserToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserUserToken | undefined) {
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

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserUserTokenList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserUserTokenOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserUserTokenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUser {
}

export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserToTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserToHclTerraform(struct?: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUser | undefined) {
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
  private _accounts = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAccountsList(this, "accounts", false);
  public get accounts() {
    return this._accounts;
  }

  // app_roles - computed: true, optional: false, required: false
  private _appRoles = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserAppRolesList(this, "app_roles", false);
  public get appRoles() {
    return this._appRoles;
  }

  // applicable_authentication_target_app - computed: true, optional: false, required: false
  private _applicableAuthenticationTargetApp = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserApplicableAuthenticationTargetAppList(this, "applicable_authentication_target_app", false);
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
  private _delegatedAuthenticationTargetApp = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserDelegatedAuthenticationTargetAppList(this, "delegated_authentication_target_app", false);
  public get delegatedAuthenticationTargetApp() {
    return this._delegatedAuthenticationTargetApp;
  }

  // do_not_show_getting_started - computed: true, optional: false, required: false
  public get doNotShowGettingStarted() {
    return this.getBooleanAttribute('do_not_show_getting_started');
  }

  // grants - computed: true, optional: false, required: false
  private _grants = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserGrantsList(this, "grants", false);
  public get grants() {
    return this._grants;
  }

  // group_membership_last_modified - computed: true, optional: false, required: false
  public get groupMembershipLastModified() {
    return this.getStringAttribute('group_membership_last_modified');
  }

  // idcs_app_roles_limited_to_groups - computed: true, optional: false, required: false
  private _idcsAppRolesLimitedToGroups = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserIdcsAppRolesLimitedToGroupsList(this, "idcs_app_roles_limited_to_groups", false);
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
  private _supportAccounts = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSupportAccountsList(this, "support_accounts", false);
  public get supportAccounts() {
    return this._supportAccounts;
  }

  // synced_from_app - computed: true, optional: false, required: false
  private _syncedFromApp = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserSyncedFromAppList(this, "synced_from_app", false);
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
  private _userToken = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserUserTokenList(this, "user_token", false);
  public get userToken() {
    return this._userToken;
  }
}

export class DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserOutputReference {
    return new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsUserX509Certificates {
}

export function dataOciIdentityDomainsUserX509CertificatesToTerraform(struct?: DataOciIdentityDomainsUserX509Certificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsUserX509CertificatesToHclTerraform(struct?: DataOciIdentityDomainsUserX509Certificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsUserX509CertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsUserX509Certificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsUserX509Certificates | undefined) {
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

export class DataOciIdentityDomainsUserX509CertificatesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsUserX509CertificatesOutputReference {
    return new DataOciIdentityDomainsUserX509CertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/identity_domains_user oci_identity_domains_user}
*/
export class DataOciIdentityDomainsUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_identity_domains_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciIdentityDomainsUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciIdentityDomainsUser to import
  * @param importFromId The id of the existing DataOciIdentityDomainsUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/identity_domains_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciIdentityDomainsUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_identity_domains_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/identity_domains_user oci_identity_domains_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciIdentityDomainsUserConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciIdentityDomainsUserConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_domains_user',
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
    this._attributeSets = config.attributeSets;
    this._attributes = config.attributes;
    this._authorization = config.authorization;
    this._idcsEndpoint = config.idcsEndpoint;
    this._resourceTypeSchemaVersion = config.resourceTypeSchemaVersion;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // addresses - computed: true, optional: false, required: false
  private _addresses = new DataOciIdentityDomainsUserAddressesList(this, "addresses", false);
  public get addresses() {
    return this._addresses;
  }

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
  private _emails = new DataOciIdentityDomainsUserEmailsList(this, "emails", false);
  public get emails() {
    return this._emails;
  }

  // entitlements - computed: true, optional: false, required: false
  private _entitlements = new DataOciIdentityDomainsUserEntitlementsList(this, "entitlements", false);
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
  private _groups = new DataOciIdentityDomainsUserGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idcs_created_by - computed: true, optional: false, required: false
  private _idcsCreatedBy = new DataOciIdentityDomainsUserIdcsCreatedByList(this, "idcs_created_by", false);
  public get idcsCreatedBy() {
    return this._idcsCreatedBy;
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

  // idcs_last_modified_by - computed: true, optional: false, required: false
  private _idcsLastModifiedBy = new DataOciIdentityDomainsUserIdcsLastModifiedByList(this, "idcs_last_modified_by", false);
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
  private _ims = new DataOciIdentityDomainsUserImsList(this, "ims", false);
  public get ims() {
    return this._ims;
  }

  // locale - computed: true, optional: false, required: false
  public get locale() {
    return this.getStringAttribute('locale');
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new DataOciIdentityDomainsUserMetaList(this, "meta", false);
  public get meta() {
    return this._meta;
  }

  // name - computed: true, optional: false, required: false
  private _name = new DataOciIdentityDomainsUserNameList(this, "name", false);
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
  private _phoneNumbers = new DataOciIdentityDomainsUserPhoneNumbersList(this, "phone_numbers", false);
  public get phoneNumbers() {
    return this._phoneNumbers;
  }

  // photos - computed: true, optional: false, required: false
  private _photos = new DataOciIdentityDomainsUserPhotosList(this, "photos", false);
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

  // roles - computed: true, optional: false, required: false
  private _roles = new DataOciIdentityDomainsUserRolesList(this, "roles", false);
  public get roles() {
    return this._roles;
  }

  // schemas - computed: true, optional: false, required: false
  public get schemas() {
    return this.getListAttribute('schemas');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataOciIdentityDomainsUserTagsList(this, "tags", false);
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
  private _urnietfparamsscimschemasextensionenterprise20User = new DataOciIdentityDomainsUserUrnietfparamsscimschemasextensionenterprise20UserList(this, "urnietfparamsscimschemasextensionenterprise20user", false);
  public get urnietfparamsscimschemasextensionenterprise20User() {
    return this._urnietfparamsscimschemasextensionenterprise20User;
  }

  // urnietfparamsscimschemasoracleidcsextension_oci_tags - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionOciTags = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionOciTagsList(this, "urnietfparamsscimschemasoracleidcsextension_oci_tags", false);
  public get urnietfparamsscimschemasoracleidcsextensionOciTags() {
    return this._urnietfparamsscimschemasoracleidcsextensionOciTags;
  }

  // urnietfparamsscimschemasoracleidcsextensionadaptive_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionadaptiveUser = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionadaptiveUserList(this, "urnietfparamsscimschemasoracleidcsextensionadaptive_user", false);
  public get urnietfparamsscimschemasoracleidcsextensionadaptiveUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionadaptiveUser;
  }

  // urnietfparamsscimschemasoracleidcsextensioncapabilities_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensioncapabilitiesUser = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensioncapabilitiesUserList(this, "urnietfparamsscimschemasoracleidcsextensioncapabilities_user", false);
  public get urnietfparamsscimschemasoracleidcsextensioncapabilitiesUser() {
    return this._urnietfparamsscimschemasoracleidcsextensioncapabilitiesUser;
  }

  // urnietfparamsscimschemasoracleidcsextensiondb_credentials_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensiondbCredentialsUser = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbCredentialsUserList(this, "urnietfparamsscimschemasoracleidcsextensiondb_credentials_user", false);
  public get urnietfparamsscimschemasoracleidcsextensiondbCredentialsUser() {
    return this._urnietfparamsscimschemasoracleidcsextensiondbCredentialsUser;
  }

  // urnietfparamsscimschemasoracleidcsextensiondb_user_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensiondbUserUser = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiondbUserUserList(this, "urnietfparamsscimschemasoracleidcsextensiondb_user_user", false);
  public get urnietfparamsscimschemasoracleidcsextensiondbUserUser() {
    return this._urnietfparamsscimschemasoracleidcsextensiondbUserUser;
  }

  // urnietfparamsscimschemasoracleidcsextensionkerberos_user_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionkerberosUserUser = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionkerberosUserUserList(this, "urnietfparamsscimschemasoracleidcsextensionkerberos_user_user", false);
  public get urnietfparamsscimschemasoracleidcsextensionkerberosUserUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionkerberosUserUser;
  }

  // urnietfparamsscimschemasoracleidcsextensionmfa_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionmfaUser = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionmfaUserList(this, "urnietfparamsscimschemasoracleidcsextensionmfa_user", false);
  public get urnietfparamsscimschemasoracleidcsextensionmfaUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionmfaUser;
  }

  // urnietfparamsscimschemasoracleidcsextensionpassword_state_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionpasswordStateUser = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordStateUserList(this, "urnietfparamsscimschemasoracleidcsextensionpassword_state_user", false);
  public get urnietfparamsscimschemasoracleidcsextensionpasswordStateUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionpasswordStateUser;
  }

  // urnietfparamsscimschemasoracleidcsextensionpasswordless_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionpasswordlessUser = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionpasswordlessUserList(this, "urnietfparamsscimschemasoracleidcsextensionpasswordless_user", false);
  public get urnietfparamsscimschemasoracleidcsextensionpasswordlessUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionpasswordlessUser;
  }

  // urnietfparamsscimschemasoracleidcsextensionposix_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionposixUser = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionposixUserList(this, "urnietfparamsscimschemasoracleidcsextensionposix_user", false);
  public get urnietfparamsscimschemasoracleidcsextensionposixUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionposixUser;
  }

  // urnietfparamsscimschemasoracleidcsextensionsecurity_questions_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUser = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUserList(this, "urnietfparamsscimschemasoracleidcsextensionsecurity_questions_user", false);
  public get urnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionsecurityQuestionsUser;
  }

  // urnietfparamsscimschemasoracleidcsextensionself_change_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionselfChangeUser = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList(this, "urnietfparamsscimschemasoracleidcsextensionself_change_user", false);
  public get urnietfparamsscimschemasoracleidcsextensionselfChangeUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionselfChangeUser;
  }

  // urnietfparamsscimschemasoracleidcsextensionself_registration_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionselfRegistrationUser = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionselfRegistrationUserList(this, "urnietfparamsscimschemasoracleidcsextensionself_registration_user", false);
  public get urnietfparamsscimschemasoracleidcsextensionselfRegistrationUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionselfRegistrationUser;
  }

  // urnietfparamsscimschemasoracleidcsextensionsff_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionsffUser = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsffUserList(this, "urnietfparamsscimschemasoracleidcsextensionsff_user", false);
  public get urnietfparamsscimschemasoracleidcsextensionsffUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionsffUser;
  }

  // urnietfparamsscimschemasoracleidcsextensionsocial_account_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionsocialAccountUser = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionsocialAccountUserList(this, "urnietfparamsscimschemasoracleidcsextensionsocial_account_user", false);
  public get urnietfparamsscimschemasoracleidcsextensionsocialAccountUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionsocialAccountUser;
  }

  // urnietfparamsscimschemasoracleidcsextensionterms_of_use_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensiontermsOfUseUser = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensiontermsOfUseUserList(this, "urnietfparamsscimschemasoracleidcsextensionterms_of_use_user", false);
  public get urnietfparamsscimschemasoracleidcsextensiontermsOfUseUser() {
    return this._urnietfparamsscimschemasoracleidcsextensiontermsOfUseUser;
  }

  // urnietfparamsscimschemasoracleidcsextensionuser_credentials_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionuserCredentialsUser = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserCredentialsUserList(this, "urnietfparamsscimschemasoracleidcsextensionuser_credentials_user", false);
  public get urnietfparamsscimschemasoracleidcsextensionuserCredentialsUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionuserCredentialsUser;
  }

  // urnietfparamsscimschemasoracleidcsextensionuser_state_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionuserStateUser = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserStateUserList(this, "urnietfparamsscimschemasoracleidcsextensionuser_state_user", false);
  public get urnietfparamsscimschemasoracleidcsextensionuserStateUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionuserStateUser;
  }

  // urnietfparamsscimschemasoracleidcsextensionuser_user - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionuserUser = new DataOciIdentityDomainsUserUrnietfparamsscimschemasoracleidcsextensionuserUserList(this, "urnietfparamsscimschemasoracleidcsextensionuser_user", false);
  public get urnietfparamsscimschemasoracleidcsextensionuserUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionuserUser;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
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
  private _x509Certificates = new DataOciIdentityDomainsUserX509CertificatesList(this, "x509certificates", false);
  public get x509Certificates() {
    return this._x509Certificates;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attribute_sets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attributeSets),
      attributes: cdktf.stringToTerraform(this._attributes),
      authorization: cdktf.stringToTerraform(this._authorization),
      idcs_endpoint: cdktf.stringToTerraform(this._idcsEndpoint),
      resource_type_schema_version: cdktf.stringToTerraform(this._resourceTypeSchemaVersion),
      user_id: cdktf.stringToTerraform(this._userId),
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
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
