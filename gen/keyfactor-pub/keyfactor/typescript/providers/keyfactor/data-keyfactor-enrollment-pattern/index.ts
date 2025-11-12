// https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/data-sources/enrollment_pattern
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKeyfactorEnrollmentPatternConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name or internal ID (integer) of the enrollment pattern to look up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/data-sources/enrollment_pattern#identifier DataKeyfactorEnrollmentPattern#identifier}
  */
  readonly identifier: string;
}
export interface DataKeyfactorEnrollmentPatternAssociatedRoles {
}

export function dataKeyfactorEnrollmentPatternAssociatedRolesToTerraform(struct?: DataKeyfactorEnrollmentPatternAssociatedRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyfactorEnrollmentPatternAssociatedRolesToHclTerraform(struct?: DataKeyfactorEnrollmentPatternAssociatedRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyfactorEnrollmentPatternAssociatedRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyfactorEnrollmentPatternAssociatedRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyfactorEnrollmentPatternAssociatedRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataKeyfactorEnrollmentPatternAssociatedRolesList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyfactorEnrollmentPatternAssociatedRolesOutputReference {
    return new DataKeyfactorEnrollmentPatternAssociatedRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyfactorEnrollmentPatternCertificateAuthorities {
}

export function dataKeyfactorEnrollmentPatternCertificateAuthoritiesToTerraform(struct?: DataKeyfactorEnrollmentPatternCertificateAuthorities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyfactorEnrollmentPatternCertificateAuthoritiesToHclTerraform(struct?: DataKeyfactorEnrollmentPatternCertificateAuthorities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyfactorEnrollmentPatternCertificateAuthoritiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyfactorEnrollmentPatternCertificateAuthorities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyfactorEnrollmentPatternCertificateAuthorities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configuration_tenant - computed: true, optional: false, required: false
  public get configurationTenant() {
    return this.getStringAttribute('configuration_tenant');
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // logical_name - computed: true, optional: false, required: false
  public get logicalName() {
    return this.getStringAttribute('logical_name');
  }
}

export class DataKeyfactorEnrollmentPatternCertificateAuthoritiesList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyfactorEnrollmentPatternCertificateAuthoritiesOutputReference {
    return new DataKeyfactorEnrollmentPatternCertificateAuthoritiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyfactorEnrollmentPatternDefaults {
}

export function dataKeyfactorEnrollmentPatternDefaultsToTerraform(struct?: DataKeyfactorEnrollmentPatternDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyfactorEnrollmentPatternDefaultsToHclTerraform(struct?: DataKeyfactorEnrollmentPatternDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyfactorEnrollmentPatternDefaultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyfactorEnrollmentPatternDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyfactorEnrollmentPatternDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // subject_part - computed: true, optional: false, required: false
  public get subjectPart() {
    return this.getStringAttribute('subject_part');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataKeyfactorEnrollmentPatternDefaultsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyfactorEnrollmentPatternDefaultsOutputReference {
    return new DataKeyfactorEnrollmentPatternDefaultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyfactorEnrollmentPatternEnrollmentFields {
}

export function dataKeyfactorEnrollmentPatternEnrollmentFieldsToTerraform(struct?: DataKeyfactorEnrollmentPatternEnrollmentFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyfactorEnrollmentPatternEnrollmentFieldsToHclTerraform(struct?: DataKeyfactorEnrollmentPatternEnrollmentFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyfactorEnrollmentPatternEnrollmentFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyfactorEnrollmentPatternEnrollmentFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyfactorEnrollmentPatternEnrollmentFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getNumberAttribute('data_type');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // depends_on - computed: true, optional: false, required: false
  public get dependsOn() {
    return this.getStringAttribute('depends_on');
  }

  // depends_on_value - computed: true, optional: false, required: false
  public get dependsOnValue() {
    return this.getStringAttribute('depends_on_value');
  }

  // enrollment - computed: true, optional: false, required: false
  public get enrollment() {
    return this.getNumberAttribute('enrollment');
  }

  // hint - computed: true, optional: false, required: false
  public get hint() {
    return this.getStringAttribute('hint');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // options - computed: true, optional: false, required: false
  public get options() {
    return this.getListAttribute('options');
  }

  // validation - computed: true, optional: false, required: false
  public get validation() {
    return this.getStringAttribute('validation');
  }
}

export class DataKeyfactorEnrollmentPatternEnrollmentFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyfactorEnrollmentPatternEnrollmentFieldsOutputReference {
    return new DataKeyfactorEnrollmentPatternEnrollmentFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyfactorEnrollmentPatternMetadataFields {
}

export function dataKeyfactorEnrollmentPatternMetadataFieldsToTerraform(struct?: DataKeyfactorEnrollmentPatternMetadataFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyfactorEnrollmentPatternMetadataFieldsToHclTerraform(struct?: DataKeyfactorEnrollmentPatternMetadataFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyfactorEnrollmentPatternMetadataFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyfactorEnrollmentPatternMetadataFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyfactorEnrollmentPatternMetadataFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // case_sensitive - computed: true, optional: false, required: false
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // enrollment - computed: true, optional: false, required: false
  public get enrollment() {
    return this.getNumberAttribute('enrollment');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // metadata_id - computed: true, optional: false, required: false
  public get metadataId() {
    return this.getNumberAttribute('metadata_id');
  }

  // validation - computed: true, optional: false, required: false
  public get validation() {
    return this.getStringAttribute('validation');
  }
}

export class DataKeyfactorEnrollmentPatternMetadataFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyfactorEnrollmentPatternMetadataFieldsOutputReference {
    return new DataKeyfactorEnrollmentPatternMetadataFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyfactorEnrollmentPatternPoliciesAlternativeKeyAlgorithms {
}

export function dataKeyfactorEnrollmentPatternPoliciesAlternativeKeyAlgorithmsToTerraform(struct?: DataKeyfactorEnrollmentPatternPoliciesAlternativeKeyAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyfactorEnrollmentPatternPoliciesAlternativeKeyAlgorithmsToHclTerraform(struct?: DataKeyfactorEnrollmentPatternPoliciesAlternativeKeyAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyfactorEnrollmentPatternPoliciesAlternativeKeyAlgorithmsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyfactorEnrollmentPatternPoliciesAlternativeKeyAlgorithms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyfactorEnrollmentPatternPoliciesAlternativeKeyAlgorithms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bit_lengths - computed: true, optional: false, required: false
  public get bitLengths() {
    return this.getNumberListAttribute('bit_lengths');
  }

  // curves - computed: true, optional: false, required: false
  public get curves() {
    return this.getListAttribute('curves');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataKeyfactorEnrollmentPatternPoliciesAlternativeKeyAlgorithmsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyfactorEnrollmentPatternPoliciesAlternativeKeyAlgorithmsOutputReference {
    return new DataKeyfactorEnrollmentPatternPoliciesAlternativeKeyAlgorithmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyfactorEnrollmentPatternPoliciesPrimaryKeyAlgorithms {
}

export function dataKeyfactorEnrollmentPatternPoliciesPrimaryKeyAlgorithmsToTerraform(struct?: DataKeyfactorEnrollmentPatternPoliciesPrimaryKeyAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyfactorEnrollmentPatternPoliciesPrimaryKeyAlgorithmsToHclTerraform(struct?: DataKeyfactorEnrollmentPatternPoliciesPrimaryKeyAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyfactorEnrollmentPatternPoliciesPrimaryKeyAlgorithmsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyfactorEnrollmentPatternPoliciesPrimaryKeyAlgorithms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyfactorEnrollmentPatternPoliciesPrimaryKeyAlgorithms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bit_lengths - computed: true, optional: false, required: false
  public get bitLengths() {
    return this.getNumberListAttribute('bit_lengths');
  }

  // curves - computed: true, optional: false, required: false
  public get curves() {
    return this.getListAttribute('curves');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataKeyfactorEnrollmentPatternPoliciesPrimaryKeyAlgorithmsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyfactorEnrollmentPatternPoliciesPrimaryKeyAlgorithmsOutputReference {
    return new DataKeyfactorEnrollmentPatternPoliciesPrimaryKeyAlgorithmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyfactorEnrollmentPatternPolicies {
}

export function dataKeyfactorEnrollmentPatternPoliciesToTerraform(struct?: DataKeyfactorEnrollmentPatternPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyfactorEnrollmentPatternPoliciesToHclTerraform(struct?: DataKeyfactorEnrollmentPatternPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyfactorEnrollmentPatternPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyfactorEnrollmentPatternPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyfactorEnrollmentPatternPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_key_reuse - computed: true, optional: false, required: false
  public get allowKeyReuse() {
    return this.getBooleanAttribute('allow_key_reuse');
  }

  // allow_wildcards - computed: true, optional: false, required: false
  public get allowWildcards() {
    return this.getBooleanAttribute('allow_wildcards');
  }

  // alternative_key_algorithms - computed: true, optional: false, required: false
  private _alternativeKeyAlgorithms = new DataKeyfactorEnrollmentPatternPoliciesAlternativeKeyAlgorithmsList(this, "alternative_key_algorithms", false);
  public get alternativeKeyAlgorithms() {
    return this._alternativeKeyAlgorithms;
  }

  // certificate_owner_role - computed: true, optional: false, required: false
  public get certificateOwnerRole() {
    return this.getNumberAttribute('certificate_owner_role');
  }

  // default_certificate_owner_override - computed: true, optional: false, required: false
  public get defaultCertificateOwnerOverride() {
    return this.getBooleanAttribute('default_certificate_owner_override');
  }

  // default_certificate_owner_role_id - computed: true, optional: false, required: false
  public get defaultCertificateOwnerRoleId() {
    return this.getNumberAttribute('default_certificate_owner_role_id');
  }

  // default_certificate_owner_role_name - computed: true, optional: false, required: false
  public get defaultCertificateOwnerRoleName() {
    return this.getStringAttribute('default_certificate_owner_role_name');
  }

  // primary_key_algorithms - computed: true, optional: false, required: false
  private _primaryKeyAlgorithms = new DataKeyfactorEnrollmentPatternPoliciesPrimaryKeyAlgorithmsList(this, "primary_key_algorithms", false);
  public get primaryKeyAlgorithms() {
    return this._primaryKeyAlgorithms;
  }

  // rfc_enforcement - computed: true, optional: false, required: false
  public get rfcEnforcement() {
    return this.getBooleanAttribute('rfc_enforcement');
  }
}
export interface DataKeyfactorEnrollmentPatternRegexes {
}

export function dataKeyfactorEnrollmentPatternRegexesToTerraform(struct?: DataKeyfactorEnrollmentPatternRegexes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyfactorEnrollmentPatternRegexesToHclTerraform(struct?: DataKeyfactorEnrollmentPatternRegexes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyfactorEnrollmentPatternRegexesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyfactorEnrollmentPatternRegexes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyfactorEnrollmentPatternRegexes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // case_sensitive - computed: true, optional: false, required: false
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }

  // error - computed: true, optional: false, required: false
  public get error() {
    return this.getStringAttribute('error');
  }

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }

  // subject_part - computed: true, optional: false, required: false
  public get subjectPart() {
    return this.getStringAttribute('subject_part');
  }
}

export class DataKeyfactorEnrollmentPatternRegexesList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyfactorEnrollmentPatternRegexesOutputReference {
    return new DataKeyfactorEnrollmentPatternRegexesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyfactorEnrollmentPatternTemplate {
}

export function dataKeyfactorEnrollmentPatternTemplateToTerraform(struct?: DataKeyfactorEnrollmentPatternTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyfactorEnrollmentPatternTemplateToHclTerraform(struct?: DataKeyfactorEnrollmentPatternTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyfactorEnrollmentPatternTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyfactorEnrollmentPatternTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyfactorEnrollmentPatternTemplate | undefined) {
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

  // configuration_tenant - computed: true, optional: false, required: false
  public get configurationTenant() {
    return this.getStringAttribute('configuration_tenant');
  }

  // friendly_name - computed: true, optional: false, required: false
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // requires_approval - computed: true, optional: false, required: false
  public get requiresApproval() {
    return this.getBooleanAttribute('requires_approval');
  }

  // template_name - computed: true, optional: false, required: false
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/data-sources/enrollment_pattern keyfactor_enrollment_pattern}
*/
export class DataKeyfactorEnrollmentPattern extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keyfactor_enrollment_pattern";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKeyfactorEnrollmentPattern resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKeyfactorEnrollmentPattern to import
  * @param importFromId The id of the existing DataKeyfactorEnrollmentPattern that should be imported. Refer to the {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/data-sources/enrollment_pattern#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKeyfactorEnrollmentPattern to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keyfactor_enrollment_pattern", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/data-sources/enrollment_pattern keyfactor_enrollment_pattern} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKeyfactorEnrollmentPatternConfig
  */
  public constructor(scope: Construct, id: string, config: DataKeyfactorEnrollmentPatternConfig) {
    super(scope, id, {
      terraformResourceType: 'keyfactor_enrollment_pattern',
      terraformGeneratorMetadata: {
        providerName: 'keyfactor',
        providerVersion: '2.7.0',
        providerVersionConstraint: '2.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._identifier = config.identifier;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_enrollment_types - computed: true, optional: false, required: false
  public get allowedEnrollmentTypes() {
    return this.getNumberAttribute('allowed_enrollment_types');
  }

  // associated_roles - computed: true, optional: false, required: false
  private _associatedRoles = new DataKeyfactorEnrollmentPatternAssociatedRolesList(this, "associated_roles", false);
  public get associatedRoles() {
    return this._associatedRoles;
  }

  // certificate_authorities - computed: true, optional: false, required: false
  private _certificateAuthorities = new DataKeyfactorEnrollmentPatternCertificateAuthoritiesList(this, "certificate_authorities", false);
  public get certificateAuthorities() {
    return this._certificateAuthorities;
  }

  // defaults - computed: true, optional: false, required: false
  private _defaults = new DataKeyfactorEnrollmentPatternDefaultsList(this, "defaults", false);
  public get defaults() {
    return this._defaults;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enrollment_fields - computed: true, optional: false, required: false
  private _enrollmentFields = new DataKeyfactorEnrollmentPatternEnrollmentFieldsList(this, "enrollment_fields", false);
  public get enrollmentFields() {
    return this._enrollmentFields;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // metadata_fields - computed: true, optional: false, required: false
  private _metadataFields = new DataKeyfactorEnrollmentPatternMetadataFieldsList(this, "metadata_fields", false);
  public get metadataFields() {
    return this._metadataFields;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // policies - computed: true, optional: false, required: false
  private _policies = new DataKeyfactorEnrollmentPatternPoliciesOutputReference(this, "policies");
  public get policies() {
    return this._policies;
  }

  // regexes - computed: true, optional: false, required: false
  private _regexes = new DataKeyfactorEnrollmentPatternRegexesList(this, "regexes", false);
  public get regexes() {
    return this._regexes;
  }

  // restrict_cas - computed: true, optional: false, required: false
  public get restrictCas() {
    return this.getBooleanAttribute('restrict_cas');
  }

  // template - computed: true, optional: false, required: false
  private _template = new DataKeyfactorEnrollmentPatternTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }

  // template_default - computed: true, optional: false, required: false
  public get templateDefault() {
    return this.getBooleanAttribute('template_default');
  }

  // use_ad_permissions - computed: true, optional: false, required: false
  public get useAdPermissions() {
    return this.getBooleanAttribute('use_ad_permissions');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      identifier: cdktf.stringToTerraform(this._identifier),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
