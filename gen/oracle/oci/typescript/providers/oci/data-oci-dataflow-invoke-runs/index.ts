// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dataflow_invoke_runs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataflowInvokeRunsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dataflow_invoke_runs#application_id DataOciDataflowInvokeRuns#application_id}
  */
  readonly applicationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dataflow_invoke_runs#compartment_id DataOciDataflowInvokeRuns#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dataflow_invoke_runs#display_name DataOciDataflowInvokeRuns#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dataflow_invoke_runs#display_name_starts_with DataOciDataflowInvokeRuns#display_name_starts_with}
  */
  readonly displayNameStartsWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dataflow_invoke_runs#id DataOciDataflowInvokeRuns#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dataflow_invoke_runs#owner_principal_id DataOciDataflowInvokeRuns#owner_principal_id}
  */
  readonly ownerPrincipalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dataflow_invoke_runs#pool_id DataOciDataflowInvokeRuns#pool_id}
  */
  readonly poolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dataflow_invoke_runs#state DataOciDataflowInvokeRuns#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dataflow_invoke_runs#time_created_greater_than DataOciDataflowInvokeRuns#time_created_greater_than}
  */
  readonly timeCreatedGreaterThan?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dataflow_invoke_runs#filter DataOciDataflowInvokeRuns#filter}
  */
  readonly filter?: DataOciDataflowInvokeRunsFilter[] | cdktf.IResolvable;
}
export interface DataOciDataflowInvokeRunsRunsApplicationLogConfig {
}

export function dataOciDataflowInvokeRunsRunsApplicationLogConfigToTerraform(struct?: DataOciDataflowInvokeRunsRunsApplicationLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataflowInvokeRunsRunsApplicationLogConfigToHclTerraform(struct?: DataOciDataflowInvokeRunsRunsApplicationLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataflowInvokeRunsRunsApplicationLogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataflowInvokeRunsRunsApplicationLogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_group_id - computed: true, optional: false, required: false
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }

  // log_id - computed: true, optional: false, required: false
  public get logId() {
    return this.getStringAttribute('log_id');
  }
}

export class DataOciDataflowInvokeRunsRunsApplicationLogConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference {
    return new DataOciDataflowInvokeRunsRunsApplicationLogConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataflowInvokeRunsRunsDriverShapeConfig {
}

export function dataOciDataflowInvokeRunsRunsDriverShapeConfigToTerraform(struct?: DataOciDataflowInvokeRunsRunsDriverShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataflowInvokeRunsRunsDriverShapeConfigToHclTerraform(struct?: DataOciDataflowInvokeRunsRunsDriverShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataflowInvokeRunsRunsDriverShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataflowInvokeRunsRunsDriverShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // memory_in_gbs - computed: true, optional: false, required: false
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }

  // ocpus - computed: true, optional: false, required: false
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
}

export class DataOciDataflowInvokeRunsRunsDriverShapeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference {
    return new DataOciDataflowInvokeRunsRunsDriverShapeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataflowInvokeRunsRunsExecutorShapeConfig {
}

export function dataOciDataflowInvokeRunsRunsExecutorShapeConfigToTerraform(struct?: DataOciDataflowInvokeRunsRunsExecutorShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataflowInvokeRunsRunsExecutorShapeConfigToHclTerraform(struct?: DataOciDataflowInvokeRunsRunsExecutorShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataflowInvokeRunsRunsExecutorShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataflowInvokeRunsRunsExecutorShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // memory_in_gbs - computed: true, optional: false, required: false
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }

  // ocpus - computed: true, optional: false, required: false
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
}

export class DataOciDataflowInvokeRunsRunsExecutorShapeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference {
    return new DataOciDataflowInvokeRunsRunsExecutorShapeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataflowInvokeRunsRunsParameters {
}

export function dataOciDataflowInvokeRunsRunsParametersToTerraform(struct?: DataOciDataflowInvokeRunsRunsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataflowInvokeRunsRunsParametersToHclTerraform(struct?: DataOciDataflowInvokeRunsRunsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataflowInvokeRunsRunsParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataflowInvokeRunsRunsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataflowInvokeRunsRunsParameters | undefined) {
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
    return this.getStringAttribute('value');
  }
}

export class DataOciDataflowInvokeRunsRunsParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataflowInvokeRunsRunsParametersOutputReference {
    return new DataOciDataflowInvokeRunsRunsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataflowInvokeRunsRuns {
}

export function dataOciDataflowInvokeRunsRunsToTerraform(struct?: DataOciDataflowInvokeRunsRuns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataflowInvokeRunsRunsToHclTerraform(struct?: DataOciDataflowInvokeRunsRuns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataflowInvokeRunsRunsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataflowInvokeRunsRuns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataflowInvokeRunsRuns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // application_log_config - computed: true, optional: false, required: false
  private _applicationLogConfig = new DataOciDataflowInvokeRunsRunsApplicationLogConfigList(this, "application_log_config", false);
  public get applicationLogConfig() {
    return this._applicationLogConfig;
  }

  // archive_uri - computed: true, optional: false, required: false
  public get archiveUri() {
    return this.getStringAttribute('archive_uri');
  }

  // arguments - computed: true, optional: false, required: false
  public get arguments() {
    return this.getListAttribute('arguments');
  }

  // asynchronous - computed: true, optional: false, required: false
  public get asynchronous() {
    return this.getBooleanAttribute('asynchronous');
  }

  // class_name - computed: true, optional: false, required: false
  public get className() {
    return this.getStringAttribute('class_name');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // configuration - computed: true, optional: false, required: false
  private _configuration = new cdktf.StringMap(this, "configuration");
  public get configuration() {
    return this._configuration;
  }

  // data_read_in_bytes - computed: true, optional: false, required: false
  public get dataReadInBytes() {
    return this.getStringAttribute('data_read_in_bytes');
  }

  // data_written_in_bytes - computed: true, optional: false, required: false
  public get dataWrittenInBytes() {
    return this.getStringAttribute('data_written_in_bytes');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // driver_shape - computed: true, optional: false, required: false
  public get driverShape() {
    return this.getStringAttribute('driver_shape');
  }

  // driver_shape_config - computed: true, optional: false, required: false
  private _driverShapeConfig = new DataOciDataflowInvokeRunsRunsDriverShapeConfigList(this, "driver_shape_config", false);
  public get driverShapeConfig() {
    return this._driverShapeConfig;
  }

  // execute - computed: true, optional: false, required: false
  public get execute() {
    return this.getStringAttribute('execute');
  }

  // executor_shape - computed: true, optional: false, required: false
  public get executorShape() {
    return this.getStringAttribute('executor_shape');
  }

  // executor_shape_config - computed: true, optional: false, required: false
  private _executorShapeConfig = new DataOciDataflowInvokeRunsRunsExecutorShapeConfigList(this, "executor_shape_config", false);
  public get executorShapeConfig() {
    return this._executorShapeConfig;
  }

  // file_uri - computed: true, optional: false, required: false
  public get fileUri() {
    return this.getStringAttribute('file_uri');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_timeout_in_minutes - computed: true, optional: false, required: false
  public get idleTimeoutInMinutes() {
    return this.getStringAttribute('idle_timeout_in_minutes');
  }

  // language - computed: true, optional: false, required: false
  public get language() {
    return this.getStringAttribute('language');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // logs_bucket_uri - computed: true, optional: false, required: false
  public get logsBucketUri() {
    return this.getStringAttribute('logs_bucket_uri');
  }

  // max_duration_in_minutes - computed: true, optional: false, required: false
  public get maxDurationInMinutes() {
    return this.getStringAttribute('max_duration_in_minutes');
  }

  // metastore_id - computed: true, optional: false, required: false
  public get metastoreId() {
    return this.getStringAttribute('metastore_id');
  }

  // num_executors - computed: true, optional: false, required: false
  public get numExecutors() {
    return this.getNumberAttribute('num_executors');
  }

  // opc_parent_rpt_url - computed: true, optional: false, required: false
  public get opcParentRptUrl() {
    return this.getStringAttribute('opc_parent_rpt_url');
  }

  // opc_request_id - computed: true, optional: false, required: false
  public get opcRequestId() {
    return this.getStringAttribute('opc_request_id');
  }

  // owner_principal_id - computed: true, optional: false, required: false
  public get ownerPrincipalId() {
    return this.getStringAttribute('owner_principal_id');
  }

  // owner_user_name - computed: true, optional: false, required: false
  public get ownerUserName() {
    return this.getStringAttribute('owner_user_name');
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataOciDataflowInvokeRunsRunsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }

  // pool_id - computed: true, optional: false, required: false
  public get poolId() {
    return this.getStringAttribute('pool_id');
  }

  // private_endpoint_dns_zones - computed: true, optional: false, required: false
  public get privateEndpointDnsZones() {
    return this.getListAttribute('private_endpoint_dns_zones');
  }

  // private_endpoint_id - computed: true, optional: false, required: false
  public get privateEndpointId() {
    return this.getStringAttribute('private_endpoint_id');
  }

  // private_endpoint_max_host_count - computed: true, optional: false, required: false
  public get privateEndpointMaxHostCount() {
    return this.getNumberAttribute('private_endpoint_max_host_count');
  }

  // private_endpoint_nsg_ids - computed: true, optional: false, required: false
  public get privateEndpointNsgIds() {
    return this.getListAttribute('private_endpoint_nsg_ids');
  }

  // private_endpoint_subnet_id - computed: true, optional: false, required: false
  public get privateEndpointSubnetId() {
    return this.getStringAttribute('private_endpoint_subnet_id');
  }

  // run_duration_in_milliseconds - computed: true, optional: false, required: false
  public get runDurationInMilliseconds() {
    return this.getStringAttribute('run_duration_in_milliseconds');
  }

  // spark_version - computed: true, optional: false, required: false
  public get sparkVersion() {
    return this.getStringAttribute('spark_version');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // total_ocpu - computed: true, optional: false, required: false
  public get totalOcpu() {
    return this.getNumberAttribute('total_ocpu');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // warehouse_bucket_uri - computed: true, optional: false, required: false
  public get warehouseBucketUri() {
    return this.getStringAttribute('warehouse_bucket_uri');
  }
}

export class DataOciDataflowInvokeRunsRunsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataflowInvokeRunsRunsOutputReference {
    return new DataOciDataflowInvokeRunsRunsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataflowInvokeRunsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dataflow_invoke_runs#name DataOciDataflowInvokeRuns#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dataflow_invoke_runs#regex DataOciDataflowInvokeRuns#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dataflow_invoke_runs#values DataOciDataflowInvokeRuns#values}
  */
  readonly values: string[];
}

export function dataOciDataflowInvokeRunsFilterToTerraform(struct?: DataOciDataflowInvokeRunsFilter | cdktf.IResolvable): any {
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


export function dataOciDataflowInvokeRunsFilterToHclTerraform(struct?: DataOciDataflowInvokeRunsFilter | cdktf.IResolvable): any {
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

export class DataOciDataflowInvokeRunsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataflowInvokeRunsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDataflowInvokeRunsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDataflowInvokeRunsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDataflowInvokeRunsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDataflowInvokeRunsFilterOutputReference {
    return new DataOciDataflowInvokeRunsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dataflow_invoke_runs oci_dataflow_invoke_runs}
*/
export class DataOciDataflowInvokeRuns extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dataflow_invoke_runs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataflowInvokeRuns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataflowInvokeRuns to import
  * @param importFromId The id of the existing DataOciDataflowInvokeRuns that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dataflow_invoke_runs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataflowInvokeRuns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_dataflow_invoke_runs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dataflow_invoke_runs oci_dataflow_invoke_runs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataflowInvokeRunsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataflowInvokeRunsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dataflow_invoke_runs',
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
    this._applicationId = config.applicationId;
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._displayNameStartsWith = config.displayNameStartsWith;
    this._id = config.id;
    this._ownerPrincipalId = config.ownerPrincipalId;
    this._poolId = config.poolId;
    this._state = config.state;
    this._timeCreatedGreaterThan = config.timeCreatedGreaterThan;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // display_name_starts_with - computed: false, optional: true, required: false
  private _displayNameStartsWith?: string; 
  public get displayNameStartsWith() {
    return this.getStringAttribute('display_name_starts_with');
  }
  public set displayNameStartsWith(value: string) {
    this._displayNameStartsWith = value;
  }
  public resetDisplayNameStartsWith() {
    this._displayNameStartsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameStartsWithInput() {
    return this._displayNameStartsWith;
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

  // owner_principal_id - computed: false, optional: true, required: false
  private _ownerPrincipalId?: string; 
  public get ownerPrincipalId() {
    return this.getStringAttribute('owner_principal_id');
  }
  public set ownerPrincipalId(value: string) {
    this._ownerPrincipalId = value;
  }
  public resetOwnerPrincipalId() {
    this._ownerPrincipalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerPrincipalIdInput() {
    return this._ownerPrincipalId;
  }

  // pool_id - computed: false, optional: true, required: false
  private _poolId?: string; 
  public get poolId() {
    return this.getStringAttribute('pool_id');
  }
  public set poolId(value: string) {
    this._poolId = value;
  }
  public resetPoolId() {
    this._poolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdInput() {
    return this._poolId;
  }

  // runs - computed: true, optional: false, required: false
  private _runs = new DataOciDataflowInvokeRunsRunsList(this, "runs", false);
  public get runs() {
    return this._runs;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // time_created_greater_than - computed: false, optional: true, required: false
  private _timeCreatedGreaterThan?: string; 
  public get timeCreatedGreaterThan() {
    return this.getStringAttribute('time_created_greater_than');
  }
  public set timeCreatedGreaterThan(value: string) {
    this._timeCreatedGreaterThan = value;
  }
  public resetTimeCreatedGreaterThan() {
    this._timeCreatedGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeCreatedGreaterThanInput() {
    return this._timeCreatedGreaterThan;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDataflowInvokeRunsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDataflowInvokeRunsFilter[] | cdktf.IResolvable) {
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
      application_id: cdktf.stringToTerraform(this._applicationId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      display_name: cdktf.stringToTerraform(this._displayName),
      display_name_starts_with: cdktf.stringToTerraform(this._displayNameStartsWith),
      id: cdktf.stringToTerraform(this._id),
      owner_principal_id: cdktf.stringToTerraform(this._ownerPrincipalId),
      pool_id: cdktf.stringToTerraform(this._poolId),
      state: cdktf.stringToTerraform(this._state),
      time_created_greater_than: cdktf.stringToTerraform(this._timeCreatedGreaterThan),
      filter: cdktf.listMapper(dataOciDataflowInvokeRunsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name_starts_with: {
        value: cdktf.stringToHclTerraform(this._displayNameStartsWith),
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
      owner_principal_id: {
        value: cdktf.stringToHclTerraform(this._ownerPrincipalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_id: {
        value: cdktf.stringToHclTerraform(this._poolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_created_greater_than: {
        value: cdktf.stringToHclTerraform(this._timeCreatedGreaterThan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDataflowInvokeRunsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDataflowInvokeRunsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
