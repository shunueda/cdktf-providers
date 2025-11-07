// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_identity_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciIdentityDomainsIdentityProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_identity_provider#attribute_sets DataOciIdentityDomainsIdentityProvider#attribute_sets}
  */
  readonly attributeSets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_identity_provider#attributes DataOciIdentityDomainsIdentityProvider#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_identity_provider#authorization DataOciIdentityDomainsIdentityProvider#authorization}
  */
  readonly authorization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_identity_provider#idcs_endpoint DataOciIdentityDomainsIdentityProvider#idcs_endpoint}
  */
  readonly idcsEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_identity_provider#identity_provider_id DataOciIdentityDomainsIdentityProvider#identity_provider_id}
  */
  readonly identityProviderId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_identity_provider#resource_type_schema_version DataOciIdentityDomainsIdentityProvider#resource_type_schema_version}
  */
  readonly resourceTypeSchemaVersion?: string;
}
export interface DataOciIdentityDomainsIdentityProviderCorrelationPolicy {
}

export function dataOciIdentityDomainsIdentityProviderCorrelationPolicyToTerraform(struct?: DataOciIdentityDomainsIdentityProviderCorrelationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsIdentityProviderCorrelationPolicyToHclTerraform(struct?: DataOciIdentityDomainsIdentityProviderCorrelationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsIdentityProviderCorrelationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsIdentityProviderCorrelationPolicy | undefined) {
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

export class DataOciIdentityDomainsIdentityProviderCorrelationPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference {
    return new DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsIdentityProviderIdcsCreatedBy {
}

export function dataOciIdentityDomainsIdentityProviderIdcsCreatedByToTerraform(struct?: DataOciIdentityDomainsIdentityProviderIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsIdentityProviderIdcsCreatedByToHclTerraform(struct?: DataOciIdentityDomainsIdentityProviderIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsIdentityProviderIdcsCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsIdentityProviderIdcsCreatedBy | undefined) {
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

export class DataOciIdentityDomainsIdentityProviderIdcsCreatedByList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference {
    return new DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsIdentityProviderIdcsLastModifiedBy {
}

export function dataOciIdentityDomainsIdentityProviderIdcsLastModifiedByToTerraform(struct?: DataOciIdentityDomainsIdentityProviderIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsIdentityProviderIdcsLastModifiedByToHclTerraform(struct?: DataOciIdentityDomainsIdentityProviderIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsIdentityProviderIdcsLastModifiedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsIdentityProviderIdcsLastModifiedBy | undefined) {
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

export class DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference {
    return new DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroups {
}

export function dataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsToTerraform(struct?: DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsToHclTerraform(struct?: DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroups | undefined) {
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

export class DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference {
    return new DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsIdentityProviderJitUserProvAttributes {
}

export function dataOciIdentityDomainsIdentityProviderJitUserProvAttributesToTerraform(struct?: DataOciIdentityDomainsIdentityProviderJitUserProvAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsIdentityProviderJitUserProvAttributesToHclTerraform(struct?: DataOciIdentityDomainsIdentityProviderJitUserProvAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsIdentityProviderJitUserProvAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsIdentityProviderJitUserProvAttributes | undefined) {
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

export class DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference {
    return new DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappings {
}

export function dataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsToTerraform(struct?: DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsToHclTerraform(struct?: DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // idp_group - computed: true, optional: false, required: false
  public get idpGroup() {
    return this.getStringAttribute('idp_group');
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

export class DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference {
    return new DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsIdentityProviderMeta {
}

export function dataOciIdentityDomainsIdentityProviderMetaToTerraform(struct?: DataOciIdentityDomainsIdentityProviderMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsIdentityProviderMetaToHclTerraform(struct?: DataOciIdentityDomainsIdentityProviderMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsIdentityProviderMetaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsIdentityProviderMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsIdentityProviderMeta | undefined) {
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

export class DataOciIdentityDomainsIdentityProviderMetaList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsIdentityProviderMetaOutputReference {
    return new DataOciIdentityDomainsIdentityProviderMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsIdentityProviderTags {
}

export function dataOciIdentityDomainsIdentityProviderTagsToTerraform(struct?: DataOciIdentityDomainsIdentityProviderTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsIdentityProviderTagsToHclTerraform(struct?: DataOciIdentityDomainsIdentityProviderTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsIdentityProviderTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsIdentityProviderTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsIdentityProviderTags | undefined) {
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

export class DataOciIdentityDomainsIdentityProviderTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsIdentityProviderTagsOutputReference {
    return new DataOciIdentityDomainsIdentityProviderTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups {
}

export function dataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsToTerraform(struct?: DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsToHclTerraform(struct?: DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups | undefined) {
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

export class DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference {
    return new DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider {
}

export function dataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderToTerraform(struct?: DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderToHclTerraform(struct?: DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_token_url - computed: true, optional: false, required: false
  public get accessTokenUrl() {
    return this.getStringAttribute('access_token_url');
  }

  // account_linking_enabled - computed: true, optional: false, required: false
  public get accountLinkingEnabled() {
    return this.getBooleanAttribute('account_linking_enabled');
  }

  // admin_scope - computed: true, optional: false, required: false
  public get adminScope() {
    return this.getListAttribute('admin_scope');
  }

  // apple_dev_id - computed: true, optional: false, required: false
  public get appleDevId() {
    return this.getStringAttribute('apple_dev_id');
  }

  // apple_key_id - computed: true, optional: false, required: false
  public get appleKeyId() {
    return this.getStringAttribute('apple_key_id');
  }

  // authz_url - computed: true, optional: false, required: false
  public get authzUrl() {
    return this.getStringAttribute('authz_url');
  }

  // auto_redirect_enabled - computed: true, optional: false, required: false
  public get autoRedirectEnabled() {
    return this.getBooleanAttribute('auto_redirect_enabled');
  }

  // client_credential_in_payload - computed: true, optional: false, required: false
  public get clientCredentialInPayload() {
    return this.getBooleanAttribute('client_credential_in_payload');
  }

  // clock_skew_in_seconds - computed: true, optional: false, required: false
  public get clockSkewInSeconds() {
    return this.getNumberAttribute('clock_skew_in_seconds');
  }

  // consumer_key - computed: true, optional: false, required: false
  public get consumerKey() {
    return this.getStringAttribute('consumer_key');
  }

  // consumer_secret - computed: true, optional: false, required: false
  public get consumerSecret() {
    return this.getStringAttribute('consumer_secret');
  }

  // discovery_url - computed: true, optional: false, required: false
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }

  // id_attribute - computed: true, optional: false, required: false
  public get idAttribute() {
    return this.getStringAttribute('id_attribute');
  }

  // jit_prov_assigned_groups - computed: true, optional: false, required: false
  private _jitProvAssignedGroups = new DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList(this, "jit_prov_assigned_groups", false);
  public get jitProvAssignedGroups() {
    return this._jitProvAssignedGroups;
  }

  // jit_prov_group_static_list_enabled - computed: true, optional: false, required: false
  public get jitProvGroupStaticListEnabled() {
    return this.getBooleanAttribute('jit_prov_group_static_list_enabled');
  }

  // profile_url - computed: true, optional: false, required: false
  public get profileUrl() {
    return this.getStringAttribute('profile_url');
  }

  // redirect_url - computed: true, optional: false, required: false
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }

  // registration_enabled - computed: true, optional: false, required: false
  public get registrationEnabled() {
    return this.getBooleanAttribute('registration_enabled');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getListAttribute('scope');
  }

  // service_provider_name - computed: true, optional: false, required: false
  public get serviceProviderName() {
    return this.getStringAttribute('service_provider_name');
  }

  // social_jit_provisioning_enabled - computed: true, optional: false, required: false
  public get socialJitProvisioningEnabled() {
    return this.getBooleanAttribute('social_jit_provisioning_enabled');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference {
    return new DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider {
}

export function dataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderToTerraform(struct?: DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderToHclTerraform(struct?: DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cert_match_attribute - computed: true, optional: false, required: false
  public get certMatchAttribute() {
    return this.getStringAttribute('cert_match_attribute');
  }

  // crl_check_on_ocsp_failure_enabled - computed: true, optional: false, required: false
  public get crlCheckOnOcspFailureEnabled() {
    return this.getBooleanAttribute('crl_check_on_ocsp_failure_enabled');
  }

  // crl_enabled - computed: true, optional: false, required: false
  public get crlEnabled() {
    return this.getBooleanAttribute('crl_enabled');
  }

  // crl_location - computed: true, optional: false, required: false
  public get crlLocation() {
    return this.getStringAttribute('crl_location');
  }

  // crl_reload_duration - computed: true, optional: false, required: false
  public get crlReloadDuration() {
    return this.getNumberAttribute('crl_reload_duration');
  }

  // eku_validation_enabled - computed: true, optional: false, required: false
  public get ekuValidationEnabled() {
    return this.getBooleanAttribute('eku_validation_enabled');
  }

  // eku_values - computed: true, optional: false, required: false
  public get ekuValues() {
    return this.getListAttribute('eku_values');
  }

  // ocsp_allow_unknown_response_status - computed: true, optional: false, required: false
  public get ocspAllowUnknownResponseStatus() {
    return this.getBooleanAttribute('ocsp_allow_unknown_response_status');
  }

  // ocsp_enable_signed_response - computed: true, optional: false, required: false
  public get ocspEnableSignedResponse() {
    return this.getBooleanAttribute('ocsp_enable_signed_response');
  }

  // ocsp_enabled - computed: true, optional: false, required: false
  public get ocspEnabled() {
    return this.getBooleanAttribute('ocsp_enabled');
  }

  // ocsp_responder_url - computed: true, optional: false, required: false
  public get ocspResponderUrl() {
    return this.getStringAttribute('ocsp_responder_url');
  }

  // ocsp_revalidate_time - computed: true, optional: false, required: false
  public get ocspRevalidateTime() {
    return this.getNumberAttribute('ocsp_revalidate_time');
  }

  // ocsp_server_name - computed: true, optional: false, required: false
  public get ocspServerName() {
    return this.getStringAttribute('ocsp_server_name');
  }

  // ocsp_trust_cert_chain - computed: true, optional: false, required: false
  public get ocspTrustCertChain() {
    return this.getListAttribute('ocsp_trust_cert_chain');
  }

  // other_cert_match_attribute - computed: true, optional: false, required: false
  public get otherCertMatchAttribute() {
    return this.getStringAttribute('other_cert_match_attribute');
  }

  // signing_certificate_chain - computed: true, optional: false, required: false
  public get signingCertificateChain() {
    return this.getListAttribute('signing_certificate_chain');
  }

  // user_match_attribute - computed: true, optional: false, required: false
  public get userMatchAttribute() {
    return this.getStringAttribute('user_match_attribute');
  }
}

export class DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference {
    return new DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_identity_provider oci_identity_domains_identity_provider}
*/
export class DataOciIdentityDomainsIdentityProvider extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_identity_domains_identity_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciIdentityDomainsIdentityProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciIdentityDomainsIdentityProvider to import
  * @param importFromId The id of the existing DataOciIdentityDomainsIdentityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_identity_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciIdentityDomainsIdentityProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_identity_domains_identity_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_identity_provider oci_identity_domains_identity_provider} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciIdentityDomainsIdentityProviderConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciIdentityDomainsIdentityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_domains_identity_provider',
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
    this._attributeSets = config.attributeSets;
    this._attributes = config.attributes;
    this._authorization = config.authorization;
    this._idcsEndpoint = config.idcsEndpoint;
    this._identityProviderId = config.identityProviderId;
    this._resourceTypeSchemaVersion = config.resourceTypeSchemaVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assertion_attribute - computed: true, optional: false, required: false
  public get assertionAttribute() {
    return this.getStringAttribute('assertion_attribute');
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

  // authn_request_binding - computed: true, optional: false, required: false
  public get authnRequestBinding() {
    return this.getStringAttribute('authn_request_binding');
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

  // correlation_policy - computed: true, optional: false, required: false
  private _correlationPolicy = new DataOciIdentityDomainsIdentityProviderCorrelationPolicyList(this, "correlation_policy", false);
  public get correlationPolicy() {
    return this._correlationPolicy;
  }

  // delete_in_progress - computed: true, optional: false, required: false
  public get deleteInProgress() {
    return this.getBooleanAttribute('delete_in_progress');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // domain_ocid - computed: true, optional: false, required: false
  public get domainOcid() {
    return this.getStringAttribute('domain_ocid');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // encryption_certificate - computed: true, optional: false, required: false
  public get encryptionCertificate() {
    return this.getStringAttribute('encryption_certificate');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // icon_url - computed: true, optional: false, required: false
  public get iconUrl() {
    return this.getStringAttribute('icon_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idcs_created_by - computed: true, optional: false, required: false
  private _idcsCreatedBy = new DataOciIdentityDomainsIdentityProviderIdcsCreatedByList(this, "idcs_created_by", false);
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
  private _idcsLastModifiedBy = new DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList(this, "idcs_last_modified_by", false);
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

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }

  // idp_sso_url - computed: true, optional: false, required: false
  public get idpSsoUrl() {
    return this.getStringAttribute('idp_sso_url');
  }

  // include_signing_cert_in_signature - computed: true, optional: false, required: false
  public get includeSigningCertInSignature() {
    return this.getBooleanAttribute('include_signing_cert_in_signature');
  }

  // jit_user_prov_assigned_groups - computed: true, optional: false, required: false
  private _jitUserProvAssignedGroups = new DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList(this, "jit_user_prov_assigned_groups", false);
  public get jitUserProvAssignedGroups() {
    return this._jitUserProvAssignedGroups;
  }

  // jit_user_prov_attribute_update_enabled - computed: true, optional: false, required: false
  public get jitUserProvAttributeUpdateEnabled() {
    return this.getBooleanAttribute('jit_user_prov_attribute_update_enabled');
  }

  // jit_user_prov_attributes - computed: true, optional: false, required: false
  private _jitUserProvAttributes = new DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList(this, "jit_user_prov_attributes", false);
  public get jitUserProvAttributes() {
    return this._jitUserProvAttributes;
  }

  // jit_user_prov_create_user_enabled - computed: true, optional: false, required: false
  public get jitUserProvCreateUserEnabled() {
    return this.getBooleanAttribute('jit_user_prov_create_user_enabled');
  }

  // jit_user_prov_enabled - computed: true, optional: false, required: false
  public get jitUserProvEnabled() {
    return this.getBooleanAttribute('jit_user_prov_enabled');
  }

  // jit_user_prov_group_assertion_attribute_enabled - computed: true, optional: false, required: false
  public get jitUserProvGroupAssertionAttributeEnabled() {
    return this.getBooleanAttribute('jit_user_prov_group_assertion_attribute_enabled');
  }

  // jit_user_prov_group_assignment_method - computed: true, optional: false, required: false
  public get jitUserProvGroupAssignmentMethod() {
    return this.getStringAttribute('jit_user_prov_group_assignment_method');
  }

  // jit_user_prov_group_mapping_mode - computed: true, optional: false, required: false
  public get jitUserProvGroupMappingMode() {
    return this.getStringAttribute('jit_user_prov_group_mapping_mode');
  }

  // jit_user_prov_group_mappings - computed: true, optional: false, required: false
  private _jitUserProvGroupMappings = new DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList(this, "jit_user_prov_group_mappings", false);
  public get jitUserProvGroupMappings() {
    return this._jitUserProvGroupMappings;
  }

  // jit_user_prov_group_saml_attribute_name - computed: true, optional: false, required: false
  public get jitUserProvGroupSamlAttributeName() {
    return this.getStringAttribute('jit_user_prov_group_saml_attribute_name');
  }

  // jit_user_prov_group_static_list_enabled - computed: true, optional: false, required: false
  public get jitUserProvGroupStaticListEnabled() {
    return this.getBooleanAttribute('jit_user_prov_group_static_list_enabled');
  }

  // jit_user_prov_ignore_error_on_absent_groups - computed: true, optional: false, required: false
  public get jitUserProvIgnoreErrorOnAbsentGroups() {
    return this.getBooleanAttribute('jit_user_prov_ignore_error_on_absent_groups');
  }

  // last_notification_sent_time - computed: true, optional: false, required: false
  public get lastNotificationSentTime() {
    return this.getStringAttribute('last_notification_sent_time');
  }

  // logout_binding - computed: true, optional: false, required: false
  public get logoutBinding() {
    return this.getStringAttribute('logout_binding');
  }

  // logout_enabled - computed: true, optional: false, required: false
  public get logoutEnabled() {
    return this.getBooleanAttribute('logout_enabled');
  }

  // logout_request_url - computed: true, optional: false, required: false
  public get logoutRequestUrl() {
    return this.getStringAttribute('logout_request_url');
  }

  // logout_response_url - computed: true, optional: false, required: false
  public get logoutResponseUrl() {
    return this.getStringAttribute('logout_response_url');
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new DataOciIdentityDomainsIdentityProviderMetaList(this, "meta", false);
  public get meta() {
    return this._meta;
  }

  // metadata - computed: true, optional: false, required: false
  public get metadata() {
    return this.getStringAttribute('metadata');
  }

  // name_id_format - computed: true, optional: false, required: false
  public get nameIdFormat() {
    return this.getStringAttribute('name_id_format');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // partner_name - computed: true, optional: false, required: false
  public get partnerName() {
    return this.getStringAttribute('partner_name');
  }

  // partner_provider_id - computed: true, optional: false, required: false
  public get partnerProviderId() {
    return this.getStringAttribute('partner_provider_id');
  }

  // requested_authentication_context - computed: true, optional: false, required: false
  public get requestedAuthenticationContext() {
    return this.getListAttribute('requested_authentication_context');
  }

  // require_force_authn - computed: true, optional: false, required: false
  public get requireForceAuthn() {
    return this.getBooleanAttribute('require_force_authn');
  }

  // requires_encrypted_assertion - computed: true, optional: false, required: false
  public get requiresEncryptedAssertion() {
    return this.getBooleanAttribute('requires_encrypted_assertion');
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

  // saml_ho_krequired - computed: true, optional: false, required: false
  public get samlHoKrequired() {
    return this.getBooleanAttribute('saml_ho_krequired');
  }

  // schemas - computed: true, optional: false, required: false
  public get schemas() {
    return this.getListAttribute('schemas');
  }

  // service_instance_identifier - computed: true, optional: false, required: false
  public get serviceInstanceIdentifier() {
    return this.getStringAttribute('service_instance_identifier');
  }

  // shown_on_login_page - computed: true, optional: false, required: false
  public get shownOnLoginPage() {
    return this.getBooleanAttribute('shown_on_login_page');
  }

  // signature_hash_algorithm - computed: true, optional: false, required: false
  public get signatureHashAlgorithm() {
    return this.getStringAttribute('signature_hash_algorithm');
  }

  // signing_certificate - computed: true, optional: false, required: false
  public get signingCertificate() {
    return this.getStringAttribute('signing_certificate');
  }

  // succinct_id - computed: true, optional: false, required: false
  public get succinctId() {
    return this.getStringAttribute('succinct_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataOciIdentityDomainsIdentityProviderTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // tenancy_ocid - computed: true, optional: false, required: false
  public get tenancyOcid() {
    return this.getStringAttribute('tenancy_ocid');
  }

  // tenant_provider_id - computed: true, optional: false, required: false
  public get tenantProviderId() {
    return this.getStringAttribute('tenant_provider_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider = new DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList(this, "urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider", false);
  public get urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider() {
    return this._urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider;
  }

  // urnietfparamsscimschemasoracleidcsextensionx509identity_provider - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider = new DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList(this, "urnietfparamsscimschemasoracleidcsextensionx509identity_provider", false);
  public get urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider() {
    return this._urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider;
  }

  // user_mapping_method - computed: true, optional: false, required: false
  public get userMappingMethod() {
    return this.getStringAttribute('user_mapping_method');
  }

  // user_mapping_store_attribute - computed: true, optional: false, required: false
  public get userMappingStoreAttribute() {
    return this.getStringAttribute('user_mapping_store_attribute');
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
      identity_provider_id: cdktf.stringToTerraform(this._identityProviderId),
      resource_type_schema_version: cdktf.stringToTerraform(this._resourceTypeSchemaVersion),
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
      identity_provider_id: {
        value: cdktf.stringToHclTerraform(this._identityProviderId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
