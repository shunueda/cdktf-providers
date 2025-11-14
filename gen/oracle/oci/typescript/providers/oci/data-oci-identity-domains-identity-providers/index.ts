// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/identity_domains_identity_providers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciIdentityDomainsIdentityProvidersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/identity_domains_identity_providers#attribute_sets DataOciIdentityDomainsIdentityProviders#attribute_sets}
  */
  readonly attributeSets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/identity_domains_identity_providers#attributes DataOciIdentityDomainsIdentityProviders#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/identity_domains_identity_providers#authorization DataOciIdentityDomainsIdentityProviders#authorization}
  */
  readonly authorization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/identity_domains_identity_providers#compartment_id DataOciIdentityDomainsIdentityProviders#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/identity_domains_identity_providers#id DataOciIdentityDomainsIdentityProviders#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/identity_domains_identity_providers#idcs_endpoint DataOciIdentityDomainsIdentityProviders#idcs_endpoint}
  */
  readonly idcsEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/identity_domains_identity_providers#identity_provider_count DataOciIdentityDomainsIdentityProviders#identity_provider_count}
  */
  readonly identityProviderCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/identity_domains_identity_providers#identity_provider_filter DataOciIdentityDomainsIdentityProviders#identity_provider_filter}
  */
  readonly identityProviderFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/identity_domains_identity_providers#resource_type_schema_version DataOciIdentityDomainsIdentityProviders#resource_type_schema_version}
  */
  readonly resourceTypeSchemaVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/identity_domains_identity_providers#sort_by DataOciIdentityDomainsIdentityProviders#sort_by}
  */
  readonly sortBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/identity_domains_identity_providers#sort_order DataOciIdentityDomainsIdentityProviders#sort_order}
  */
  readonly sortOrder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/identity_domains_identity_providers#start_index DataOciIdentityDomainsIdentityProviders#start_index}
  */
  readonly startIndex?: number;
}
export interface DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicy {
}

export function dataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyToTerraform(struct?: DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyToHclTerraform(struct?: DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicy | undefined) {
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

export class DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference {
    return new DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedBy {
}

export function dataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByToTerraform(struct?: DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByToHclTerraform(struct?: DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedBy | undefined) {
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

export class DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference {
    return new DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedBy {
}

export function dataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByToTerraform(struct?: DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByToHclTerraform(struct?: DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedBy | undefined) {
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

export class DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference {
    return new DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroups {
}

export function dataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsToTerraform(struct?: DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsToHclTerraform(struct?: DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroups | undefined) {
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

export class DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference {
    return new DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributes {
}

export function dataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesToTerraform(struct?: DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesToHclTerraform(struct?: DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributes | undefined) {
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

export class DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference {
    return new DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappings {
}

export function dataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsToTerraform(struct?: DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsToHclTerraform(struct?: DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappings | undefined) {
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

export class DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference {
    return new DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsIdentityProvidersIdentityProvidersMeta {
}

export function dataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaToTerraform(struct?: DataOciIdentityDomainsIdentityProvidersIdentityProvidersMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaToHclTerraform(struct?: DataOciIdentityDomainsIdentityProvidersIdentityProvidersMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsIdentityProvidersIdentityProvidersMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsIdentityProvidersIdentityProvidersMeta | undefined) {
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

export class DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference {
    return new DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsIdentityProvidersIdentityProvidersTags {
}

export function dataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsToTerraform(struct?: DataOciIdentityDomainsIdentityProvidersIdentityProvidersTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsToHclTerraform(struct?: DataOciIdentityDomainsIdentityProvidersIdentityProvidersTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsIdentityProvidersIdentityProvidersTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsIdentityProvidersIdentityProvidersTags | undefined) {
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

export class DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference {
    return new DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups {
}

export function dataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsToTerraform(struct?: DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsToHclTerraform(struct?: DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups | undefined) {
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

export class DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference {
    return new DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider {
}

export function dataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderToTerraform(struct?: DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderToHclTerraform(struct?: DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider | undefined) {
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
  private _jitProvAssignedGroups = new DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList(this, "jit_prov_assigned_groups", false);
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

export class DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference {
    return new DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider {
}

export function dataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderToTerraform(struct?: DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderToHclTerraform(struct?: DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider | undefined) {
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

export class DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference {
    return new DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsIdentityProvidersIdentityProviders {
}

export function dataOciIdentityDomainsIdentityProvidersIdentityProvidersToTerraform(struct?: DataOciIdentityDomainsIdentityProvidersIdentityProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsIdentityProvidersIdentityProvidersToHclTerraform(struct?: DataOciIdentityDomainsIdentityProvidersIdentityProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsIdentityProvidersIdentityProviders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsIdentityProvidersIdentityProviders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assertion_attribute - computed: true, optional: false, required: false
  public get assertionAttribute() {
    return this.getStringAttribute('assertion_attribute');
  }

  // attribute_sets - computed: true, optional: false, required: false
  public get attributeSets() {
    return this.getListAttribute('attribute_sets');
  }

  // attributes - computed: true, optional: false, required: false
  public get attributes() {
    return this.getStringAttribute('attributes');
  }

  // authn_request_binding - computed: true, optional: false, required: false
  public get authnRequestBinding() {
    return this.getStringAttribute('authn_request_binding');
  }

  // authorization - computed: true, optional: false, required: false
  public get authorization() {
    return this.getStringAttribute('authorization');
  }

  // compartment_ocid - computed: true, optional: false, required: false
  public get compartmentOcid() {
    return this.getStringAttribute('compartment_ocid');
  }

  // correlation_policy - computed: true, optional: false, required: false
  private _correlationPolicy = new DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList(this, "correlation_policy", false);
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
  private _idcsCreatedBy = new DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList(this, "idcs_created_by", false);
  public get idcsCreatedBy() {
    return this._idcsCreatedBy;
  }

  // idcs_endpoint - computed: true, optional: false, required: false
  public get idcsEndpoint() {
    return this.getStringAttribute('idcs_endpoint');
  }

  // idcs_last_modified_by - computed: true, optional: false, required: false
  private _idcsLastModifiedBy = new DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList(this, "idcs_last_modified_by", false);
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

  // idp_sso_url - computed: true, optional: false, required: false
  public get idpSsoUrl() {
    return this.getStringAttribute('idp_sso_url');
  }

  // include_signing_cert_in_signature - computed: true, optional: false, required: false
  public get includeSigningCertInSignature() {
    return this.getBooleanAttribute('include_signing_cert_in_signature');
  }

  // jit_user_prov_assigned_groups - computed: true, optional: false, required: false
  private _jitUserProvAssignedGroups = new DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList(this, "jit_user_prov_assigned_groups", false);
  public get jitUserProvAssignedGroups() {
    return this._jitUserProvAssignedGroups;
  }

  // jit_user_prov_attribute_update_enabled - computed: true, optional: false, required: false
  public get jitUserProvAttributeUpdateEnabled() {
    return this.getBooleanAttribute('jit_user_prov_attribute_update_enabled');
  }

  // jit_user_prov_attributes - computed: true, optional: false, required: false
  private _jitUserProvAttributes = new DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList(this, "jit_user_prov_attributes", false);
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
  private _jitUserProvGroupMappings = new DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList(this, "jit_user_prov_group_mappings", false);
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
  private _meta = new DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList(this, "meta", false);
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

  // resource_type_schema_version - computed: true, optional: false, required: false
  public get resourceTypeSchemaVersion() {
    return this.getStringAttribute('resource_type_schema_version');
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
  private _tags = new DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList(this, "tags", false);
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
  private _urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider = new DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList(this, "urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider", false);
  public get urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider() {
    return this._urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider;
  }

  // urnietfparamsscimschemasoracleidcsextensionx509identity_provider - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider = new DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList(this, "urnietfparamsscimschemasoracleidcsextensionx509identity_provider", false);
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
}

export class DataOciIdentityDomainsIdentityProvidersIdentityProvidersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference {
    return new DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/identity_domains_identity_providers oci_identity_domains_identity_providers}
*/
export class DataOciIdentityDomainsIdentityProviders extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_identity_domains_identity_providers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciIdentityDomainsIdentityProviders resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciIdentityDomainsIdentityProviders to import
  * @param importFromId The id of the existing DataOciIdentityDomainsIdentityProviders that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/identity_domains_identity_providers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciIdentityDomainsIdentityProviders to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_identity_domains_identity_providers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/identity_domains_identity_providers oci_identity_domains_identity_providers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciIdentityDomainsIdentityProvidersConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciIdentityDomainsIdentityProvidersConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_domains_identity_providers',
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
    this._compartmentId = config.compartmentId;
    this._id = config.id;
    this._idcsEndpoint = config.idcsEndpoint;
    this._identityProviderCount = config.identityProviderCount;
    this._identityProviderFilter = config.identityProviderFilter;
    this._resourceTypeSchemaVersion = config.resourceTypeSchemaVersion;
    this._sortBy = config.sortBy;
    this._sortOrder = config.sortOrder;
    this._startIndex = config.startIndex;
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

  // identity_provider_count - computed: false, optional: true, required: false
  private _identityProviderCount?: number; 
  public get identityProviderCount() {
    return this.getNumberAttribute('identity_provider_count');
  }
  public set identityProviderCount(value: number) {
    this._identityProviderCount = value;
  }
  public resetIdentityProviderCount() {
    this._identityProviderCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderCountInput() {
    return this._identityProviderCount;
  }

  // identity_provider_filter - computed: false, optional: true, required: false
  private _identityProviderFilter?: string; 
  public get identityProviderFilter() {
    return this.getStringAttribute('identity_provider_filter');
  }
  public set identityProviderFilter(value: string) {
    this._identityProviderFilter = value;
  }
  public resetIdentityProviderFilter() {
    this._identityProviderFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderFilterInput() {
    return this._identityProviderFilter;
  }

  // identity_providers - computed: true, optional: false, required: false
  private _identityProviders = new DataOciIdentityDomainsIdentityProvidersIdentityProvidersList(this, "identity_providers", false);
  public get identityProviders() {
    return this._identityProviders;
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
      identity_provider_count: cdktf.numberToTerraform(this._identityProviderCount),
      identity_provider_filter: cdktf.stringToTerraform(this._identityProviderFilter),
      resource_type_schema_version: cdktf.stringToTerraform(this._resourceTypeSchemaVersion),
      sort_by: cdktf.stringToTerraform(this._sortBy),
      sort_order: cdktf.stringToTerraform(this._sortOrder),
      start_index: cdktf.numberToTerraform(this._startIndex),
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
      identity_provider_count: {
        value: cdktf.numberToHclTerraform(this._identityProviderCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      identity_provider_filter: {
        value: cdktf.stringToHclTerraform(this._identityProviderFilter),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
