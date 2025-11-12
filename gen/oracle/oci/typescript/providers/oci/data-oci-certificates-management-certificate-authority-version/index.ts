// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/certificates_management_certificate_authority_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCertificatesManagementCertificateAuthorityVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/certificates_management_certificate_authority_version#certificate_authority_id DataOciCertificatesManagementCertificateAuthorityVersion#certificate_authority_id}
  */
  readonly certificateAuthorityId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/certificates_management_certificate_authority_version#certificate_authority_version_number DataOciCertificatesManagementCertificateAuthorityVersion#certificate_authority_version_number}
  */
  readonly certificateAuthorityVersionNumber: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/certificates_management_certificate_authority_version#id DataOciCertificatesManagementCertificateAuthorityVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatus {
}

export function dataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusToTerraform(struct?: DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusToHclTerraform(struct?: DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatus | undefined) {
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

export class DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference {
    return new DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNames {
}

export function dataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesToTerraform(struct?: DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesToHclTerraform(struct?: DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNames | undefined) {
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

export class DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference {
    return new DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCertificatesManagementCertificateAuthorityVersionValidity {
}

export function dataOciCertificatesManagementCertificateAuthorityVersionValidityToTerraform(struct?: DataOciCertificatesManagementCertificateAuthorityVersionValidity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCertificatesManagementCertificateAuthorityVersionValidityToHclTerraform(struct?: DataOciCertificatesManagementCertificateAuthorityVersionValidity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCertificatesManagementCertificateAuthorityVersionValidity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCertificatesManagementCertificateAuthorityVersionValidity | undefined) {
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

export class DataOciCertificatesManagementCertificateAuthorityVersionValidityList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference {
    return new DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/certificates_management_certificate_authority_version oci_certificates_management_certificate_authority_version}
*/
export class DataOciCertificatesManagementCertificateAuthorityVersion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_certificates_management_certificate_authority_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCertificatesManagementCertificateAuthorityVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCertificatesManagementCertificateAuthorityVersion to import
  * @param importFromId The id of the existing DataOciCertificatesManagementCertificateAuthorityVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/certificates_management_certificate_authority_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCertificatesManagementCertificateAuthorityVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_certificates_management_certificate_authority_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/certificates_management_certificate_authority_version oci_certificates_management_certificate_authority_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCertificatesManagementCertificateAuthorityVersionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCertificatesManagementCertificateAuthorityVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_certificates_management_certificate_authority_version',
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
    this._certificateAuthorityId = config.certificateAuthorityId;
    this._certificateAuthorityVersionNumber = config.certificateAuthorityVersionNumber;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_authority_id - computed: false, optional: false, required: true
  private _certificateAuthorityId?: string; 
  public get certificateAuthorityId() {
    return this.getStringAttribute('certificate_authority_id');
  }
  public set certificateAuthorityId(value: string) {
    this._certificateAuthorityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityIdInput() {
    return this._certificateAuthorityId;
  }

  // certificate_authority_version_number - computed: false, optional: false, required: true
  private _certificateAuthorityVersionNumber?: string; 
  public get certificateAuthorityVersionNumber() {
    return this.getStringAttribute('certificate_authority_version_number');
  }
  public set certificateAuthorityVersionNumber(value: string) {
    this._certificateAuthorityVersionNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityVersionNumberInput() {
    return this._certificateAuthorityVersionNumber;
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

  // issuer_ca_version_number - computed: true, optional: false, required: false
  public get issuerCaVersionNumber() {
    return this.getStringAttribute('issuer_ca_version_number');
  }

  // revocation_status - computed: true, optional: false, required: false
  private _revocationStatus = new DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList(this, "revocation_status", false);
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
  private _subjectAlternativeNames = new DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList(this, "subject_alternative_names", false);
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
  private _validity = new DataOciCertificatesManagementCertificateAuthorityVersionValidityList(this, "validity", false);
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_authority_id: cdktf.stringToTerraform(this._certificateAuthorityId),
      certificate_authority_version_number: cdktf.stringToTerraform(this._certificateAuthorityVersionNumber),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_authority_id: {
        value: cdktf.stringToHclTerraform(this._certificateAuthorityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_authority_version_number: {
        value: cdktf.stringToHclTerraform(this._certificateAuthorityVersionNumber),
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
