// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificatesManagementCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#compartment_id CertificatesManagementCertificate#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#defined_tags CertificatesManagementCertificate#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#description CertificatesManagementCertificate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#freeform_tags CertificatesManagementCertificate#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#id CertificatesManagementCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#name CertificatesManagementCertificate#name}
  */
  readonly name: string;
  /**
  * certificate_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#certificate_config CertificatesManagementCertificate#certificate_config}
  */
  readonly certificateConfig: CertificatesManagementCertificateCertificateConfig;
  /**
  * certificate_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#certificate_rules CertificatesManagementCertificate#certificate_rules}
  */
  readonly certificateRules?: CertificatesManagementCertificateCertificateRules[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#timeouts CertificatesManagementCertificate#timeouts}
  */
  readonly timeouts?: CertificatesManagementCertificateTimeouts;
}
export interface CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig {
}

export function certificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigToTerraform(struct?: CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function certificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigToHclTerraform(struct?: CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object_storage_bucket_name - computed: true, optional: false, required: false
  public get objectStorageBucketName() {
    return this.getStringAttribute('object_storage_bucket_name');
  }

  // object_storage_namespace - computed: true, optional: false, required: false
  public get objectStorageNamespace() {
    return this.getStringAttribute('object_storage_namespace');
  }

  // object_storage_object_name_format - computed: true, optional: false, required: false
  public get objectStorageObjectNameFormat() {
    return this.getStringAttribute('object_storage_object_name_format');
  }
}

export class CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList extends cdktf.ComplexList {

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
  public get(index: number): CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference {
    return new CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertificatesManagementCertificateCertificateRevocationListDetails {
}

export function certificatesManagementCertificateCertificateRevocationListDetailsToTerraform(struct?: CertificatesManagementCertificateCertificateRevocationListDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function certificatesManagementCertificateCertificateRevocationListDetailsToHclTerraform(struct?: CertificatesManagementCertificateCertificateRevocationListDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CertificatesManagementCertificateCertificateRevocationListDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificatesManagementCertificateCertificateRevocationListDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_formatted_urls - computed: true, optional: false, required: false
  public get customFormattedUrls() {
    return this.getListAttribute('custom_formatted_urls');
  }

  // object_storage_config - computed: true, optional: false, required: false
  private _objectStorageConfig = new CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList(this, "object_storage_config", false);
  public get objectStorageConfig() {
    return this._objectStorageConfig;
  }
}

export class CertificatesManagementCertificateCertificateRevocationListDetailsList extends cdktf.ComplexList {

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
  public get(index: number): CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference {
    return new CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertificatesManagementCertificateCurrentVersionRevocationStatus {
}

export function certificatesManagementCertificateCurrentVersionRevocationStatusToTerraform(struct?: CertificatesManagementCertificateCurrentVersionRevocationStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function certificatesManagementCertificateCurrentVersionRevocationStatusToHclTerraform(struct?: CertificatesManagementCertificateCurrentVersionRevocationStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CertificatesManagementCertificateCurrentVersionRevocationStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificatesManagementCertificateCurrentVersionRevocationStatus | undefined) {
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

export class CertificatesManagementCertificateCurrentVersionRevocationStatusList extends cdktf.ComplexList {

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
  public get(index: number): CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference {
    return new CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames {
}

export function certificatesManagementCertificateCurrentVersionSubjectAlternativeNamesToTerraform(struct?: CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function certificatesManagementCertificateCurrentVersionSubjectAlternativeNamesToHclTerraform(struct?: CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames | undefined) {
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

export class CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList extends cdktf.ComplexList {

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
  public get(index: number): CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference {
    return new CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertificatesManagementCertificateCurrentVersionValidity {
}

export function certificatesManagementCertificateCurrentVersionValidityToTerraform(struct?: CertificatesManagementCertificateCurrentVersionValidity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function certificatesManagementCertificateCurrentVersionValidityToHclTerraform(struct?: CertificatesManagementCertificateCurrentVersionValidity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CertificatesManagementCertificateCurrentVersionValidityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CertificatesManagementCertificateCurrentVersionValidity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificatesManagementCertificateCurrentVersionValidity | undefined) {
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

export class CertificatesManagementCertificateCurrentVersionValidityList extends cdktf.ComplexList {

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
  public get(index: number): CertificatesManagementCertificateCurrentVersionValidityOutputReference {
    return new CertificatesManagementCertificateCurrentVersionValidityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertificatesManagementCertificateCurrentVersion {
}

export function certificatesManagementCertificateCurrentVersionToTerraform(struct?: CertificatesManagementCertificateCurrentVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function certificatesManagementCertificateCurrentVersionToHclTerraform(struct?: CertificatesManagementCertificateCurrentVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CertificatesManagementCertificateCurrentVersionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CertificatesManagementCertificateCurrentVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificatesManagementCertificateCurrentVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_id - computed: true, optional: false, required: false
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }

  // issuer_ca_version_number - computed: true, optional: false, required: false
  public get issuerCaVersionNumber() {
    return this.getStringAttribute('issuer_ca_version_number');
  }

  // revocation_status - computed: true, optional: false, required: false
  private _revocationStatus = new CertificatesManagementCertificateCurrentVersionRevocationStatusList(this, "revocation_status", false);
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

  // subject_alternative_names - computed: true, optional: false, required: false
  private _subjectAlternativeNames = new CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList(this, "subject_alternative_names", false);
  public get subjectAlternativeNames() {
    return this._subjectAlternativeNames;
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
  private _validity = new CertificatesManagementCertificateCurrentVersionValidityList(this, "validity", false);
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

export class CertificatesManagementCertificateCurrentVersionList extends cdktf.ComplexList {

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
  public get(index: number): CertificatesManagementCertificateCurrentVersionOutputReference {
    return new CertificatesManagementCertificateCurrentVersionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertificatesManagementCertificateSubject {
}

export function certificatesManagementCertificateSubjectToTerraform(struct?: CertificatesManagementCertificateSubject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function certificatesManagementCertificateSubjectToHclTerraform(struct?: CertificatesManagementCertificateSubject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CertificatesManagementCertificateSubjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CertificatesManagementCertificateSubject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificatesManagementCertificateSubject | undefined) {
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

export class CertificatesManagementCertificateSubjectList extends cdktf.ComplexList {

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
  public get(index: number): CertificatesManagementCertificateSubjectOutputReference {
    return new CertificatesManagementCertificateSubjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertificatesManagementCertificateCertificateConfigSubject {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#common_name CertificatesManagementCertificate#common_name}
  */
  readonly commonName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#country CertificatesManagementCertificate#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#distinguished_name_qualifier CertificatesManagementCertificate#distinguished_name_qualifier}
  */
  readonly distinguishedNameQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#domain_component CertificatesManagementCertificate#domain_component}
  */
  readonly domainComponent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#generation_qualifier CertificatesManagementCertificate#generation_qualifier}
  */
  readonly generationQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#given_name CertificatesManagementCertificate#given_name}
  */
  readonly givenName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#initials CertificatesManagementCertificate#initials}
  */
  readonly initials?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#locality_name CertificatesManagementCertificate#locality_name}
  */
  readonly localityName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#organization CertificatesManagementCertificate#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#organizational_unit CertificatesManagementCertificate#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#pseudonym CertificatesManagementCertificate#pseudonym}
  */
  readonly pseudonym?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#serial_number CertificatesManagementCertificate#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#state_or_province_name CertificatesManagementCertificate#state_or_province_name}
  */
  readonly stateOrProvinceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#street CertificatesManagementCertificate#street}
  */
  readonly street?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#surname CertificatesManagementCertificate#surname}
  */
  readonly surname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#title CertificatesManagementCertificate#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#user_id CertificatesManagementCertificate#user_id}
  */
  readonly userId?: string;
}

export function certificatesManagementCertificateCertificateConfigSubjectToTerraform(struct?: CertificatesManagementCertificateCertificateConfigSubjectOutputReference | CertificatesManagementCertificateCertificateConfigSubject): any {
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


export function certificatesManagementCertificateCertificateConfigSubjectToHclTerraform(struct?: CertificatesManagementCertificateCertificateConfigSubjectOutputReference | CertificatesManagementCertificateCertificateConfigSubject): any {
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

export class CertificatesManagementCertificateCertificateConfigSubjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CertificatesManagementCertificateCertificateConfigSubject | undefined {
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

  public set internalValue(value: CertificatesManagementCertificateCertificateConfigSubject | undefined) {
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
export interface CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#type CertificatesManagementCertificate#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#value CertificatesManagementCertificate#value}
  */
  readonly value: string;
}

export function certificatesManagementCertificateCertificateConfigSubjectAlternativeNamesToTerraform(struct?: CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function certificatesManagementCertificateCertificateConfigSubjectAlternativeNamesToHclTerraform(struct?: CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList extends cdktf.ComplexList {
  public internalValue? : CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames[] | cdktf.IResolvable

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
  public get(index: number): CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference {
    return new CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertificatesManagementCertificateCertificateConfigValidity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#time_of_validity_not_after CertificatesManagementCertificate#time_of_validity_not_after}
  */
  readonly timeOfValidityNotAfter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#time_of_validity_not_before CertificatesManagementCertificate#time_of_validity_not_before}
  */
  readonly timeOfValidityNotBefore?: string;
}

export function certificatesManagementCertificateCertificateConfigValidityToTerraform(struct?: CertificatesManagementCertificateCertificateConfigValidityOutputReference | CertificatesManagementCertificateCertificateConfigValidity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_of_validity_not_after: cdktf.stringToTerraform(struct!.timeOfValidityNotAfter),
    time_of_validity_not_before: cdktf.stringToTerraform(struct!.timeOfValidityNotBefore),
  }
}


export function certificatesManagementCertificateCertificateConfigValidityToHclTerraform(struct?: CertificatesManagementCertificateCertificateConfigValidityOutputReference | CertificatesManagementCertificateCertificateConfigValidity): any {
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

export class CertificatesManagementCertificateCertificateConfigValidityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CertificatesManagementCertificateCertificateConfigValidity | undefined {
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

  public set internalValue(value: CertificatesManagementCertificateCertificateConfigValidity | undefined) {
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
export interface CertificatesManagementCertificateCertificateConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#certificate_profile_type CertificatesManagementCertificate#certificate_profile_type}
  */
  readonly certificateProfileType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#config_type CertificatesManagementCertificate#config_type}
  */
  readonly configType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#csr_pem CertificatesManagementCertificate#csr_pem}
  */
  readonly csrPem?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#issuer_certificate_authority_id CertificatesManagementCertificate#issuer_certificate_authority_id}
  */
  readonly issuerCertificateAuthorityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#key_algorithm CertificatesManagementCertificate#key_algorithm}
  */
  readonly keyAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#signature_algorithm CertificatesManagementCertificate#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#version_name CertificatesManagementCertificate#version_name}
  */
  readonly versionName?: string;
  /**
  * subject block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#subject CertificatesManagementCertificate#subject}
  */
  readonly subject?: CertificatesManagementCertificateCertificateConfigSubject;
  /**
  * subject_alternative_names block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#subject_alternative_names CertificatesManagementCertificate#subject_alternative_names}
  */
  readonly subjectAlternativeNames?: CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames[] | cdktf.IResolvable;
  /**
  * validity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#validity CertificatesManagementCertificate#validity}
  */
  readonly validity?: CertificatesManagementCertificateCertificateConfigValidity;
}

export function certificatesManagementCertificateCertificateConfigToTerraform(struct?: CertificatesManagementCertificateCertificateConfigOutputReference | CertificatesManagementCertificateCertificateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_profile_type: cdktf.stringToTerraform(struct!.certificateProfileType),
    config_type: cdktf.stringToTerraform(struct!.configType),
    csr_pem: cdktf.stringToTerraform(struct!.csrPem),
    issuer_certificate_authority_id: cdktf.stringToTerraform(struct!.issuerCertificateAuthorityId),
    key_algorithm: cdktf.stringToTerraform(struct!.keyAlgorithm),
    signature_algorithm: cdktf.stringToTerraform(struct!.signatureAlgorithm),
    version_name: cdktf.stringToTerraform(struct!.versionName),
    subject: certificatesManagementCertificateCertificateConfigSubjectToTerraform(struct!.subject),
    subject_alternative_names: cdktf.listMapper(certificatesManagementCertificateCertificateConfigSubjectAlternativeNamesToTerraform, true)(struct!.subjectAlternativeNames),
    validity: certificatesManagementCertificateCertificateConfigValidityToTerraform(struct!.validity),
  }
}


export function certificatesManagementCertificateCertificateConfigToHclTerraform(struct?: CertificatesManagementCertificateCertificateConfigOutputReference | CertificatesManagementCertificateCertificateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_profile_type: {
      value: cdktf.stringToHclTerraform(struct!.certificateProfileType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_type: {
      value: cdktf.stringToHclTerraform(struct!.configType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    csr_pem: {
      value: cdktf.stringToHclTerraform(struct!.csrPem),
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
    key_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.keyAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.signatureAlgorithm),
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
      value: certificatesManagementCertificateCertificateConfigSubjectToHclTerraform(struct!.subject),
      isBlock: true,
      type: "list",
      storageClassType: "CertificatesManagementCertificateCertificateConfigSubjectList",
    },
    subject_alternative_names: {
      value: cdktf.listMapperHcl(certificatesManagementCertificateCertificateConfigSubjectAlternativeNamesToHclTerraform, true)(struct!.subjectAlternativeNames),
      isBlock: true,
      type: "list",
      storageClassType: "CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList",
    },
    validity: {
      value: certificatesManagementCertificateCertificateConfigValidityToHclTerraform(struct!.validity),
      isBlock: true,
      type: "list",
      storageClassType: "CertificatesManagementCertificateCertificateConfigValidityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificatesManagementCertificateCertificateConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CertificatesManagementCertificateCertificateConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateProfileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateProfileType = this._certificateProfileType;
    }
    if (this._configType !== undefined) {
      hasAnyValues = true;
      internalValueResult.configType = this._configType;
    }
    if (this._csrPem !== undefined) {
      hasAnyValues = true;
      internalValueResult.csrPem = this._csrPem;
    }
    if (this._issuerCertificateAuthorityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerCertificateAuthorityId = this._issuerCertificateAuthorityId;
    }
    if (this._keyAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyAlgorithm = this._keyAlgorithm;
    }
    if (this._signatureAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureAlgorithm = this._signatureAlgorithm;
    }
    if (this._versionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionName = this._versionName;
    }
    if (this._subject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject?.internalValue;
    }
    if (this._subjectAlternativeNames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAlternativeNames = this._subjectAlternativeNames?.internalValue;
    }
    if (this._validity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validity = this._validity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificatesManagementCertificateCertificateConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateProfileType = undefined;
      this._configType = undefined;
      this._csrPem = undefined;
      this._issuerCertificateAuthorityId = undefined;
      this._keyAlgorithm = undefined;
      this._signatureAlgorithm = undefined;
      this._versionName = undefined;
      this._subject.internalValue = undefined;
      this._subjectAlternativeNames.internalValue = undefined;
      this._validity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateProfileType = value.certificateProfileType;
      this._configType = value.configType;
      this._csrPem = value.csrPem;
      this._issuerCertificateAuthorityId = value.issuerCertificateAuthorityId;
      this._keyAlgorithm = value.keyAlgorithm;
      this._signatureAlgorithm = value.signatureAlgorithm;
      this._versionName = value.versionName;
      this._subject.internalValue = value.subject;
      this._subjectAlternativeNames.internalValue = value.subjectAlternativeNames;
      this._validity.internalValue = value.validity;
    }
  }

  // certificate_profile_type - computed: false, optional: true, required: false
  private _certificateProfileType?: string; 
  public get certificateProfileType() {
    return this.getStringAttribute('certificate_profile_type');
  }
  public set certificateProfileType(value: string) {
    this._certificateProfileType = value;
  }
  public resetCertificateProfileType() {
    this._certificateProfileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateProfileTypeInput() {
    return this._certificateProfileType;
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

  // csr_pem - computed: false, optional: true, required: false
  private _csrPem?: string; 
  public get csrPem() {
    return this.getStringAttribute('csr_pem');
  }
  public set csrPem(value: string) {
    this._csrPem = value;
  }
  public resetCsrPem() {
    this._csrPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrPemInput() {
    return this._csrPem;
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

  // key_algorithm - computed: true, optional: true, required: false
  private _keyAlgorithm?: string; 
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }
  public set keyAlgorithm(value: string) {
    this._keyAlgorithm = value;
  }
  public resetKeyAlgorithm() {
    this._keyAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAlgorithmInput() {
    return this._keyAlgorithm;
  }

  // signature_algorithm - computed: true, optional: true, required: false
  private _signatureAlgorithm?: string; 
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }
  public set signatureAlgorithm(value: string) {
    this._signatureAlgorithm = value;
  }
  public resetSignatureAlgorithm() {
    this._signatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmInput() {
    return this._signatureAlgorithm;
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

  // subject - computed: false, optional: true, required: false
  private _subject = new CertificatesManagementCertificateCertificateConfigSubjectOutputReference(this, "subject");
  public get subject() {
    return this._subject;
  }
  public putSubject(value: CertificatesManagementCertificateCertificateConfigSubject) {
    this._subject.internalValue = value;
  }
  public resetSubject() {
    this._subject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject.internalValue;
  }

  // subject_alternative_names - computed: false, optional: true, required: false
  private _subjectAlternativeNames = new CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList(this, "subject_alternative_names", false);
  public get subjectAlternativeNames() {
    return this._subjectAlternativeNames;
  }
  public putSubjectAlternativeNames(value: CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames[] | cdktf.IResolvable) {
    this._subjectAlternativeNames.internalValue = value;
  }
  public resetSubjectAlternativeNames() {
    this._subjectAlternativeNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAlternativeNamesInput() {
    return this._subjectAlternativeNames.internalValue;
  }

  // validity - computed: false, optional: true, required: false
  private _validity = new CertificatesManagementCertificateCertificateConfigValidityOutputReference(this, "validity");
  public get validity() {
    return this._validity;
  }
  public putValidity(value: CertificatesManagementCertificateCertificateConfigValidity) {
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
export interface CertificatesManagementCertificateCertificateRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#advance_renewal_period CertificatesManagementCertificate#advance_renewal_period}
  */
  readonly advanceRenewalPeriod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#renewal_interval CertificatesManagementCertificate#renewal_interval}
  */
  readonly renewalInterval: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#rule_type CertificatesManagementCertificate#rule_type}
  */
  readonly ruleType: string;
}

export function certificatesManagementCertificateCertificateRulesToTerraform(struct?: CertificatesManagementCertificateCertificateRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advance_renewal_period: cdktf.stringToTerraform(struct!.advanceRenewalPeriod),
    renewal_interval: cdktf.stringToTerraform(struct!.renewalInterval),
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
  }
}


export function certificatesManagementCertificateCertificateRulesToHclTerraform(struct?: CertificatesManagementCertificateCertificateRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advance_renewal_period: {
      value: cdktf.stringToHclTerraform(struct!.advanceRenewalPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    renewal_interval: {
      value: cdktf.stringToHclTerraform(struct!.renewalInterval),
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

export class CertificatesManagementCertificateCertificateRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CertificatesManagementCertificateCertificateRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advanceRenewalPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.advanceRenewalPeriod = this._advanceRenewalPeriod;
    }
    if (this._renewalInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.renewalInterval = this._renewalInterval;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificatesManagementCertificateCertificateRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advanceRenewalPeriod = undefined;
      this._renewalInterval = undefined;
      this._ruleType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advanceRenewalPeriod = value.advanceRenewalPeriod;
      this._renewalInterval = value.renewalInterval;
      this._ruleType = value.ruleType;
    }
  }

  // advance_renewal_period - computed: false, optional: false, required: true
  private _advanceRenewalPeriod?: string; 
  public get advanceRenewalPeriod() {
    return this.getStringAttribute('advance_renewal_period');
  }
  public set advanceRenewalPeriod(value: string) {
    this._advanceRenewalPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get advanceRenewalPeriodInput() {
    return this._advanceRenewalPeriod;
  }

  // renewal_interval - computed: false, optional: false, required: true
  private _renewalInterval?: string; 
  public get renewalInterval() {
    return this.getStringAttribute('renewal_interval');
  }
  public set renewalInterval(value: string) {
    this._renewalInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get renewalIntervalInput() {
    return this._renewalInterval;
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

export class CertificatesManagementCertificateCertificateRulesList extends cdktf.ComplexList {
  public internalValue? : CertificatesManagementCertificateCertificateRules[] | cdktf.IResolvable

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
  public get(index: number): CertificatesManagementCertificateCertificateRulesOutputReference {
    return new CertificatesManagementCertificateCertificateRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertificatesManagementCertificateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#create CertificatesManagementCertificate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#delete CertificatesManagementCertificate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#update CertificatesManagementCertificate#update}
  */
  readonly update?: string;
}

export function certificatesManagementCertificateTimeoutsToTerraform(struct?: CertificatesManagementCertificateTimeouts | cdktf.IResolvable): any {
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


export function certificatesManagementCertificateTimeoutsToHclTerraform(struct?: CertificatesManagementCertificateTimeouts | cdktf.IResolvable): any {
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

export class CertificatesManagementCertificateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificatesManagementCertificateTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CertificatesManagementCertificateTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate oci_certificates_management_certificate}
*/
export class CertificatesManagementCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_certificates_management_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertificatesManagementCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertificatesManagementCertificate to import
  * @param importFromId The id of the existing CertificatesManagementCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertificatesManagementCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_certificates_management_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/certificates_management_certificate oci_certificates_management_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificatesManagementCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: CertificatesManagementCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_certificates_management_certificate',
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
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._name = config.name;
    this._certificateConfig.internalValue = config.certificateConfig;
    this._certificateRules.internalValue = config.certificateRules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_profile_type - computed: true, optional: false, required: false
  public get certificateProfileType() {
    return this.getStringAttribute('certificate_profile_type');
  }

  // certificate_revocation_list_details - computed: true, optional: false, required: false
  private _certificateRevocationListDetails = new CertificatesManagementCertificateCertificateRevocationListDetailsList(this, "certificate_revocation_list_details", false);
  public get certificateRevocationListDetails() {
    return this._certificateRevocationListDetails;
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

  // config_type - computed: true, optional: false, required: false
  public get configType() {
    return this.getStringAttribute('config_type');
  }

  // current_version - computed: true, optional: false, required: false
  private _currentVersion = new CertificatesManagementCertificateCurrentVersionList(this, "current_version", false);
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

  // key_algorithm - computed: true, optional: false, required: false
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
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

  // signature_algorithm - computed: true, optional: false, required: false
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subject - computed: true, optional: false, required: false
  private _subject = new CertificatesManagementCertificateSubjectList(this, "subject", false);
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

  // certificate_config - computed: false, optional: false, required: true
  private _certificateConfig = new CertificatesManagementCertificateCertificateConfigOutputReference(this, "certificate_config");
  public get certificateConfig() {
    return this._certificateConfig;
  }
  public putCertificateConfig(value: CertificatesManagementCertificateCertificateConfig) {
    this._certificateConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateConfigInput() {
    return this._certificateConfig.internalValue;
  }

  // certificate_rules - computed: false, optional: true, required: false
  private _certificateRules = new CertificatesManagementCertificateCertificateRulesList(this, "certificate_rules", false);
  public get certificateRules() {
    return this._certificateRules;
  }
  public putCertificateRules(value: CertificatesManagementCertificateCertificateRules[] | cdktf.IResolvable) {
    this._certificateRules.internalValue = value;
  }
  public resetCertificateRules() {
    this._certificateRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateRulesInput() {
    return this._certificateRules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CertificatesManagementCertificateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CertificatesManagementCertificateTimeouts) {
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
      name: cdktf.stringToTerraform(this._name),
      certificate_config: certificatesManagementCertificateCertificateConfigToTerraform(this._certificateConfig.internalValue),
      certificate_rules: cdktf.listMapper(certificatesManagementCertificateCertificateRulesToTerraform, true)(this._certificateRules.internalValue),
      timeouts: certificatesManagementCertificateTimeoutsToTerraform(this._timeouts.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_config: {
        value: certificatesManagementCertificateCertificateConfigToHclTerraform(this._certificateConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CertificatesManagementCertificateCertificateConfigList",
      },
      certificate_rules: {
        value: cdktf.listMapperHcl(certificatesManagementCertificateCertificateRulesToHclTerraform, true)(this._certificateRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CertificatesManagementCertificateCertificateRulesList",
      },
      timeouts: {
        value: certificatesManagementCertificateTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertificatesManagementCertificateTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
