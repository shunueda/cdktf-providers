// https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/data-sources/essentials_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRediscloudEssentialsDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier of the database created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/data-sources/essentials_database#db_id DataRediscloudEssentialsDatabase#db_id}
  */
  readonly dbId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/data-sources/essentials_database#id DataRediscloudEssentialsDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A meaningful name to identify the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/data-sources/essentials_database#name DataRediscloudEssentialsDatabase#name}
  */
  readonly name?: string;
  /**
  * Identifier of the essentials subscription
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/data-sources/essentials_database#subscription_id DataRediscloudEssentialsDatabase#subscription_id}
  */
  readonly subscriptionId: number;
}
export interface DataRediscloudEssentialsDatabaseAlert {
}

export function dataRediscloudEssentialsDatabaseAlertToTerraform(struct?: DataRediscloudEssentialsDatabaseAlert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRediscloudEssentialsDatabaseAlertToHclTerraform(struct?: DataRediscloudEssentialsDatabaseAlert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRediscloudEssentialsDatabaseAlertOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRediscloudEssentialsDatabaseAlert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRediscloudEssentialsDatabaseAlert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataRediscloudEssentialsDatabaseAlertList extends cdktf.ComplexList {

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
  public get(index: number): DataRediscloudEssentialsDatabaseAlertOutputReference {
    return new DataRediscloudEssentialsDatabaseAlertOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRediscloudEssentialsDatabaseLatestBackupStatusError {
}

export function dataRediscloudEssentialsDatabaseLatestBackupStatusErrorToTerraform(struct?: DataRediscloudEssentialsDatabaseLatestBackupStatusError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRediscloudEssentialsDatabaseLatestBackupStatusErrorToHclTerraform(struct?: DataRediscloudEssentialsDatabaseLatestBackupStatusError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRediscloudEssentialsDatabaseLatestBackupStatusErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRediscloudEssentialsDatabaseLatestBackupStatusError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRediscloudEssentialsDatabaseLatestBackupStatusError | undefined) {
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

export class DataRediscloudEssentialsDatabaseLatestBackupStatusErrorList extends cdktf.ComplexList {

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
  public get(index: number): DataRediscloudEssentialsDatabaseLatestBackupStatusErrorOutputReference {
    return new DataRediscloudEssentialsDatabaseLatestBackupStatusErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRediscloudEssentialsDatabaseLatestBackupStatusResponse {
}

export function dataRediscloudEssentialsDatabaseLatestBackupStatusResponseToTerraform(struct?: DataRediscloudEssentialsDatabaseLatestBackupStatusResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRediscloudEssentialsDatabaseLatestBackupStatusResponseToHclTerraform(struct?: DataRediscloudEssentialsDatabaseLatestBackupStatusResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRediscloudEssentialsDatabaseLatestBackupStatusResponseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRediscloudEssentialsDatabaseLatestBackupStatusResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRediscloudEssentialsDatabaseLatestBackupStatusResponse | undefined) {
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

export class DataRediscloudEssentialsDatabaseLatestBackupStatusResponseList extends cdktf.ComplexList {

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
  public get(index: number): DataRediscloudEssentialsDatabaseLatestBackupStatusResponseOutputReference {
    return new DataRediscloudEssentialsDatabaseLatestBackupStatusResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRediscloudEssentialsDatabaseLatestBackupStatus {
}

export function dataRediscloudEssentialsDatabaseLatestBackupStatusToTerraform(struct?: DataRediscloudEssentialsDatabaseLatestBackupStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRediscloudEssentialsDatabaseLatestBackupStatusToHclTerraform(struct?: DataRediscloudEssentialsDatabaseLatestBackupStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRediscloudEssentialsDatabaseLatestBackupStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRediscloudEssentialsDatabaseLatestBackupStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRediscloudEssentialsDatabaseLatestBackupStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error - computed: true, optional: false, required: false
  private _error = new DataRediscloudEssentialsDatabaseLatestBackupStatusErrorList(this, "error", true);
  public get error() {
    return this._error;
  }

  // response - computed: true, optional: false, required: false
  private _response = new DataRediscloudEssentialsDatabaseLatestBackupStatusResponseList(this, "response", true);
  public get response() {
    return this._response;
  }
}

export class DataRediscloudEssentialsDatabaseLatestBackupStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataRediscloudEssentialsDatabaseLatestBackupStatusOutputReference {
    return new DataRediscloudEssentialsDatabaseLatestBackupStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRediscloudEssentialsDatabaseLatestImportStatusError {
}

export function dataRediscloudEssentialsDatabaseLatestImportStatusErrorToTerraform(struct?: DataRediscloudEssentialsDatabaseLatestImportStatusError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRediscloudEssentialsDatabaseLatestImportStatusErrorToHclTerraform(struct?: DataRediscloudEssentialsDatabaseLatestImportStatusError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRediscloudEssentialsDatabaseLatestImportStatusErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRediscloudEssentialsDatabaseLatestImportStatusError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRediscloudEssentialsDatabaseLatestImportStatusError | undefined) {
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

export class DataRediscloudEssentialsDatabaseLatestImportStatusErrorList extends cdktf.ComplexList {

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
  public get(index: number): DataRediscloudEssentialsDatabaseLatestImportStatusErrorOutputReference {
    return new DataRediscloudEssentialsDatabaseLatestImportStatusErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRediscloudEssentialsDatabaseLatestImportStatusResponseFailureReasonParams {
}

export function dataRediscloudEssentialsDatabaseLatestImportStatusResponseFailureReasonParamsToTerraform(struct?: DataRediscloudEssentialsDatabaseLatestImportStatusResponseFailureReasonParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRediscloudEssentialsDatabaseLatestImportStatusResponseFailureReasonParamsToHclTerraform(struct?: DataRediscloudEssentialsDatabaseLatestImportStatusResponseFailureReasonParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRediscloudEssentialsDatabaseLatestImportStatusResponseFailureReasonParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRediscloudEssentialsDatabaseLatestImportStatusResponseFailureReasonParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRediscloudEssentialsDatabaseLatestImportStatusResponseFailureReasonParams | undefined) {
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

export class DataRediscloudEssentialsDatabaseLatestImportStatusResponseFailureReasonParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataRediscloudEssentialsDatabaseLatestImportStatusResponseFailureReasonParamsOutputReference {
    return new DataRediscloudEssentialsDatabaseLatestImportStatusResponseFailureReasonParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRediscloudEssentialsDatabaseLatestImportStatusResponse {
}

export function dataRediscloudEssentialsDatabaseLatestImportStatusResponseToTerraform(struct?: DataRediscloudEssentialsDatabaseLatestImportStatusResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRediscloudEssentialsDatabaseLatestImportStatusResponseToHclTerraform(struct?: DataRediscloudEssentialsDatabaseLatestImportStatusResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRediscloudEssentialsDatabaseLatestImportStatusResponseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRediscloudEssentialsDatabaseLatestImportStatusResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRediscloudEssentialsDatabaseLatestImportStatusResponse | undefined) {
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
  private _failureReasonParams = new DataRediscloudEssentialsDatabaseLatestImportStatusResponseFailureReasonParamsList(this, "failure_reason_params", false);
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

export class DataRediscloudEssentialsDatabaseLatestImportStatusResponseList extends cdktf.ComplexList {

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
  public get(index: number): DataRediscloudEssentialsDatabaseLatestImportStatusResponseOutputReference {
    return new DataRediscloudEssentialsDatabaseLatestImportStatusResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRediscloudEssentialsDatabaseLatestImportStatus {
}

export function dataRediscloudEssentialsDatabaseLatestImportStatusToTerraform(struct?: DataRediscloudEssentialsDatabaseLatestImportStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRediscloudEssentialsDatabaseLatestImportStatusToHclTerraform(struct?: DataRediscloudEssentialsDatabaseLatestImportStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRediscloudEssentialsDatabaseLatestImportStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRediscloudEssentialsDatabaseLatestImportStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRediscloudEssentialsDatabaseLatestImportStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error - computed: true, optional: false, required: false
  private _error = new DataRediscloudEssentialsDatabaseLatestImportStatusErrorList(this, "error", true);
  public get error() {
    return this._error;
  }

  // response - computed: true, optional: false, required: false
  private _response = new DataRediscloudEssentialsDatabaseLatestImportStatusResponseList(this, "response", true);
  public get response() {
    return this._response;
  }
}

export class DataRediscloudEssentialsDatabaseLatestImportStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataRediscloudEssentialsDatabaseLatestImportStatusOutputReference {
    return new DataRediscloudEssentialsDatabaseLatestImportStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRediscloudEssentialsDatabaseModules {
}

export function dataRediscloudEssentialsDatabaseModulesToTerraform(struct?: DataRediscloudEssentialsDatabaseModules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRediscloudEssentialsDatabaseModulesToHclTerraform(struct?: DataRediscloudEssentialsDatabaseModules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRediscloudEssentialsDatabaseModulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRediscloudEssentialsDatabaseModules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRediscloudEssentialsDatabaseModules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataRediscloudEssentialsDatabaseModulesList extends cdktf.ComplexList {

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
  public get(index: number): DataRediscloudEssentialsDatabaseModulesOutputReference {
    return new DataRediscloudEssentialsDatabaseModulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRediscloudEssentialsDatabaseReplicaSyncSource {
}

export function dataRediscloudEssentialsDatabaseReplicaSyncSourceToTerraform(struct?: DataRediscloudEssentialsDatabaseReplicaSyncSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRediscloudEssentialsDatabaseReplicaSyncSourceToHclTerraform(struct?: DataRediscloudEssentialsDatabaseReplicaSyncSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRediscloudEssentialsDatabaseReplicaSyncSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRediscloudEssentialsDatabaseReplicaSyncSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRediscloudEssentialsDatabaseReplicaSyncSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption - computed: true, optional: false, required: false
  public get encryption() {
    return this.getBooleanAttribute('encryption');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // server_cert - computed: true, optional: false, required: false
  public get serverCert() {
    return this.getStringAttribute('server_cert');
  }
}

export class DataRediscloudEssentialsDatabaseReplicaSyncSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataRediscloudEssentialsDatabaseReplicaSyncSourceOutputReference {
    return new DataRediscloudEssentialsDatabaseReplicaSyncSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRediscloudEssentialsDatabaseReplica {
}

export function dataRediscloudEssentialsDatabaseReplicaToTerraform(struct?: DataRediscloudEssentialsDatabaseReplica): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRediscloudEssentialsDatabaseReplicaToHclTerraform(struct?: DataRediscloudEssentialsDatabaseReplica): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRediscloudEssentialsDatabaseReplicaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRediscloudEssentialsDatabaseReplica | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRediscloudEssentialsDatabaseReplica | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sync_source - computed: true, optional: false, required: false
  private _syncSource = new DataRediscloudEssentialsDatabaseReplicaSyncSourceList(this, "sync_source", true);
  public get syncSource() {
    return this._syncSource;
  }
}

export class DataRediscloudEssentialsDatabaseReplicaList extends cdktf.ComplexList {

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
  public get(index: number): DataRediscloudEssentialsDatabaseReplicaOutputReference {
    return new DataRediscloudEssentialsDatabaseReplicaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/data-sources/essentials_database rediscloud_essentials_database}
*/
export class DataRediscloudEssentialsDatabase extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rediscloud_essentials_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRediscloudEssentialsDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRediscloudEssentialsDatabase to import
  * @param importFromId The id of the existing DataRediscloudEssentialsDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/data-sources/essentials_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRediscloudEssentialsDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rediscloud_essentials_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/data-sources/essentials_database rediscloud_essentials_database} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRediscloudEssentialsDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DataRediscloudEssentialsDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'rediscloud_essentials_database',
      terraformGeneratorMetadata: {
        providerName: 'rediscloud',
        providerVersion: '2.9.0',
        providerVersionConstraint: '2.9.0'
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

  // activated_on - computed: true, optional: false, required: false
  public get activatedOn() {
    return this.getStringAttribute('activated_on');
  }

  // alert - computed: true, optional: false, required: false
  private _alert = new DataRediscloudEssentialsDatabaseAlertList(this, "alert", true);
  public get alert() {
    return this._alert;
  }

  // client_tls_certificates - computed: true, optional: false, required: false
  public get clientTlsCertificates() {
    return this.getListAttribute('client_tls_certificates');
  }

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }

  // data_eviction - computed: true, optional: false, required: false
  public get dataEviction() {
    return this.getStringAttribute('data_eviction');
  }

  // data_persistence - computed: true, optional: false, required: false
  public get dataPersistence() {
    return this.getStringAttribute('data_persistence');
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

  // enable_database_clustering - computed: true, optional: false, required: false
  public get enableDatabaseClustering() {
    return this.getBooleanAttribute('enable_database_clustering');
  }

  // enable_default_user - computed: true, optional: false, required: false
  public get enableDefaultUser() {
    return this.getBooleanAttribute('enable_default_user');
  }

  // enable_tls - computed: true, optional: false, required: false
  public get enableTls() {
    return this.getBooleanAttribute('enable_tls');
  }

  // external_endpoint_for_oss_cluster_api - computed: true, optional: false, required: false
  public get externalEndpointForOssClusterApi() {
    return this.getBooleanAttribute('external_endpoint_for_oss_cluster_api');
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

  // latest_backup_status - computed: true, optional: false, required: false
  private _latestBackupStatus = new DataRediscloudEssentialsDatabaseLatestBackupStatusList(this, "latest_backup_status", true);
  public get latestBackupStatus() {
    return this._latestBackupStatus;
  }

  // latest_import_status - computed: true, optional: false, required: false
  private _latestImportStatus = new DataRediscloudEssentialsDatabaseLatestImportStatusList(this, "latest_import_status", true);
  public get latestImportStatus() {
    return this._latestImportStatus;
  }

  // memory_limit_in_gb - computed: true, optional: false, required: false
  public get memoryLimitInGb() {
    return this.getNumberAttribute('memory_limit_in_gb');
  }

  // modules - computed: true, optional: false, required: false
  private _modules = new DataRediscloudEssentialsDatabaseModulesList(this, "modules", true);
  public get modules() {
    return this._modules;
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

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // periodic_backup_path - computed: true, optional: false, required: false
  public get periodicBackupPath() {
    return this.getStringAttribute('periodic_backup_path');
  }

  // private_endpoint - computed: true, optional: false, required: false
  public get privateEndpoint() {
    return this.getStringAttribute('private_endpoint');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // public_endpoint - computed: true, optional: false, required: false
  public get publicEndpoint() {
    return this.getStringAttribute('public_endpoint');
  }

  // redis_version_compliance - computed: true, optional: false, required: false
  public get redisVersionCompliance() {
    return this.getStringAttribute('redis_version_compliance');
  }

  // regex_rules - computed: true, optional: false, required: false
  public get regexRules() {
    return this.getListAttribute('regex_rules');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // replica - computed: true, optional: false, required: false
  private _replica = new DataRediscloudEssentialsDatabaseReplicaList(this, "replica", true);
  public get replica() {
    return this._replica;
  }

  // replication - computed: true, optional: false, required: false
  public get replication() {
    return this.getBooleanAttribute('replication');
  }

  // resp_version - computed: true, optional: false, required: false
  public get respVersion() {
    return this.getStringAttribute('resp_version');
  }

  // source_ips - computed: true, optional: false, required: false
  public get sourceIps() {
    return cdktf.Fn.tolist(this.getListAttribute('source_ips'));
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
