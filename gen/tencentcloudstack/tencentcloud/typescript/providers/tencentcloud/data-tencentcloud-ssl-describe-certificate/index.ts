// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ssl_describe_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudSslDescribeCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Certificate ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ssl_describe_certificate#certificate_id DataTencentcloudSslDescribeCertificate#certificate_id}
  */
  readonly certificateId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ssl_describe_certificate#id DataTencentcloudSslDescribeCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ssl_describe_certificate#result_output_file DataTencentcloudSslDescribeCertificate#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudSslDescribeCertificateResultCertificateExtra {
}

export function dataTencentcloudSslDescribeCertificateResultCertificateExtraToTerraform(struct?: DataTencentcloudSslDescribeCertificateResultCertificateExtra): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudSslDescribeCertificateResultCertificateExtraToHclTerraform(struct?: DataTencentcloudSslDescribeCertificateResultCertificateExtra): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudSslDescribeCertificateResultCertificateExtraOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudSslDescribeCertificateResultCertificateExtra | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudSslDescribeCertificateResultCertificateExtra | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // company_type - computed: true, optional: false, required: false
  public get companyType() {
    return this.getNumberAttribute('company_type');
  }

  // domain_number - computed: true, optional: false, required: false
  public get domainNumber() {
    return this.getStringAttribute('domain_number');
  }

  // origin_certificate_id - computed: true, optional: false, required: false
  public get originCertificateId() {
    return this.getStringAttribute('origin_certificate_id');
  }

  // renew_order - computed: true, optional: false, required: false
  public get renewOrder() {
    return this.getStringAttribute('renew_order');
  }

  // replaced_by - computed: true, optional: false, required: false
  public get replacedBy() {
    return this.getStringAttribute('replaced_by');
  }

  // replaced_for - computed: true, optional: false, required: false
  public get replacedFor() {
    return this.getStringAttribute('replaced_for');
  }

  // s_m_cert - computed: true, optional: false, required: false
  public get sMCert() {
    return this.getNumberAttribute('s_m_cert');
  }
}

export class DataTencentcloudSslDescribeCertificateResultCertificateExtraList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudSslDescribeCertificateResultCertificateExtraOutputReference {
    return new DataTencentcloudSslDescribeCertificateResultCertificateExtraOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudSslDescribeCertificateResultDvAuthDetailDvAuths {
}

export function dataTencentcloudSslDescribeCertificateResultDvAuthDetailDvAuthsToTerraform(struct?: DataTencentcloudSslDescribeCertificateResultDvAuthDetailDvAuths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudSslDescribeCertificateResultDvAuthDetailDvAuthsToHclTerraform(struct?: DataTencentcloudSslDescribeCertificateResultDvAuthDetailDvAuths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudSslDescribeCertificateResultDvAuthDetailDvAuthsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudSslDescribeCertificateResultDvAuthDetailDvAuths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudSslDescribeCertificateResultDvAuthDetailDvAuths | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dv_auth_domain - computed: true, optional: false, required: false
  public get dvAuthDomain() {
    return this.getStringAttribute('dv_auth_domain');
  }

  // dv_auth_key - computed: true, optional: false, required: false
  public get dvAuthKey() {
    return this.getStringAttribute('dv_auth_key');
  }

  // dv_auth_path - computed: true, optional: false, required: false
  public get dvAuthPath() {
    return this.getStringAttribute('dv_auth_path');
  }

  // dv_auth_sub_domain - computed: true, optional: false, required: false
  public get dvAuthSubDomain() {
    return this.getStringAttribute('dv_auth_sub_domain');
  }

  // dv_auth_value - computed: true, optional: false, required: false
  public get dvAuthValue() {
    return this.getStringAttribute('dv_auth_value');
  }

  // dv_auth_verify_type - computed: true, optional: false, required: false
  public get dvAuthVerifyType() {
    return this.getStringAttribute('dv_auth_verify_type');
  }
}

export class DataTencentcloudSslDescribeCertificateResultDvAuthDetailDvAuthsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudSslDescribeCertificateResultDvAuthDetailDvAuthsOutputReference {
    return new DataTencentcloudSslDescribeCertificateResultDvAuthDetailDvAuthsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudSslDescribeCertificateResultDvAuthDetail {
}

export function dataTencentcloudSslDescribeCertificateResultDvAuthDetailToTerraform(struct?: DataTencentcloudSslDescribeCertificateResultDvAuthDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudSslDescribeCertificateResultDvAuthDetailToHclTerraform(struct?: DataTencentcloudSslDescribeCertificateResultDvAuthDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudSslDescribeCertificateResultDvAuthDetailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudSslDescribeCertificateResultDvAuthDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudSslDescribeCertificateResultDvAuthDetail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dv_auth_domain - computed: true, optional: false, required: false
  public get dvAuthDomain() {
    return this.getStringAttribute('dv_auth_domain');
  }

  // dv_auth_key - computed: true, optional: false, required: false
  public get dvAuthKey() {
    return this.getStringAttribute('dv_auth_key');
  }

  // dv_auth_key_sub_domain - computed: true, optional: false, required: false
  public get dvAuthKeySubDomain() {
    return this.getStringAttribute('dv_auth_key_sub_domain');
  }

  // dv_auth_path - computed: true, optional: false, required: false
  public get dvAuthPath() {
    return this.getStringAttribute('dv_auth_path');
  }

  // dv_auth_value - computed: true, optional: false, required: false
  public get dvAuthValue() {
    return this.getStringAttribute('dv_auth_value');
  }

  // dv_auths - computed: true, optional: false, required: false
  private _dvAuths = new DataTencentcloudSslDescribeCertificateResultDvAuthDetailDvAuthsList(this, "dv_auths", false);
  public get dvAuths() {
    return this._dvAuths;
  }
}

export class DataTencentcloudSslDescribeCertificateResultDvAuthDetailList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudSslDescribeCertificateResultDvAuthDetailOutputReference {
    return new DataTencentcloudSslDescribeCertificateResultDvAuthDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudSslDescribeCertificateResultDvRevokeAuthDetail {
}

export function dataTencentcloudSslDescribeCertificateResultDvRevokeAuthDetailToTerraform(struct?: DataTencentcloudSslDescribeCertificateResultDvRevokeAuthDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudSslDescribeCertificateResultDvRevokeAuthDetailToHclTerraform(struct?: DataTencentcloudSslDescribeCertificateResultDvRevokeAuthDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudSslDescribeCertificateResultDvRevokeAuthDetailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudSslDescribeCertificateResultDvRevokeAuthDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudSslDescribeCertificateResultDvRevokeAuthDetail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dv_auth_domain - computed: true, optional: false, required: false
  public get dvAuthDomain() {
    return this.getStringAttribute('dv_auth_domain');
  }

  // dv_auth_key - computed: true, optional: false, required: false
  public get dvAuthKey() {
    return this.getStringAttribute('dv_auth_key');
  }

  // dv_auth_path - computed: true, optional: false, required: false
  public get dvAuthPath() {
    return this.getStringAttribute('dv_auth_path');
  }

  // dv_auth_sub_domain - computed: true, optional: false, required: false
  public get dvAuthSubDomain() {
    return this.getStringAttribute('dv_auth_sub_domain');
  }

  // dv_auth_value - computed: true, optional: false, required: false
  public get dvAuthValue() {
    return this.getStringAttribute('dv_auth_value');
  }

  // dv_auth_verify_type - computed: true, optional: false, required: false
  public get dvAuthVerifyType() {
    return this.getStringAttribute('dv_auth_verify_type');
  }
}

export class DataTencentcloudSslDescribeCertificateResultDvRevokeAuthDetailList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudSslDescribeCertificateResultDvRevokeAuthDetailOutputReference {
    return new DataTencentcloudSslDescribeCertificateResultDvRevokeAuthDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudSslDescribeCertificateResultSubmittedData {
}

export function dataTencentcloudSslDescribeCertificateResultSubmittedDataToTerraform(struct?: DataTencentcloudSslDescribeCertificateResultSubmittedData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudSslDescribeCertificateResultSubmittedDataToHclTerraform(struct?: DataTencentcloudSslDescribeCertificateResultSubmittedData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudSslDescribeCertificateResultSubmittedDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudSslDescribeCertificateResultSubmittedData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudSslDescribeCertificateResultSubmittedData | undefined) {
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

  // admin_first_name - computed: true, optional: false, required: false
  public get adminFirstName() {
    return this.getStringAttribute('admin_first_name');
  }

  // admin_last_name - computed: true, optional: false, required: false
  public get adminLastName() {
    return this.getStringAttribute('admin_last_name');
  }

  // admin_phone_num - computed: true, optional: false, required: false
  public get adminPhoneNum() {
    return this.getStringAttribute('admin_phone_num');
  }

  // admin_position - computed: true, optional: false, required: false
  public get adminPosition() {
    return this.getStringAttribute('admin_position');
  }

  // certificate_domain - computed: true, optional: false, required: false
  public get certificateDomain() {
    return this.getStringAttribute('certificate_domain');
  }

  // contact_email - computed: true, optional: false, required: false
  public get contactEmail() {
    return this.getStringAttribute('contact_email');
  }

  // contact_first_name - computed: true, optional: false, required: false
  public get contactFirstName() {
    return this.getStringAttribute('contact_first_name');
  }

  // contact_last_name - computed: true, optional: false, required: false
  public get contactLastName() {
    return this.getStringAttribute('contact_last_name');
  }

  // contact_number - computed: true, optional: false, required: false
  public get contactNumber() {
    return this.getStringAttribute('contact_number');
  }

  // contact_position - computed: true, optional: false, required: false
  public get contactPosition() {
    return this.getStringAttribute('contact_position');
  }

  // csr_content - computed: true, optional: false, required: false
  public get csrContent() {
    return this.getStringAttribute('csr_content');
  }

  // csr_type - computed: true, optional: false, required: false
  public get csrType() {
    return this.getStringAttribute('csr_type');
  }

  // domain_list - computed: true, optional: false, required: false
  public get domainList() {
    return cdktf.Fn.tolist(this.getListAttribute('domain_list'));
  }

  // key_password - computed: true, optional: false, required: false
  public get keyPassword() {
    return this.getStringAttribute('key_password');
  }

  // organization_address - computed: true, optional: false, required: false
  public get organizationAddress() {
    return this.getStringAttribute('organization_address');
  }

  // organization_city - computed: true, optional: false, required: false
  public get organizationCity() {
    return this.getStringAttribute('organization_city');
  }

  // organization_country - computed: true, optional: false, required: false
  public get organizationCountry() {
    return this.getStringAttribute('organization_country');
  }

  // organization_division - computed: true, optional: false, required: false
  public get organizationDivision() {
    return this.getStringAttribute('organization_division');
  }

  // organization_name - computed: true, optional: false, required: false
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }

  // organization_region - computed: true, optional: false, required: false
  public get organizationRegion() {
    return this.getStringAttribute('organization_region');
  }

  // phone_area_code - computed: true, optional: false, required: false
  public get phoneAreaCode() {
    return this.getStringAttribute('phone_area_code');
  }

  // phone_number - computed: true, optional: false, required: false
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }

  // postal_code - computed: true, optional: false, required: false
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }

  // verify_type - computed: true, optional: false, required: false
  public get verifyType() {
    return this.getStringAttribute('verify_type');
  }
}

export class DataTencentcloudSslDescribeCertificateResultSubmittedDataList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudSslDescribeCertificateResultSubmittedDataOutputReference {
    return new DataTencentcloudSslDescribeCertificateResultSubmittedDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudSslDescribeCertificateResult {
}

export function dataTencentcloudSslDescribeCertificateResultToTerraform(struct?: DataTencentcloudSslDescribeCertificateResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudSslDescribeCertificateResultToHclTerraform(struct?: DataTencentcloudSslDescribeCertificateResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudSslDescribeCertificateResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudSslDescribeCertificateResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudSslDescribeCertificateResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // c_a_common_names - computed: true, optional: false, required: false
  public get cACommonNames() {
    return cdktf.Fn.tolist(this.getListAttribute('c_a_common_names'));
  }

  // c_a_encrypt_algorithms - computed: true, optional: false, required: false
  public get cAEncryptAlgorithms() {
    return cdktf.Fn.tolist(this.getListAttribute('c_a_encrypt_algorithms'));
  }

  // c_a_end_times - computed: true, optional: false, required: false
  public get cAEndTimes() {
    return cdktf.Fn.tolist(this.getListAttribute('c_a_end_times'));
  }

  // cert_begin_time - computed: true, optional: false, required: false
  public get certBeginTime() {
    return this.getStringAttribute('cert_begin_time');
  }

  // cert_end_time - computed: true, optional: false, required: false
  public get certEndTime() {
    return this.getStringAttribute('cert_end_time');
  }

  // certificate_extra - computed: true, optional: false, required: false
  private _certificateExtra = new DataTencentcloudSslDescribeCertificateResultCertificateExtraList(this, "certificate_extra", false);
  public get certificateExtra() {
    return this._certificateExtra;
  }

  // certificate_type - computed: true, optional: false, required: false
  public get certificateType() {
    return this.getStringAttribute('certificate_type');
  }

  // deployable - computed: true, optional: false, required: false
  public get deployable() {
    return this.getBooleanAttribute('deployable');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // dv_auth_detail - computed: true, optional: false, required: false
  private _dvAuthDetail = new DataTencentcloudSslDescribeCertificateResultDvAuthDetailList(this, "dv_auth_detail", false);
  public get dvAuthDetail() {
    return this._dvAuthDetail;
  }

  // dv_revoke_auth_detail - computed: true, optional: false, required: false
  private _dvRevokeAuthDetail = new DataTencentcloudSslDescribeCertificateResultDvRevokeAuthDetailList(this, "dv_revoke_auth_detail", false);
  public get dvRevokeAuthDetail() {
    return this._dvRevokeAuthDetail;
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getStringAttribute('from');
  }

  // insert_time - computed: true, optional: false, required: false
  public get insertTime() {
    return this.getStringAttribute('insert_time');
  }

  // is_dv - computed: true, optional: false, required: false
  public get isDv() {
    return this.getBooleanAttribute('is_dv');
  }

  // is_vip - computed: true, optional: false, required: false
  public get isVip() {
    return this.getBooleanAttribute('is_vip');
  }

  // is_vulnerability - computed: true, optional: false, required: false
  public get isVulnerability() {
    return this.getBooleanAttribute('is_vulnerability');
  }

  // is_wildcard - computed: true, optional: false, required: false
  public get isWildcard() {
    return this.getBooleanAttribute('is_wildcard');
  }

  // order_id - computed: true, optional: false, required: false
  public get orderId() {
    return this.getStringAttribute('order_id');
  }

  // owner_uin - computed: true, optional: false, required: false
  public get ownerUin() {
    return this.getStringAttribute('owner_uin');
  }

  // package_type - computed: true, optional: false, required: false
  public get packageType() {
    return this.getStringAttribute('package_type');
  }

  // package_type_name - computed: true, optional: false, required: false
  public get packageTypeName() {
    return this.getStringAttribute('package_type_name');
  }

  // product_zh_name - computed: true, optional: false, required: false
  public get productZhName() {
    return this.getStringAttribute('product_zh_name');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // renew_able - computed: true, optional: false, required: false
  public get renewAble() {
    return this.getBooleanAttribute('renew_able');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // status_msg - computed: true, optional: false, required: false
  public get statusMsg() {
    return this.getStringAttribute('status_msg');
  }

  // status_name - computed: true, optional: false, required: false
  public get statusName() {
    return this.getStringAttribute('status_name');
  }

  // subject_alt_name - computed: true, optional: false, required: false
  public get subjectAltName() {
    return cdktf.Fn.tolist(this.getListAttribute('subject_alt_name'));
  }

  // submitted_data - computed: true, optional: false, required: false
  private _submittedData = new DataTencentcloudSslDescribeCertificateResultSubmittedDataList(this, "submitted_data", false);
  public get submittedData() {
    return this._submittedData;
  }

  // validity_period - computed: true, optional: false, required: false
  public get validityPeriod() {
    return this.getStringAttribute('validity_period');
  }

  // verify_type - computed: true, optional: false, required: false
  public get verifyType() {
    return this.getStringAttribute('verify_type');
  }

  // vulnerability_report - computed: true, optional: false, required: false
  public get vulnerabilityReport() {
    return this.getStringAttribute('vulnerability_report');
  }

  // vulnerability_status - computed: true, optional: false, required: false
  public get vulnerabilityStatus() {
    return this.getStringAttribute('vulnerability_status');
  }
}

export class DataTencentcloudSslDescribeCertificateResultList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudSslDescribeCertificateResultOutputReference {
    return new DataTencentcloudSslDescribeCertificateResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ssl_describe_certificate tencentcloud_ssl_describe_certificate}
*/
export class DataTencentcloudSslDescribeCertificate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ssl_describe_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudSslDescribeCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudSslDescribeCertificate to import
  * @param importFromId The id of the existing DataTencentcloudSslDescribeCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ssl_describe_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudSslDescribeCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ssl_describe_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ssl_describe_certificate tencentcloud_ssl_describe_certificate} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudSslDescribeCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudSslDescribeCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ssl_describe_certificate',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateId = config.certificateId;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_id - computed: false, optional: false, required: true
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
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

  // result - computed: true, optional: false, required: false
  private _result = new DataTencentcloudSslDescribeCertificateResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_id: {
        value: cdktf.stringToHclTerraform(this._certificateId),
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
