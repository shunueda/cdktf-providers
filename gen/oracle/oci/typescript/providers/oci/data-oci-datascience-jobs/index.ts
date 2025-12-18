// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datascience_jobs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatascienceJobsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datascience_jobs#compartment_id DataOciDatascienceJobs#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datascience_jobs#created_by DataOciDatascienceJobs#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datascience_jobs#display_name DataOciDatascienceJobs#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datascience_jobs#id DataOciDatascienceJobs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datascience_jobs#project_id DataOciDatascienceJobs#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datascience_jobs#state DataOciDatascienceJobs#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datascience_jobs#filter DataOciDatascienceJobs#filter}
  */
  readonly filter?: DataOciDatascienceJobsFilter[] | cdktf.IResolvable;
}
export interface DataOciDatascienceJobsJobsJobConfigurationDetailsStartupProbeDetails {
}

export function dataOciDatascienceJobsJobsJobConfigurationDetailsStartupProbeDetailsToTerraform(struct?: DataOciDatascienceJobsJobsJobConfigurationDetailsStartupProbeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceJobsJobsJobConfigurationDetailsStartupProbeDetailsToHclTerraform(struct?: DataOciDatascienceJobsJobsJobConfigurationDetailsStartupProbeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceJobsJobsJobConfigurationDetailsStartupProbeDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceJobsJobsJobConfigurationDetailsStartupProbeDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceJobsJobsJobConfigurationDetailsStartupProbeDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }

  // failure_threshold - computed: true, optional: false, required: false
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // initial_delay_in_seconds - computed: true, optional: false, required: false
  public get initialDelayInSeconds() {
    return this.getNumberAttribute('initial_delay_in_seconds');
  }

  // job_probe_check_type - computed: true, optional: false, required: false
  public get jobProbeCheckType() {
    return this.getStringAttribute('job_probe_check_type');
  }

  // period_in_seconds - computed: true, optional: false, required: false
  public get periodInSeconds() {
    return this.getNumberAttribute('period_in_seconds');
  }
}

export class DataOciDatascienceJobsJobsJobConfigurationDetailsStartupProbeDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceJobsJobsJobConfigurationDetailsStartupProbeDetailsOutputReference {
    return new DataOciDatascienceJobsJobsJobConfigurationDetailsStartupProbeDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceJobsJobsJobConfigurationDetails {
}

export function dataOciDatascienceJobsJobsJobConfigurationDetailsToTerraform(struct?: DataOciDatascienceJobsJobsJobConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceJobsJobsJobConfigurationDetailsToHclTerraform(struct?: DataOciDatascienceJobsJobsJobConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceJobsJobsJobConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceJobsJobsJobConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command_line_arguments - computed: true, optional: false, required: false
  public get commandLineArguments() {
    return this.getStringAttribute('command_line_arguments');
  }

  // environment_variables - computed: true, optional: false, required: false
  private _environmentVariables = new cdktf.StringMap(this, "environment_variables");
  public get environmentVariables() {
    return this._environmentVariables;
  }

  // job_type - computed: true, optional: false, required: false
  public get jobType() {
    return this.getStringAttribute('job_type');
  }

  // maximum_runtime_in_minutes - computed: true, optional: false, required: false
  public get maximumRuntimeInMinutes() {
    return this.getStringAttribute('maximum_runtime_in_minutes');
  }

  // startup_probe_details - computed: true, optional: false, required: false
  private _startupProbeDetails = new DataOciDatascienceJobsJobsJobConfigurationDetailsStartupProbeDetailsList(this, "startup_probe_details", false);
  public get startupProbeDetails() {
    return this._startupProbeDetails;
  }
}

export class DataOciDatascienceJobsJobsJobConfigurationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference {
    return new DataOciDatascienceJobsJobsJobConfigurationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetails {
}

export function dataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsToTerraform(struct?: DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsToHclTerraform(struct?: DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cmd - computed: true, optional: false, required: false
  public get cmd() {
    return this.getListAttribute('cmd');
  }

  // entrypoint - computed: true, optional: false, required: false
  public get entrypoint() {
    return this.getListAttribute('entrypoint');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // image_digest - computed: true, optional: false, required: false
  public get imageDigest() {
    return this.getStringAttribute('image_digest');
  }

  // image_signature_id - computed: true, optional: false, required: false
  public get imageSignatureId() {
    return this.getStringAttribute('image_signature_id');
  }

  // job_environment_type - computed: true, optional: false, required: false
  public get jobEnvironmentType() {
    return this.getStringAttribute('job_environment_type');
  }
}

export class DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference {
    return new DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetails {
}

export function dataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsToTerraform(struct?: DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsToHclTerraform(struct?: DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_baseline - computed: true, optional: false, required: false
  public get cpuBaseline() {
    return this.getStringAttribute('cpu_baseline');
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

export class DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference {
    return new DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetails {
}

export function dataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsToTerraform(struct?: DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsToHclTerraform(struct?: DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_storage_size_in_gbs - computed: true, optional: false, required: false
  public get blockStorageSizeInGbs() {
    return this.getNumberAttribute('block_storage_size_in_gbs');
  }

  // job_infrastructure_type - computed: true, optional: false, required: false
  public get jobInfrastructureType() {
    return this.getStringAttribute('job_infrastructure_type');
  }

  // job_shape_config_details - computed: true, optional: false, required: false
  private _jobShapeConfigDetails = new DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList(this, "job_shape_config_details", false);
  public get jobShapeConfigDetails() {
    return this._jobShapeConfigDetails;
  }

  // shape_name - computed: true, optional: false, required: false
  public get shapeName() {
    return this.getStringAttribute('shape_name');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference {
    return new DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceJobsJobsJobLogConfigurationDetails {
}

export function dataOciDatascienceJobsJobsJobLogConfigurationDetailsToTerraform(struct?: DataOciDatascienceJobsJobsJobLogConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceJobsJobsJobLogConfigurationDetailsToHclTerraform(struct?: DataOciDatascienceJobsJobsJobLogConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceJobsJobsJobLogConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceJobsJobsJobLogConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_auto_log_creation - computed: true, optional: false, required: false
  public get enableAutoLogCreation() {
    return this.getBooleanAttribute('enable_auto_log_creation');
  }

  // enable_logging - computed: true, optional: false, required: false
  public get enableLogging() {
    return this.getBooleanAttribute('enable_logging');
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

export class DataOciDatascienceJobsJobsJobLogConfigurationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference {
    return new DataOciDatascienceJobsJobsJobLogConfigurationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNetworkConfiguration {
}

export function dataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNetworkConfigurationToTerraform(struct?: DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNetworkConfigurationToHclTerraform(struct?: DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNetworkConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // job_network_type - computed: true, optional: false, required: false
  public get jobNetworkType() {
    return this.getStringAttribute('job_network_type');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNetworkConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNetworkConfigurationOutputReference {
    return new DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNetworkConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetails {
}

export function dataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetailsToTerraform(struct?: DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetailsToHclTerraform(struct?: DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }

  // failure_threshold - computed: true, optional: false, required: false
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // initial_delay_in_seconds - computed: true, optional: false, required: false
  public get initialDelayInSeconds() {
    return this.getNumberAttribute('initial_delay_in_seconds');
  }

  // job_probe_check_type - computed: true, optional: false, required: false
  public get jobProbeCheckType() {
    return this.getStringAttribute('job_probe_check_type');
  }

  // period_in_seconds - computed: true, optional: false, required: false
  public get periodInSeconds() {
    return this.getNumberAttribute('period_in_seconds');
  }
}

export class DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetailsOutputReference {
    return new DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetails {
}

export function dataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsToTerraform(struct?: DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsToHclTerraform(struct?: DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command_line_arguments - computed: true, optional: false, required: false
  public get commandLineArguments() {
    return this.getStringAttribute('command_line_arguments');
  }

  // environment_variables - computed: true, optional: false, required: false
  private _environmentVariables = new cdktf.StringMap(this, "environment_variables");
  public get environmentVariables() {
    return this._environmentVariables;
  }

  // job_type - computed: true, optional: false, required: false
  public get jobType() {
    return this.getStringAttribute('job_type');
  }

  // maximum_runtime_in_minutes - computed: true, optional: false, required: false
  public get maximumRuntimeInMinutes() {
    return this.getStringAttribute('maximum_runtime_in_minutes');
  }

  // startup_probe_details - computed: true, optional: false, required: false
  private _startupProbeDetails = new DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetailsList(this, "startup_probe_details", false);
  public get startupProbeDetails() {
    return this._startupProbeDetails;
  }
}

export class DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsOutputReference {
    return new DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetails {
}

export function dataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetailsToTerraform(struct?: DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetailsToHclTerraform(struct?: DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cmd - computed: true, optional: false, required: false
  public get cmd() {
    return this.getListAttribute('cmd');
  }

  // entrypoint - computed: true, optional: false, required: false
  public get entrypoint() {
    return this.getListAttribute('entrypoint');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // image_digest - computed: true, optional: false, required: false
  public get imageDigest() {
    return this.getStringAttribute('image_digest');
  }

  // image_signature_id - computed: true, optional: false, required: false
  public get imageSignatureId() {
    return this.getStringAttribute('image_signature_id');
  }

  // job_environment_type - computed: true, optional: false, required: false
  public get jobEnvironmentType() {
    return this.getStringAttribute('job_environment_type');
  }
}

export class DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetailsOutputReference {
    return new DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetails {
}

export function dataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetailsToTerraform(struct?: DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetailsToHclTerraform(struct?: DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_baseline - computed: true, optional: false, required: false
  public get cpuBaseline() {
    return this.getStringAttribute('cpu_baseline');
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

export class DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference {
    return new DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetails {
}

export function dataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsToTerraform(struct?: DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsToHclTerraform(struct?: DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_storage_size_in_gbs - computed: true, optional: false, required: false
  public get blockStorageSizeInGbs() {
    return this.getNumberAttribute('block_storage_size_in_gbs');
  }

  // job_infrastructure_type - computed: true, optional: false, required: false
  public get jobInfrastructureType() {
    return this.getStringAttribute('job_infrastructure_type');
  }

  // job_shape_config_details - computed: true, optional: false, required: false
  private _jobShapeConfigDetails = new DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList(this, "job_shape_config_details", false);
  public get jobShapeConfigDetails() {
    return this._jobShapeConfigDetails;
  }

  // shape_name - computed: true, optional: false, required: false
  public get shapeName() {
    return this.getStringAttribute('shape_name');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsOutputReference {
    return new DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListStruct {
}

export function dataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListStructToTerraform(struct?: DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListStructToHclTerraform(struct?: DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // job_configuration_details - computed: true, optional: false, required: false
  private _jobConfigurationDetails = new DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsList(this, "job_configuration_details", false);
  public get jobConfigurationDetails() {
    return this._jobConfigurationDetails;
  }

  // job_environment_configuration_details - computed: true, optional: false, required: false
  private _jobEnvironmentConfigurationDetails = new DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetailsList(this, "job_environment_configuration_details", false);
  public get jobEnvironmentConfigurationDetails() {
    return this._jobEnvironmentConfigurationDetails;
  }

  // job_infrastructure_configuration_details - computed: true, optional: false, required: false
  private _jobInfrastructureConfigurationDetails = new DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsList(this, "job_infrastructure_configuration_details", false);
  public get jobInfrastructureConfigurationDetails() {
    return this._jobInfrastructureConfigurationDetails;
  }

  // minimum_success_replicas - computed: true, optional: false, required: false
  public get minimumSuccessReplicas() {
    return this.getNumberAttribute('minimum_success_replicas');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // replicas - computed: true, optional: false, required: false
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
}

export class DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListStructOutputReference {
    return new DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceJobsJobsJobNodeConfigurationDetails {
}

export function dataOciDatascienceJobsJobsJobNodeConfigurationDetailsToTerraform(struct?: DataOciDatascienceJobsJobsJobNodeConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceJobsJobsJobNodeConfigurationDetailsToHclTerraform(struct?: DataOciDatascienceJobsJobsJobNodeConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceJobsJobsJobNodeConfigurationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceJobsJobsJobNodeConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceJobsJobsJobNodeConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // job_network_configuration - computed: true, optional: false, required: false
  private _jobNetworkConfiguration = new DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNetworkConfigurationList(this, "job_network_configuration", false);
  public get jobNetworkConfiguration() {
    return this._jobNetworkConfiguration;
  }

  // job_node_group_configuration_details_list - computed: true, optional: false, required: false
  private _jobNodeGroupConfigurationDetailsList = new DataOciDatascienceJobsJobsJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListStructList(this, "job_node_group_configuration_details_list", false);
  public get jobNodeGroupConfigurationDetailsList() {
    return this._jobNodeGroupConfigurationDetailsList;
  }

  // job_node_type - computed: true, optional: false, required: false
  public get jobNodeType() {
    return this.getStringAttribute('job_node_type');
  }

  // maximum_runtime_in_minutes - computed: true, optional: false, required: false
  public get maximumRuntimeInMinutes() {
    return this.getStringAttribute('maximum_runtime_in_minutes');
  }

  // startup_order - computed: true, optional: false, required: false
  public get startupOrder() {
    return this.getStringAttribute('startup_order');
  }
}

export class DataOciDatascienceJobsJobsJobNodeConfigurationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceJobsJobsJobNodeConfigurationDetailsOutputReference {
    return new DataOciDatascienceJobsJobsJobNodeConfigurationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStruct {
}

export function dataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructToTerraform(struct?: DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructToHclTerraform(struct?: DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // destination_directory_name - computed: true, optional: false, required: false
  public get destinationDirectoryName() {
    return this.getStringAttribute('destination_directory_name');
  }

  // destination_path - computed: true, optional: false, required: false
  public get destinationPath() {
    return this.getStringAttribute('destination_path');
  }

  // export_id - computed: true, optional: false, required: false
  public get exportId() {
    return this.getStringAttribute('export_id');
  }

  // mount_target_id - computed: true, optional: false, required: false
  public get mountTargetId() {
    return this.getStringAttribute('mount_target_id');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // storage_type - computed: true, optional: false, required: false
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
}

export class DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference {
    return new DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceJobsJobs {
}

export function dataOciDatascienceJobsJobsToTerraform(struct?: DataOciDatascienceJobsJobs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceJobsJobsToHclTerraform(struct?: DataOciDatascienceJobsJobs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceJobsJobsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceJobsJobs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceJobsJobs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // artifact_content_disposition - computed: true, optional: false, required: false
  public get artifactContentDisposition() {
    return this.getStringAttribute('artifact_content_disposition');
  }

  // artifact_content_length - computed: true, optional: false, required: false
  public get artifactContentLength() {
    return this.getStringAttribute('artifact_content_length');
  }

  // artifact_content_md5 - computed: true, optional: false, required: false
  public get artifactContentMd5() {
    return this.getStringAttribute('artifact_content_md5');
  }

  // artifact_last_modified - computed: true, optional: false, required: false
  public get artifactLastModified() {
    return this.getStringAttribute('artifact_last_modified');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // delete_related_job_runs - computed: true, optional: false, required: false
  public get deleteRelatedJobRuns() {
    return this.getBooleanAttribute('delete_related_job_runs');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // empty_artifact - computed: true, optional: false, required: false
  public get emptyArtifact() {
    return this.getBooleanAttribute('empty_artifact');
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

  // job_artifact - computed: true, optional: false, required: false
  public get jobArtifact() {
    return this.getStringAttribute('job_artifact');
  }

  // job_configuration_details - computed: true, optional: false, required: false
  private _jobConfigurationDetails = new DataOciDatascienceJobsJobsJobConfigurationDetailsList(this, "job_configuration_details", false);
  public get jobConfigurationDetails() {
    return this._jobConfigurationDetails;
  }

  // job_environment_configuration_details - computed: true, optional: false, required: false
  private _jobEnvironmentConfigurationDetails = new DataOciDatascienceJobsJobsJobEnvironmentConfigurationDetailsList(this, "job_environment_configuration_details", false);
  public get jobEnvironmentConfigurationDetails() {
    return this._jobEnvironmentConfigurationDetails;
  }

  // job_infrastructure_configuration_details - computed: true, optional: false, required: false
  private _jobInfrastructureConfigurationDetails = new DataOciDatascienceJobsJobsJobInfrastructureConfigurationDetailsList(this, "job_infrastructure_configuration_details", false);
  public get jobInfrastructureConfigurationDetails() {
    return this._jobInfrastructureConfigurationDetails;
  }

  // job_log_configuration_details - computed: true, optional: false, required: false
  private _jobLogConfigurationDetails = new DataOciDatascienceJobsJobsJobLogConfigurationDetailsList(this, "job_log_configuration_details", false);
  public get jobLogConfigurationDetails() {
    return this._jobLogConfigurationDetails;
  }

  // job_node_configuration_details - computed: true, optional: false, required: false
  private _jobNodeConfigurationDetails = new DataOciDatascienceJobsJobsJobNodeConfigurationDetailsList(this, "job_node_configuration_details", false);
  public get jobNodeConfigurationDetails() {
    return this._jobNodeConfigurationDetails;
  }

  // job_storage_mount_configuration_details_list - computed: true, optional: false, required: false
  private _jobStorageMountConfigurationDetailsList = new DataOciDatascienceJobsJobsJobStorageMountConfigurationDetailsListStructList(this, "job_storage_mount_configuration_details_list", false);
  public get jobStorageMountConfigurationDetailsList() {
    return this._jobStorageMountConfigurationDetailsList;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
}

export class DataOciDatascienceJobsJobsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceJobsJobsOutputReference {
    return new DataOciDatascienceJobsJobsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceJobsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datascience_jobs#name DataOciDatascienceJobs#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datascience_jobs#regex DataOciDatascienceJobs#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datascience_jobs#values DataOciDatascienceJobs#values}
  */
  readonly values: string[];
}

export function dataOciDatascienceJobsFilterToTerraform(struct?: DataOciDatascienceJobsFilter | cdktf.IResolvable): any {
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


export function dataOciDatascienceJobsFilterToHclTerraform(struct?: DataOciDatascienceJobsFilter | cdktf.IResolvable): any {
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

export class DataOciDatascienceJobsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceJobsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDatascienceJobsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDatascienceJobsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDatascienceJobsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDatascienceJobsFilterOutputReference {
    return new DataOciDatascienceJobsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datascience_jobs oci_datascience_jobs}
*/
export class DataOciDatascienceJobs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_datascience_jobs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatascienceJobs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatascienceJobs to import
  * @param importFromId The id of the existing DataOciDatascienceJobs that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datascience_jobs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatascienceJobs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_datascience_jobs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datascience_jobs oci_datascience_jobs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatascienceJobsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatascienceJobsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datascience_jobs',
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
    this._compartmentId = config.compartmentId;
    this._createdBy = config.createdBy;
    this._displayName = config.displayName;
    this._id = config.id;
    this._projectId = config.projectId;
    this._state = config.state;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // created_by - computed: false, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
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

  // id - computed: false, optional: true, required: false
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

  // jobs - computed: true, optional: false, required: false
  private _jobs = new DataOciDatascienceJobsJobsList(this, "jobs", false);
  public get jobs() {
    return this._jobs;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDatascienceJobsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDatascienceJobsFilter[] | cdktf.IResolvable) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      created_by: cdktf.stringToTerraform(this._createdBy),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciDatascienceJobsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_by: {
        value: cdktf.stringToHclTerraform(this._createdBy),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
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
      filter: {
        value: cdktf.listMapperHcl(dataOciDatascienceJobsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDatascienceJobsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
