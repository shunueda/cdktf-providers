// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cps_enrollments
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiCpsEnrollmentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Contract ID for which enrollments are retrieved
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cps_enrollments#contract_id DataAkamaiCpsEnrollments#contract_id}
  */
  readonly contractId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cps_enrollments#id DataAkamaiCpsEnrollments#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataAkamaiCpsEnrollmentsEnrollmentsAdminContact {
}

export function dataAkamaiCpsEnrollmentsEnrollmentsAdminContactToTerraform(struct?: DataAkamaiCpsEnrollmentsEnrollmentsAdminContact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiCpsEnrollmentsEnrollmentsAdminContactToHclTerraform(struct?: DataAkamaiCpsEnrollmentsEnrollmentsAdminContact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiCpsEnrollmentsEnrollmentsAdminContactOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiCpsEnrollmentsEnrollmentsAdminContact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCpsEnrollmentsEnrollmentsAdminContact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_line_one - computed: true, optional: false, required: false
  public get addressLineOne() {
    return this.getStringAttribute('address_line_one');
  }

  // address_line_two - computed: true, optional: false, required: false
  public get addressLineTwo() {
    return this.getStringAttribute('address_line_two');
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // country_code - computed: true, optional: false, required: false
  public get countryCode() {
    return this.getStringAttribute('country_code');
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

  // organization - computed: true, optional: false, required: false
  public get organization() {
    return this.getStringAttribute('organization');
  }

  // phone - computed: true, optional: false, required: false
  public get phone() {
    return this.getStringAttribute('phone');
  }

  // postal_code - computed: true, optional: false, required: false
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

export class DataAkamaiCpsEnrollmentsEnrollmentsAdminContactList extends cdktf.ComplexList {

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
  public get(index: number): DataAkamaiCpsEnrollmentsEnrollmentsAdminContactOutputReference {
    return new DataAkamaiCpsEnrollmentsEnrollmentsAdminContactOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiCpsEnrollmentsEnrollmentsCsr {
}

export function dataAkamaiCpsEnrollmentsEnrollmentsCsrToTerraform(struct?: DataAkamaiCpsEnrollmentsEnrollmentsCsr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiCpsEnrollmentsEnrollmentsCsrToHclTerraform(struct?: DataAkamaiCpsEnrollmentsEnrollmentsCsr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiCpsEnrollmentsEnrollmentsCsrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiCpsEnrollmentsEnrollmentsCsr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCpsEnrollmentsEnrollmentsCsr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // country_code - computed: true, optional: false, required: false
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }

  // organization - computed: true, optional: false, required: false
  public get organization() {
    return this.getStringAttribute('organization');
  }

  // organizational_unit - computed: true, optional: false, required: false
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }

  // preferred_trust_chain - computed: true, optional: false, required: false
  public get preferredTrustChain() {
    return this.getStringAttribute('preferred_trust_chain');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataAkamaiCpsEnrollmentsEnrollmentsCsrList extends cdktf.ComplexList {

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
  public get(index: number): DataAkamaiCpsEnrollmentsEnrollmentsCsrOutputReference {
    return new DataAkamaiCpsEnrollmentsEnrollmentsCsrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiCpsEnrollmentsEnrollmentsNetworkConfigurationClientMutualAuthentication {
}

export function dataAkamaiCpsEnrollmentsEnrollmentsNetworkConfigurationClientMutualAuthenticationToTerraform(struct?: DataAkamaiCpsEnrollmentsEnrollmentsNetworkConfigurationClientMutualAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiCpsEnrollmentsEnrollmentsNetworkConfigurationClientMutualAuthenticationToHclTerraform(struct?: DataAkamaiCpsEnrollmentsEnrollmentsNetworkConfigurationClientMutualAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiCpsEnrollmentsEnrollmentsNetworkConfigurationClientMutualAuthenticationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiCpsEnrollmentsEnrollmentsNetworkConfigurationClientMutualAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCpsEnrollmentsEnrollmentsNetworkConfigurationClientMutualAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ocsp_enabled - computed: true, optional: false, required: false
  public get ocspEnabled() {
    return this.getBooleanAttribute('ocsp_enabled');
  }

  // send_ca_list_to_client - computed: true, optional: false, required: false
  public get sendCaListToClient() {
    return this.getBooleanAttribute('send_ca_list_to_client');
  }

  // set_id - computed: true, optional: false, required: false
  public get setId() {
    return this.getStringAttribute('set_id');
  }
}

export class DataAkamaiCpsEnrollmentsEnrollmentsNetworkConfigurationClientMutualAuthenticationList extends cdktf.ComplexList {

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
  public get(index: number): DataAkamaiCpsEnrollmentsEnrollmentsNetworkConfigurationClientMutualAuthenticationOutputReference {
    return new DataAkamaiCpsEnrollmentsEnrollmentsNetworkConfigurationClientMutualAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiCpsEnrollmentsEnrollmentsNetworkConfiguration {
}

export function dataAkamaiCpsEnrollmentsEnrollmentsNetworkConfigurationToTerraform(struct?: DataAkamaiCpsEnrollmentsEnrollmentsNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiCpsEnrollmentsEnrollmentsNetworkConfigurationToHclTerraform(struct?: DataAkamaiCpsEnrollmentsEnrollmentsNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiCpsEnrollmentsEnrollmentsNetworkConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiCpsEnrollmentsEnrollmentsNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCpsEnrollmentsEnrollmentsNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_mutual_authentication - computed: true, optional: false, required: false
  private _clientMutualAuthentication = new DataAkamaiCpsEnrollmentsEnrollmentsNetworkConfigurationClientMutualAuthenticationList(this, "client_mutual_authentication", true);
  public get clientMutualAuthentication() {
    return this._clientMutualAuthentication;
  }

  // clone_dns_names - computed: true, optional: false, required: false
  public get cloneDnsNames() {
    return this.getBooleanAttribute('clone_dns_names');
  }

  // disallowed_tls_versions - computed: true, optional: false, required: false
  public get disallowedTlsVersions() {
    return cdktf.Fn.tolist(this.getListAttribute('disallowed_tls_versions'));
  }

  // geography - computed: true, optional: false, required: false
  public get geography() {
    return this.getStringAttribute('geography');
  }

  // must_have_ciphers - computed: true, optional: false, required: false
  public get mustHaveCiphers() {
    return this.getStringAttribute('must_have_ciphers');
  }

  // ocsp_stapling - computed: true, optional: false, required: false
  public get ocspStapling() {
    return this.getStringAttribute('ocsp_stapling');
  }

  // preferred_ciphers - computed: true, optional: false, required: false
  public get preferredCiphers() {
    return this.getStringAttribute('preferred_ciphers');
  }

  // quic_enabled - computed: true, optional: false, required: false
  public get quicEnabled() {
    return this.getBooleanAttribute('quic_enabled');
  }
}

export class DataAkamaiCpsEnrollmentsEnrollmentsNetworkConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAkamaiCpsEnrollmentsEnrollmentsNetworkConfigurationOutputReference {
    return new DataAkamaiCpsEnrollmentsEnrollmentsNetworkConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiCpsEnrollmentsEnrollmentsOrganization {
}

export function dataAkamaiCpsEnrollmentsEnrollmentsOrganizationToTerraform(struct?: DataAkamaiCpsEnrollmentsEnrollmentsOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiCpsEnrollmentsEnrollmentsOrganizationToHclTerraform(struct?: DataAkamaiCpsEnrollmentsEnrollmentsOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiCpsEnrollmentsEnrollmentsOrganizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiCpsEnrollmentsEnrollmentsOrganization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCpsEnrollmentsEnrollmentsOrganization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_line_one - computed: true, optional: false, required: false
  public get addressLineOne() {
    return this.getStringAttribute('address_line_one');
  }

  // address_line_two - computed: true, optional: false, required: false
  public get addressLineTwo() {
    return this.getStringAttribute('address_line_two');
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // country_code - computed: true, optional: false, required: false
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // phone - computed: true, optional: false, required: false
  public get phone() {
    return this.getStringAttribute('phone');
  }

  // postal_code - computed: true, optional: false, required: false
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataAkamaiCpsEnrollmentsEnrollmentsOrganizationList extends cdktf.ComplexList {

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
  public get(index: number): DataAkamaiCpsEnrollmentsEnrollmentsOrganizationOutputReference {
    return new DataAkamaiCpsEnrollmentsEnrollmentsOrganizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiCpsEnrollmentsEnrollmentsTechContact {
}

export function dataAkamaiCpsEnrollmentsEnrollmentsTechContactToTerraform(struct?: DataAkamaiCpsEnrollmentsEnrollmentsTechContact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiCpsEnrollmentsEnrollmentsTechContactToHclTerraform(struct?: DataAkamaiCpsEnrollmentsEnrollmentsTechContact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiCpsEnrollmentsEnrollmentsTechContactOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiCpsEnrollmentsEnrollmentsTechContact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCpsEnrollmentsEnrollmentsTechContact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_line_one - computed: true, optional: false, required: false
  public get addressLineOne() {
    return this.getStringAttribute('address_line_one');
  }

  // address_line_two - computed: true, optional: false, required: false
  public get addressLineTwo() {
    return this.getStringAttribute('address_line_two');
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // country_code - computed: true, optional: false, required: false
  public get countryCode() {
    return this.getStringAttribute('country_code');
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

  // organization - computed: true, optional: false, required: false
  public get organization() {
    return this.getStringAttribute('organization');
  }

  // phone - computed: true, optional: false, required: false
  public get phone() {
    return this.getStringAttribute('phone');
  }

  // postal_code - computed: true, optional: false, required: false
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

export class DataAkamaiCpsEnrollmentsEnrollmentsTechContactList extends cdktf.ComplexList {

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
  public get(index: number): DataAkamaiCpsEnrollmentsEnrollmentsTechContactOutputReference {
    return new DataAkamaiCpsEnrollmentsEnrollmentsTechContactOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiCpsEnrollmentsEnrollments {
}

export function dataAkamaiCpsEnrollmentsEnrollmentsToTerraform(struct?: DataAkamaiCpsEnrollmentsEnrollments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiCpsEnrollmentsEnrollmentsToHclTerraform(struct?: DataAkamaiCpsEnrollmentsEnrollments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiCpsEnrollmentsEnrollmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiCpsEnrollmentsEnrollments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCpsEnrollmentsEnrollments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_contact - computed: true, optional: false, required: false
  private _adminContact = new DataAkamaiCpsEnrollmentsEnrollmentsAdminContactList(this, "admin_contact", true);
  public get adminContact() {
    return this._adminContact;
  }

  // assigned_slots - computed: true, optional: false, required: false
  public get assignedSlots() {
    return this.getNumberListAttribute('assigned_slots');
  }

  // certificate_chain_type - computed: true, optional: false, required: false
  public get certificateChainType() {
    return this.getStringAttribute('certificate_chain_type');
  }

  // certificate_type - computed: true, optional: false, required: false
  public get certificateType() {
    return this.getStringAttribute('certificate_type');
  }

  // common_name - computed: true, optional: false, required: false
  public get commonName() {
    return this.getStringAttribute('common_name');
  }

  // csr - computed: true, optional: false, required: false
  private _csr = new DataAkamaiCpsEnrollmentsEnrollmentsCsrList(this, "csr", true);
  public get csr() {
    return this._csr;
  }

  // enable_multi_stacked_certificates - computed: true, optional: false, required: false
  public get enableMultiStackedCertificates() {
    return this.getBooleanAttribute('enable_multi_stacked_certificates');
  }

  // enrollment_id - computed: true, optional: false, required: false
  public get enrollmentId() {
    return this.getNumberAttribute('enrollment_id');
  }

  // network_configuration - computed: true, optional: false, required: false
  private _networkConfiguration = new DataAkamaiCpsEnrollmentsEnrollmentsNetworkConfigurationList(this, "network_configuration", true);
  public get networkConfiguration() {
    return this._networkConfiguration;
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getNumberAttribute('org_id');
  }

  // organization - computed: true, optional: false, required: false
  private _organization = new DataAkamaiCpsEnrollmentsEnrollmentsOrganizationList(this, "organization", true);
  public get organization() {
    return this._organization;
  }

  // pending_changes - computed: true, optional: false, required: false
  public get pendingChanges() {
    return this.getBooleanAttribute('pending_changes');
  }

  // production_slots - computed: true, optional: false, required: false
  public get productionSlots() {
    return this.getNumberListAttribute('production_slots');
  }

  // registration_authority - computed: true, optional: false, required: false
  public get registrationAuthority() {
    return this.getStringAttribute('registration_authority');
  }

  // sans - computed: true, optional: false, required: false
  public get sans() {
    return cdktf.Fn.tolist(this.getListAttribute('sans'));
  }

  // secure_network - computed: true, optional: false, required: false
  public get secureNetwork() {
    return this.getStringAttribute('secure_network');
  }

  // signature_algorithm - computed: true, optional: false, required: false
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }

  // sni_only - computed: true, optional: false, required: false
  public get sniOnly() {
    return this.getBooleanAttribute('sni_only');
  }

  // staging_slots - computed: true, optional: false, required: false
  public get stagingSlots() {
    return this.getNumberListAttribute('staging_slots');
  }

  // tech_contact - computed: true, optional: false, required: false
  private _techContact = new DataAkamaiCpsEnrollmentsEnrollmentsTechContactList(this, "tech_contact", true);
  public get techContact() {
    return this._techContact;
  }

  // validation_type - computed: true, optional: false, required: false
  public get validationType() {
    return this.getStringAttribute('validation_type');
  }
}

export class DataAkamaiCpsEnrollmentsEnrollmentsList extends cdktf.ComplexList {

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
  public get(index: number): DataAkamaiCpsEnrollmentsEnrollmentsOutputReference {
    return new DataAkamaiCpsEnrollmentsEnrollmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cps_enrollments akamai_cps_enrollments}
*/
export class DataAkamaiCpsEnrollments extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_cps_enrollments";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiCpsEnrollments resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiCpsEnrollments to import
  * @param importFromId The id of the existing DataAkamaiCpsEnrollments that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cps_enrollments#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiCpsEnrollments to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_cps_enrollments", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cps_enrollments akamai_cps_enrollments} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiCpsEnrollmentsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiCpsEnrollmentsConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_cps_enrollments',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contractId = config.contractId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contract_id - computed: false, optional: false, required: true
  private _contractId?: string; 
  public get contractId() {
    return this.getStringAttribute('contract_id');
  }
  public set contractId(value: string) {
    this._contractId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractIdInput() {
    return this._contractId;
  }

  // enrollments - computed: true, optional: false, required: false
  private _enrollments = new DataAkamaiCpsEnrollmentsEnrollmentsList(this, "enrollments", true);
  public get enrollments() {
    return this._enrollments;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contract_id: cdktf.stringToTerraform(this._contractId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contract_id: {
        value: cdktf.stringToHclTerraform(this._contractId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
