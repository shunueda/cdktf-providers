// https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/cloud_nss_feed
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZiaCloudNssFeedConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier for the nss server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/cloud_nss_feed#id DataZiaCloudNssFeed#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * The name of the cloud NSS feed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/cloud_nss_feed#name DataZiaCloudNssFeed#name}
  */
  readonly name?: string;
}
export interface DataZiaCloudNssFeedBuckets {
}

export function dataZiaCloudNssFeedBucketsToTerraform(struct?: DataZiaCloudNssFeedBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaCloudNssFeedBucketsToHclTerraform(struct?: DataZiaCloudNssFeedBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaCloudNssFeedBucketsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaCloudNssFeedBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaCloudNssFeedBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // getl_id - computed: true, optional: false, required: false
  public get fetchlId() {
    return this.getNumberAttribute('getl_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pid - computed: true, optional: false, required: false
  public get pid() {
    return this.getNumberAttribute('pid');
  }
}

export class DataZiaCloudNssFeedBucketsList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaCloudNssFeedBucketsOutputReference {
    return new DataZiaCloudNssFeedBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaCloudNssFeedCasbTenant {
}

export function dataZiaCloudNssFeedCasbTenantToTerraform(struct?: DataZiaCloudNssFeedCasbTenant): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaCloudNssFeedCasbTenantToHclTerraform(struct?: DataZiaCloudNssFeedCasbTenant): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaCloudNssFeedCasbTenantOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaCloudNssFeedCasbTenant | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaCloudNssFeedCasbTenant | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // getl_id - computed: true, optional: false, required: false
  public get fetchlId() {
    return this.getNumberAttribute('getl_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pid - computed: true, optional: false, required: false
  public get pid() {
    return this.getNumberAttribute('pid');
  }
}

export class DataZiaCloudNssFeedCasbTenantList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaCloudNssFeedCasbTenantOutputReference {
    return new DataZiaCloudNssFeedCasbTenantOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaCloudNssFeedDepartments {
}

export function dataZiaCloudNssFeedDepartmentsToTerraform(struct?: DataZiaCloudNssFeedDepartments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaCloudNssFeedDepartmentsToHclTerraform(struct?: DataZiaCloudNssFeedDepartments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaCloudNssFeedDepartmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaCloudNssFeedDepartments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaCloudNssFeedDepartments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // getl_id - computed: true, optional: false, required: false
  public get fetchlId() {
    return this.getNumberAttribute('getl_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pid - computed: true, optional: false, required: false
  public get pid() {
    return this.getNumberAttribute('pid');
  }
}

export class DataZiaCloudNssFeedDepartmentsList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaCloudNssFeedDepartmentsOutputReference {
    return new DataZiaCloudNssFeedDepartmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaCloudNssFeedDlpDictionaries {
}

export function dataZiaCloudNssFeedDlpDictionariesToTerraform(struct?: DataZiaCloudNssFeedDlpDictionaries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaCloudNssFeedDlpDictionariesToHclTerraform(struct?: DataZiaCloudNssFeedDlpDictionaries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaCloudNssFeedDlpDictionariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaCloudNssFeedDlpDictionaries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaCloudNssFeedDlpDictionaries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extensions - computed: true, optional: false, required: false
  private _extensions = new cdktf.StringMap(this, "extensions");
  public get extensions() {
    return this._extensions;
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

export class DataZiaCloudNssFeedDlpDictionariesList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaCloudNssFeedDlpDictionariesOutputReference {
    return new DataZiaCloudNssFeedDlpDictionariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaCloudNssFeedDlpEngines {
}

export function dataZiaCloudNssFeedDlpEnginesToTerraform(struct?: DataZiaCloudNssFeedDlpEngines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaCloudNssFeedDlpEnginesToHclTerraform(struct?: DataZiaCloudNssFeedDlpEngines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaCloudNssFeedDlpEnginesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaCloudNssFeedDlpEngines | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaCloudNssFeedDlpEngines | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extensions - computed: true, optional: false, required: false
  private _extensions = new cdktf.StringMap(this, "extensions");
  public get extensions() {
    return this._extensions;
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

export class DataZiaCloudNssFeedDlpEnginesList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaCloudNssFeedDlpEnginesOutputReference {
    return new DataZiaCloudNssFeedDlpEnginesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaCloudNssFeedExternalCollaborators {
}

export function dataZiaCloudNssFeedExternalCollaboratorsToTerraform(struct?: DataZiaCloudNssFeedExternalCollaborators): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaCloudNssFeedExternalCollaboratorsToHclTerraform(struct?: DataZiaCloudNssFeedExternalCollaborators): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaCloudNssFeedExternalCollaboratorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaCloudNssFeedExternalCollaborators | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaCloudNssFeedExternalCollaborators | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extensions - computed: true, optional: false, required: false
  private _extensions = new cdktf.StringMap(this, "extensions");
  public get extensions() {
    return this._extensions;
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

export class DataZiaCloudNssFeedExternalCollaboratorsList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaCloudNssFeedExternalCollaboratorsOutputReference {
    return new DataZiaCloudNssFeedExternalCollaboratorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaCloudNssFeedExternalOwners {
}

export function dataZiaCloudNssFeedExternalOwnersToTerraform(struct?: DataZiaCloudNssFeedExternalOwners): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaCloudNssFeedExternalOwnersToHclTerraform(struct?: DataZiaCloudNssFeedExternalOwners): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaCloudNssFeedExternalOwnersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaCloudNssFeedExternalOwners | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaCloudNssFeedExternalOwners | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extensions - computed: true, optional: false, required: false
  private _extensions = new cdktf.StringMap(this, "extensions");
  public get extensions() {
    return this._extensions;
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

export class DataZiaCloudNssFeedExternalOwnersList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaCloudNssFeedExternalOwnersOutputReference {
    return new DataZiaCloudNssFeedExternalOwnersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaCloudNssFeedInternalCollaborators {
}

export function dataZiaCloudNssFeedInternalCollaboratorsToTerraform(struct?: DataZiaCloudNssFeedInternalCollaborators): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaCloudNssFeedInternalCollaboratorsToHclTerraform(struct?: DataZiaCloudNssFeedInternalCollaborators): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaCloudNssFeedInternalCollaboratorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaCloudNssFeedInternalCollaborators | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaCloudNssFeedInternalCollaborators | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extensions - computed: true, optional: false, required: false
  private _extensions = new cdktf.StringMap(this, "extensions");
  public get extensions() {
    return this._extensions;
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

export class DataZiaCloudNssFeedInternalCollaboratorsList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaCloudNssFeedInternalCollaboratorsOutputReference {
    return new DataZiaCloudNssFeedInternalCollaboratorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaCloudNssFeedItsmObjectType {
}

export function dataZiaCloudNssFeedItsmObjectTypeToTerraform(struct?: DataZiaCloudNssFeedItsmObjectType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaCloudNssFeedItsmObjectTypeToHclTerraform(struct?: DataZiaCloudNssFeedItsmObjectType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaCloudNssFeedItsmObjectTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaCloudNssFeedItsmObjectType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaCloudNssFeedItsmObjectType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extensions - computed: true, optional: false, required: false
  private _extensions = new cdktf.StringMap(this, "extensions");
  public get extensions() {
    return this._extensions;
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

export class DataZiaCloudNssFeedItsmObjectTypeList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaCloudNssFeedItsmObjectTypeOutputReference {
    return new DataZiaCloudNssFeedItsmObjectTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaCloudNssFeedLocationGroups {
}

export function dataZiaCloudNssFeedLocationGroupsToTerraform(struct?: DataZiaCloudNssFeedLocationGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaCloudNssFeedLocationGroupsToHclTerraform(struct?: DataZiaCloudNssFeedLocationGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaCloudNssFeedLocationGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaCloudNssFeedLocationGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaCloudNssFeedLocationGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // getl_id - computed: true, optional: false, required: false
  public get fetchlId() {
    return this.getNumberAttribute('getl_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pid - computed: true, optional: false, required: false
  public get pid() {
    return this.getNumberAttribute('pid');
  }
}

export class DataZiaCloudNssFeedLocationGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaCloudNssFeedLocationGroupsOutputReference {
    return new DataZiaCloudNssFeedLocationGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaCloudNssFeedLocations {
}

export function dataZiaCloudNssFeedLocationsToTerraform(struct?: DataZiaCloudNssFeedLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaCloudNssFeedLocationsToHclTerraform(struct?: DataZiaCloudNssFeedLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaCloudNssFeedLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaCloudNssFeedLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaCloudNssFeedLocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // getl_id - computed: true, optional: false, required: false
  public get fetchlId() {
    return this.getNumberAttribute('getl_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pid - computed: true, optional: false, required: false
  public get pid() {
    return this.getNumberAttribute('pid');
  }
}

export class DataZiaCloudNssFeedLocationsList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaCloudNssFeedLocationsOutputReference {
    return new DataZiaCloudNssFeedLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaCloudNssFeedNwServices {
}

export function dataZiaCloudNssFeedNwServicesToTerraform(struct?: DataZiaCloudNssFeedNwServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaCloudNssFeedNwServicesToHclTerraform(struct?: DataZiaCloudNssFeedNwServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaCloudNssFeedNwServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaCloudNssFeedNwServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaCloudNssFeedNwServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extensions - computed: true, optional: false, required: false
  private _extensions = new cdktf.StringMap(this, "extensions");
  public get extensions() {
    return this._extensions;
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

export class DataZiaCloudNssFeedNwServicesList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaCloudNssFeedNwServicesOutputReference {
    return new DataZiaCloudNssFeedNwServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaCloudNssFeedRules {
}

export function dataZiaCloudNssFeedRulesToTerraform(struct?: DataZiaCloudNssFeedRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaCloudNssFeedRulesToHclTerraform(struct?: DataZiaCloudNssFeedRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaCloudNssFeedRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaCloudNssFeedRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaCloudNssFeedRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extensions - computed: true, optional: false, required: false
  private _extensions = new cdktf.StringMap(this, "extensions");
  public get extensions() {
    return this._extensions;
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

export class DataZiaCloudNssFeedRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaCloudNssFeedRulesOutputReference {
    return new DataZiaCloudNssFeedRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaCloudNssFeedSenderName {
}

export function dataZiaCloudNssFeedSenderNameToTerraform(struct?: DataZiaCloudNssFeedSenderName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaCloudNssFeedSenderNameToHclTerraform(struct?: DataZiaCloudNssFeedSenderName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaCloudNssFeedSenderNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaCloudNssFeedSenderName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaCloudNssFeedSenderName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // getl_id - computed: true, optional: false, required: false
  public get fetchlId() {
    return this.getNumberAttribute('getl_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pid - computed: true, optional: false, required: false
  public get pid() {
    return this.getNumberAttribute('pid');
  }
}

export class DataZiaCloudNssFeedSenderNameList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaCloudNssFeedSenderNameOutputReference {
    return new DataZiaCloudNssFeedSenderNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaCloudNssFeedUrlCategories {
}

export function dataZiaCloudNssFeedUrlCategoriesToTerraform(struct?: DataZiaCloudNssFeedUrlCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaCloudNssFeedUrlCategoriesToHclTerraform(struct?: DataZiaCloudNssFeedUrlCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaCloudNssFeedUrlCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaCloudNssFeedUrlCategories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaCloudNssFeedUrlCategories | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extensions - computed: true, optional: false, required: false
  private _extensions = new cdktf.StringMap(this, "extensions");
  public get extensions() {
    return this._extensions;
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

export class DataZiaCloudNssFeedUrlCategoriesList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaCloudNssFeedUrlCategoriesOutputReference {
    return new DataZiaCloudNssFeedUrlCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaCloudNssFeedUsers {
}

export function dataZiaCloudNssFeedUsersToTerraform(struct?: DataZiaCloudNssFeedUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaCloudNssFeedUsersToHclTerraform(struct?: DataZiaCloudNssFeedUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaCloudNssFeedUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaCloudNssFeedUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaCloudNssFeedUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // getl_id - computed: true, optional: false, required: false
  public get fetchlId() {
    return this.getNumberAttribute('getl_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pid - computed: true, optional: false, required: false
  public get pid() {
    return this.getNumberAttribute('pid');
  }
}

export class DataZiaCloudNssFeedUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaCloudNssFeedUsersOutputReference {
    return new DataZiaCloudNssFeedUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaCloudNssFeedVpnCredentials {
}

export function dataZiaCloudNssFeedVpnCredentialsToTerraform(struct?: DataZiaCloudNssFeedVpnCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaCloudNssFeedVpnCredentialsToHclTerraform(struct?: DataZiaCloudNssFeedVpnCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaCloudNssFeedVpnCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaCloudNssFeedVpnCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaCloudNssFeedVpnCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // getl_id - computed: true, optional: false, required: false
  public get fetchlId() {
    return this.getNumberAttribute('getl_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pid - computed: true, optional: false, required: false
  public get pid() {
    return this.getNumberAttribute('pid');
  }
}

export class DataZiaCloudNssFeedVpnCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaCloudNssFeedVpnCredentialsOutputReference {
    return new DataZiaCloudNssFeedVpnCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/cloud_nss_feed zia_cloud_nss_feed}
*/
export class DataZiaCloudNssFeed extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_cloud_nss_feed";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZiaCloudNssFeed resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZiaCloudNssFeed to import
  * @param importFromId The id of the existing DataZiaCloudNssFeed that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/cloud_nss_feed#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZiaCloudNssFeed to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_cloud_nss_feed", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/cloud_nss_feed zia_cloud_nss_feed} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZiaCloudNssFeedConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZiaCloudNssFeedConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_cloud_nss_feed',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.5.3',
        providerVersionConstraint: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_filter - computed: true, optional: false, required: false
  public get actionFilter() {
    return this.getStringAttribute('action_filter');
  }

  // activity - computed: true, optional: false, required: false
  public get activity() {
    return cdktf.Fn.tolist(this.getListAttribute('activity'));
  }

  // adv_user_agents - computed: true, optional: false, required: false
  public get advUserAgents() {
    return cdktf.Fn.tolist(this.getListAttribute('adv_user_agents'));
  }

  // advanced_threats - computed: true, optional: false, required: false
  public get advancedThreats() {
    return cdktf.Fn.tolist(this.getListAttribute('advanced_threats'));
  }

  // alerts - computed: true, optional: false, required: false
  public get alerts() {
    return cdktf.Fn.tolist(this.getListAttribute('alerts'));
  }

  // audit_log_type - computed: true, optional: false, required: false
  public get auditLogType() {
    return cdktf.Fn.tolist(this.getListAttribute('audit_log_type'));
  }

  // authentication_token - computed: true, optional: false, required: false
  public get authenticationToken() {
    return this.getStringAttribute('authentication_token');
  }

  // authentication_url - computed: true, optional: false, required: false
  public get authenticationUrl() {
    return this.getStringAttribute('authentication_url');
  }

  // base64_encoded_certificate - computed: true, optional: false, required: false
  public get base64EncodedCertificate() {
    return this.getStringAttribute('base64_encoded_certificate');
  }

  // buckets - computed: true, optional: false, required: false
  private _buckets = new DataZiaCloudNssFeedBucketsList(this, "buckets", false);
  public get buckets() {
    return this._buckets;
  }

  // casb_action - computed: true, optional: false, required: false
  public get casbAction() {
    return cdktf.Fn.tolist(this.getListAttribute('casb_action'));
  }

  // casb_applications - computed: true, optional: false, required: false
  public get casbApplications() {
    return cdktf.Fn.tolist(this.getListAttribute('casb_applications'));
  }

  // casb_file_type_super_categories - computed: true, optional: false, required: false
  public get casbFileTypeSuperCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('casb_file_type_super_categories'));
  }

  // casb_policy_types - computed: true, optional: false, required: false
  public get casbPolicyTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('casb_policy_types'));
  }

  // casb_severity - computed: true, optional: false, required: false
  public get casbSeverity() {
    return cdktf.Fn.tolist(this.getListAttribute('casb_severity'));
  }

  // casb_tenant - computed: true, optional: false, required: false
  private _casbTenant = new DataZiaCloudNssFeedCasbTenantList(this, "casb_tenant", false);
  public get casbTenant() {
    return this._casbTenant;
  }

  // channel_name - computed: true, optional: false, required: false
  public get channelName() {
    return cdktf.Fn.tolist(this.getListAttribute('channel_name'));
  }

  // client_destination_ips - computed: true, optional: false, required: false
  public get clientDestinationIps() {
    return cdktf.Fn.tolist(this.getListAttribute('client_destination_ips'));
  }

  // client_destination_ports - computed: true, optional: false, required: false
  public get clientDestinationPorts() {
    return cdktf.Fn.tolist(this.getListAttribute('client_destination_ports'));
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_ips - computed: true, optional: false, required: false
  public get clientIps() {
    return cdktf.Fn.tolist(this.getListAttribute('client_ips'));
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // client_source_ips - computed: true, optional: false, required: false
  public get clientSourceIps() {
    return cdktf.Fn.tolist(this.getListAttribute('client_source_ips'));
  }

  // client_source_ports - computed: true, optional: false, required: false
  public get clientSourcePorts() {
    return cdktf.Fn.tolist(this.getListAttribute('client_source_ports'));
  }

  // connection_headers - computed: true, optional: false, required: false
  public get connectionHeaders() {
    return cdktf.Fn.tolist(this.getListAttribute('connection_headers'));
  }

  // connection_url - computed: true, optional: false, required: false
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }

  // countries - computed: true, optional: false, required: false
  public get countries() {
    return cdktf.Fn.tolist(this.getListAttribute('countries'));
  }

  // custom_escaped_character - computed: true, optional: false, required: false
  public get customEscapedCharacter() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_escaped_character'));
  }

  // departments - computed: true, optional: false, required: false
  private _departments = new DataZiaCloudNssFeedDepartmentsList(this, "departments", false);
  public get departments() {
    return this._departments;
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // dlp_dictionaries - computed: true, optional: false, required: false
  private _dlpDictionaries = new DataZiaCloudNssFeedDlpDictionariesList(this, "dlp_dictionaries", false);
  public get dlpDictionaries() {
    return this._dlpDictionaries;
  }

  // dlp_engines - computed: true, optional: false, required: false
  private _dlpEngines = new DataZiaCloudNssFeedDlpEnginesList(this, "dlp_engines", false);
  public get dlpEngines() {
    return this._dlpEngines;
  }

  // dns_actions - computed: true, optional: false, required: false
  public get dnsActions() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_actions'));
  }

  // dns_request_types - computed: true, optional: false, required: false
  public get dnsRequestTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_request_types'));
  }

  // dns_response_types - computed: true, optional: false, required: false
  public get dnsResponseTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_response_types'));
  }

  // dns_responses - computed: true, optional: false, required: false
  public get dnsResponses() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_responses'));
  }

  // domains - computed: true, optional: false, required: false
  public get domains() {
    return cdktf.Fn.tolist(this.getListAttribute('domains'));
  }

  // download_time - computed: true, optional: false, required: false
  public get downloadTime() {
    return cdktf.Fn.tolist(this.getListAttribute('download_time'));
  }

  // durations - computed: true, optional: false, required: false
  public get durations() {
    return cdktf.Fn.tolist(this.getListAttribute('durations'));
  }

  // email_dlp_log_type - computed: true, optional: false, required: false
  public get emailDlpLogType() {
    return cdktf.Fn.tolist(this.getListAttribute('email_dlp_log_type'));
  }

  // email_dlp_policy_action - computed: true, optional: false, required: false
  public get emailDlpPolicyAction() {
    return this.getStringAttribute('email_dlp_policy_action');
  }

  // end_point_dlp_log_type - computed: true, optional: false, required: false
  public get endPointDlpLogType() {
    return cdktf.Fn.tolist(this.getListAttribute('end_point_dlp_log_type'));
  }

  // eps_rate_limit - computed: true, optional: false, required: false
  public get epsRateLimit() {
    return this.getNumberAttribute('eps_rate_limit');
  }

  // event - computed: true, optional: false, required: false
  public get event() {
    return this.getStringAttribute('event');
  }

  // external_collaborators - computed: true, optional: false, required: false
  private _externalCollaborators = new DataZiaCloudNssFeedExternalCollaboratorsList(this, "external_collaborators", false);
  public get externalCollaborators() {
    return this._externalCollaborators;
  }

  // external_owners - computed: true, optional: false, required: false
  private _externalOwners = new DataZiaCloudNssFeedExternalOwnersList(this, "external_owners", false);
  public get externalOwners() {
    return this._externalOwners;
  }

  // feed_output_format - computed: true, optional: false, required: false
  public get feedOutputFormat() {
    return this.getStringAttribute('feed_output_format');
  }

  // feed_status - computed: true, optional: false, required: false
  public get feedStatus() {
    return this.getStringAttribute('feed_status');
  }

  // file_name - computed: true, optional: false, required: false
  public get fileName() {
    return cdktf.Fn.tolist(this.getListAttribute('file_name'));
  }

  // file_sizes - computed: true, optional: false, required: false
  public get fileSizes() {
    return cdktf.Fn.tolist(this.getListAttribute('file_sizes'));
  }

  // file_source - computed: true, optional: false, required: false
  public get fileSource() {
    return cdktf.Fn.tolist(this.getListAttribute('file_source'));
  }

  // file_type_categories - computed: true, optional: false, required: false
  public get fileTypeCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('file_type_categories'));
  }

  // file_type_super_categories - computed: true, optional: false, required: false
  public get fileTypeSuperCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('file_type_super_categories'));
  }

  // firewall_actions - computed: true, optional: false, required: false
  public get firewallActions() {
    return cdktf.Fn.tolist(this.getListAttribute('firewall_actions'));
  }

  // firewall_logging_mode - computed: true, optional: false, required: false
  public get firewallLoggingMode() {
    return this.getStringAttribute('firewall_logging_mode');
  }

  // full_urls - computed: true, optional: false, required: false
  public get fullUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('full_urls'));
  }

  // grant_type - computed: true, optional: false, required: false
  public get grantType() {
    return this.getStringAttribute('grant_type');
  }

  // host_names - computed: true, optional: false, required: false
  public get hostNames() {
    return cdktf.Fn.tolist(this.getListAttribute('host_names'));
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // in_bound_bytes - computed: true, optional: false, required: false
  public get inBoundBytes() {
    return cdktf.Fn.tolist(this.getListAttribute('in_bound_bytes'));
  }

  // internal_collaborators - computed: true, optional: false, required: false
  private _internalCollaborators = new DataZiaCloudNssFeedInternalCollaboratorsList(this, "internal_collaborators", false);
  public get internalCollaborators() {
    return this._internalCollaborators;
  }

  // internal_ips - computed: true, optional: false, required: false
  public get internalIps() {
    return cdktf.Fn.tolist(this.getListAttribute('internal_ips'));
  }

  // itsm_object_type - computed: true, optional: false, required: false
  private _itsmObjectType = new DataZiaCloudNssFeedItsmObjectTypeList(this, "itsm_object_type", false);
  public get itsmObjectType() {
    return this._itsmObjectType;
  }

  // json_array_toggle - computed: true, optional: false, required: false
  public get jsonArrayToggle() {
    return this.getBooleanAttribute('json_array_toggle');
  }

  // last_success_full_test - computed: true, optional: false, required: false
  public get lastSuccessFullTest() {
    return this.getNumberAttribute('last_success_full_test');
  }

  // location_groups - computed: true, optional: false, required: false
  private _locationGroups = new DataZiaCloudNssFeedLocationGroupsList(this, "location_groups", false);
  public get locationGroups() {
    return this._locationGroups;
  }

  // locations - computed: true, optional: false, required: false
  private _locations = new DataZiaCloudNssFeedLocationsList(this, "locations", false);
  public get locations() {
    return this._locations;
  }

  // malware_classes - computed: true, optional: false, required: false
  public get malwareClasses() {
    return cdktf.Fn.tolist(this.getListAttribute('malware_classes'));
  }

  // malware_names - computed: true, optional: false, required: false
  public get malwareNames() {
    return cdktf.Fn.tolist(this.getListAttribute('malware_names'));
  }

  // max_batch_size - computed: true, optional: false, required: false
  public get maxBatchSize() {
    return this.getNumberAttribute('max_batch_size');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // nat_actions - computed: true, optional: false, required: false
  public get natActions() {
    return cdktf.Fn.tolist(this.getListAttribute('nat_actions'));
  }

  // nss_feed_type - computed: true, optional: false, required: false
  public get nssFeedType() {
    return this.getStringAttribute('nss_feed_type');
  }

  // nss_log_type - computed: true, optional: false, required: false
  public get nssLogType() {
    return this.getStringAttribute('nss_log_type');
  }

  // nss_type - computed: true, optional: false, required: false
  public get nssType() {
    return this.getStringAttribute('nss_type');
  }

  // nw_applications - computed: true, optional: false, required: false
  public get nwApplications() {
    return cdktf.Fn.tolist(this.getListAttribute('nw_applications'));
  }

  // nw_applications_exclude - computed: true, optional: false, required: false
  public get nwApplicationsExclude() {
    return cdktf.Fn.tolist(this.getListAttribute('nw_applications_exclude'));
  }

  // nw_services - computed: true, optional: false, required: false
  private _nwServices = new DataZiaCloudNssFeedNwServicesList(this, "nw_services", false);
  public get nwServices() {
    return this._nwServices;
  }

  // oauth_authentication - computed: true, optional: false, required: false
  public get oauthAuthentication() {
    return this.getBooleanAttribute('oauth_authentication');
  }

  // object_name - computed: true, optional: false, required: false
  public get objectName() {
    return cdktf.Fn.tolist(this.getListAttribute('object_name'));
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return cdktf.Fn.tolist(this.getListAttribute('object_type'));
  }

  // object_type1 - computed: true, optional: false, required: false
  public get objectType1() {
    return cdktf.Fn.tolist(this.getListAttribute('object_type1'));
  }

  // object_type2 - computed: true, optional: false, required: false
  public get objectType2() {
    return cdktf.Fn.tolist(this.getListAttribute('object_type2'));
  }

  // out_bound_bytes - computed: true, optional: false, required: false
  public get outBoundBytes() {
    return cdktf.Fn.tolist(this.getListAttribute('out_bound_bytes'));
  }

  // page_risk_indexes - computed: true, optional: false, required: false
  public get pageRiskIndexes() {
    return cdktf.Fn.tolist(this.getListAttribute('page_risk_indexes'));
  }

  // policy_reasons - computed: true, optional: false, required: false
  public get policyReasons() {
    return cdktf.Fn.tolist(this.getListAttribute('policy_reasons'));
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return cdktf.Fn.tolist(this.getListAttribute('project_name'));
  }

  // protocol_types - computed: true, optional: false, required: false
  public get protocolTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('protocol_types'));
  }

  // referer_urls - computed: true, optional: false, required: false
  public get refererUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('referer_urls'));
  }

  // repo_name - computed: true, optional: false, required: false
  public get repoName() {
    return cdktf.Fn.tolist(this.getListAttribute('repo_name'));
  }

  // request_methods - computed: true, optional: false, required: false
  public get requestMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('request_methods'));
  }

  // request_sizes - computed: true, optional: false, required: false
  public get requestSizes() {
    return cdktf.Fn.tolist(this.getListAttribute('request_sizes'));
  }

  // response_codes - computed: true, optional: false, required: false
  public get responseCodes() {
    return cdktf.Fn.tolist(this.getListAttribute('response_codes'));
  }

  // response_sizes - computed: true, optional: false, required: false
  public get responseSizes() {
    return cdktf.Fn.tolist(this.getListAttribute('response_sizes'));
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataZiaCloudNssFeedRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // scan_time - computed: true, optional: false, required: false
  public get scanTime() {
    return cdktf.Fn.tolist(this.getListAttribute('scan_time'));
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // sender_name - computed: true, optional: false, required: false
  private _senderName = new DataZiaCloudNssFeedSenderNameList(this, "sender_name", false);
  public get senderName() {
    return this._senderName;
  }

  // server_destination_ips - computed: true, optional: false, required: false
  public get serverDestinationIps() {
    return cdktf.Fn.tolist(this.getListAttribute('server_destination_ips'));
  }

  // server_ips - computed: true, optional: false, required: false
  public get serverIps() {
    return cdktf.Fn.tolist(this.getListAttribute('server_ips'));
  }

  // server_source_ips - computed: true, optional: false, required: false
  public get serverSourceIps() {
    return cdktf.Fn.tolist(this.getListAttribute('server_source_ips'));
  }

  // server_source_ports - computed: true, optional: false, required: false
  public get serverSourcePorts() {
    return cdktf.Fn.tolist(this.getListAttribute('server_source_ports'));
  }

  // session_counts - computed: true, optional: false, required: false
  public get sessionCounts() {
    return cdktf.Fn.tolist(this.getListAttribute('session_counts'));
  }

  // siem_type - computed: true, optional: false, required: false
  public get siemType() {
    return this.getStringAttribute('siem_type');
  }

  // test_connectivity_code - computed: true, optional: false, required: false
  public get testConnectivityCode() {
    return this.getNumberAttribute('test_connectivity_code');
  }

  // threat_names - computed: true, optional: false, required: false
  public get threatNames() {
    return cdktf.Fn.tolist(this.getListAttribute('threat_names'));
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // traffic_forwards - computed: true, optional: false, required: false
  public get trafficForwards() {
    return cdktf.Fn.tolist(this.getListAttribute('traffic_forwards'));
  }

  // transaction_sizes - computed: true, optional: false, required: false
  public get transactionSizes() {
    return cdktf.Fn.tolist(this.getListAttribute('transaction_sizes'));
  }

  // tunnel_dest_ips - computed: true, optional: false, required: false
  public get tunnelDestIps() {
    return cdktf.Fn.tolist(this.getListAttribute('tunnel_dest_ips'));
  }

  // tunnel_ips - computed: true, optional: false, required: false
  public get tunnelIps() {
    return cdktf.Fn.tolist(this.getListAttribute('tunnel_ips'));
  }

  // tunnel_source_ips - computed: true, optional: false, required: false
  public get tunnelSourceIps() {
    return cdktf.Fn.tolist(this.getListAttribute('tunnel_source_ips'));
  }

  // tunnel_source_port - computed: true, optional: false, required: false
  public get tunnelSourcePort() {
    return cdktf.Fn.tolist(this.getListAttribute('tunnel_source_port'));
  }

  // tunnel_types - computed: true, optional: false, required: false
  public get tunnelTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('tunnel_types'));
  }

  // url_categories - computed: true, optional: false, required: false
  private _urlCategories = new DataZiaCloudNssFeedUrlCategoriesList(this, "url_categories", false);
  public get urlCategories() {
    return this._urlCategories;
  }

  // url_classes - computed: true, optional: false, required: false
  public get urlClasses() {
    return cdktf.Fn.tolist(this.getListAttribute('url_classes'));
  }

  // url_super_categories - computed: true, optional: false, required: false
  public get urlSuperCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('url_super_categories'));
  }

  // user_agents - computed: true, optional: false, required: false
  public get userAgents() {
    return cdktf.Fn.tolist(this.getListAttribute('user_agents'));
  }

  // user_obfuscation - computed: true, optional: false, required: false
  public get userObfuscation() {
    return this.getStringAttribute('user_obfuscation');
  }

  // users - computed: true, optional: false, required: false
  private _users = new DataZiaCloudNssFeedUsersList(this, "users", false);
  public get users() {
    return this._users;
  }

  // vpn_credentials - computed: true, optional: false, required: false
  private _vpnCredentials = new DataZiaCloudNssFeedVpnCredentialsList(this, "vpn_credentials", false);
  public get vpnCredentials() {
    return this._vpnCredentials;
  }

  // web_application_classes - computed: true, optional: false, required: false
  public get webApplicationClasses() {
    return cdktf.Fn.tolist(this.getListAttribute('web_application_classes'));
  }

  // web_applications - computed: true, optional: false, required: false
  public get webApplications() {
    return cdktf.Fn.tolist(this.getListAttribute('web_applications'));
  }

  // web_applications_exclude - computed: true, optional: false, required: false
  public get webApplicationsExclude() {
    return cdktf.Fn.tolist(this.getListAttribute('web_applications_exclude'));
  }

  // web_traffic_forwards - computed: true, optional: false, required: false
  public get webTrafficForwards() {
    return cdktf.Fn.tolist(this.getListAttribute('web_traffic_forwards'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
