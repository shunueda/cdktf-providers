// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_social_identity_providers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciIdentityDomainsSocialIdentityProvidersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_social_identity_providers#authorization DataOciIdentityDomainsSocialIdentityProviders#authorization}
  */
  readonly authorization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_social_identity_providers#compartment_id DataOciIdentityDomainsSocialIdentityProviders#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_social_identity_providers#id DataOciIdentityDomainsSocialIdentityProviders#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_social_identity_providers#idcs_endpoint DataOciIdentityDomainsSocialIdentityProviders#idcs_endpoint}
  */
  readonly idcsEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_social_identity_providers#resource_type_schema_version DataOciIdentityDomainsSocialIdentityProviders#resource_type_schema_version}
  */
  readonly resourceTypeSchemaVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_social_identity_providers#social_identity_provider_count DataOciIdentityDomainsSocialIdentityProviders#social_identity_provider_count}
  */
  readonly socialIdentityProviderCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_social_identity_providers#social_identity_provider_filter DataOciIdentityDomainsSocialIdentityProviders#social_identity_provider_filter}
  */
  readonly socialIdentityProviderFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_social_identity_providers#sort_by DataOciIdentityDomainsSocialIdentityProviders#sort_by}
  */
  readonly sortBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_social_identity_providers#sort_order DataOciIdentityDomainsSocialIdentityProviders#sort_order}
  */
  readonly sortOrder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_social_identity_providers#start_index DataOciIdentityDomainsSocialIdentityProviders#start_index}
  */
  readonly startIndex?: number;
}
export interface DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy {
}

export function dataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByToTerraform(struct?: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByToHclTerraform(struct?: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy | undefined) {
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

export class DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference {
    return new DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy {
}

export function dataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByToTerraform(struct?: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByToHclTerraform(struct?: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy | undefined) {
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

export class DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference {
    return new DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups {
}

export function dataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsToTerraform(struct?: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsToHclTerraform(struct?: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups | undefined) {
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

export class DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference {
    return new DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta {
}

export function dataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaToTerraform(struct?: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaToHclTerraform(struct?: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta | undefined) {
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

export class DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference {
    return new DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings {
}

export function dataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsToTerraform(struct?: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsToHclTerraform(struct?: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // relay_param_key - computed: true, optional: false, required: false
  public get relayParamKey() {
    return this.getStringAttribute('relay_param_key');
  }

  // relay_param_value - computed: true, optional: false, required: false
  public get relayParamValue() {
    return this.getStringAttribute('relay_param_value');
  }
}

export class DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference {
    return new DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags {
}

export function dataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsToTerraform(struct?: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsToHclTerraform(struct?: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags | undefined) {
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

export class DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference {
    return new DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders {
}

export function dataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersToTerraform(struct?: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersToHclTerraform(struct?: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders | undefined) {
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

  // authorization - computed: true, optional: false, required: false
  public get authorization() {
    return this.getStringAttribute('authorization');
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

  // compartment_ocid - computed: true, optional: false, required: false
  public get compartmentOcid() {
    return this.getStringAttribute('compartment_ocid');
  }

  // consumer_key - computed: true, optional: false, required: false
  public get consumerKey() {
    return this.getStringAttribute('consumer_key');
  }

  // consumer_secret - computed: true, optional: false, required: false
  public get consumerSecret() {
    return this.getStringAttribute('consumer_secret');
  }

  // delete_in_progress - computed: true, optional: false, required: false
  public get deleteInProgress() {
    return this.getBooleanAttribute('delete_in_progress');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // discovery_url - computed: true, optional: false, required: false
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }

  // domain_ocid - computed: true, optional: false, required: false
  public get domainOcid() {
    return this.getStringAttribute('domain_ocid');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // icon_url - computed: true, optional: false, required: false
  public get iconUrl() {
    return this.getStringAttribute('icon_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // id_attribute - computed: true, optional: false, required: false
  public get idAttribute() {
    return this.getStringAttribute('id_attribute');
  }

  // idcs_created_by - computed: true, optional: false, required: false
  private _idcsCreatedBy = new DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList(this, "idcs_created_by", false);
  public get idcsCreatedBy() {
    return this._idcsCreatedBy;
  }

  // idcs_endpoint - computed: true, optional: false, required: false
  public get idcsEndpoint() {
    return this.getStringAttribute('idcs_endpoint');
  }

  // idcs_last_modified_by - computed: true, optional: false, required: false
  private _idcsLastModifiedBy = new DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList(this, "idcs_last_modified_by", false);
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

  // jit_prov_assigned_groups - computed: true, optional: false, required: false
  private _jitProvAssignedGroups = new DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList(this, "jit_prov_assigned_groups", false);
  public get jitProvAssignedGroups() {
    return this._jitProvAssignedGroups;
  }

  // jit_prov_group_static_list_enabled - computed: true, optional: false, required: false
  public get jitProvGroupStaticListEnabled() {
    return this.getBooleanAttribute('jit_prov_group_static_list_enabled');
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList(this, "meta", false);
  public get meta() {
    return this._meta;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // profile_url - computed: true, optional: false, required: false
  public get profileUrl() {
    return this.getStringAttribute('profile_url');
  }

  // redirect_url - computed: true, optional: false, required: false
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }

  // refresh_token_url - computed: true, optional: false, required: false
  public get refreshTokenUrl() {
    return this.getStringAttribute('refresh_token_url');
  }

  // registration_enabled - computed: true, optional: false, required: false
  public get registrationEnabled() {
    return this.getBooleanAttribute('registration_enabled');
  }

  // relay_idp_param_mappings - computed: true, optional: false, required: false
  private _relayIdpParamMappings = new DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList(this, "relay_idp_param_mappings", false);
  public get relayIdpParamMappings() {
    return this._relayIdpParamMappings;
  }

  // resource_type_schema_version - computed: true, optional: false, required: false
  public get resourceTypeSchemaVersion() {
    return this.getStringAttribute('resource_type_schema_version');
  }

  // schemas - computed: true, optional: false, required: false
  public get schemas() {
    return this.getListAttribute('schemas');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getListAttribute('scope');
  }

  // service_provider_name - computed: true, optional: false, required: false
  public get serviceProviderName() {
    return this.getStringAttribute('service_provider_name');
  }

  // show_on_login - computed: true, optional: false, required: false
  public get showOnLogin() {
    return this.getBooleanAttribute('show_on_login');
  }

  // social_jit_provisioning_enabled - computed: true, optional: false, required: false
  public get socialJitProvisioningEnabled() {
    return this.getBooleanAttribute('social_jit_provisioning_enabled');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // tenancy_ocid - computed: true, optional: false, required: false
  public get tenancyOcid() {
    return this.getStringAttribute('tenancy_ocid');
  }
}

export class DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference {
    return new DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_social_identity_providers oci_identity_domains_social_identity_providers}
*/
export class DataOciIdentityDomainsSocialIdentityProviders extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_identity_domains_social_identity_providers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciIdentityDomainsSocialIdentityProviders resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciIdentityDomainsSocialIdentityProviders to import
  * @param importFromId The id of the existing DataOciIdentityDomainsSocialIdentityProviders that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_social_identity_providers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciIdentityDomainsSocialIdentityProviders to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_identity_domains_social_identity_providers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_social_identity_providers oci_identity_domains_social_identity_providers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciIdentityDomainsSocialIdentityProvidersConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciIdentityDomainsSocialIdentityProvidersConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_domains_social_identity_providers',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authorization = config.authorization;
    this._compartmentId = config.compartmentId;
    this._id = config.id;
    this._idcsEndpoint = config.idcsEndpoint;
    this._resourceTypeSchemaVersion = config.resourceTypeSchemaVersion;
    this._socialIdentityProviderCount = config.socialIdentityProviderCount;
    this._socialIdentityProviderFilter = config.socialIdentityProviderFilter;
    this._sortBy = config.sortBy;
    this._sortOrder = config.sortOrder;
    this._startIndex = config.startIndex;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // social_identity_provider_count - computed: false, optional: true, required: false
  private _socialIdentityProviderCount?: number; 
  public get socialIdentityProviderCount() {
    return this.getNumberAttribute('social_identity_provider_count');
  }
  public set socialIdentityProviderCount(value: number) {
    this._socialIdentityProviderCount = value;
  }
  public resetSocialIdentityProviderCount() {
    this._socialIdentityProviderCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socialIdentityProviderCountInput() {
    return this._socialIdentityProviderCount;
  }

  // social_identity_provider_filter - computed: false, optional: true, required: false
  private _socialIdentityProviderFilter?: string; 
  public get socialIdentityProviderFilter() {
    return this.getStringAttribute('social_identity_provider_filter');
  }
  public set socialIdentityProviderFilter(value: string) {
    this._socialIdentityProviderFilter = value;
  }
  public resetSocialIdentityProviderFilter() {
    this._socialIdentityProviderFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socialIdentityProviderFilterInput() {
    return this._socialIdentityProviderFilter;
  }

  // social_identity_providers - computed: true, optional: false, required: false
  private _socialIdentityProviders = new DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList(this, "social_identity_providers", false);
  public get socialIdentityProviders() {
    return this._socialIdentityProviders;
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
      authorization: cdktf.stringToTerraform(this._authorization),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
      idcs_endpoint: cdktf.stringToTerraform(this._idcsEndpoint),
      resource_type_schema_version: cdktf.stringToTerraform(this._resourceTypeSchemaVersion),
      social_identity_provider_count: cdktf.numberToTerraform(this._socialIdentityProviderCount),
      social_identity_provider_filter: cdktf.stringToTerraform(this._socialIdentityProviderFilter),
      sort_by: cdktf.stringToTerraform(this._sortBy),
      sort_order: cdktf.stringToTerraform(this._sortOrder),
      start_index: cdktf.numberToTerraform(this._startIndex),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      resource_type_schema_version: {
        value: cdktf.stringToHclTerraform(this._resourceTypeSchemaVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      social_identity_provider_count: {
        value: cdktf.numberToHclTerraform(this._socialIdentityProviderCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      social_identity_provider_filter: {
        value: cdktf.stringToHclTerraform(this._socialIdentityProviderFilter),
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
