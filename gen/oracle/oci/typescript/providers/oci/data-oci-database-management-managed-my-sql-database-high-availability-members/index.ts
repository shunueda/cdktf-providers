// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_my_sql_database_high_availability_members
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_my_sql_database_high_availability_members#id DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_my_sql_database_high_availability_members#managed_my_sql_database_id DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembers#managed_my_sql_database_id}
  */
  readonly managedMySqlDatabaseId: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_my_sql_database_high_availability_members#filter DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembers#filter}
  */
  readonly filter?: DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersFilter[] | cdktf.IResolvable;
}
export interface DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionItems {
}

export function dataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionItemsToTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionItemsToHclTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // member_host - computed: true, optional: false, required: false
  public get memberHost() {
    return this.getStringAttribute('member_host');
  }

  // member_port - computed: true, optional: false, required: false
  public get memberPort() {
    return this.getNumberAttribute('member_port');
  }

  // member_role - computed: true, optional: false, required: false
  public get memberRole() {
    return this.getStringAttribute('member_role');
  }

  // member_state - computed: true, optional: false, required: false
  public get memberState() {
    return this.getStringAttribute('member_state');
  }

  // member_uuid - computed: true, optional: false, required: false
  public get memberUuid() {
    return this.getStringAttribute('member_uuid');
  }
}

export class DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionItemsOutputReference {
    return new DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelApplyErrorsApplyErrorWorkerErrors {
}

export function dataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelApplyErrorsApplyErrorWorkerErrorsToTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelApplyErrorsApplyErrorWorkerErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelApplyErrorsApplyErrorWorkerErrorsToHclTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelApplyErrorsApplyErrorWorkerErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelApplyErrorsApplyErrorWorkerErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelApplyErrorsApplyErrorWorkerErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelApplyErrorsApplyErrorWorkerErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_error_message - computed: true, optional: false, required: false
  public get lastErrorMessage() {
    return this.getStringAttribute('last_error_message');
  }

  // last_error_number - computed: true, optional: false, required: false
  public get lastErrorNumber() {
    return this.getNumberAttribute('last_error_number');
  }

  // time_last_error - computed: true, optional: false, required: false
  public get timeLastError() {
    return this.getStringAttribute('time_last_error');
  }
}

export class DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelApplyErrorsApplyErrorWorkerErrorsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelApplyErrorsApplyErrorWorkerErrorsOutputReference {
    return new DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelApplyErrorsApplyErrorWorkerErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelApplyErrorsApplyError {
}

export function dataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelApplyErrorsApplyErrorToTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelApplyErrorsApplyError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelApplyErrorsApplyErrorToHclTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelApplyErrorsApplyError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelApplyErrorsApplyErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelApplyErrorsApplyError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelApplyErrorsApplyError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_error_message - computed: true, optional: false, required: false
  public get lastErrorMessage() {
    return this.getStringAttribute('last_error_message');
  }

  // last_error_number - computed: true, optional: false, required: false
  public get lastErrorNumber() {
    return this.getNumberAttribute('last_error_number');
  }

  // time_last_error - computed: true, optional: false, required: false
  public get timeLastError() {
    return this.getStringAttribute('time_last_error');
  }

  // worker_errors - computed: true, optional: false, required: false
  private _workerErrors = new DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelApplyErrorsApplyErrorWorkerErrorsList(this, "worker_errors", false);
  public get workerErrors() {
    return this._workerErrors;
  }
}

export class DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelApplyErrorsApplyErrorList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelApplyErrorsApplyErrorOutputReference {
    return new DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelApplyErrorsApplyErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelApplyErrors {
}

export function dataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelApplyErrorsToTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelApplyErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelApplyErrorsToHclTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelApplyErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelApplyErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelApplyErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelApplyErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apply_error - computed: true, optional: false, required: false
  private _applyError = new DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelApplyErrorsApplyErrorList(this, "apply_error", false);
  public get applyError() {
    return this._applyError;
  }

  // channel_name - computed: true, optional: false, required: false
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }
}

export class DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelApplyErrorsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelApplyErrorsOutputReference {
    return new DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelApplyErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelFetchErrorsFetchError {
}

export function dataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelFetchErrorsFetchErrorToTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelFetchErrorsFetchError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelFetchErrorsFetchErrorToHclTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelFetchErrorsFetchError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelFetchErrorsFetchErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelFetchErrorsFetchError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelFetchErrorsFetchError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_error_message - computed: true, optional: false, required: false
  public get lastErrorMessage() {
    return this.getStringAttribute('last_error_message');
  }

  // last_error_number - computed: true, optional: false, required: false
  public get lastErrorNumber() {
    return this.getNumberAttribute('last_error_number');
  }

  // time_last_error - computed: true, optional: false, required: false
  public get timeLastError() {
    return this.getStringAttribute('time_last_error');
  }
}

export class DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelFetchErrorsFetchErrorList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelFetchErrorsFetchErrorOutputReference {
    return new DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelFetchErrorsFetchErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelFetchErrors {
}

export function dataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelFetchErrorsToTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelFetchErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelFetchErrorsToHclTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelFetchErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelFetchErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelFetchErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelFetchErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // channel_name - computed: true, optional: false, required: false
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }

  // fetch_error - computed: true, optional: false, required: false
  private _fetchError = new DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelFetchErrorsFetchErrorList(this, "fetch_error", false);
  public get fetchError() {
    return this._fetchError;
  }
}

export class DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelFetchErrorsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelFetchErrorsOutputReference {
    return new DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelFetchErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummary {
}

export function dataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryToTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryToHclTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // channel_apply_errors - computed: true, optional: false, required: false
  private _channelApplyErrors = new DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelApplyErrorsList(this, "channel_apply_errors", false);
  public get channelApplyErrors() {
    return this._channelApplyErrors;
  }

  // channel_fetch_errors - computed: true, optional: false, required: false
  private _channelFetchErrors = new DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryChannelFetchErrorsList(this, "channel_fetch_errors", false);
  public get channelFetchErrors() {
    return this._channelFetchErrors;
  }
}

export class DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryOutputReference {
    return new DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollection {
}

export function dataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionToTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionToHclTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // flow_control - computed: true, optional: false, required: false
  public get flowControl() {
    return this.getStringAttribute('flow_control');
  }

  // group_auto_increment - computed: true, optional: false, required: false
  public get groupAutoIncrement() {
    return this.getNumberAttribute('group_auto_increment');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // member_role - computed: true, optional: false, required: false
  public get memberRole() {
    return this.getStringAttribute('member_role');
  }

  // member_state - computed: true, optional: false, required: false
  public get memberState() {
    return this.getStringAttribute('member_state');
  }

  // single_primary_mode - computed: true, optional: false, required: false
  public get singlePrimaryMode() {
    return this.getStringAttribute('single_primary_mode');
  }

  // status_summary - computed: true, optional: false, required: false
  private _statusSummary = new DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionStatusSummaryList(this, "status_summary", false);
  public get statusSummary() {
    return this._statusSummary;
  }

  // transactions_in_gtid_executed - computed: true, optional: false, required: false
  public get transactionsInGtidExecuted() {
    return this.getStringAttribute('transactions_in_gtid_executed');
  }

  // view_id - computed: true, optional: false, required: false
  public get viewId() {
    return this.getStringAttribute('view_id');
  }
}

export class DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionOutputReference {
    return new DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_my_sql_database_high_availability_members#name DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembers#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_my_sql_database_high_availability_members#regex DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembers#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_my_sql_database_high_availability_members#values DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembers#values}
  */
  readonly values: string[];
}

export function dataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersFilterToTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersFilter | cdktf.IResolvable): any {
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


export function dataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersFilterToHclTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersFilter | cdktf.IResolvable): any {
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

export class DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersFilterOutputReference {
    return new DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_my_sql_database_high_availability_members oci_database_management_managed_my_sql_database_high_availability_members}
*/
export class DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_managed_my_sql_database_high_availability_members";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembers to import
  * @param importFromId The id of the existing DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembers that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_my_sql_database_high_availability_members#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_managed_my_sql_database_high_availability_members", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_my_sql_database_high_availability_members oci_database_management_managed_my_sql_database_high_availability_members} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_managed_my_sql_database_high_availability_members',
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
    this._id = config.id;
    this._managedMySqlDatabaseId = config.managedMySqlDatabaseId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // managed_my_sql_database_high_availability_member_collection - computed: true, optional: false, required: false
  private _managedMySqlDatabaseHighAvailabilityMemberCollection = new DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersManagedMySqlDatabaseHighAvailabilityMemberCollectionList(this, "managed_my_sql_database_high_availability_member_collection", false);
  public get managedMySqlDatabaseHighAvailabilityMemberCollection() {
    return this._managedMySqlDatabaseHighAvailabilityMemberCollection;
  }

  // managed_my_sql_database_id - computed: false, optional: false, required: true
  private _managedMySqlDatabaseId?: string; 
  public get managedMySqlDatabaseId() {
    return this.getStringAttribute('managed_my_sql_database_id');
  }
  public set managedMySqlDatabaseId(value: string) {
    this._managedMySqlDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedMySqlDatabaseIdInput() {
    return this._managedMySqlDatabaseId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersFilter[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      managed_my_sql_database_id: cdktf.stringToTerraform(this._managedMySqlDatabaseId),
      filter: cdktf.listMapper(dataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_my_sql_database_id: {
        value: cdktf.stringToHclTerraform(this._managedMySqlDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDatabaseManagementManagedMySqlDatabaseHighAvailabilityMembersFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
