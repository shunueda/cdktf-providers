// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatascienceJobRunConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#asynchronous DatascienceJobRun#asynchronous}
  */
  readonly asynchronous?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#compartment_id DatascienceJobRun#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#defined_tags DatascienceJobRun#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#display_name DatascienceJobRun#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#freeform_tags DatascienceJobRun#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#id DatascienceJobRun#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#job_id DatascienceJobRun#job_id}
  */
  readonly jobId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#opc_parent_rpt_url DatascienceJobRun#opc_parent_rpt_url}
  */
  readonly opcParentRptUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#project_id DatascienceJobRun#project_id}
  */
  readonly projectId: string;
  /**
  * job_configuration_override_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#job_configuration_override_details DatascienceJobRun#job_configuration_override_details}
  */
  readonly jobConfigurationOverrideDetails?: DatascienceJobRunJobConfigurationOverrideDetails;
  /**
  * job_environment_configuration_override_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#job_environment_configuration_override_details DatascienceJobRun#job_environment_configuration_override_details}
  */
  readonly jobEnvironmentConfigurationOverrideDetails?: DatascienceJobRunJobEnvironmentConfigurationOverrideDetails;
  /**
  * job_infrastructure_configuration_override_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#job_infrastructure_configuration_override_details DatascienceJobRun#job_infrastructure_configuration_override_details}
  */
  readonly jobInfrastructureConfigurationOverrideDetails?: DatascienceJobRunJobInfrastructureConfigurationOverrideDetails;
  /**
  * job_log_configuration_override_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#job_log_configuration_override_details DatascienceJobRun#job_log_configuration_override_details}
  */
  readonly jobLogConfigurationOverrideDetails?: DatascienceJobRunJobLogConfigurationOverrideDetails;
  /**
  * job_node_configuration_override_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#job_node_configuration_override_details DatascienceJobRun#job_node_configuration_override_details}
  */
  readonly jobNodeConfigurationOverrideDetails?: DatascienceJobRunJobNodeConfigurationOverrideDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#timeouts DatascienceJobRun#timeouts}
  */
  readonly timeouts?: DatascienceJobRunTimeouts;
}
export interface DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails {
}

export function datascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsToTerraform(struct?: DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsToHclTerraform(struct?: DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails | undefined) {
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

export class DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference {
    return new DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatascienceJobRunJobInfrastructureConfigurationDetails {
}

export function datascienceJobRunJobInfrastructureConfigurationDetailsToTerraform(struct?: DatascienceJobRunJobInfrastructureConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datascienceJobRunJobInfrastructureConfigurationDetailsToHclTerraform(struct?: DatascienceJobRunJobInfrastructureConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatascienceJobRunJobInfrastructureConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceJobRunJobInfrastructureConfigurationDetails | undefined) {
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
  private _jobShapeConfigDetails = new DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList(this, "job_shape_config_details", false);
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

export class DatascienceJobRunJobInfrastructureConfigurationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference {
    return new DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatascienceJobRunJobStorageMountConfigurationDetailsListStruct {
}

export function datascienceJobRunJobStorageMountConfigurationDetailsListStructToTerraform(struct?: DatascienceJobRunJobStorageMountConfigurationDetailsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datascienceJobRunJobStorageMountConfigurationDetailsListStructToHclTerraform(struct?: DatascienceJobRunJobStorageMountConfigurationDetailsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatascienceJobRunJobStorageMountConfigurationDetailsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceJobRunJobStorageMountConfigurationDetailsListStruct | undefined) {
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

export class DatascienceJobRunJobStorageMountConfigurationDetailsListStructList extends cdktf.ComplexList {

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
  public get(index: number): DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference {
    return new DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatascienceJobRunLogDetails {
}

export function datascienceJobRunLogDetailsToTerraform(struct?: DatascienceJobRunLogDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datascienceJobRunLogDetailsToHclTerraform(struct?: DatascienceJobRunLogDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatascienceJobRunLogDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatascienceJobRunLogDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceJobRunLogDetails | undefined) {
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

export class DatascienceJobRunLogDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DatascienceJobRunLogDetailsOutputReference {
    return new DatascienceJobRunLogDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatascienceJobRunNodeGroupDetailsListStruct {
}

export function datascienceJobRunNodeGroupDetailsListStructToTerraform(struct?: DatascienceJobRunNodeGroupDetailsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datascienceJobRunNodeGroupDetailsListStructToHclTerraform(struct?: DatascienceJobRunNodeGroupDetailsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatascienceJobRunNodeGroupDetailsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatascienceJobRunNodeGroupDetailsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceJobRunNodeGroupDetailsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DatascienceJobRunNodeGroupDetailsListStructList extends cdktf.ComplexList {

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
  public get(index: number): DatascienceJobRunNodeGroupDetailsListStructOutputReference {
    return new DatascienceJobRunNodeGroupDetailsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatascienceJobRunJobConfigurationOverrideDetailsStartupProbeDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#command DatascienceJobRun#command}
  */
  readonly command: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#failure_threshold DatascienceJobRun#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#initial_delay_in_seconds DatascienceJobRun#initial_delay_in_seconds}
  */
  readonly initialDelayInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#job_probe_check_type DatascienceJobRun#job_probe_check_type}
  */
  readonly jobProbeCheckType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#period_in_seconds DatascienceJobRun#period_in_seconds}
  */
  readonly periodInSeconds?: number;
}

export function datascienceJobRunJobConfigurationOverrideDetailsStartupProbeDetailsToTerraform(struct?: DatascienceJobRunJobConfigurationOverrideDetailsStartupProbeDetailsOutputReference | DatascienceJobRunJobConfigurationOverrideDetailsStartupProbeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_in_seconds: cdktf.numberToTerraform(struct!.initialDelayInSeconds),
    job_probe_check_type: cdktf.stringToTerraform(struct!.jobProbeCheckType),
    period_in_seconds: cdktf.numberToTerraform(struct!.periodInSeconds),
  }
}


export function datascienceJobRunJobConfigurationOverrideDetailsStartupProbeDetailsToHclTerraform(struct?: DatascienceJobRunJobConfigurationOverrideDetailsStartupProbeDetailsOutputReference | DatascienceJobRunJobConfigurationOverrideDetailsStartupProbeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_delay_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelayInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    job_probe_check_type: {
      value: cdktf.stringToHclTerraform(struct!.jobProbeCheckType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceJobRunJobConfigurationOverrideDetailsStartupProbeDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceJobRunJobConfigurationOverrideDetailsStartupProbeDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._initialDelayInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelayInSeconds = this._initialDelayInSeconds;
    }
    if (this._jobProbeCheckType !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobProbeCheckType = this._jobProbeCheckType;
    }
    if (this._periodInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodInSeconds = this._periodInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceJobRunJobConfigurationOverrideDetailsStartupProbeDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
      this._failureThreshold = undefined;
      this._initialDelayInSeconds = undefined;
      this._jobProbeCheckType = undefined;
      this._periodInSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
      this._failureThreshold = value.failureThreshold;
      this._initialDelayInSeconds = value.initialDelayInSeconds;
      this._jobProbeCheckType = value.jobProbeCheckType;
      this._periodInSeconds = value.periodInSeconds;
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // failure_threshold - computed: true, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // initial_delay_in_seconds - computed: true, optional: true, required: false
  private _initialDelayInSeconds?: number; 
  public get initialDelayInSeconds() {
    return this.getNumberAttribute('initial_delay_in_seconds');
  }
  public set initialDelayInSeconds(value: number) {
    this._initialDelayInSeconds = value;
  }
  public resetInitialDelayInSeconds() {
    this._initialDelayInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelayInSecondsInput() {
    return this._initialDelayInSeconds;
  }

  // job_probe_check_type - computed: false, optional: false, required: true
  private _jobProbeCheckType?: string; 
  public get jobProbeCheckType() {
    return this.getStringAttribute('job_probe_check_type');
  }
  public set jobProbeCheckType(value: string) {
    this._jobProbeCheckType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobProbeCheckTypeInput() {
    return this._jobProbeCheckType;
  }

  // period_in_seconds - computed: true, optional: true, required: false
  private _periodInSeconds?: number; 
  public get periodInSeconds() {
    return this.getNumberAttribute('period_in_seconds');
  }
  public set periodInSeconds(value: number) {
    this._periodInSeconds = value;
  }
  public resetPeriodInSeconds() {
    this._periodInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInSecondsInput() {
    return this._periodInSeconds;
  }
}
export interface DatascienceJobRunJobConfigurationOverrideDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#command_line_arguments DatascienceJobRun#command_line_arguments}
  */
  readonly commandLineArguments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#environment_variables DatascienceJobRun#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#job_type DatascienceJobRun#job_type}
  */
  readonly jobType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#maximum_runtime_in_minutes DatascienceJobRun#maximum_runtime_in_minutes}
  */
  readonly maximumRuntimeInMinutes?: string;
  /**
  * startup_probe_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#startup_probe_details DatascienceJobRun#startup_probe_details}
  */
  readonly startupProbeDetails?: DatascienceJobRunJobConfigurationOverrideDetailsStartupProbeDetails;
}

export function datascienceJobRunJobConfigurationOverrideDetailsToTerraform(struct?: DatascienceJobRunJobConfigurationOverrideDetailsOutputReference | DatascienceJobRunJobConfigurationOverrideDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command_line_arguments: cdktf.stringToTerraform(struct!.commandLineArguments),
    environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environmentVariables),
    job_type: cdktf.stringToTerraform(struct!.jobType),
    maximum_runtime_in_minutes: cdktf.stringToTerraform(struct!.maximumRuntimeInMinutes),
    startup_probe_details: datascienceJobRunJobConfigurationOverrideDetailsStartupProbeDetailsToTerraform(struct!.startupProbeDetails),
  }
}


export function datascienceJobRunJobConfigurationOverrideDetailsToHclTerraform(struct?: DatascienceJobRunJobConfigurationOverrideDetailsOutputReference | DatascienceJobRunJobConfigurationOverrideDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command_line_arguments: {
      value: cdktf.stringToHclTerraform(struct!.commandLineArguments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_variables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.environmentVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    job_type: {
      value: cdktf.stringToHclTerraform(struct!.jobType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_runtime_in_minutes: {
      value: cdktf.stringToHclTerraform(struct!.maximumRuntimeInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    startup_probe_details: {
      value: datascienceJobRunJobConfigurationOverrideDetailsStartupProbeDetailsToHclTerraform(struct!.startupProbeDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceJobRunJobConfigurationOverrideDetailsStartupProbeDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceJobRunJobConfigurationOverrideDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceJobRunJobConfigurationOverrideDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commandLineArguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.commandLineArguments = this._commandLineArguments;
    }
    if (this._environmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariables = this._environmentVariables;
    }
    if (this._jobType !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobType = this._jobType;
    }
    if (this._maximumRuntimeInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRuntimeInMinutes = this._maximumRuntimeInMinutes;
    }
    if (this._startupProbeDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupProbeDetails = this._startupProbeDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceJobRunJobConfigurationOverrideDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commandLineArguments = undefined;
      this._environmentVariables = undefined;
      this._jobType = undefined;
      this._maximumRuntimeInMinutes = undefined;
      this._startupProbeDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commandLineArguments = value.commandLineArguments;
      this._environmentVariables = value.environmentVariables;
      this._jobType = value.jobType;
      this._maximumRuntimeInMinutes = value.maximumRuntimeInMinutes;
      this._startupProbeDetails.internalValue = value.startupProbeDetails;
    }
  }

  // command_line_arguments - computed: true, optional: true, required: false
  private _commandLineArguments?: string; 
  public get commandLineArguments() {
    return this.getStringAttribute('command_line_arguments');
  }
  public set commandLineArguments(value: string) {
    this._commandLineArguments = value;
  }
  public resetCommandLineArguments() {
    this._commandLineArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandLineArgumentsInput() {
    return this._commandLineArguments;
  }

  // environment_variables - computed: true, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
  }

  // job_type - computed: false, optional: false, required: true
  private _jobType?: string; 
  public get jobType() {
    return this.getStringAttribute('job_type');
  }
  public set jobType(value: string) {
    this._jobType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTypeInput() {
    return this._jobType;
  }

  // maximum_runtime_in_minutes - computed: true, optional: true, required: false
  private _maximumRuntimeInMinutes?: string; 
  public get maximumRuntimeInMinutes() {
    return this.getStringAttribute('maximum_runtime_in_minutes');
  }
  public set maximumRuntimeInMinutes(value: string) {
    this._maximumRuntimeInMinutes = value;
  }
  public resetMaximumRuntimeInMinutes() {
    this._maximumRuntimeInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRuntimeInMinutesInput() {
    return this._maximumRuntimeInMinutes;
  }

  // startup_probe_details - computed: false, optional: true, required: false
  private _startupProbeDetails = new DatascienceJobRunJobConfigurationOverrideDetailsStartupProbeDetailsOutputReference(this, "startup_probe_details");
  public get startupProbeDetails() {
    return this._startupProbeDetails;
  }
  public putStartupProbeDetails(value: DatascienceJobRunJobConfigurationOverrideDetailsStartupProbeDetails) {
    this._startupProbeDetails.internalValue = value;
  }
  public resetStartupProbeDetails() {
    this._startupProbeDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupProbeDetailsInput() {
    return this._startupProbeDetails.internalValue;
  }
}
export interface DatascienceJobRunJobEnvironmentConfigurationOverrideDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#cmd DatascienceJobRun#cmd}
  */
  readonly cmd?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#entrypoint DatascienceJobRun#entrypoint}
  */
  readonly entrypoint?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#image DatascienceJobRun#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#image_digest DatascienceJobRun#image_digest}
  */
  readonly imageDigest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#image_signature_id DatascienceJobRun#image_signature_id}
  */
  readonly imageSignatureId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#job_environment_type DatascienceJobRun#job_environment_type}
  */
  readonly jobEnvironmentType: string;
}

export function datascienceJobRunJobEnvironmentConfigurationOverrideDetailsToTerraform(struct?: DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference | DatascienceJobRunJobEnvironmentConfigurationOverrideDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cmd: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cmd),
    entrypoint: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entrypoint),
    image: cdktf.stringToTerraform(struct!.image),
    image_digest: cdktf.stringToTerraform(struct!.imageDigest),
    image_signature_id: cdktf.stringToTerraform(struct!.imageSignatureId),
    job_environment_type: cdktf.stringToTerraform(struct!.jobEnvironmentType),
  }
}


export function datascienceJobRunJobEnvironmentConfigurationOverrideDetailsToHclTerraform(struct?: DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference | DatascienceJobRunJobEnvironmentConfigurationOverrideDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cmd: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cmd),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    entrypoint: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.entrypoint),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_digest: {
      value: cdktf.stringToHclTerraform(struct!.imageDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_signature_id: {
      value: cdktf.stringToHclTerraform(struct!.imageSignatureId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_environment_type: {
      value: cdktf.stringToHclTerraform(struct!.jobEnvironmentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceJobRunJobEnvironmentConfigurationOverrideDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmd !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmd = this._cmd;
    }
    if (this._entrypoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.entrypoint = this._entrypoint;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imageDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageDigest = this._imageDigest;
    }
    if (this._imageSignatureId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageSignatureId = this._imageSignatureId;
    }
    if (this._jobEnvironmentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobEnvironmentType = this._jobEnvironmentType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceJobRunJobEnvironmentConfigurationOverrideDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cmd = undefined;
      this._entrypoint = undefined;
      this._image = undefined;
      this._imageDigest = undefined;
      this._imageSignatureId = undefined;
      this._jobEnvironmentType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cmd = value.cmd;
      this._entrypoint = value.entrypoint;
      this._image = value.image;
      this._imageDigest = value.imageDigest;
      this._imageSignatureId = value.imageSignatureId;
      this._jobEnvironmentType = value.jobEnvironmentType;
    }
  }

  // cmd - computed: true, optional: true, required: false
  private _cmd?: string[]; 
  public get cmd() {
    return this.getListAttribute('cmd');
  }
  public set cmd(value: string[]) {
    this._cmd = value;
  }
  public resetCmd() {
    this._cmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdInput() {
    return this._cmd;
  }

  // entrypoint - computed: true, optional: true, required: false
  private _entrypoint?: string[]; 
  public get entrypoint() {
    return this.getListAttribute('entrypoint');
  }
  public set entrypoint(value: string[]) {
    this._entrypoint = value;
  }
  public resetEntrypoint() {
    this._entrypoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointInput() {
    return this._entrypoint;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_digest - computed: true, optional: true, required: false
  private _imageDigest?: string; 
  public get imageDigest() {
    return this.getStringAttribute('image_digest');
  }
  public set imageDigest(value: string) {
    this._imageDigest = value;
  }
  public resetImageDigest() {
    this._imageDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageDigestInput() {
    return this._imageDigest;
  }

  // image_signature_id - computed: true, optional: true, required: false
  private _imageSignatureId?: string; 
  public get imageSignatureId() {
    return this.getStringAttribute('image_signature_id');
  }
  public set imageSignatureId(value: string) {
    this._imageSignatureId = value;
  }
  public resetImageSignatureId() {
    this._imageSignatureId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSignatureIdInput() {
    return this._imageSignatureId;
  }

  // job_environment_type - computed: false, optional: false, required: true
  private _jobEnvironmentType?: string; 
  public get jobEnvironmentType() {
    return this.getStringAttribute('job_environment_type');
  }
  public set jobEnvironmentType(value: string) {
    this._jobEnvironmentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobEnvironmentTypeInput() {
    return this._jobEnvironmentType;
  }
}
export interface DatascienceJobRunJobInfrastructureConfigurationOverrideDetailsJobShapeConfigDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#memory_in_gbs DatascienceJobRun#memory_in_gbs}
  */
  readonly memoryInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#ocpus DatascienceJobRun#ocpus}
  */
  readonly ocpus?: number;
}

export function datascienceJobRunJobInfrastructureConfigurationOverrideDetailsJobShapeConfigDetailsToTerraform(struct?: DatascienceJobRunJobInfrastructureConfigurationOverrideDetailsJobShapeConfigDetailsOutputReference | DatascienceJobRunJobInfrastructureConfigurationOverrideDetailsJobShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
  }
}


export function datascienceJobRunJobInfrastructureConfigurationOverrideDetailsJobShapeConfigDetailsToHclTerraform(struct?: DatascienceJobRunJobInfrastructureConfigurationOverrideDetailsJobShapeConfigDetailsOutputReference | DatascienceJobRunJobInfrastructureConfigurationOverrideDetailsJobShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.memoryInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocpus: {
      value: cdktf.numberToHclTerraform(struct!.ocpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceJobRunJobInfrastructureConfigurationOverrideDetailsJobShapeConfigDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceJobRunJobInfrastructureConfigurationOverrideDetailsJobShapeConfigDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memoryInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInGbs = this._memoryInGbs;
    }
    if (this._ocpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpus = this._ocpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceJobRunJobInfrastructureConfigurationOverrideDetailsJobShapeConfigDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memoryInGbs = undefined;
      this._ocpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memoryInGbs = value.memoryInGbs;
      this._ocpus = value.ocpus;
    }
  }

  // memory_in_gbs - computed: true, optional: true, required: false
  private _memoryInGbs?: number; 
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }
  public set memoryInGbs(value: number) {
    this._memoryInGbs = value;
  }
  public resetMemoryInGbs() {
    this._memoryInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbsInput() {
    return this._memoryInGbs;
  }

  // ocpus - computed: true, optional: true, required: false
  private _ocpus?: number; 
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
  public set ocpus(value: number) {
    this._ocpus = value;
  }
  public resetOcpus() {
    this._ocpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpusInput() {
    return this._ocpus;
  }
}
export interface DatascienceJobRunJobInfrastructureConfigurationOverrideDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#block_storage_size_in_gbs DatascienceJobRun#block_storage_size_in_gbs}
  */
  readonly blockStorageSizeInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#job_infrastructure_type DatascienceJobRun#job_infrastructure_type}
  */
  readonly jobInfrastructureType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#shape_name DatascienceJobRun#shape_name}
  */
  readonly shapeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#subnet_id DatascienceJobRun#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * job_shape_config_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#job_shape_config_details DatascienceJobRun#job_shape_config_details}
  */
  readonly jobShapeConfigDetails?: DatascienceJobRunJobInfrastructureConfigurationOverrideDetailsJobShapeConfigDetails;
}

export function datascienceJobRunJobInfrastructureConfigurationOverrideDetailsToTerraform(struct?: DatascienceJobRunJobInfrastructureConfigurationOverrideDetailsOutputReference | DatascienceJobRunJobInfrastructureConfigurationOverrideDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_storage_size_in_gbs: cdktf.numberToTerraform(struct!.blockStorageSizeInGbs),
    job_infrastructure_type: cdktf.stringToTerraform(struct!.jobInfrastructureType),
    shape_name: cdktf.stringToTerraform(struct!.shapeName),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    job_shape_config_details: datascienceJobRunJobInfrastructureConfigurationOverrideDetailsJobShapeConfigDetailsToTerraform(struct!.jobShapeConfigDetails),
  }
}


export function datascienceJobRunJobInfrastructureConfigurationOverrideDetailsToHclTerraform(struct?: DatascienceJobRunJobInfrastructureConfigurationOverrideDetailsOutputReference | DatascienceJobRunJobInfrastructureConfigurationOverrideDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_storage_size_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.blockStorageSizeInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    job_infrastructure_type: {
      value: cdktf.stringToHclTerraform(struct!.jobInfrastructureType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shape_name: {
      value: cdktf.stringToHclTerraform(struct!.shapeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_shape_config_details: {
      value: datascienceJobRunJobInfrastructureConfigurationOverrideDetailsJobShapeConfigDetailsToHclTerraform(struct!.jobShapeConfigDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceJobRunJobInfrastructureConfigurationOverrideDetailsJobShapeConfigDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceJobRunJobInfrastructureConfigurationOverrideDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceJobRunJobInfrastructureConfigurationOverrideDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockStorageSizeInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockStorageSizeInGbs = this._blockStorageSizeInGbs;
    }
    if (this._jobInfrastructureType !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobInfrastructureType = this._jobInfrastructureType;
    }
    if (this._shapeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.shapeName = this._shapeName;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._jobShapeConfigDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobShapeConfigDetails = this._jobShapeConfigDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceJobRunJobInfrastructureConfigurationOverrideDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockStorageSizeInGbs = undefined;
      this._jobInfrastructureType = undefined;
      this._shapeName = undefined;
      this._subnetId = undefined;
      this._jobShapeConfigDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockStorageSizeInGbs = value.blockStorageSizeInGbs;
      this._jobInfrastructureType = value.jobInfrastructureType;
      this._shapeName = value.shapeName;
      this._subnetId = value.subnetId;
      this._jobShapeConfigDetails.internalValue = value.jobShapeConfigDetails;
    }
  }

  // block_storage_size_in_gbs - computed: true, optional: true, required: false
  private _blockStorageSizeInGbs?: number; 
  public get blockStorageSizeInGbs() {
    return this.getNumberAttribute('block_storage_size_in_gbs');
  }
  public set blockStorageSizeInGbs(value: number) {
    this._blockStorageSizeInGbs = value;
  }
  public resetBlockStorageSizeInGbs() {
    this._blockStorageSizeInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockStorageSizeInGbsInput() {
    return this._blockStorageSizeInGbs;
  }

  // job_infrastructure_type - computed: false, optional: false, required: true
  private _jobInfrastructureType?: string; 
  public get jobInfrastructureType() {
    return this.getStringAttribute('job_infrastructure_type');
  }
  public set jobInfrastructureType(value: string) {
    this._jobInfrastructureType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobInfrastructureTypeInput() {
    return this._jobInfrastructureType;
  }

  // shape_name - computed: true, optional: true, required: false
  private _shapeName?: string; 
  public get shapeName() {
    return this.getStringAttribute('shape_name');
  }
  public set shapeName(value: string) {
    this._shapeName = value;
  }
  public resetShapeName() {
    this._shapeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeNameInput() {
    return this._shapeName;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // job_shape_config_details - computed: false, optional: true, required: false
  private _jobShapeConfigDetails = new DatascienceJobRunJobInfrastructureConfigurationOverrideDetailsJobShapeConfigDetailsOutputReference(this, "job_shape_config_details");
  public get jobShapeConfigDetails() {
    return this._jobShapeConfigDetails;
  }
  public putJobShapeConfigDetails(value: DatascienceJobRunJobInfrastructureConfigurationOverrideDetailsJobShapeConfigDetails) {
    this._jobShapeConfigDetails.internalValue = value;
  }
  public resetJobShapeConfigDetails() {
    this._jobShapeConfigDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobShapeConfigDetailsInput() {
    return this._jobShapeConfigDetails.internalValue;
  }
}
export interface DatascienceJobRunJobLogConfigurationOverrideDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#enable_auto_log_creation DatascienceJobRun#enable_auto_log_creation}
  */
  readonly enableAutoLogCreation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#enable_logging DatascienceJobRun#enable_logging}
  */
  readonly enableLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#log_group_id DatascienceJobRun#log_group_id}
  */
  readonly logGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#log_id DatascienceJobRun#log_id}
  */
  readonly logId?: string;
}

export function datascienceJobRunJobLogConfigurationOverrideDetailsToTerraform(struct?: DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference | DatascienceJobRunJobLogConfigurationOverrideDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_auto_log_creation: cdktf.booleanToTerraform(struct!.enableAutoLogCreation),
    enable_logging: cdktf.booleanToTerraform(struct!.enableLogging),
    log_group_id: cdktf.stringToTerraform(struct!.logGroupId),
    log_id: cdktf.stringToTerraform(struct!.logId),
  }
}


export function datascienceJobRunJobLogConfigurationOverrideDetailsToHclTerraform(struct?: DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference | DatascienceJobRunJobLogConfigurationOverrideDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_auto_log_creation: {
      value: cdktf.booleanToHclTerraform(struct!.enableAutoLogCreation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_logging: {
      value: cdktf.booleanToHclTerraform(struct!.enableLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_id: {
      value: cdktf.stringToHclTerraform(struct!.logGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_id: {
      value: cdktf.stringToHclTerraform(struct!.logId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceJobRunJobLogConfigurationOverrideDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAutoLogCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoLogCreation = this._enableAutoLogCreation;
    }
    if (this._enableLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLogging = this._enableLogging;
    }
    if (this._logGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupId = this._logGroupId;
    }
    if (this._logId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logId = this._logId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceJobRunJobLogConfigurationOverrideDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableAutoLogCreation = undefined;
      this._enableLogging = undefined;
      this._logGroupId = undefined;
      this._logId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableAutoLogCreation = value.enableAutoLogCreation;
      this._enableLogging = value.enableLogging;
      this._logGroupId = value.logGroupId;
      this._logId = value.logId;
    }
  }

  // enable_auto_log_creation - computed: true, optional: true, required: false
  private _enableAutoLogCreation?: boolean | cdktf.IResolvable; 
  public get enableAutoLogCreation() {
    return this.getBooleanAttribute('enable_auto_log_creation');
  }
  public set enableAutoLogCreation(value: boolean | cdktf.IResolvable) {
    this._enableAutoLogCreation = value;
  }
  public resetEnableAutoLogCreation() {
    this._enableAutoLogCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoLogCreationInput() {
    return this._enableAutoLogCreation;
  }

  // enable_logging - computed: true, optional: true, required: false
  private _enableLogging?: boolean | cdktf.IResolvable; 
  public get enableLogging() {
    return this.getBooleanAttribute('enable_logging');
  }
  public set enableLogging(value: boolean | cdktf.IResolvable) {
    this._enableLogging = value;
  }
  public resetEnableLogging() {
    this._enableLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLoggingInput() {
    return this._enableLogging;
  }

  // log_group_id - computed: true, optional: true, required: false
  private _logGroupId?: string; 
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }
  public set logGroupId(value: string) {
    this._logGroupId = value;
  }
  public resetLogGroupId() {
    this._logGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdInput() {
    return this._logGroupId;
  }

  // log_id - computed: true, optional: true, required: false
  private _logId?: string; 
  public get logId() {
    return this.getStringAttribute('log_id');
  }
  public set logId(value: string) {
    this._logId = value;
  }
  public resetLogId() {
    this._logId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logIdInput() {
    return this._logId;
  }
}
export interface DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#job_network_type DatascienceJobRun#job_network_type}
  */
  readonly jobNetworkType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#subnet_id DatascienceJobRun#subnet_id}
  */
  readonly subnetId?: string;
}

export function datascienceJobRunJobNodeConfigurationOverrideDetailsJobNetworkConfigurationToTerraform(struct?: DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNetworkConfigurationOutputReference | DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    job_network_type: cdktf.stringToTerraform(struct!.jobNetworkType),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function datascienceJobRunJobNodeConfigurationOverrideDetailsJobNetworkConfigurationToHclTerraform(struct?: DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNetworkConfigurationOutputReference | DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    job_network_type: {
      value: cdktf.stringToHclTerraform(struct!.jobNetworkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNetworkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobNetworkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobNetworkType = this._jobNetworkType;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jobNetworkType = undefined;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jobNetworkType = value.jobNetworkType;
      this._subnetId = value.subnetId;
    }
  }

  // job_network_type - computed: false, optional: false, required: true
  private _jobNetworkType?: string; 
  public get jobNetworkType() {
    return this.getStringAttribute('job_network_type');
  }
  public set jobNetworkType(value: string) {
    this._jobNetworkType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobNetworkTypeInput() {
    return this._jobNetworkType;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}
export interface DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#command DatascienceJobRun#command}
  */
  readonly command: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#failure_threshold DatascienceJobRun#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#initial_delay_in_seconds DatascienceJobRun#initial_delay_in_seconds}
  */
  readonly initialDelayInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#job_probe_check_type DatascienceJobRun#job_probe_check_type}
  */
  readonly jobProbeCheckType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#period_in_seconds DatascienceJobRun#period_in_seconds}
  */
  readonly periodInSeconds?: number;
}

export function datascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetailsToTerraform(struct?: DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetailsOutputReference | DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_in_seconds: cdktf.numberToTerraform(struct!.initialDelayInSeconds),
    job_probe_check_type: cdktf.stringToTerraform(struct!.jobProbeCheckType),
    period_in_seconds: cdktf.numberToTerraform(struct!.periodInSeconds),
  }
}


export function datascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetailsToHclTerraform(struct?: DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetailsOutputReference | DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_delay_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelayInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    job_probe_check_type: {
      value: cdktf.stringToHclTerraform(struct!.jobProbeCheckType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._initialDelayInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelayInSeconds = this._initialDelayInSeconds;
    }
    if (this._jobProbeCheckType !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobProbeCheckType = this._jobProbeCheckType;
    }
    if (this._periodInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodInSeconds = this._periodInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
      this._failureThreshold = undefined;
      this._initialDelayInSeconds = undefined;
      this._jobProbeCheckType = undefined;
      this._periodInSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
      this._failureThreshold = value.failureThreshold;
      this._initialDelayInSeconds = value.initialDelayInSeconds;
      this._jobProbeCheckType = value.jobProbeCheckType;
      this._periodInSeconds = value.periodInSeconds;
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // failure_threshold - computed: true, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // initial_delay_in_seconds - computed: true, optional: true, required: false
  private _initialDelayInSeconds?: number; 
  public get initialDelayInSeconds() {
    return this.getNumberAttribute('initial_delay_in_seconds');
  }
  public set initialDelayInSeconds(value: number) {
    this._initialDelayInSeconds = value;
  }
  public resetInitialDelayInSeconds() {
    this._initialDelayInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelayInSecondsInput() {
    return this._initialDelayInSeconds;
  }

  // job_probe_check_type - computed: false, optional: false, required: true
  private _jobProbeCheckType?: string; 
  public get jobProbeCheckType() {
    return this.getStringAttribute('job_probe_check_type');
  }
  public set jobProbeCheckType(value: string) {
    this._jobProbeCheckType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobProbeCheckTypeInput() {
    return this._jobProbeCheckType;
  }

  // period_in_seconds - computed: true, optional: true, required: false
  private _periodInSeconds?: number; 
  public get periodInSeconds() {
    return this.getNumberAttribute('period_in_seconds');
  }
  public set periodInSeconds(value: number) {
    this._periodInSeconds = value;
  }
  public resetPeriodInSeconds() {
    this._periodInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInSecondsInput() {
    return this._periodInSeconds;
  }
}
export interface DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#command_line_arguments DatascienceJobRun#command_line_arguments}
  */
  readonly commandLineArguments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#environment_variables DatascienceJobRun#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#job_type DatascienceJobRun#job_type}
  */
  readonly jobType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#maximum_runtime_in_minutes DatascienceJobRun#maximum_runtime_in_minutes}
  */
  readonly maximumRuntimeInMinutes?: string;
  /**
  * startup_probe_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#startup_probe_details DatascienceJobRun#startup_probe_details}
  */
  readonly startupProbeDetails?: DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetails;
}

export function datascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsToTerraform(struct?: DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsOutputReference | DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command_line_arguments: cdktf.stringToTerraform(struct!.commandLineArguments),
    environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environmentVariables),
    job_type: cdktf.stringToTerraform(struct!.jobType),
    maximum_runtime_in_minutes: cdktf.stringToTerraform(struct!.maximumRuntimeInMinutes),
    startup_probe_details: datascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetailsToTerraform(struct!.startupProbeDetails),
  }
}


export function datascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsToHclTerraform(struct?: DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsOutputReference | DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command_line_arguments: {
      value: cdktf.stringToHclTerraform(struct!.commandLineArguments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_variables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.environmentVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    job_type: {
      value: cdktf.stringToHclTerraform(struct!.jobType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_runtime_in_minutes: {
      value: cdktf.stringToHclTerraform(struct!.maximumRuntimeInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    startup_probe_details: {
      value: datascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetailsToHclTerraform(struct!.startupProbeDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commandLineArguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.commandLineArguments = this._commandLineArguments;
    }
    if (this._environmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariables = this._environmentVariables;
    }
    if (this._jobType !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobType = this._jobType;
    }
    if (this._maximumRuntimeInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRuntimeInMinutes = this._maximumRuntimeInMinutes;
    }
    if (this._startupProbeDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupProbeDetails = this._startupProbeDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commandLineArguments = undefined;
      this._environmentVariables = undefined;
      this._jobType = undefined;
      this._maximumRuntimeInMinutes = undefined;
      this._startupProbeDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commandLineArguments = value.commandLineArguments;
      this._environmentVariables = value.environmentVariables;
      this._jobType = value.jobType;
      this._maximumRuntimeInMinutes = value.maximumRuntimeInMinutes;
      this._startupProbeDetails.internalValue = value.startupProbeDetails;
    }
  }

  // command_line_arguments - computed: true, optional: true, required: false
  private _commandLineArguments?: string; 
  public get commandLineArguments() {
    return this.getStringAttribute('command_line_arguments');
  }
  public set commandLineArguments(value: string) {
    this._commandLineArguments = value;
  }
  public resetCommandLineArguments() {
    this._commandLineArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandLineArgumentsInput() {
    return this._commandLineArguments;
  }

  // environment_variables - computed: true, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
  }

  // job_type - computed: false, optional: false, required: true
  private _jobType?: string; 
  public get jobType() {
    return this.getStringAttribute('job_type');
  }
  public set jobType(value: string) {
    this._jobType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTypeInput() {
    return this._jobType;
  }

  // maximum_runtime_in_minutes - computed: true, optional: true, required: false
  private _maximumRuntimeInMinutes?: string; 
  public get maximumRuntimeInMinutes() {
    return this.getStringAttribute('maximum_runtime_in_minutes');
  }
  public set maximumRuntimeInMinutes(value: string) {
    this._maximumRuntimeInMinutes = value;
  }
  public resetMaximumRuntimeInMinutes() {
    this._maximumRuntimeInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRuntimeInMinutesInput() {
    return this._maximumRuntimeInMinutes;
  }

  // startup_probe_details - computed: false, optional: true, required: false
  private _startupProbeDetails = new DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetailsOutputReference(this, "startup_probe_details");
  public get startupProbeDetails() {
    return this._startupProbeDetails;
  }
  public putStartupProbeDetails(value: DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetails) {
    this._startupProbeDetails.internalValue = value;
  }
  public resetStartupProbeDetails() {
    this._startupProbeDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupProbeDetailsInput() {
    return this._startupProbeDetails.internalValue;
  }
}
export interface DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#cmd DatascienceJobRun#cmd}
  */
  readonly cmd?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#entrypoint DatascienceJobRun#entrypoint}
  */
  readonly entrypoint?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#image DatascienceJobRun#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#image_digest DatascienceJobRun#image_digest}
  */
  readonly imageDigest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#image_signature_id DatascienceJobRun#image_signature_id}
  */
  readonly imageSignatureId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#job_environment_type DatascienceJobRun#job_environment_type}
  */
  readonly jobEnvironmentType: string;
}

export function datascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetailsToTerraform(struct?: DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetailsOutputReference | DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cmd: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cmd),
    entrypoint: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entrypoint),
    image: cdktf.stringToTerraform(struct!.image),
    image_digest: cdktf.stringToTerraform(struct!.imageDigest),
    image_signature_id: cdktf.stringToTerraform(struct!.imageSignatureId),
    job_environment_type: cdktf.stringToTerraform(struct!.jobEnvironmentType),
  }
}


export function datascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetailsToHclTerraform(struct?: DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetailsOutputReference | DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cmd: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cmd),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    entrypoint: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.entrypoint),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_digest: {
      value: cdktf.stringToHclTerraform(struct!.imageDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_signature_id: {
      value: cdktf.stringToHclTerraform(struct!.imageSignatureId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_environment_type: {
      value: cdktf.stringToHclTerraform(struct!.jobEnvironmentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmd !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmd = this._cmd;
    }
    if (this._entrypoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.entrypoint = this._entrypoint;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imageDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageDigest = this._imageDigest;
    }
    if (this._imageSignatureId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageSignatureId = this._imageSignatureId;
    }
    if (this._jobEnvironmentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobEnvironmentType = this._jobEnvironmentType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cmd = undefined;
      this._entrypoint = undefined;
      this._image = undefined;
      this._imageDigest = undefined;
      this._imageSignatureId = undefined;
      this._jobEnvironmentType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cmd = value.cmd;
      this._entrypoint = value.entrypoint;
      this._image = value.image;
      this._imageDigest = value.imageDigest;
      this._imageSignatureId = value.imageSignatureId;
      this._jobEnvironmentType = value.jobEnvironmentType;
    }
  }

  // cmd - computed: true, optional: true, required: false
  private _cmd?: string[]; 
  public get cmd() {
    return this.getListAttribute('cmd');
  }
  public set cmd(value: string[]) {
    this._cmd = value;
  }
  public resetCmd() {
    this._cmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdInput() {
    return this._cmd;
  }

  // entrypoint - computed: true, optional: true, required: false
  private _entrypoint?: string[]; 
  public get entrypoint() {
    return this.getListAttribute('entrypoint');
  }
  public set entrypoint(value: string[]) {
    this._entrypoint = value;
  }
  public resetEntrypoint() {
    this._entrypoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointInput() {
    return this._entrypoint;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_digest - computed: true, optional: true, required: false
  private _imageDigest?: string; 
  public get imageDigest() {
    return this.getStringAttribute('image_digest');
  }
  public set imageDigest(value: string) {
    this._imageDigest = value;
  }
  public resetImageDigest() {
    this._imageDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageDigestInput() {
    return this._imageDigest;
  }

  // image_signature_id - computed: true, optional: true, required: false
  private _imageSignatureId?: string; 
  public get imageSignatureId() {
    return this.getStringAttribute('image_signature_id');
  }
  public set imageSignatureId(value: string) {
    this._imageSignatureId = value;
  }
  public resetImageSignatureId() {
    this._imageSignatureId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSignatureIdInput() {
    return this._imageSignatureId;
  }

  // job_environment_type - computed: false, optional: false, required: true
  private _jobEnvironmentType?: string; 
  public get jobEnvironmentType() {
    return this.getStringAttribute('job_environment_type');
  }
  public set jobEnvironmentType(value: string) {
    this._jobEnvironmentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobEnvironmentTypeInput() {
    return this._jobEnvironmentType;
  }
}
export interface DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#memory_in_gbs DatascienceJobRun#memory_in_gbs}
  */
  readonly memoryInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#ocpus DatascienceJobRun#ocpus}
  */
  readonly ocpus?: number;
}

export function datascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetailsToTerraform(struct?: DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference | DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
  }
}


export function datascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetailsToHclTerraform(struct?: DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference | DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.memoryInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocpus: {
      value: cdktf.numberToHclTerraform(struct!.ocpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memoryInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInGbs = this._memoryInGbs;
    }
    if (this._ocpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpus = this._ocpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memoryInGbs = undefined;
      this._ocpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memoryInGbs = value.memoryInGbs;
      this._ocpus = value.ocpus;
    }
  }

  // memory_in_gbs - computed: true, optional: true, required: false
  private _memoryInGbs?: number; 
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }
  public set memoryInGbs(value: number) {
    this._memoryInGbs = value;
  }
  public resetMemoryInGbs() {
    this._memoryInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbsInput() {
    return this._memoryInGbs;
  }

  // ocpus - computed: true, optional: true, required: false
  private _ocpus?: number; 
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
  public set ocpus(value: number) {
    this._ocpus = value;
  }
  public resetOcpus() {
    this._ocpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpusInput() {
    return this._ocpus;
  }
}
export interface DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#block_storage_size_in_gbs DatascienceJobRun#block_storage_size_in_gbs}
  */
  readonly blockStorageSizeInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#job_infrastructure_type DatascienceJobRun#job_infrastructure_type}
  */
  readonly jobInfrastructureType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#shape_name DatascienceJobRun#shape_name}
  */
  readonly shapeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#subnet_id DatascienceJobRun#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * job_shape_config_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#job_shape_config_details DatascienceJobRun#job_shape_config_details}
  */
  readonly jobShapeConfigDetails?: DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetails;
}

export function datascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsToTerraform(struct?: DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsOutputReference | DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_storage_size_in_gbs: cdktf.numberToTerraform(struct!.blockStorageSizeInGbs),
    job_infrastructure_type: cdktf.stringToTerraform(struct!.jobInfrastructureType),
    shape_name: cdktf.stringToTerraform(struct!.shapeName),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    job_shape_config_details: datascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetailsToTerraform(struct!.jobShapeConfigDetails),
  }
}


export function datascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsToHclTerraform(struct?: DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsOutputReference | DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_storage_size_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.blockStorageSizeInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    job_infrastructure_type: {
      value: cdktf.stringToHclTerraform(struct!.jobInfrastructureType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shape_name: {
      value: cdktf.stringToHclTerraform(struct!.shapeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_shape_config_details: {
      value: datascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetailsToHclTerraform(struct!.jobShapeConfigDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockStorageSizeInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockStorageSizeInGbs = this._blockStorageSizeInGbs;
    }
    if (this._jobInfrastructureType !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobInfrastructureType = this._jobInfrastructureType;
    }
    if (this._shapeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.shapeName = this._shapeName;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._jobShapeConfigDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobShapeConfigDetails = this._jobShapeConfigDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockStorageSizeInGbs = undefined;
      this._jobInfrastructureType = undefined;
      this._shapeName = undefined;
      this._subnetId = undefined;
      this._jobShapeConfigDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockStorageSizeInGbs = value.blockStorageSizeInGbs;
      this._jobInfrastructureType = value.jobInfrastructureType;
      this._shapeName = value.shapeName;
      this._subnetId = value.subnetId;
      this._jobShapeConfigDetails.internalValue = value.jobShapeConfigDetails;
    }
  }

  // block_storage_size_in_gbs - computed: true, optional: true, required: false
  private _blockStorageSizeInGbs?: number; 
  public get blockStorageSizeInGbs() {
    return this.getNumberAttribute('block_storage_size_in_gbs');
  }
  public set blockStorageSizeInGbs(value: number) {
    this._blockStorageSizeInGbs = value;
  }
  public resetBlockStorageSizeInGbs() {
    this._blockStorageSizeInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockStorageSizeInGbsInput() {
    return this._blockStorageSizeInGbs;
  }

  // job_infrastructure_type - computed: false, optional: false, required: true
  private _jobInfrastructureType?: string; 
  public get jobInfrastructureType() {
    return this.getStringAttribute('job_infrastructure_type');
  }
  public set jobInfrastructureType(value: string) {
    this._jobInfrastructureType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobInfrastructureTypeInput() {
    return this._jobInfrastructureType;
  }

  // shape_name - computed: true, optional: true, required: false
  private _shapeName?: string; 
  public get shapeName() {
    return this.getStringAttribute('shape_name');
  }
  public set shapeName(value: string) {
    this._shapeName = value;
  }
  public resetShapeName() {
    this._shapeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeNameInput() {
    return this._shapeName;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // job_shape_config_details - computed: false, optional: true, required: false
  private _jobShapeConfigDetails = new DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference(this, "job_shape_config_details");
  public get jobShapeConfigDetails() {
    return this._jobShapeConfigDetails;
  }
  public putJobShapeConfigDetails(value: DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetails) {
    this._jobShapeConfigDetails.internalValue = value;
  }
  public resetJobShapeConfigDetails() {
    this._jobShapeConfigDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobShapeConfigDetailsInput() {
    return this._jobShapeConfigDetails.internalValue;
  }
}
export interface DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#minimum_success_replicas DatascienceJobRun#minimum_success_replicas}
  */
  readonly minimumSuccessReplicas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#name DatascienceJobRun#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#replicas DatascienceJobRun#replicas}
  */
  readonly replicas?: number;
  /**
  * job_configuration_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#job_configuration_details DatascienceJobRun#job_configuration_details}
  */
  readonly jobConfigurationDetails?: DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetails;
  /**
  * job_environment_configuration_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#job_environment_configuration_details DatascienceJobRun#job_environment_configuration_details}
  */
  readonly jobEnvironmentConfigurationDetails?: DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetails;
  /**
  * job_infrastructure_configuration_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#job_infrastructure_configuration_details DatascienceJobRun#job_infrastructure_configuration_details}
  */
  readonly jobInfrastructureConfigurationDetails?: DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetails;
}

export function datascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListStructToTerraform(struct?: DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum_success_replicas: cdktf.numberToTerraform(struct!.minimumSuccessReplicas),
    name: cdktf.stringToTerraform(struct!.name),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    job_configuration_details: datascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsToTerraform(struct!.jobConfigurationDetails),
    job_environment_configuration_details: datascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetailsToTerraform(struct!.jobEnvironmentConfigurationDetails),
    job_infrastructure_configuration_details: datascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsToTerraform(struct!.jobInfrastructureConfigurationDetails),
  }
}


export function datascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListStructToHclTerraform(struct?: DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minimum_success_replicas: {
      value: cdktf.numberToHclTerraform(struct!.minimumSuccessReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    job_configuration_details: {
      value: datascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsToHclTerraform(struct!.jobConfigurationDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsList",
    },
    job_environment_configuration_details: {
      value: datascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetailsToHclTerraform(struct!.jobEnvironmentConfigurationDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetailsList",
    },
    job_infrastructure_configuration_details: {
      value: datascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsToHclTerraform(struct!.jobInfrastructureConfigurationDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumSuccessReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumSuccessReplicas = this._minimumSuccessReplicas;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._jobConfigurationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobConfigurationDetails = this._jobConfigurationDetails?.internalValue;
    }
    if (this._jobEnvironmentConfigurationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobEnvironmentConfigurationDetails = this._jobEnvironmentConfigurationDetails?.internalValue;
    }
    if (this._jobInfrastructureConfigurationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobInfrastructureConfigurationDetails = this._jobInfrastructureConfigurationDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumSuccessReplicas = undefined;
      this._name = undefined;
      this._replicas = undefined;
      this._jobConfigurationDetails.internalValue = undefined;
      this._jobEnvironmentConfigurationDetails.internalValue = undefined;
      this._jobInfrastructureConfigurationDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minimumSuccessReplicas = value.minimumSuccessReplicas;
      this._name = value.name;
      this._replicas = value.replicas;
      this._jobConfigurationDetails.internalValue = value.jobConfigurationDetails;
      this._jobEnvironmentConfigurationDetails.internalValue = value.jobEnvironmentConfigurationDetails;
      this._jobInfrastructureConfigurationDetails.internalValue = value.jobInfrastructureConfigurationDetails;
    }
  }

  // minimum_success_replicas - computed: true, optional: true, required: false
  private _minimumSuccessReplicas?: number; 
  public get minimumSuccessReplicas() {
    return this.getNumberAttribute('minimum_success_replicas');
  }
  public set minimumSuccessReplicas(value: number) {
    this._minimumSuccessReplicas = value;
  }
  public resetMinimumSuccessReplicas() {
    this._minimumSuccessReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumSuccessReplicasInput() {
    return this._minimumSuccessReplicas;
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

  // replicas - computed: true, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // job_configuration_details - computed: false, optional: true, required: false
  private _jobConfigurationDetails = new DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsOutputReference(this, "job_configuration_details");
  public get jobConfigurationDetails() {
    return this._jobConfigurationDetails;
  }
  public putJobConfigurationDetails(value: DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetails) {
    this._jobConfigurationDetails.internalValue = value;
  }
  public resetJobConfigurationDetails() {
    this._jobConfigurationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobConfigurationDetailsInput() {
    return this._jobConfigurationDetails.internalValue;
  }

  // job_environment_configuration_details - computed: false, optional: true, required: false
  private _jobEnvironmentConfigurationDetails = new DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetailsOutputReference(this, "job_environment_configuration_details");
  public get jobEnvironmentConfigurationDetails() {
    return this._jobEnvironmentConfigurationDetails;
  }
  public putJobEnvironmentConfigurationDetails(value: DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetails) {
    this._jobEnvironmentConfigurationDetails.internalValue = value;
  }
  public resetJobEnvironmentConfigurationDetails() {
    this._jobEnvironmentConfigurationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobEnvironmentConfigurationDetailsInput() {
    return this._jobEnvironmentConfigurationDetails.internalValue;
  }

  // job_infrastructure_configuration_details - computed: false, optional: true, required: false
  private _jobInfrastructureConfigurationDetails = new DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsOutputReference(this, "job_infrastructure_configuration_details");
  public get jobInfrastructureConfigurationDetails() {
    return this._jobInfrastructureConfigurationDetails;
  }
  public putJobInfrastructureConfigurationDetails(value: DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetails) {
    this._jobInfrastructureConfigurationDetails.internalValue = value;
  }
  public resetJobInfrastructureConfigurationDetails() {
    this._jobInfrastructureConfigurationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobInfrastructureConfigurationDetailsInput() {
    return this._jobInfrastructureConfigurationDetails.internalValue;
  }
}

export class DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListStructList extends cdktf.ComplexList {
  public internalValue? : DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListStruct[] | cdktf.IResolvable

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
  public get(index: number): DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListStructOutputReference {
    return new DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatascienceJobRunJobNodeConfigurationOverrideDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#job_node_type DatascienceJobRun#job_node_type}
  */
  readonly jobNodeType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#maximum_runtime_in_minutes DatascienceJobRun#maximum_runtime_in_minutes}
  */
  readonly maximumRuntimeInMinutes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#startup_order DatascienceJobRun#startup_order}
  */
  readonly startupOrder?: string;
  /**
  * job_network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#job_network_configuration DatascienceJobRun#job_network_configuration}
  */
  readonly jobNetworkConfiguration?: DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNetworkConfiguration;
  /**
  * job_node_group_configuration_details_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#job_node_group_configuration_details_list DatascienceJobRun#job_node_group_configuration_details_list}
  */
  readonly jobNodeGroupConfigurationDetailsList?: DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListStruct[] | cdktf.IResolvable;
}

export function datascienceJobRunJobNodeConfigurationOverrideDetailsToTerraform(struct?: DatascienceJobRunJobNodeConfigurationOverrideDetailsOutputReference | DatascienceJobRunJobNodeConfigurationOverrideDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    job_node_type: cdktf.stringToTerraform(struct!.jobNodeType),
    maximum_runtime_in_minutes: cdktf.stringToTerraform(struct!.maximumRuntimeInMinutes),
    startup_order: cdktf.stringToTerraform(struct!.startupOrder),
    job_network_configuration: datascienceJobRunJobNodeConfigurationOverrideDetailsJobNetworkConfigurationToTerraform(struct!.jobNetworkConfiguration),
    job_node_group_configuration_details_list: cdktf.listMapper(datascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListStructToTerraform, true)(struct!.jobNodeGroupConfigurationDetailsList),
  }
}


export function datascienceJobRunJobNodeConfigurationOverrideDetailsToHclTerraform(struct?: DatascienceJobRunJobNodeConfigurationOverrideDetailsOutputReference | DatascienceJobRunJobNodeConfigurationOverrideDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    job_node_type: {
      value: cdktf.stringToHclTerraform(struct!.jobNodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_runtime_in_minutes: {
      value: cdktf.stringToHclTerraform(struct!.maximumRuntimeInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    startup_order: {
      value: cdktf.stringToHclTerraform(struct!.startupOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_network_configuration: {
      value: datascienceJobRunJobNodeConfigurationOverrideDetailsJobNetworkConfigurationToHclTerraform(struct!.jobNetworkConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNetworkConfigurationList",
    },
    job_node_group_configuration_details_list: {
      value: cdktf.listMapperHcl(datascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListStructToHclTerraform, true)(struct!.jobNodeGroupConfigurationDetailsList),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceJobRunJobNodeConfigurationOverrideDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceJobRunJobNodeConfigurationOverrideDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobNodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobNodeType = this._jobNodeType;
    }
    if (this._maximumRuntimeInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRuntimeInMinutes = this._maximumRuntimeInMinutes;
    }
    if (this._startupOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupOrder = this._startupOrder;
    }
    if (this._jobNetworkConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobNetworkConfiguration = this._jobNetworkConfiguration?.internalValue;
    }
    if (this._jobNodeGroupConfigurationDetailsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobNodeGroupConfigurationDetailsList = this._jobNodeGroupConfigurationDetailsList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceJobRunJobNodeConfigurationOverrideDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jobNodeType = undefined;
      this._maximumRuntimeInMinutes = undefined;
      this._startupOrder = undefined;
      this._jobNetworkConfiguration.internalValue = undefined;
      this._jobNodeGroupConfigurationDetailsList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jobNodeType = value.jobNodeType;
      this._maximumRuntimeInMinutes = value.maximumRuntimeInMinutes;
      this._startupOrder = value.startupOrder;
      this._jobNetworkConfiguration.internalValue = value.jobNetworkConfiguration;
      this._jobNodeGroupConfigurationDetailsList.internalValue = value.jobNodeGroupConfigurationDetailsList;
    }
  }

  // job_node_type - computed: false, optional: false, required: true
  private _jobNodeType?: string; 
  public get jobNodeType() {
    return this.getStringAttribute('job_node_type');
  }
  public set jobNodeType(value: string) {
    this._jobNodeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobNodeTypeInput() {
    return this._jobNodeType;
  }

  // maximum_runtime_in_minutes - computed: true, optional: true, required: false
  private _maximumRuntimeInMinutes?: string; 
  public get maximumRuntimeInMinutes() {
    return this.getStringAttribute('maximum_runtime_in_minutes');
  }
  public set maximumRuntimeInMinutes(value: string) {
    this._maximumRuntimeInMinutes = value;
  }
  public resetMaximumRuntimeInMinutes() {
    this._maximumRuntimeInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRuntimeInMinutesInput() {
    return this._maximumRuntimeInMinutes;
  }

  // startup_order - computed: true, optional: true, required: false
  private _startupOrder?: string; 
  public get startupOrder() {
    return this.getStringAttribute('startup_order');
  }
  public set startupOrder(value: string) {
    this._startupOrder = value;
  }
  public resetStartupOrder() {
    this._startupOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupOrderInput() {
    return this._startupOrder;
  }

  // job_network_configuration - computed: false, optional: true, required: false
  private _jobNetworkConfiguration = new DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNetworkConfigurationOutputReference(this, "job_network_configuration");
  public get jobNetworkConfiguration() {
    return this._jobNetworkConfiguration;
  }
  public putJobNetworkConfiguration(value: DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNetworkConfiguration) {
    this._jobNetworkConfiguration.internalValue = value;
  }
  public resetJobNetworkConfiguration() {
    this._jobNetworkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobNetworkConfigurationInput() {
    return this._jobNetworkConfiguration.internalValue;
  }

  // job_node_group_configuration_details_list - computed: false, optional: true, required: false
  private _jobNodeGroupConfigurationDetailsList = new DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListStructList(this, "job_node_group_configuration_details_list", false);
  public get jobNodeGroupConfigurationDetailsList() {
    return this._jobNodeGroupConfigurationDetailsList;
  }
  public putJobNodeGroupConfigurationDetailsList(value: DatascienceJobRunJobNodeConfigurationOverrideDetailsJobNodeGroupConfigurationDetailsListStruct[] | cdktf.IResolvable) {
    this._jobNodeGroupConfigurationDetailsList.internalValue = value;
  }
  public resetJobNodeGroupConfigurationDetailsList() {
    this._jobNodeGroupConfigurationDetailsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobNodeGroupConfigurationDetailsListInput() {
    return this._jobNodeGroupConfigurationDetailsList.internalValue;
  }
}
export interface DatascienceJobRunTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#create DatascienceJobRun#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#delete DatascienceJobRun#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#update DatascienceJobRun#update}
  */
  readonly update?: string;
}

export function datascienceJobRunTimeoutsToTerraform(struct?: DatascienceJobRunTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function datascienceJobRunTimeoutsToHclTerraform(struct?: DatascienceJobRunTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceJobRunTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatascienceJobRunTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceJobRunTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run oci_datascience_job_run}
*/
export class DatascienceJobRun extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_datascience_job_run";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatascienceJobRun resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatascienceJobRun to import
  * @param importFromId The id of the existing DatascienceJobRun that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatascienceJobRun to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_datascience_job_run", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/datascience_job_run oci_datascience_job_run} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatascienceJobRunConfig
  */
  public constructor(scope: Construct, id: string, config: DatascienceJobRunConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datascience_job_run',
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
    this._asynchronous = config.asynchronous;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._jobId = config.jobId;
    this._opcParentRptUrl = config.opcParentRptUrl;
    this._projectId = config.projectId;
    this._jobConfigurationOverrideDetails.internalValue = config.jobConfigurationOverrideDetails;
    this._jobEnvironmentConfigurationOverrideDetails.internalValue = config.jobEnvironmentConfigurationOverrideDetails;
    this._jobInfrastructureConfigurationOverrideDetails.internalValue = config.jobInfrastructureConfigurationOverrideDetails;
    this._jobLogConfigurationOverrideDetails.internalValue = config.jobLogConfigurationOverrideDetails;
    this._jobNodeConfigurationOverrideDetails.internalValue = config.jobNodeConfigurationOverrideDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asynchronous - computed: false, optional: true, required: false
  private _asynchronous?: boolean | cdktf.IResolvable; 
  public get asynchronous() {
    return this.getBooleanAttribute('asynchronous');
  }
  public set asynchronous(value: boolean | cdktf.IResolvable) {
    this._asynchronous = value;
  }
  public resetAsynchronous() {
    this._asynchronous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asynchronousInput() {
    return this._asynchronous;
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

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: true, required: false
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

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // job_id - computed: false, optional: false, required: true
  private _jobId?: string; 
  public get jobId() {
    return this.getStringAttribute('job_id');
  }
  public set jobId(value: string) {
    this._jobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
  }

  // job_infrastructure_configuration_details - computed: true, optional: false, required: false
  private _jobInfrastructureConfigurationDetails = new DatascienceJobRunJobInfrastructureConfigurationDetailsList(this, "job_infrastructure_configuration_details", false);
  public get jobInfrastructureConfigurationDetails() {
    return this._jobInfrastructureConfigurationDetails;
  }

  // job_storage_mount_configuration_details_list - computed: true, optional: false, required: false
  private _jobStorageMountConfigurationDetailsList = new DatascienceJobRunJobStorageMountConfigurationDetailsListStructList(this, "job_storage_mount_configuration_details_list", false);
  public get jobStorageMountConfigurationDetailsList() {
    return this._jobStorageMountConfigurationDetailsList;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // log_details - computed: true, optional: false, required: false
  private _logDetails = new DatascienceJobRunLogDetailsList(this, "log_details", false);
  public get logDetails() {
    return this._logDetails;
  }

  // node_group_details_list - computed: true, optional: false, required: false
  private _nodeGroupDetailsList = new DatascienceJobRunNodeGroupDetailsListStructList(this, "node_group_details_list", false);
  public get nodeGroupDetailsList() {
    return this._nodeGroupDetailsList;
  }

  // opc_parent_rpt_url - computed: false, optional: true, required: false
  private _opcParentRptUrl?: string; 
  public get opcParentRptUrl() {
    return this.getStringAttribute('opc_parent_rpt_url');
  }
  public set opcParentRptUrl(value: string) {
    this._opcParentRptUrl = value;
  }
  public resetOpcParentRptUrl() {
    this._opcParentRptUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opcParentRptUrlInput() {
    return this._opcParentRptUrl;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_accepted - computed: true, optional: false, required: false
  public get timeAccepted() {
    return this.getStringAttribute('time_accepted');
  }

  // time_finished - computed: true, optional: false, required: false
  public get timeFinished() {
    return this.getStringAttribute('time_finished');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // job_configuration_override_details - computed: false, optional: true, required: false
  private _jobConfigurationOverrideDetails = new DatascienceJobRunJobConfigurationOverrideDetailsOutputReference(this, "job_configuration_override_details");
  public get jobConfigurationOverrideDetails() {
    return this._jobConfigurationOverrideDetails;
  }
  public putJobConfigurationOverrideDetails(value: DatascienceJobRunJobConfigurationOverrideDetails) {
    this._jobConfigurationOverrideDetails.internalValue = value;
  }
  public resetJobConfigurationOverrideDetails() {
    this._jobConfigurationOverrideDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobConfigurationOverrideDetailsInput() {
    return this._jobConfigurationOverrideDetails.internalValue;
  }

  // job_environment_configuration_override_details - computed: false, optional: true, required: false
  private _jobEnvironmentConfigurationOverrideDetails = new DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference(this, "job_environment_configuration_override_details");
  public get jobEnvironmentConfigurationOverrideDetails() {
    return this._jobEnvironmentConfigurationOverrideDetails;
  }
  public putJobEnvironmentConfigurationOverrideDetails(value: DatascienceJobRunJobEnvironmentConfigurationOverrideDetails) {
    this._jobEnvironmentConfigurationOverrideDetails.internalValue = value;
  }
  public resetJobEnvironmentConfigurationOverrideDetails() {
    this._jobEnvironmentConfigurationOverrideDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobEnvironmentConfigurationOverrideDetailsInput() {
    return this._jobEnvironmentConfigurationOverrideDetails.internalValue;
  }

  // job_infrastructure_configuration_override_details - computed: false, optional: true, required: false
  private _jobInfrastructureConfigurationOverrideDetails = new DatascienceJobRunJobInfrastructureConfigurationOverrideDetailsOutputReference(this, "job_infrastructure_configuration_override_details");
  public get jobInfrastructureConfigurationOverrideDetails() {
    return this._jobInfrastructureConfigurationOverrideDetails;
  }
  public putJobInfrastructureConfigurationOverrideDetails(value: DatascienceJobRunJobInfrastructureConfigurationOverrideDetails) {
    this._jobInfrastructureConfigurationOverrideDetails.internalValue = value;
  }
  public resetJobInfrastructureConfigurationOverrideDetails() {
    this._jobInfrastructureConfigurationOverrideDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobInfrastructureConfigurationOverrideDetailsInput() {
    return this._jobInfrastructureConfigurationOverrideDetails.internalValue;
  }

  // job_log_configuration_override_details - computed: false, optional: true, required: false
  private _jobLogConfigurationOverrideDetails = new DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference(this, "job_log_configuration_override_details");
  public get jobLogConfigurationOverrideDetails() {
    return this._jobLogConfigurationOverrideDetails;
  }
  public putJobLogConfigurationOverrideDetails(value: DatascienceJobRunJobLogConfigurationOverrideDetails) {
    this._jobLogConfigurationOverrideDetails.internalValue = value;
  }
  public resetJobLogConfigurationOverrideDetails() {
    this._jobLogConfigurationOverrideDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobLogConfigurationOverrideDetailsInput() {
    return this._jobLogConfigurationOverrideDetails.internalValue;
  }

  // job_node_configuration_override_details - computed: false, optional: true, required: false
  private _jobNodeConfigurationOverrideDetails = new DatascienceJobRunJobNodeConfigurationOverrideDetailsOutputReference(this, "job_node_configuration_override_details");
  public get jobNodeConfigurationOverrideDetails() {
    return this._jobNodeConfigurationOverrideDetails;
  }
  public putJobNodeConfigurationOverrideDetails(value: DatascienceJobRunJobNodeConfigurationOverrideDetails) {
    this._jobNodeConfigurationOverrideDetails.internalValue = value;
  }
  public resetJobNodeConfigurationOverrideDetails() {
    this._jobNodeConfigurationOverrideDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobNodeConfigurationOverrideDetailsInput() {
    return this._jobNodeConfigurationOverrideDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatascienceJobRunTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatascienceJobRunTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asynchronous: cdktf.booleanToTerraform(this._asynchronous),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      job_id: cdktf.stringToTerraform(this._jobId),
      opc_parent_rpt_url: cdktf.stringToTerraform(this._opcParentRptUrl),
      project_id: cdktf.stringToTerraform(this._projectId),
      job_configuration_override_details: datascienceJobRunJobConfigurationOverrideDetailsToTerraform(this._jobConfigurationOverrideDetails.internalValue),
      job_environment_configuration_override_details: datascienceJobRunJobEnvironmentConfigurationOverrideDetailsToTerraform(this._jobEnvironmentConfigurationOverrideDetails.internalValue),
      job_infrastructure_configuration_override_details: datascienceJobRunJobInfrastructureConfigurationOverrideDetailsToTerraform(this._jobInfrastructureConfigurationOverrideDetails.internalValue),
      job_log_configuration_override_details: datascienceJobRunJobLogConfigurationOverrideDetailsToTerraform(this._jobLogConfigurationOverrideDetails.internalValue),
      job_node_configuration_override_details: datascienceJobRunJobNodeConfigurationOverrideDetailsToTerraform(this._jobNodeConfigurationOverrideDetails.internalValue),
      timeouts: datascienceJobRunTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asynchronous: {
        value: cdktf.booleanToHclTerraform(this._asynchronous),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_id: {
        value: cdktf.stringToHclTerraform(this._jobId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opc_parent_rpt_url: {
        value: cdktf.stringToHclTerraform(this._opcParentRptUrl),
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
      job_configuration_override_details: {
        value: datascienceJobRunJobConfigurationOverrideDetailsToHclTerraform(this._jobConfigurationOverrideDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatascienceJobRunJobConfigurationOverrideDetailsList",
      },
      job_environment_configuration_override_details: {
        value: datascienceJobRunJobEnvironmentConfigurationOverrideDetailsToHclTerraform(this._jobEnvironmentConfigurationOverrideDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsList",
      },
      job_infrastructure_configuration_override_details: {
        value: datascienceJobRunJobInfrastructureConfigurationOverrideDetailsToHclTerraform(this._jobInfrastructureConfigurationOverrideDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatascienceJobRunJobInfrastructureConfigurationOverrideDetailsList",
      },
      job_log_configuration_override_details: {
        value: datascienceJobRunJobLogConfigurationOverrideDetailsToHclTerraform(this._jobLogConfigurationOverrideDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatascienceJobRunJobLogConfigurationOverrideDetailsList",
      },
      job_node_configuration_override_details: {
        value: datascienceJobRunJobNodeConfigurationOverrideDetailsToHclTerraform(this._jobNodeConfigurationOverrideDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatascienceJobRunJobNodeConfigurationOverrideDetailsList",
      },
      timeouts: {
        value: datascienceJobRunTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatascienceJobRunTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
