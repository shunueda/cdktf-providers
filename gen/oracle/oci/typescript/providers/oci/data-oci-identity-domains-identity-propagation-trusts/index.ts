// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_identity_propagation_trusts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciIdentityDomainsIdentityPropagationTrustsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_identity_propagation_trusts#attribute_sets DataOciIdentityDomainsIdentityPropagationTrusts#attribute_sets}
  */
  readonly attributeSets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_identity_propagation_trusts#attributes DataOciIdentityDomainsIdentityPropagationTrusts#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_identity_propagation_trusts#authorization DataOciIdentityDomainsIdentityPropagationTrusts#authorization}
  */
  readonly authorization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_identity_propagation_trusts#compartment_id DataOciIdentityDomainsIdentityPropagationTrusts#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_identity_propagation_trusts#id DataOciIdentityDomainsIdentityPropagationTrusts#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_identity_propagation_trusts#idcs_endpoint DataOciIdentityDomainsIdentityPropagationTrusts#idcs_endpoint}
  */
  readonly idcsEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_identity_propagation_trusts#identity_propagation_trust_count DataOciIdentityDomainsIdentityPropagationTrusts#identity_propagation_trust_count}
  */
  readonly identityPropagationTrustCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_identity_propagation_trusts#identity_propagation_trust_filter DataOciIdentityDomainsIdentityPropagationTrusts#identity_propagation_trust_filter}
  */
  readonly identityPropagationTrustFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_identity_propagation_trusts#resource_type_schema_version DataOciIdentityDomainsIdentityPropagationTrusts#resource_type_schema_version}
  */
  readonly resourceTypeSchemaVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_identity_propagation_trusts#sort_by DataOciIdentityDomainsIdentityPropagationTrusts#sort_by}
  */
  readonly sortBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_identity_propagation_trusts#sort_order DataOciIdentityDomainsIdentityPropagationTrusts#sort_order}
  */
  readonly sortOrder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_identity_propagation_trusts#start_index DataOciIdentityDomainsIdentityPropagationTrusts#start_index}
  */
  readonly startIndex?: number;
}
export interface DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedBy {
}

export function dataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByToTerraform(struct?: DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByToHclTerraform(struct?: DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedBy | undefined) {
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

export class DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference {
    return new DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedBy {
}

export function dataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByToTerraform(struct?: DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByToHclTerraform(struct?: DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedBy | undefined) {
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

export class DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference {
    return new DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsers {
}

export function dataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersToTerraform(struct?: DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersToHclTerraform(struct?: DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // rule - computed: true, optional: false, required: false
  public get rule() {
    return this.getStringAttribute('rule');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference {
    return new DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytab {
}

export function dataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabToTerraform(struct?: DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytab): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabToHclTerraform(struct?: DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytab): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytab | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytab | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secret_ocid - computed: true, optional: false, required: false
  public get secretOcid() {
    return this.getStringAttribute('secret_ocid');
  }

  // secret_version - computed: true, optional: false, required: false
  public get secretVersion() {
    return this.getNumberAttribute('secret_version');
  }
}

export class DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference {
    return new DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMeta {
}

export function dataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaToTerraform(struct?: DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaToHclTerraform(struct?: DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMeta | undefined) {
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

export class DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference {
    return new DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTags {
}

export function dataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsToTerraform(struct?: DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsToHclTerraform(struct?: DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTags | undefined) {
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

export class DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference {
    return new DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrusts {
}

export function dataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsToTerraform(struct?: DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrusts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsToHclTerraform(struct?: DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrusts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrusts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrusts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // allow_impersonation - computed: true, optional: false, required: false
  public get allowImpersonation() {
    return this.getBooleanAttribute('allow_impersonation');
  }

  // attribute_sets - computed: true, optional: false, required: false
  public get attributeSets() {
    return this.getListAttribute('attribute_sets');
  }

  // attributes - computed: true, optional: false, required: false
  public get attributes() {
    return this.getStringAttribute('attributes');
  }

  // authorization - computed: true, optional: false, required: false
  public get authorization() {
    return this.getStringAttribute('authorization');
  }

  // client_claim_name - computed: true, optional: false, required: false
  public get clientClaimName() {
    return this.getStringAttribute('client_claim_name');
  }

  // client_claim_values - computed: true, optional: false, required: false
  public get clientClaimValues() {
    return this.getListAttribute('client_claim_values');
  }

  // clock_skew_seconds - computed: true, optional: false, required: false
  public get clockSkewSeconds() {
    return this.getNumberAttribute('clock_skew_seconds');
  }

  // compartment_ocid - computed: true, optional: false, required: false
  public get compartmentOcid() {
    return this.getStringAttribute('compartment_ocid');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idcs_created_by - computed: true, optional: false, required: false
  private _idcsCreatedBy = new DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList(this, "idcs_created_by", false);
  public get idcsCreatedBy() {
    return this._idcsCreatedBy;
  }

  // idcs_endpoint - computed: true, optional: false, required: false
  public get idcsEndpoint() {
    return this.getStringAttribute('idcs_endpoint');
  }

  // idcs_last_modified_by - computed: true, optional: false, required: false
  private _idcsLastModifiedBy = new DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList(this, "idcs_last_modified_by", false);
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

  // impersonation_service_users - computed: true, optional: false, required: false
  private _impersonationServiceUsers = new DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList(this, "impersonation_service_users", false);
  public get impersonationServiceUsers() {
    return this._impersonationServiceUsers;
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // keytab - computed: true, optional: false, required: false
  private _keytab = new DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList(this, "keytab", false);
  public get keytab() {
    return this._keytab;
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList(this, "meta", false);
  public get meta() {
    return this._meta;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // oauth_clients - computed: true, optional: false, required: false
  public get oauthClients() {
    return this.getListAttribute('oauth_clients');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // public_certificate - computed: true, optional: false, required: false
  public get publicCertificate() {
    return this.getStringAttribute('public_certificate');
  }

  // public_key_endpoint - computed: true, optional: false, required: false
  public get publicKeyEndpoint() {
    return this.getStringAttribute('public_key_endpoint');
  }

  // resource_type_schema_version - computed: true, optional: false, required: false
  public get resourceTypeSchemaVersion() {
    return this.getStringAttribute('resource_type_schema_version');
  }

  // schemas - computed: true, optional: false, required: false
  public get schemas() {
    return this.getListAttribute('schemas');
  }

  // subject_claim_name - computed: true, optional: false, required: false
  public get subjectClaimName() {
    return this.getStringAttribute('subject_claim_name');
  }

  // subject_mapping_attribute - computed: true, optional: false, required: false
  public get subjectMappingAttribute() {
    return this.getStringAttribute('subject_mapping_attribute');
  }

  // subject_type - computed: true, optional: false, required: false
  public get subjectType() {
    return this.getStringAttribute('subject_type');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // tenancy_ocid - computed: true, optional: false, required: false
  public get tenancyOcid() {
    return this.getStringAttribute('tenancy_ocid');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference {
    return new DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_identity_propagation_trusts oci_identity_domains_identity_propagation_trusts}
*/
export class DataOciIdentityDomainsIdentityPropagationTrusts extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_identity_domains_identity_propagation_trusts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciIdentityDomainsIdentityPropagationTrusts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciIdentityDomainsIdentityPropagationTrusts to import
  * @param importFromId The id of the existing DataOciIdentityDomainsIdentityPropagationTrusts that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_identity_propagation_trusts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciIdentityDomainsIdentityPropagationTrusts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_identity_domains_identity_propagation_trusts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_identity_propagation_trusts oci_identity_domains_identity_propagation_trusts} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciIdentityDomainsIdentityPropagationTrustsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciIdentityDomainsIdentityPropagationTrustsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_domains_identity_propagation_trusts',
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
    this._attributeSets = config.attributeSets;
    this._attributes = config.attributes;
    this._authorization = config.authorization;
    this._compartmentId = config.compartmentId;
    this._id = config.id;
    this._idcsEndpoint = config.idcsEndpoint;
    this._identityPropagationTrustCount = config.identityPropagationTrustCount;
    this._identityPropagationTrustFilter = config.identityPropagationTrustFilter;
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

  // identity_propagation_trust_count - computed: false, optional: true, required: false
  private _identityPropagationTrustCount?: number; 
  public get identityPropagationTrustCount() {
    return this.getNumberAttribute('identity_propagation_trust_count');
  }
  public set identityPropagationTrustCount(value: number) {
    this._identityPropagationTrustCount = value;
  }
  public resetIdentityPropagationTrustCount() {
    this._identityPropagationTrustCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityPropagationTrustCountInput() {
    return this._identityPropagationTrustCount;
  }

  // identity_propagation_trust_filter - computed: false, optional: true, required: false
  private _identityPropagationTrustFilter?: string; 
  public get identityPropagationTrustFilter() {
    return this.getStringAttribute('identity_propagation_trust_filter');
  }
  public set identityPropagationTrustFilter(value: string) {
    this._identityPropagationTrustFilter = value;
  }
  public resetIdentityPropagationTrustFilter() {
    this._identityPropagationTrustFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityPropagationTrustFilterInput() {
    return this._identityPropagationTrustFilter;
  }

  // identity_propagation_trusts - computed: true, optional: false, required: false
  private _identityPropagationTrusts = new DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList(this, "identity_propagation_trusts", false);
  public get identityPropagationTrusts() {
    return this._identityPropagationTrusts;
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
      identity_propagation_trust_count: cdktf.numberToTerraform(this._identityPropagationTrustCount),
      identity_propagation_trust_filter: cdktf.stringToTerraform(this._identityPropagationTrustFilter),
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
      identity_propagation_trust_count: {
        value: cdktf.numberToHclTerraform(this._identityPropagationTrustCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      identity_propagation_trust_filter: {
        value: cdktf.stringToHclTerraform(this._identityPropagationTrustFilter),
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
