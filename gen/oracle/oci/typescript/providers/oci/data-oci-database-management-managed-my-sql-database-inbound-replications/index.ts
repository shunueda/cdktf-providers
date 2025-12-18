// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_my_sql_database_inbound_replications
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_my_sql_database_inbound_replications#id DataOciDatabaseManagementManagedMySqlDatabaseInboundReplications#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_my_sql_database_inbound_replications#managed_my_sql_database_id DataOciDatabaseManagementManagedMySqlDatabaseInboundReplications#managed_my_sql_database_id}
  */
  readonly managedMySqlDatabaseId: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_my_sql_database_inbound_replications#filter DataOciDatabaseManagementManagedMySqlDatabaseInboundReplications#filter}
  */
  readonly filter?: DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsFilter[] | cdktf.IResolvable;
}
export interface DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsApplierFilters {
}

export function dataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsApplierFiltersToTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsApplierFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsApplierFiltersToHclTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsApplierFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsApplierFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsApplierFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsApplierFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filter_name - computed: true, optional: false, required: false
  public get filterName() {
    return this.getStringAttribute('filter_name');
  }

  // filter_rule - computed: true, optional: false, required: false
  public get filterRule() {
    return this.getStringAttribute('filter_rule');
  }
}

export class DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsApplierFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsApplierFiltersOutputReference {
    return new DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsApplierFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsApplyErrorWorkerErrors {
}

export function dataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsApplyErrorWorkerErrorsToTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsApplyErrorWorkerErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsApplyErrorWorkerErrorsToHclTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsApplyErrorWorkerErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsApplyErrorWorkerErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsApplyErrorWorkerErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsApplyErrorWorkerErrors | undefined) {
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

export class DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsApplyErrorWorkerErrorsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsApplyErrorWorkerErrorsOutputReference {
    return new DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsApplyErrorWorkerErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsApplyError {
}

export function dataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsApplyErrorToTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsApplyError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsApplyErrorToHclTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsApplyError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsApplyErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsApplyError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsApplyError | undefined) {
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
  private _workerErrors = new DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsApplyErrorWorkerErrorsList(this, "worker_errors", false);
  public get workerErrors() {
    return this._workerErrors;
  }
}

export class DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsApplyErrorList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsApplyErrorOutputReference {
    return new DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsApplyErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsFetchError {
}

export function dataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsFetchErrorToTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsFetchError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsFetchErrorToHclTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsFetchError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsFetchErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsFetchError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsFetchError | undefined) {
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

export class DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsFetchErrorList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsFetchErrorOutputReference {
    return new DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsFetchErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItems {
}

export function dataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsToTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsToHclTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // applier_filters - computed: true, optional: false, required: false
  private _applierFilters = new DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsApplierFiltersList(this, "applier_filters", false);
  public get applierFilters() {
    return this._applierFilters;
  }

  // apply_delay - computed: true, optional: false, required: false
  public get applyDelay() {
    return this.getNumberAttribute('apply_delay');
  }

  // apply_error - computed: true, optional: false, required: false
  private _applyError = new DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsApplyErrorList(this, "apply_error", false);
  public get applyError() {
    return this._applyError;
  }

  // apply_status - computed: true, optional: false, required: false
  public get applyStatus() {
    return this.getStringAttribute('apply_status');
  }

  // busy_workers - computed: true, optional: false, required: false
  public get busyWorkers() {
    return this.getNumberAttribute('busy_workers');
  }

  // channel_name - computed: true, optional: false, required: false
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }

  // desired_delay_seconds - computed: true, optional: false, required: false
  public get desiredDelaySeconds() {
    return this.getStringAttribute('desired_delay_seconds');
  }

  // fetch_error - computed: true, optional: false, required: false
  private _fetchError = new DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsFetchErrorList(this, "fetch_error", false);
  public get fetchError() {
    return this._fetchError;
  }

  // fetch_status - computed: true, optional: false, required: false
  public get fetchStatus() {
    return this.getStringAttribute('fetch_status');
  }

  // gtid_assignment - computed: true, optional: false, required: false
  public get gtidAssignment() {
    return this.getStringAttribute('gtid_assignment');
  }

  // relay_log_storage_space_used - computed: true, optional: false, required: false
  public get relayLogStorageSpaceUsed() {
    return this.getStringAttribute('relay_log_storage_space_used');
  }

  // remaining_delay_seconds - computed: true, optional: false, required: false
  public get remainingDelaySeconds() {
    return this.getStringAttribute('remaining_delay_seconds');
  }

  // retrieved_gtid_set - computed: true, optional: false, required: false
  public get retrievedGtidSet() {
    return this.getStringAttribute('retrieved_gtid_set');
  }

  // seconds_behind_source - computed: true, optional: false, required: false
  public get secondsBehindSource() {
    return this.getStringAttribute('seconds_behind_source');
  }

  // source_host - computed: true, optional: false, required: false
  public get sourceHost() {
    return this.getStringAttribute('source_host');
  }

  // source_port - computed: true, optional: false, required: false
  public get sourcePort() {
    return this.getNumberAttribute('source_port');
  }

  // source_server_id - computed: true, optional: false, required: false
  public get sourceServerId() {
    return this.getStringAttribute('source_server_id');
  }

  // source_uuid - computed: true, optional: false, required: false
  public get sourceUuid() {
    return this.getStringAttribute('source_uuid');
  }

  // transactions_received - computed: true, optional: false, required: false
  public get transactionsReceived() {
    return this.getStringAttribute('transactions_received');
  }
}

export class DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsOutputReference {
    return new DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollection {
}

export function dataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionToTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionToHclTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inbound_replications_count - computed: true, optional: false, required: false
  public get inboundReplicationsCount() {
    return this.getNumberAttribute('inbound_replications_count');
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // parallel_workers - computed: true, optional: false, required: false
  public get parallelWorkers() {
    return this.getNumberAttribute('parallel_workers');
  }

  // preserve_commit_order - computed: true, optional: false, required: false
  public get preserveCommitOrder() {
    return this.getStringAttribute('preserve_commit_order');
  }

  // replica_server_id - computed: true, optional: false, required: false
  public get replicaServerId() {
    return this.getStringAttribute('replica_server_id');
  }

  // replica_uuid - computed: true, optional: false, required: false
  public get replicaUuid() {
    return this.getStringAttribute('replica_uuid');
  }
}

export class DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionOutputReference {
    return new DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_my_sql_database_inbound_replications#name DataOciDatabaseManagementManagedMySqlDatabaseInboundReplications#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_my_sql_database_inbound_replications#regex DataOciDatabaseManagementManagedMySqlDatabaseInboundReplications#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_my_sql_database_inbound_replications#values DataOciDatabaseManagementManagedMySqlDatabaseInboundReplications#values}
  */
  readonly values: string[];
}

export function dataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsFilterToTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsFilter | cdktf.IResolvable): any {
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


export function dataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsFilterToHclTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsFilter | cdktf.IResolvable): any {
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

export class DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsFilterOutputReference {
    return new DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_my_sql_database_inbound_replications oci_database_management_managed_my_sql_database_inbound_replications}
*/
export class DataOciDatabaseManagementManagedMySqlDatabaseInboundReplications extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_managed_my_sql_database_inbound_replications";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementManagedMySqlDatabaseInboundReplications resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementManagedMySqlDatabaseInboundReplications to import
  * @param importFromId The id of the existing DataOciDatabaseManagementManagedMySqlDatabaseInboundReplications that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_my_sql_database_inbound_replications#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementManagedMySqlDatabaseInboundReplications to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_managed_my_sql_database_inbound_replications", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_my_sql_database_inbound_replications oci_database_management_managed_my_sql_database_inbound_replications} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_managed_my_sql_database_inbound_replications',
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

  // managed_my_sql_database_inbound_replication_collection - computed: true, optional: false, required: false
  private _managedMySqlDatabaseInboundReplicationCollection = new DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsManagedMySqlDatabaseInboundReplicationCollectionList(this, "managed_my_sql_database_inbound_replication_collection", false);
  public get managedMySqlDatabaseInboundReplicationCollection() {
    return this._managedMySqlDatabaseInboundReplicationCollection;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsFilter[] | cdktf.IResolvable) {
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
      filter: cdktf.listMapper(dataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsFilterToTerraform, true)(this._filter.internalValue),
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
        value: cdktf.listMapperHcl(dataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDatabaseManagementManagedMySqlDatabaseInboundReplicationsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
