// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/certificates_management_certificate_versions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCertificatesManagementCertificateVersionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/certificates_management_certificate_versions#certificate_id DataOciCertificatesManagementCertificateVersions#certificate_id}
  */
  readonly certificateId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/certificates_management_certificate_versions#id DataOciCertificatesManagementCertificateVersions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/certificates_management_certificate_versions#version_number DataOciCertificatesManagementCertificateVersions#version_number}
  */
  readonly versionNumber?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/certificates_management_certificate_versions#filter DataOciCertificatesManagementCertificateVersions#filter}
  */
  readonly filter?: DataOciCertificatesManagementCertificateVersionsFilter[] | cdktf.IResolvable;
}
export interface DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatus {
}

export function dataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusToTerraform(struct?: DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusToHclTerraform(struct?: DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatus | undefined) {
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

export class DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference {
    return new DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNames {
}

export function dataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesToTerraform(struct?: DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesToHclTerraform(struct?: DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNames | undefined) {
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

export class DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference {
    return new DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidity {
}

export function dataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityToTerraform(struct?: DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityToHclTerraform(struct?: DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidity | undefined) {
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

export class DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference {
    return new DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItems {
}

export function dataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsToTerraform(struct?: DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsToHclTerraform(struct?: DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItems | undefined) {
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
  private _revocationStatus = new DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusList(this, "revocation_status", false);
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
  private _subjectAlternativeNames = new DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesList(this, "subject_alternative_names", false);
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
  private _validity = new DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityList(this, "validity", false);
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

export class DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference {
    return new DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCertificatesManagementCertificateVersionsCertificateVersionCollection {
}

export function dataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionToTerraform(struct?: DataOciCertificatesManagementCertificateVersionsCertificateVersionCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionToHclTerraform(struct?: DataOciCertificatesManagementCertificateVersionsCertificateVersionCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCertificatesManagementCertificateVersionsCertificateVersionCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCertificatesManagementCertificateVersionsCertificateVersionCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference {
    return new DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCertificatesManagementCertificateVersionsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/certificates_management_certificate_versions#name DataOciCertificatesManagementCertificateVersions#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/certificates_management_certificate_versions#regex DataOciCertificatesManagementCertificateVersions#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/certificates_management_certificate_versions#values DataOciCertificatesManagementCertificateVersions#values}
  */
  readonly values: string[];
}

export function dataOciCertificatesManagementCertificateVersionsFilterToTerraform(struct?: DataOciCertificatesManagementCertificateVersionsFilter | cdktf.IResolvable): any {
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


export function dataOciCertificatesManagementCertificateVersionsFilterToHclTerraform(struct?: DataOciCertificatesManagementCertificateVersionsFilter | cdktf.IResolvable): any {
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

export class DataOciCertificatesManagementCertificateVersionsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCertificatesManagementCertificateVersionsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciCertificatesManagementCertificateVersionsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciCertificatesManagementCertificateVersionsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciCertificatesManagementCertificateVersionsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciCertificatesManagementCertificateVersionsFilterOutputReference {
    return new DataOciCertificatesManagementCertificateVersionsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/certificates_management_certificate_versions oci_certificates_management_certificate_versions}
*/
export class DataOciCertificatesManagementCertificateVersions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_certificates_management_certificate_versions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCertificatesManagementCertificateVersions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCertificatesManagementCertificateVersions to import
  * @param importFromId The id of the existing DataOciCertificatesManagementCertificateVersions that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/certificates_management_certificate_versions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCertificatesManagementCertificateVersions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_certificates_management_certificate_versions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/certificates_management_certificate_versions oci_certificates_management_certificate_versions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCertificatesManagementCertificateVersionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCertificatesManagementCertificateVersionsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_certificates_management_certificate_versions',
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
    this._certificateId = config.certificateId;
    this._id = config.id;
    this._versionNumber = config.versionNumber;
    this._filter.internalValue = config.filter;
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

  // certificate_version_collection - computed: true, optional: false, required: false
  private _certificateVersionCollection = new DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionList(this, "certificate_version_collection", false);
  public get certificateVersionCollection() {
    return this._certificateVersionCollection;
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

  // version_number - computed: false, optional: true, required: false
  private _versionNumber?: string; 
  public get versionNumber() {
    return this.getStringAttribute('version_number');
  }
  public set versionNumber(value: string) {
    this._versionNumber = value;
  }
  public resetVersionNumber() {
    this._versionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionNumberInput() {
    return this._versionNumber;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciCertificatesManagementCertificateVersionsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciCertificatesManagementCertificateVersionsFilter[] | cdktf.IResolvable) {
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
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      id: cdktf.stringToTerraform(this._id),
      version_number: cdktf.stringToTerraform(this._versionNumber),
      filter: cdktf.listMapper(dataOciCertificatesManagementCertificateVersionsFilterToTerraform, true)(this._filter.internalValue),
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
      version_number: {
        value: cdktf.stringToHclTerraform(this._versionNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciCertificatesManagementCertificateVersionsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciCertificatesManagementCertificateVersionsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
