// https://registry.terraform.io/providers/redislabs/rediscloud/2.10.0/docs/data-sources/active_active_subscription_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRediscloudActiveActiveSubscriptionDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier of the database created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.10.0/docs/data-sources/active_active_subscription_database#db_id DataRediscloudActiveActiveSubscriptionDatabase#db_id}
  */
  readonly dbId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.10.0/docs/data-sources/active_active_subscription_database#id DataRediscloudActiveActiveSubscriptionDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A meaningful name to identify the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.10.0/docs/data-sources/active_active_subscription_database#name DataRediscloudActiveActiveSubscriptionDatabase#name}
  */
  readonly name?: string;
  /**
  * Identifier of the subscription
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.10.0/docs/data-sources/active_active_subscription_database#subscription_id DataRediscloudActiveActiveSubscriptionDatabase#subscription_id}
  */
  readonly subscriptionId: number;
}
export interface DataRediscloudActiveActiveSubscriptionDatabaseLatestBackupStatusesError {
}

export function dataRediscloudActiveActiveSubscriptionDatabaseLatestBackupStatusesErrorToTerraform(struct?: DataRediscloudActiveActiveSubscriptionDatabaseLatestBackupStatusesError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRediscloudActiveActiveSubscriptionDatabaseLatestBackupStatusesErrorToHclTerraform(struct?: DataRediscloudActiveActiveSubscriptionDatabaseLatestBackupStatusesError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRediscloudActiveActiveSubscriptionDatabaseLatestBackupStatusesErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRediscloudActiveActiveSubscriptionDatabaseLatestBackupStatusesError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRediscloudActiveActiveSubscriptionDatabaseLatestBackupStatusesError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataRediscloudActiveActiveSubscriptionDatabaseLatestBackupStatusesErrorList extends cdktf.ComplexList {

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
  public get(index: number): DataRediscloudActiveActiveSubscriptionDatabaseLatestBackupStatusesErrorOutputReference {
    return new DataRediscloudActiveActiveSubscriptionDatabaseLatestBackupStatusesErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRediscloudActiveActiveSubscriptionDatabaseLatestBackupStatusesResponse {
}

export function dataRediscloudActiveActiveSubscriptionDatabaseLatestBackupStatusesResponseToTerraform(struct?: DataRediscloudActiveActiveSubscriptionDatabaseLatestBackupStatusesResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRediscloudActiveActiveSubscriptionDatabaseLatestBackupStatusesResponseToHclTerraform(struct?: DataRediscloudActiveActiveSubscriptionDatabaseLatestBackupStatusesResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRediscloudActiveActiveSubscriptionDatabaseLatestBackupStatusesResponseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRediscloudActiveActiveSubscriptionDatabaseLatestBackupStatusesResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRediscloudActiveActiveSubscriptionDatabaseLatestBackupStatusesResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }

  // last_backup_time - computed: true, optional: false, required: false
  public get lastBackupTime() {
    return this.getStringAttribute('last_backup_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataRediscloudActiveActiveSubscriptionDatabaseLatestBackupStatusesResponseList extends cdktf.ComplexList {

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
  public get(index: number): DataRediscloudActiveActiveSubscriptionDatabaseLatestBackupStatusesResponseOutputReference {
    return new DataRediscloudActiveActiveSubscriptionDatabaseLatestBackupStatusesResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRediscloudActiveActiveSubscriptionDatabaseLatestBackupStatuses {
}

export function dataRediscloudActiveActiveSubscriptionDatabaseLatestBackupStatusesToTerraform(struct?: DataRediscloudActiveActiveSubscriptionDatabaseLatestBackupStatuses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRediscloudActiveActiveSubscriptionDatabaseLatestBackupStatusesToHclTerraform(struct?: DataRediscloudActiveActiveSubscriptionDatabaseLatestBackupStatuses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRediscloudActiveActiveSubscriptionDatabaseLatestBackupStatusesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRediscloudActiveActiveSubscriptionDatabaseLatestBackupStatuses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRediscloudActiveActiveSubscriptionDatabaseLatestBackupStatuses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error - computed: true, optional: false, required: false
  private _error = new DataRediscloudActiveActiveSubscriptionDatabaseLatestBackupStatusesErrorList(this, "error", true);
  public get error() {
    return this._error;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // response - computed: true, optional: false, required: false
  private _response = new DataRediscloudActiveActiveSubscriptionDatabaseLatestBackupStatusesResponseList(this, "response", true);
  public get response() {
    return this._response;
  }
}

export class DataRediscloudActiveActiveSubscriptionDatabaseLatestBackupStatusesList extends cdktf.ComplexList {

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
  public get(index: number): DataRediscloudActiveActiveSubscriptionDatabaseLatestBackupStatusesOutputReference {
    return new DataRediscloudActiveActiveSubscriptionDatabaseLatestBackupStatusesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusError {
}

export function dataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusErrorToTerraform(struct?: DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusErrorToHclTerraform(struct?: DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusErrorList extends cdktf.ComplexList {

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
  public get(index: number): DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusErrorOutputReference {
    return new DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusResponseFailureReasonParams {
}

export function dataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusResponseFailureReasonParamsToTerraform(struct?: DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusResponseFailureReasonParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusResponseFailureReasonParamsToHclTerraform(struct?: DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusResponseFailureReasonParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusResponseFailureReasonParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusResponseFailureReasonParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusResponseFailureReasonParams | undefined) {
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

export class DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusResponseFailureReasonParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusResponseFailureReasonParamsOutputReference {
    return new DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusResponseFailureReasonParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusResponse {
}

export function dataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusResponseToTerraform(struct?: DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusResponseToHclTerraform(struct?: DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusResponseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }

  // failure_reason_params - computed: true, optional: false, required: false
  private _failureReasonParams = new DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusResponseFailureReasonParamsList(this, "failure_reason_params", false);
  public get failureReasonParams() {
    return this._failureReasonParams;
  }

  // last_import_time - computed: true, optional: false, required: false
  public get lastImportTime() {
    return this.getStringAttribute('last_import_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusResponseList extends cdktf.ComplexList {

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
  public get(index: number): DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusResponseOutputReference {
    return new DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatus {
}

export function dataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusToTerraform(struct?: DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusToHclTerraform(struct?: DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error - computed: true, optional: false, required: false
  private _error = new DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusErrorList(this, "error", true);
  public get error() {
    return this._error;
  }

  // response - computed: true, optional: false, required: false
  private _response = new DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusResponseList(this, "response", true);
  public get response() {
    return this._response;
  }
}

export class DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusOutputReference {
    return new DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.10.0/docs/data-sources/active_active_subscription_database rediscloud_active_active_subscription_database}
*/
export class DataRediscloudActiveActiveSubscriptionDatabase extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rediscloud_active_active_subscription_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRediscloudActiveActiveSubscriptionDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRediscloudActiveActiveSubscriptionDatabase to import
  * @param importFromId The id of the existing DataRediscloudActiveActiveSubscriptionDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.10.0/docs/data-sources/active_active_subscription_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRediscloudActiveActiveSubscriptionDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rediscloud_active_active_subscription_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.10.0/docs/data-sources/active_active_subscription_database rediscloud_active_active_subscription_database} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRediscloudActiveActiveSubscriptionDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DataRediscloudActiveActiveSubscriptionDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'rediscloud_active_active_subscription_database',
      terraformGeneratorMetadata: {
        providerName: 'rediscloud',
        providerVersion: '2.10.0',
        providerVersionConstraint: '2.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dbId = config.dbId;
    this._id = config.id;
    this._name = config.name;
    this._subscriptionId = config.subscriptionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_eviction - computed: true, optional: false, required: false
  public get dataEviction() {
    return this.getStringAttribute('data_eviction');
  }

  // dataset_size_in_gb - computed: true, optional: false, required: false
  public get datasetSizeInGb() {
    return this.getNumberAttribute('dataset_size_in_gb');
  }

  // db_id - computed: true, optional: true, required: false
  private _dbId?: number; 
  public get dbId() {
    return this.getNumberAttribute('db_id');
  }
  public set dbId(value: number) {
    this._dbId = value;
  }
  public resetDbId() {
    this._dbId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbIdInput() {
    return this._dbId;
  }

  // enable_tls - computed: true, optional: false, required: false
  public get enableTls() {
    return this.getBooleanAttribute('enable_tls');
  }

  // external_endpoint_for_oss_cluster_api - computed: true, optional: false, required: false
  public get externalEndpointForOssClusterApi() {
    return this.getBooleanAttribute('external_endpoint_for_oss_cluster_api');
  }

  // global_modules - computed: true, optional: false, required: false
  public get globalModules() {
    return this.getListAttribute('global_modules');
  }

  // global_source_ips - computed: true, optional: false, required: false
  public get globalSourceIps() {
    return cdktf.Fn.tolist(this.getListAttribute('global_source_ips'));
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

  // latest_backup_statuses - computed: true, optional: false, required: false
  private _latestBackupStatuses = new DataRediscloudActiveActiveSubscriptionDatabaseLatestBackupStatusesList(this, "latest_backup_statuses", false);
  public get latestBackupStatuses() {
    return this._latestBackupStatuses;
  }

  // latest_import_status - computed: true, optional: false, required: false
  private _latestImportStatus = new DataRediscloudActiveActiveSubscriptionDatabaseLatestImportStatusList(this, "latest_import_status", true);
  public get latestImportStatus() {
    return this._latestImportStatus;
  }

  // memory_limit_in_gb - computed: true, optional: false, required: false
  public get memoryLimitInGb() {
    return this.getNumberAttribute('memory_limit_in_gb');
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

  // private_endpoint - computed: true, optional: false, required: false
  private _privateEndpoint = new cdktf.StringMap(this, "private_endpoint");
  public get privateEndpoint() {
    return this._privateEndpoint;
  }

  // public_endpoint - computed: true, optional: false, required: false
  private _publicEndpoint = new cdktf.StringMap(this, "public_endpoint");
  public get publicEndpoint() {
    return this._publicEndpoint;
  }

  // redis_version - computed: true, optional: false, required: false
  public get redisVersion() {
    return this.getStringAttribute('redis_version');
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: number; 
  public get subscriptionId() {
    return this.getNumberAttribute('subscription_id');
  }
  public set subscriptionId(value: number) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // support_oss_cluster_api - computed: true, optional: false, required: false
  public get supportOssClusterApi() {
    return this.getBooleanAttribute('support_oss_cluster_api');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // tls_certificate - computed: true, optional: false, required: false
  public get tlsCertificate() {
    return this.getStringAttribute('tls_certificate');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_id: cdktf.numberToTerraform(this._dbId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      subscription_id: cdktf.numberToTerraform(this._subscriptionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      db_id: {
        value: cdktf.numberToHclTerraform(this._dbId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_id: {
        value: cdktf.numberToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
