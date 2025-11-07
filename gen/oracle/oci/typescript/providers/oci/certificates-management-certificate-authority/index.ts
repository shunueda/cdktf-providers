// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificatesManagementCertificateAuthorityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#compartment_id CertificatesManagementCertificateAuthority#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#defined_tags CertificatesManagementCertificateAuthority#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#description CertificatesManagementCertificateAuthority#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#freeform_tags CertificatesManagementCertificateAuthority#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#id CertificatesManagementCertificateAuthority#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#kms_key_id CertificatesManagementCertificateAuthority#kms_key_id}
  */
  readonly kmsKeyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#name CertificatesManagementCertificateAuthority#name}
  */
  readonly name: string;
  /**
  * certificate_authority_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#certificate_authority_config CertificatesManagementCertificateAuthority#certificate_authority_config}
  */
  readonly certificateAuthorityConfig: CertificatesManagementCertificateAuthorityCertificateAuthorityConfig;
  /**
  * certificate_authority_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#certificate_authority_rules CertificatesManagementCertificateAuthority#certificate_authority_rules}
  */
  readonly certificateAuthorityRules?: CertificatesManagementCertificateAuthorityCertificateAuthorityRules[] | cdktf.IResolvable;
  /**
  * certificate_revocation_list_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#certificate_revocation_list_details CertificatesManagementCertificateAuthority#certificate_revocation_list_details}
  */
  readonly certificateRevocationListDetails?: CertificatesManagementCertificateAuthorityCertificateRevocationListDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#timeouts CertificatesManagementCertificateAuthority#timeouts}
  */
  readonly timeouts?: CertificatesManagementCertificateAuthorityTimeouts;
}
export interface CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus {
}

export function certificatesManagementCertificateAuthorityCurrentVersionRevocationStatusToTerraform(struct?: CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function certificatesManagementCertificateAuthorityCurrentVersionRevocationStatusToHclTerraform(struct?: CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // revocation_reason - computed: true, optional: false, required: false
  public get revocationReason() {
    return this.getStringAttribute('revocation_reason');
  }

  // time_of_revocation - computed: true, optional: false, required: false
  public get timeOfRevocation() {
    return this.getStringAttribute('time_of_revocation');
  }
}

export class CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList extends cdktf.ComplexList {

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
  public get(index: number): CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference {
    return new CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertificatesManagementCertificateAuthorityCurrentVersionValidity {
}

export function certificatesManagementCertificateAuthorityCurrentVersionValidityToTerraform(struct?: CertificatesManagementCertificateAuthorityCurrentVersionValidity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function certificatesManagementCertificateAuthorityCurrentVersionValidityToHclTerraform(struct?: CertificatesManagementCertificateAuthorityCurrentVersionValidity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CertificatesManagementCertificateAuthorityCurrentVersionValidity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificatesManagementCertificateAuthorityCurrentVersionValidity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // time_of_validity_not_after - computed: true, optional: false, required: false
  public get timeOfValidityNotAfter() {
    return this.getStringAttribute('time_of_validity_not_after');
  }

  // time_of_validity_not_before - computed: true, optional: false, required: false
  public get timeOfValidityNotBefore() {
    return this.getStringAttribute('time_of_validity_not_before');
  }
}

export class CertificatesManagementCertificateAuthorityCurrentVersionValidityList extends cdktf.ComplexList {

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
  public get(index: number): CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference {
    return new CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertificatesManagementCertificateAuthorityCurrentVersion {
}

export function certificatesManagementCertificateAuthorityCurrentVersionToTerraform(struct?: CertificatesManagementCertificateAuthorityCurrentVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function certificatesManagementCertificateAuthorityCurrentVersionToHclTerraform(struct?: CertificatesManagementCertificateAuthorityCurrentVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CertificatesManagementCertificateAuthorityCurrentVersionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CertificatesManagementCertificateAuthorityCurrentVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificatesManagementCertificateAuthorityCurrentVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_authority_id - computed: true, optional: false, required: false
  public get certificateAuthorityId() {
    return this.getStringAttribute('certificate_authority_id');
  }

  // issuer_ca_version_number - computed: true, optional: false, required: false
  public get issuerCaVersionNumber() {
    return this.getStringAttribute('issuer_ca_version_number');
  }

  // revocation_status - computed: true, optional: false, required: false
  private _revocationStatus = new CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList(this, "revocation_status", false);
  public get revocationStatus() {
    return this._revocationStatus;
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // stages - computed: true, optional: false, required: false
  public get stages() {
    return this.getListAttribute('stages');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_of_deletion - computed: true, optional: false, required: false
  public get timeOfDeletion() {
    return this.getStringAttribute('time_of_deletion');
  }

  // validity - computed: true, optional: false, required: false
  private _validity = new CertificatesManagementCertificateAuthorityCurrentVersionValidityList(this, "validity", false);
  public get validity() {
    return this._validity;
  }

  // version_name - computed: true, optional: false, required: false
  public get versionName() {
    return this.getStringAttribute('version_name');
  }

  // version_number - computed: true, optional: false, required: false
  public get versionNumber() {
    return this.getStringAttribute('version_number');
  }
}

export class CertificatesManagementCertificateAuthorityCurrentVersionList extends cdktf.ComplexList {

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
  public get(index: number): CertificatesManagementCertificateAuthorityCurrentVersionOutputReference {
    return new CertificatesManagementCertificateAuthorityCurrentVersionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertificatesManagementCertificateAuthoritySubject {
}

export function certificatesManagementCertificateAuthoritySubjectToTerraform(struct?: CertificatesManagementCertificateAuthoritySubject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function certificatesManagementCertificateAuthoritySubjectToHclTerraform(struct?: CertificatesManagementCertificateAuthoritySubject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CertificatesManagementCertificateAuthoritySubjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CertificatesManagementCertificateAuthoritySubject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificatesManagementCertificateAuthoritySubject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // common_name - computed: true, optional: false, required: false
  public get commonName() {
    return this.getStringAttribute('common_name');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // distinguished_name_qualifier - computed: true, optional: false, required: false
  public get distinguishedNameQualifier() {
    return this.getStringAttribute('distinguished_name_qualifier');
  }

  // domain_component - computed: true, optional: false, required: false
  public get domainComponent() {
    return this.getStringAttribute('domain_component');
  }

  // generation_qualifier - computed: true, optional: false, required: false
  public get generationQualifier() {
    return this.getStringAttribute('generation_qualifier');
  }

  // given_name - computed: true, optional: false, required: false
  public get givenName() {
    return this.getStringAttribute('given_name');
  }

  // initials - computed: true, optional: false, required: false
  public get initials() {
    return this.getStringAttribute('initials');
  }

  // locality_name - computed: true, optional: false, required: false
  public get localityName() {
    return this.getStringAttribute('locality_name');
  }

  // organization - computed: true, optional: false, required: false
  public get organization() {
    return this.getStringAttribute('organization');
  }

  // organizational_unit - computed: true, optional: false, required: false
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }

  // pseudonym - computed: true, optional: false, required: false
  public get pseudonym() {
    return this.getStringAttribute('pseudonym');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // state_or_province_name - computed: true, optional: false, required: false
  public get stateOrProvinceName() {
    return this.getStringAttribute('state_or_province_name');
  }

  // street - computed: true, optional: false, required: false
  public get street() {
    return this.getStringAttribute('street');
  }

  // surname - computed: true, optional: false, required: false
  public get surname() {
    return this.getStringAttribute('surname');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }
}

export class CertificatesManagementCertificateAuthoritySubjectList extends cdktf.ComplexList {

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
  public get(index: number): CertificatesManagementCertificateAuthoritySubjectOutputReference {
    return new CertificatesManagementCertificateAuthoritySubjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#common_name CertificatesManagementCertificateAuthority#common_name}
  */
  readonly commonName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#country CertificatesManagementCertificateAuthority#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#distinguished_name_qualifier CertificatesManagementCertificateAuthority#distinguished_name_qualifier}
  */
  readonly distinguishedNameQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#domain_component CertificatesManagementCertificateAuthority#domain_component}
  */
  readonly domainComponent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#generation_qualifier CertificatesManagementCertificateAuthority#generation_qualifier}
  */
  readonly generationQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#given_name CertificatesManagementCertificateAuthority#given_name}
  */
  readonly givenName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#initials CertificatesManagementCertificateAuthority#initials}
  */
  readonly initials?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#locality_name CertificatesManagementCertificateAuthority#locality_name}
  */
  readonly localityName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#organization CertificatesManagementCertificateAuthority#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#organizational_unit CertificatesManagementCertificateAuthority#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#pseudonym CertificatesManagementCertificateAuthority#pseudonym}
  */
  readonly pseudonym?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#serial_number CertificatesManagementCertificateAuthority#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#state_or_province_name CertificatesManagementCertificateAuthority#state_or_province_name}
  */
  readonly stateOrProvinceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#street CertificatesManagementCertificateAuthority#street}
  */
  readonly street?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#surname CertificatesManagementCertificateAuthority#surname}
  */
  readonly surname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#title CertificatesManagementCertificateAuthority#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#user_id CertificatesManagementCertificateAuthority#user_id}
  */
  readonly userId?: string;
}

export function certificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectToTerraform(struct?: CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference | CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
    country: cdktf.stringToTerraform(struct!.country),
    distinguished_name_qualifier: cdktf.stringToTerraform(struct!.distinguishedNameQualifier),
    domain_component: cdktf.stringToTerraform(struct!.domainComponent),
    generation_qualifier: cdktf.stringToTerraform(struct!.generationQualifier),
    given_name: cdktf.stringToTerraform(struct!.givenName),
    initials: cdktf.stringToTerraform(struct!.initials),
    locality_name: cdktf.stringToTerraform(struct!.localityName),
    organization: cdktf.stringToTerraform(struct!.organization),
    organizational_unit: cdktf.stringToTerraform(struct!.organizationalUnit),
    pseudonym: cdktf.stringToTerraform(struct!.pseudonym),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    state_or_province_name: cdktf.stringToTerraform(struct!.stateOrProvinceName),
    street: cdktf.stringToTerraform(struct!.street),
    surname: cdktf.stringToTerraform(struct!.surname),
    title: cdktf.stringToTerraform(struct!.title),
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}


export function certificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectToHclTerraform(struct?: CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference | CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_name: {
      value: cdktf.stringToHclTerraform(struct!.commonName),
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
    distinguished_name_qualifier: {
      value: cdktf.stringToHclTerraform(struct!.distinguishedNameQualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_component: {
      value: cdktf.stringToHclTerraform(struct!.domainComponent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generation_qualifier: {
      value: cdktf.stringToHclTerraform(struct!.generationQualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    given_name: {
      value: cdktf.stringToHclTerraform(struct!.givenName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initials: {
      value: cdktf.stringToHclTerraform(struct!.initials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locality_name: {
      value: cdktf.stringToHclTerraform(struct!.localityName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organizational_unit: {
      value: cdktf.stringToHclTerraform(struct!.organizationalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pseudonym: {
      value: cdktf.stringToHclTerraform(struct!.pseudonym),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_or_province_name: {
      value: cdktf.stringToHclTerraform(struct!.stateOrProvinceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    street: {
      value: cdktf.stringToHclTerraform(struct!.street),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    surname: {
      value: cdktf.stringToHclTerraform(struct!.surname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._distinguishedNameQualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.distinguishedNameQualifier = this._distinguishedNameQualifier;
    }
    if (this._domainComponent !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainComponent = this._domainComponent;
    }
    if (this._generationQualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.generationQualifier = this._generationQualifier;
    }
    if (this._givenName !== undefined) {
      hasAnyValues = true;
      internalValueResult.givenName = this._givenName;
    }
    if (this._initials !== undefined) {
      hasAnyValues = true;
      internalValueResult.initials = this._initials;
    }
    if (this._localityName !== undefined) {
      hasAnyValues = true;
      internalValueResult.localityName = this._localityName;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._organizationalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit;
    }
    if (this._pseudonym !== undefined) {
      hasAnyValues = true;
      internalValueResult.pseudonym = this._pseudonym;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._stateOrProvinceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateOrProvinceName = this._stateOrProvinceName;
    }
    if (this._street !== undefined) {
      hasAnyValues = true;
      internalValueResult.street = this._street;
    }
    if (this._surname !== undefined) {
      hasAnyValues = true;
      internalValueResult.surname = this._surname;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commonName = undefined;
      this._country = undefined;
      this._distinguishedNameQualifier = undefined;
      this._domainComponent = undefined;
      this._generationQualifier = undefined;
      this._givenName = undefined;
      this._initials = undefined;
      this._localityName = undefined;
      this._organization = undefined;
      this._organizationalUnit = undefined;
      this._pseudonym = undefined;
      this._serialNumber = undefined;
      this._stateOrProvinceName = undefined;
      this._street = undefined;
      this._surname = undefined;
      this._title = undefined;
      this._userId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commonName = value.commonName;
      this._country = value.country;
      this._distinguishedNameQualifier = value.distinguishedNameQualifier;
      this._domainComponent = value.domainComponent;
      this._generationQualifier = value.generationQualifier;
      this._givenName = value.givenName;
      this._initials = value.initials;
      this._localityName = value.localityName;
      this._organization = value.organization;
      this._organizationalUnit = value.organizationalUnit;
      this._pseudonym = value.pseudonym;
      this._serialNumber = value.serialNumber;
      this._stateOrProvinceName = value.stateOrProvinceName;
      this._street = value.street;
      this._surname = value.surname;
      this._title = value.title;
      this._userId = value.userId;
    }
  }

  // common_name - computed: false, optional: false, required: true
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // country - computed: false, optional: true, required: false
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

  // distinguished_name_qualifier - computed: false, optional: true, required: false
  private _distinguishedNameQualifier?: string; 
  public get distinguishedNameQualifier() {
    return this.getStringAttribute('distinguished_name_qualifier');
  }
  public set distinguishedNameQualifier(value: string) {
    this._distinguishedNameQualifier = value;
  }
  public resetDistinguishedNameQualifier() {
    this._distinguishedNameQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distinguishedNameQualifierInput() {
    return this._distinguishedNameQualifier;
  }

  // domain_component - computed: false, optional: true, required: false
  private _domainComponent?: string; 
  public get domainComponent() {
    return this.getStringAttribute('domain_component');
  }
  public set domainComponent(value: string) {
    this._domainComponent = value;
  }
  public resetDomainComponent() {
    this._domainComponent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainComponentInput() {
    return this._domainComponent;
  }

  // generation_qualifier - computed: false, optional: true, required: false
  private _generationQualifier?: string; 
  public get generationQualifier() {
    return this.getStringAttribute('generation_qualifier');
  }
  public set generationQualifier(value: string) {
    this._generationQualifier = value;
  }
  public resetGenerationQualifier() {
    this._generationQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationQualifierInput() {
    return this._generationQualifier;
  }

  // given_name - computed: false, optional: true, required: false
  private _givenName?: string; 
  public get givenName() {
    return this.getStringAttribute('given_name');
  }
  public set givenName(value: string) {
    this._givenName = value;
  }
  public resetGivenName() {
    this._givenName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get givenNameInput() {
    return this._givenName;
  }

  // initials - computed: false, optional: true, required: false
  private _initials?: string; 
  public get initials() {
    return this.getStringAttribute('initials');
  }
  public set initials(value: string) {
    this._initials = value;
  }
  public resetInitials() {
    this._initials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialsInput() {
    return this._initials;
  }

  // locality_name - computed: false, optional: true, required: false
  private _localityName?: string; 
  public get localityName() {
    return this.getStringAttribute('locality_name');
  }
  public set localityName(value: string) {
    this._localityName = value;
  }
  public resetLocalityName() {
    this._localityName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityNameInput() {
    return this._localityName;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // organizational_unit - computed: false, optional: true, required: false
  private _organizationalUnit?: string; 
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }
  public set organizationalUnit(value: string) {
    this._organizationalUnit = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit;
  }

  // pseudonym - computed: false, optional: true, required: false
  private _pseudonym?: string; 
  public get pseudonym() {
    return this.getStringAttribute('pseudonym');
  }
  public set pseudonym(value: string) {
    this._pseudonym = value;
  }
  public resetPseudonym() {
    this._pseudonym = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pseudonymInput() {
    return this._pseudonym;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // state_or_province_name - computed: false, optional: true, required: false
  private _stateOrProvinceName?: string; 
  public get stateOrProvinceName() {
    return this.getStringAttribute('state_or_province_name');
  }
  public set stateOrProvinceName(value: string) {
    this._stateOrProvinceName = value;
  }
  public resetStateOrProvinceName() {
    this._stateOrProvinceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateOrProvinceNameInput() {
    return this._stateOrProvinceName;
  }

  // street - computed: false, optional: true, required: false
  private _street?: string; 
  public get street() {
    return this.getStringAttribute('street');
  }
  public set street(value: string) {
    this._street = value;
  }
  public resetStreet() {
    this._street = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streetInput() {
    return this._street;
  }

  // surname - computed: false, optional: true, required: false
  private _surname?: string; 
  public get surname() {
    return this.getStringAttribute('surname');
  }
  public set surname(value: string) {
    this._surname = value;
  }
  public resetSurname() {
    this._surname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surnameInput() {
    return this._surname;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}
export interface CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#time_of_validity_not_after CertificatesManagementCertificateAuthority#time_of_validity_not_after}
  */
  readonly timeOfValidityNotAfter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#time_of_validity_not_before CertificatesManagementCertificateAuthority#time_of_validity_not_before}
  */
  readonly timeOfValidityNotBefore?: string;
}

export function certificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityToTerraform(struct?: CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference | CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_of_validity_not_after: cdktf.stringToTerraform(struct!.timeOfValidityNotAfter),
    time_of_validity_not_before: cdktf.stringToTerraform(struct!.timeOfValidityNotBefore),
  }
}


export function certificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityToHclTerraform(struct?: CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference | CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time_of_validity_not_after: {
      value: cdktf.stringToHclTerraform(struct!.timeOfValidityNotAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_of_validity_not_before: {
      value: cdktf.stringToHclTerraform(struct!.timeOfValidityNotBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeOfValidityNotAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOfValidityNotAfter = this._timeOfValidityNotAfter;
    }
    if (this._timeOfValidityNotBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOfValidityNotBefore = this._timeOfValidityNotBefore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeOfValidityNotAfter = undefined;
      this._timeOfValidityNotBefore = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeOfValidityNotAfter = value.timeOfValidityNotAfter;
      this._timeOfValidityNotBefore = value.timeOfValidityNotBefore;
    }
  }

  // time_of_validity_not_after - computed: false, optional: false, required: true
  private _timeOfValidityNotAfter?: string; 
  public get timeOfValidityNotAfter() {
    return this.getStringAttribute('time_of_validity_not_after');
  }
  public set timeOfValidityNotAfter(value: string) {
    this._timeOfValidityNotAfter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfValidityNotAfterInput() {
    return this._timeOfValidityNotAfter;
  }

  // time_of_validity_not_before - computed: false, optional: true, required: false
  private _timeOfValidityNotBefore?: string; 
  public get timeOfValidityNotBefore() {
    return this.getStringAttribute('time_of_validity_not_before');
  }
  public set timeOfValidityNotBefore(value: string) {
    this._timeOfValidityNotBefore = value;
  }
  public resetTimeOfValidityNotBefore() {
    this._timeOfValidityNotBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfValidityNotBeforeInput() {
    return this._timeOfValidityNotBefore;
  }
}
export interface CertificatesManagementCertificateAuthorityCertificateAuthorityConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#config_type CertificatesManagementCertificateAuthority#config_type}
  */
  readonly configType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#issuer_certificate_authority_id CertificatesManagementCertificateAuthority#issuer_certificate_authority_id}
  */
  readonly issuerCertificateAuthorityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#signing_algorithm CertificatesManagementCertificateAuthority#signing_algorithm}
  */
  readonly signingAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#version_name CertificatesManagementCertificateAuthority#version_name}
  */
  readonly versionName?: string;
  /**
  * subject block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#subject CertificatesManagementCertificateAuthority#subject}
  */
  readonly subject: CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject;
  /**
  * validity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#validity CertificatesManagementCertificateAuthority#validity}
  */
  readonly validity?: CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity;
}

export function certificatesManagementCertificateAuthorityCertificateAuthorityConfigToTerraform(struct?: CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference | CertificatesManagementCertificateAuthorityCertificateAuthorityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_type: cdktf.stringToTerraform(struct!.configType),
    issuer_certificate_authority_id: cdktf.stringToTerraform(struct!.issuerCertificateAuthorityId),
    signing_algorithm: cdktf.stringToTerraform(struct!.signingAlgorithm),
    version_name: cdktf.stringToTerraform(struct!.versionName),
    subject: certificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectToTerraform(struct!.subject),
    validity: certificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityToTerraform(struct!.validity),
  }
}


export function certificatesManagementCertificateAuthorityCertificateAuthorityConfigToHclTerraform(struct?: CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference | CertificatesManagementCertificateAuthorityCertificateAuthorityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_type: {
      value: cdktf.stringToHclTerraform(struct!.configType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer_certificate_authority_id: {
      value: cdktf.stringToHclTerraform(struct!.issuerCertificateAuthorityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.signingAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_name: {
      value: cdktf.stringToHclTerraform(struct!.versionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: certificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectToHclTerraform(struct!.subject),
      isBlock: true,
      type: "list",
      storageClassType: "CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList",
    },
    validity: {
      value: certificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityToHclTerraform(struct!.validity),
      isBlock: true,
      type: "list",
      storageClassType: "CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CertificatesManagementCertificateAuthorityCertificateAuthorityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configType !== undefined) {
      hasAnyValues = true;
      internalValueResult.configType = this._configType;
    }
    if (this._issuerCertificateAuthorityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerCertificateAuthorityId = this._issuerCertificateAuthorityId;
    }
    if (this._signingAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingAlgorithm = this._signingAlgorithm;
    }
    if (this._versionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionName = this._versionName;
    }
    if (this._subject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject?.internalValue;
    }
    if (this._validity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validity = this._validity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificatesManagementCertificateAuthorityCertificateAuthorityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configType = undefined;
      this._issuerCertificateAuthorityId = undefined;
      this._signingAlgorithm = undefined;
      this._versionName = undefined;
      this._subject.internalValue = undefined;
      this._validity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configType = value.configType;
      this._issuerCertificateAuthorityId = value.issuerCertificateAuthorityId;
      this._signingAlgorithm = value.signingAlgorithm;
      this._versionName = value.versionName;
      this._subject.internalValue = value.subject;
      this._validity.internalValue = value.validity;
    }
  }

  // config_type - computed: false, optional: false, required: true
  private _configType?: string; 
  public get configType() {
    return this.getStringAttribute('config_type');
  }
  public set configType(value: string) {
    this._configType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configTypeInput() {
    return this._configType;
  }

  // issuer_certificate_authority_id - computed: false, optional: true, required: false
  private _issuerCertificateAuthorityId?: string; 
  public get issuerCertificateAuthorityId() {
    return this.getStringAttribute('issuer_certificate_authority_id');
  }
  public set issuerCertificateAuthorityId(value: string) {
    this._issuerCertificateAuthorityId = value;
  }
  public resetIssuerCertificateAuthorityId() {
    this._issuerCertificateAuthorityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerCertificateAuthorityIdInput() {
    return this._issuerCertificateAuthorityId;
  }

  // signing_algorithm - computed: false, optional: true, required: false
  private _signingAlgorithm?: string; 
  public get signingAlgorithm() {
    return this.getStringAttribute('signing_algorithm');
  }
  public set signingAlgorithm(value: string) {
    this._signingAlgorithm = value;
  }
  public resetSigningAlgorithm() {
    this._signingAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingAlgorithmInput() {
    return this._signingAlgorithm;
  }

  // version_name - computed: false, optional: true, required: false
  private _versionName?: string; 
  public get versionName() {
    return this.getStringAttribute('version_name');
  }
  public set versionName(value: string) {
    this._versionName = value;
  }
  public resetVersionName() {
    this._versionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionNameInput() {
    return this._versionName;
  }

  // subject - computed: false, optional: false, required: true
  private _subject = new CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference(this, "subject");
  public get subject() {
    return this._subject;
  }
  public putSubject(value: CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject) {
    this._subject.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject.internalValue;
  }

  // validity - computed: false, optional: true, required: false
  private _validity = new CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference(this, "validity");
  public get validity() {
    return this._validity;
  }
  public putValidity(value: CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity) {
    this._validity.internalValue = value;
  }
  public resetValidity() {
    this._validity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validityInput() {
    return this._validity.internalValue;
  }
}
export interface CertificatesManagementCertificateAuthorityCertificateAuthorityRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#certificate_authority_max_validity_duration CertificatesManagementCertificateAuthority#certificate_authority_max_validity_duration}
  */
  readonly certificateAuthorityMaxValidityDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#leaf_certificate_max_validity_duration CertificatesManagementCertificateAuthority#leaf_certificate_max_validity_duration}
  */
  readonly leafCertificateMaxValidityDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#rule_type CertificatesManagementCertificateAuthority#rule_type}
  */
  readonly ruleType: string;
}

export function certificatesManagementCertificateAuthorityCertificateAuthorityRulesToTerraform(struct?: CertificatesManagementCertificateAuthorityCertificateAuthorityRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_authority_max_validity_duration: cdktf.stringToTerraform(struct!.certificateAuthorityMaxValidityDuration),
    leaf_certificate_max_validity_duration: cdktf.stringToTerraform(struct!.leafCertificateMaxValidityDuration),
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
  }
}


export function certificatesManagementCertificateAuthorityCertificateAuthorityRulesToHclTerraform(struct?: CertificatesManagementCertificateAuthorityCertificateAuthorityRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_authority_max_validity_duration: {
      value: cdktf.stringToHclTerraform(struct!.certificateAuthorityMaxValidityDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    leaf_certificate_max_validity_duration: {
      value: cdktf.stringToHclTerraform(struct!.leafCertificateMaxValidityDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CertificatesManagementCertificateAuthorityCertificateAuthorityRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateAuthorityMaxValidityDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAuthorityMaxValidityDuration = this._certificateAuthorityMaxValidityDuration;
    }
    if (this._leafCertificateMaxValidityDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.leafCertificateMaxValidityDuration = this._leafCertificateMaxValidityDuration;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificatesManagementCertificateAuthorityCertificateAuthorityRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateAuthorityMaxValidityDuration = undefined;
      this._leafCertificateMaxValidityDuration = undefined;
      this._ruleType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateAuthorityMaxValidityDuration = value.certificateAuthorityMaxValidityDuration;
      this._leafCertificateMaxValidityDuration = value.leafCertificateMaxValidityDuration;
      this._ruleType = value.ruleType;
    }
  }

  // certificate_authority_max_validity_duration - computed: false, optional: true, required: false
  private _certificateAuthorityMaxValidityDuration?: string; 
  public get certificateAuthorityMaxValidityDuration() {
    return this.getStringAttribute('certificate_authority_max_validity_duration');
  }
  public set certificateAuthorityMaxValidityDuration(value: string) {
    this._certificateAuthorityMaxValidityDuration = value;
  }
  public resetCertificateAuthorityMaxValidityDuration() {
    this._certificateAuthorityMaxValidityDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityMaxValidityDurationInput() {
    return this._certificateAuthorityMaxValidityDuration;
  }

  // leaf_certificate_max_validity_duration - computed: false, optional: true, required: false
  private _leafCertificateMaxValidityDuration?: string; 
  public get leafCertificateMaxValidityDuration() {
    return this.getStringAttribute('leaf_certificate_max_validity_duration');
  }
  public set leafCertificateMaxValidityDuration(value: string) {
    this._leafCertificateMaxValidityDuration = value;
  }
  public resetLeafCertificateMaxValidityDuration() {
    this._leafCertificateMaxValidityDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leafCertificateMaxValidityDurationInput() {
    return this._leafCertificateMaxValidityDuration;
  }

  // rule_type - computed: false, optional: false, required: true
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }
}

export class CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList extends cdktf.ComplexList {
  public internalValue? : CertificatesManagementCertificateAuthorityCertificateAuthorityRules[] | cdktf.IResolvable

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
  public get(index: number): CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference {
    return new CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#object_storage_bucket_name CertificatesManagementCertificateAuthority#object_storage_bucket_name}
  */
  readonly objectStorageBucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#object_storage_namespace CertificatesManagementCertificateAuthority#object_storage_namespace}
  */
  readonly objectStorageNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#object_storage_object_name_format CertificatesManagementCertificateAuthority#object_storage_object_name_format}
  */
  readonly objectStorageObjectNameFormat: string;
}

export function certificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigToTerraform(struct?: CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference | CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_storage_bucket_name: cdktf.stringToTerraform(struct!.objectStorageBucketName),
    object_storage_namespace: cdktf.stringToTerraform(struct!.objectStorageNamespace),
    object_storage_object_name_format: cdktf.stringToTerraform(struct!.objectStorageObjectNameFormat),
  }
}


export function certificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigToHclTerraform(struct?: CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference | CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_storage_bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.objectStorageBucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_storage_namespace: {
      value: cdktf.stringToHclTerraform(struct!.objectStorageNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_storage_object_name_format: {
      value: cdktf.stringToHclTerraform(struct!.objectStorageObjectNameFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectStorageBucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectStorageBucketName = this._objectStorageBucketName;
    }
    if (this._objectStorageNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectStorageNamespace = this._objectStorageNamespace;
    }
    if (this._objectStorageObjectNameFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectStorageObjectNameFormat = this._objectStorageObjectNameFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objectStorageBucketName = undefined;
      this._objectStorageNamespace = undefined;
      this._objectStorageObjectNameFormat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objectStorageBucketName = value.objectStorageBucketName;
      this._objectStorageNamespace = value.objectStorageNamespace;
      this._objectStorageObjectNameFormat = value.objectStorageObjectNameFormat;
    }
  }

  // object_storage_bucket_name - computed: false, optional: false, required: true
  private _objectStorageBucketName?: string; 
  public get objectStorageBucketName() {
    return this.getStringAttribute('object_storage_bucket_name');
  }
  public set objectStorageBucketName(value: string) {
    this._objectStorageBucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageBucketNameInput() {
    return this._objectStorageBucketName;
  }

  // object_storage_namespace - computed: true, optional: true, required: false
  private _objectStorageNamespace?: string; 
  public get objectStorageNamespace() {
    return this.getStringAttribute('object_storage_namespace');
  }
  public set objectStorageNamespace(value: string) {
    this._objectStorageNamespace = value;
  }
  public resetObjectStorageNamespace() {
    this._objectStorageNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageNamespaceInput() {
    return this._objectStorageNamespace;
  }

  // object_storage_object_name_format - computed: false, optional: false, required: true
  private _objectStorageObjectNameFormat?: string; 
  public get objectStorageObjectNameFormat() {
    return this.getStringAttribute('object_storage_object_name_format');
  }
  public set objectStorageObjectNameFormat(value: string) {
    this._objectStorageObjectNameFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageObjectNameFormatInput() {
    return this._objectStorageObjectNameFormat;
  }
}
export interface CertificatesManagementCertificateAuthorityCertificateRevocationListDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#custom_formatted_urls CertificatesManagementCertificateAuthority#custom_formatted_urls}
  */
  readonly customFormattedUrls?: string[];
  /**
  * object_storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#object_storage_config CertificatesManagementCertificateAuthority#object_storage_config}
  */
  readonly objectStorageConfig: CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig;
}

export function certificatesManagementCertificateAuthorityCertificateRevocationListDetailsToTerraform(struct?: CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference | CertificatesManagementCertificateAuthorityCertificateRevocationListDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_formatted_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customFormattedUrls),
    object_storage_config: certificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigToTerraform(struct!.objectStorageConfig),
  }
}


export function certificatesManagementCertificateAuthorityCertificateRevocationListDetailsToHclTerraform(struct?: CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference | CertificatesManagementCertificateAuthorityCertificateRevocationListDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_formatted_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customFormattedUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    object_storage_config: {
      value: certificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigToHclTerraform(struct!.objectStorageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CertificatesManagementCertificateAuthorityCertificateRevocationListDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customFormattedUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFormattedUrls = this._customFormattedUrls;
    }
    if (this._objectStorageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectStorageConfig = this._objectStorageConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificatesManagementCertificateAuthorityCertificateRevocationListDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customFormattedUrls = undefined;
      this._objectStorageConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customFormattedUrls = value.customFormattedUrls;
      this._objectStorageConfig.internalValue = value.objectStorageConfig;
    }
  }

  // custom_formatted_urls - computed: true, optional: true, required: false
  private _customFormattedUrls?: string[]; 
  public get customFormattedUrls() {
    return this.getListAttribute('custom_formatted_urls');
  }
  public set customFormattedUrls(value: string[]) {
    this._customFormattedUrls = value;
  }
  public resetCustomFormattedUrls() {
    this._customFormattedUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFormattedUrlsInput() {
    return this._customFormattedUrls;
  }

  // object_storage_config - computed: false, optional: false, required: true
  private _objectStorageConfig = new CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference(this, "object_storage_config");
  public get objectStorageConfig() {
    return this._objectStorageConfig;
  }
  public putObjectStorageConfig(value: CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig) {
    this._objectStorageConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageConfigInput() {
    return this._objectStorageConfig.internalValue;
  }
}
export interface CertificatesManagementCertificateAuthorityTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#create CertificatesManagementCertificateAuthority#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#delete CertificatesManagementCertificateAuthority#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#update CertificatesManagementCertificateAuthority#update}
  */
  readonly update?: string;
}

export function certificatesManagementCertificateAuthorityTimeoutsToTerraform(struct?: CertificatesManagementCertificateAuthorityTimeouts | cdktf.IResolvable): any {
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


export function certificatesManagementCertificateAuthorityTimeoutsToHclTerraform(struct?: CertificatesManagementCertificateAuthorityTimeouts | cdktf.IResolvable): any {
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

export class CertificatesManagementCertificateAuthorityTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificatesManagementCertificateAuthorityTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CertificatesManagementCertificateAuthorityTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority oci_certificates_management_certificate_authority}
*/
export class CertificatesManagementCertificateAuthority extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_certificates_management_certificate_authority";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertificatesManagementCertificateAuthority resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertificatesManagementCertificateAuthority to import
  * @param importFromId The id of the existing CertificatesManagementCertificateAuthority that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertificatesManagementCertificateAuthority to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_certificates_management_certificate_authority", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/certificates_management_certificate_authority oci_certificates_management_certificate_authority} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificatesManagementCertificateAuthorityConfig
  */
  public constructor(scope: Construct, id: string, config: CertificatesManagementCertificateAuthorityConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_certificates_management_certificate_authority',
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
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._kmsKeyId = config.kmsKeyId;
    this._name = config.name;
    this._certificateAuthorityConfig.internalValue = config.certificateAuthorityConfig;
    this._certificateAuthorityRules.internalValue = config.certificateAuthorityRules;
    this._certificateRevocationListDetails.internalValue = config.certificateRevocationListDetails;
    this._timeouts.internalValue = config.timeouts;
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

  // config_type - computed: true, optional: false, required: false
  public get configType() {
    return this.getStringAttribute('config_type');
  }

  // current_version - computed: true, optional: false, required: false
  private _currentVersion = new CertificatesManagementCertificateAuthorityCurrentVersionList(this, "current_version", false);
  public get currentVersion() {
    return this._currentVersion;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // issuer_certificate_authority_id - computed: true, optional: false, required: false
  public get issuerCertificateAuthorityId() {
    return this.getStringAttribute('issuer_certificate_authority_id');
  }

  // kms_key_id - computed: false, optional: false, required: true
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
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

  // signing_algorithm - computed: true, optional: false, required: false
  public get signingAlgorithm() {
    return this.getStringAttribute('signing_algorithm');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subject - computed: true, optional: false, required: false
  private _subject = new CertificatesManagementCertificateAuthoritySubjectList(this, "subject", false);
  public get subject() {
    return this._subject;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_of_deletion - computed: true, optional: false, required: false
  public get timeOfDeletion() {
    return this.getStringAttribute('time_of_deletion');
  }

  // certificate_authority_config - computed: false, optional: false, required: true
  private _certificateAuthorityConfig = new CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference(this, "certificate_authority_config");
  public get certificateAuthorityConfig() {
    return this._certificateAuthorityConfig;
  }
  public putCertificateAuthorityConfig(value: CertificatesManagementCertificateAuthorityCertificateAuthorityConfig) {
    this._certificateAuthorityConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityConfigInput() {
    return this._certificateAuthorityConfig.internalValue;
  }

  // certificate_authority_rules - computed: false, optional: true, required: false
  private _certificateAuthorityRules = new CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList(this, "certificate_authority_rules", false);
  public get certificateAuthorityRules() {
    return this._certificateAuthorityRules;
  }
  public putCertificateAuthorityRules(value: CertificatesManagementCertificateAuthorityCertificateAuthorityRules[] | cdktf.IResolvable) {
    this._certificateAuthorityRules.internalValue = value;
  }
  public resetCertificateAuthorityRules() {
    this._certificateAuthorityRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityRulesInput() {
    return this._certificateAuthorityRules.internalValue;
  }

  // certificate_revocation_list_details - computed: false, optional: true, required: false
  private _certificateRevocationListDetails = new CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference(this, "certificate_revocation_list_details");
  public get certificateRevocationListDetails() {
    return this._certificateRevocationListDetails;
  }
  public putCertificateRevocationListDetails(value: CertificatesManagementCertificateAuthorityCertificateRevocationListDetails) {
    this._certificateRevocationListDetails.internalValue = value;
  }
  public resetCertificateRevocationListDetails() {
    this._certificateRevocationListDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateRevocationListDetailsInput() {
    return this._certificateRevocationListDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CertificatesManagementCertificateAuthorityTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CertificatesManagementCertificateAuthorityTimeouts) {
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
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      name: cdktf.stringToTerraform(this._name),
      certificate_authority_config: certificatesManagementCertificateAuthorityCertificateAuthorityConfigToTerraform(this._certificateAuthorityConfig.internalValue),
      certificate_authority_rules: cdktf.listMapper(certificatesManagementCertificateAuthorityCertificateAuthorityRulesToTerraform, true)(this._certificateAuthorityRules.internalValue),
      certificate_revocation_list_details: certificatesManagementCertificateAuthorityCertificateRevocationListDetailsToTerraform(this._certificateRevocationListDetails.internalValue),
      timeouts: certificatesManagementCertificateAuthorityTimeoutsToTerraform(this._timeouts.internalValue),
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
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_authority_config: {
        value: certificatesManagementCertificateAuthorityCertificateAuthorityConfigToHclTerraform(this._certificateAuthorityConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CertificatesManagementCertificateAuthorityCertificateAuthorityConfigList",
      },
      certificate_authority_rules: {
        value: cdktf.listMapperHcl(certificatesManagementCertificateAuthorityCertificateAuthorityRulesToHclTerraform, true)(this._certificateAuthorityRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList",
      },
      certificate_revocation_list_details: {
        value: certificatesManagementCertificateAuthorityCertificateRevocationListDetailsToHclTerraform(this._certificateRevocationListDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList",
      },
      timeouts: {
        value: certificatesManagementCertificateAuthorityTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertificatesManagementCertificateAuthorityTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
