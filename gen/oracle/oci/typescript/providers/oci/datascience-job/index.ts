// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatascienceJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#artifact_content_disposition DatascienceJob#artifact_content_disposition}
  */
  readonly artifactContentDisposition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#artifact_content_length DatascienceJob#artifact_content_length}
  */
  readonly artifactContentLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#compartment_id DatascienceJob#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#defined_tags DatascienceJob#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#delete_related_job_runs DatascienceJob#delete_related_job_runs}
  */
  readonly deleteRelatedJobRuns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#description DatascienceJob#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#display_name DatascienceJob#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#freeform_tags DatascienceJob#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#id DatascienceJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#job_artifact DatascienceJob#job_artifact}
  */
  readonly jobArtifact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#project_id DatascienceJob#project_id}
  */
  readonly projectId: string;
  /**
  * job_configuration_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#job_configuration_details DatascienceJob#job_configuration_details}
  */
  readonly jobConfigurationDetails?: DatascienceJobJobConfigurationDetails;
  /**
  * job_environment_configuration_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#job_environment_configuration_details DatascienceJob#job_environment_configuration_details}
  */
  readonly jobEnvironmentConfigurationDetails?: DatascienceJobJobEnvironmentConfigurationDetails;
  /**
  * job_infrastructure_configuration_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#job_infrastructure_configuration_details DatascienceJob#job_infrastructure_configuration_details}
  */
  readonly jobInfrastructureConfigurationDetails?: DatascienceJobJobInfrastructureConfigurationDetails;
  /**
  * job_log_configuration_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#job_log_configuration_details DatascienceJob#job_log_configuration_details}
  */
  readonly jobLogConfigurationDetails?: DatascienceJobJobLogConfigurationDetails;
  /**
  * job_node_configuration_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#job_node_configuration_details DatascienceJob#job_node_configuration_details}
  */
  readonly jobNodeConfigurationDetails?: DatascienceJobJobNodeConfigurationDetails;
  /**
  * job_storage_mount_configuration_details_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#job_storage_mount_configuration_details_list DatascienceJob#job_storage_mount_configuration_details_list}
  */
  readonly jobStorageMountConfigurationDetailsList?: DatascienceJobJobStorageMountConfigurationDetailsListStruct[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#timeouts DatascienceJob#timeouts}
  */
  readonly timeouts?: DatascienceJobTimeouts;
}
export interface DatascienceJobJobConfigurationDetailsStartupProbeDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#command DatascienceJob#command}
  */
  readonly command: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#failure_threshold DatascienceJob#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#initial_delay_in_seconds DatascienceJob#initial_delay_in_seconds}
  */
  readonly initialDelayInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#job_probe_check_type DatascienceJob#job_probe_check_type}
  */
  readonly jobProbeCheckType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#period_in_seconds DatascienceJob#period_in_seconds}
  */
  readonly periodInSeconds?: number;
}

export function datascienceJobJobConfigurationDetailsStartupProbeDetailsToTerraform(struct?: DatascienceJobJobConfigurationDetailsStartupProbeDetailsOutputReference | DatascienceJobJobConfigurationDetailsStartupProbeDetails): any {
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


export function datascienceJobJobConfigurationDetailsStartupProbeDetailsToHclTerraform(struct?: DatascienceJobJobConfigurationDetailsStartupProbeDetailsOutputReference | DatascienceJobJobConfigurationDetailsStartupProbeDetails): any {
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

export class DatascienceJobJobConfigurationDetailsStartupProbeDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceJobJobConfigurationDetailsStartupProbeDetails | undefined {
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

  public set internalValue(value: DatascienceJobJobConfigurationDetailsStartupProbeDetails | undefined) {
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

  // failure_threshold - computed: false, optional: true, required: false
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

  // initial_delay_in_seconds - computed: false, optional: true, required: false
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

  // period_in_seconds - computed: false, optional: true, required: false
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
export interface DatascienceJobJobConfigurationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#command_line_arguments DatascienceJob#command_line_arguments}
  */
  readonly commandLineArguments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#environment_variables DatascienceJob#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#job_type DatascienceJob#job_type}
  */
  readonly jobType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#maximum_runtime_in_minutes DatascienceJob#maximum_runtime_in_minutes}
  */
  readonly maximumRuntimeInMinutes?: string;
  /**
  * startup_probe_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#startup_probe_details DatascienceJob#startup_probe_details}
  */
  readonly startupProbeDetails?: DatascienceJobJobConfigurationDetailsStartupProbeDetails;
}

export function datascienceJobJobConfigurationDetailsToTerraform(struct?: DatascienceJobJobConfigurationDetailsOutputReference | DatascienceJobJobConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command_line_arguments: cdktf.stringToTerraform(struct!.commandLineArguments),
    environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environmentVariables),
    job_type: cdktf.stringToTerraform(struct!.jobType),
    maximum_runtime_in_minutes: cdktf.stringToTerraform(struct!.maximumRuntimeInMinutes),
    startup_probe_details: datascienceJobJobConfigurationDetailsStartupProbeDetailsToTerraform(struct!.startupProbeDetails),
  }
}


export function datascienceJobJobConfigurationDetailsToHclTerraform(struct?: DatascienceJobJobConfigurationDetailsOutputReference | DatascienceJobJobConfigurationDetails): any {
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
      value: datascienceJobJobConfigurationDetailsStartupProbeDetailsToHclTerraform(struct!.startupProbeDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceJobJobConfigurationDetailsStartupProbeDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceJobJobConfigurationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceJobJobConfigurationDetails | undefined {
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

  public set internalValue(value: DatascienceJobJobConfigurationDetails | undefined) {
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
  private _startupProbeDetails = new DatascienceJobJobConfigurationDetailsStartupProbeDetailsOutputReference(this, "startup_probe_details");
  public get startupProbeDetails() {
    return this._startupProbeDetails;
  }
  public putStartupProbeDetails(value: DatascienceJobJobConfigurationDetailsStartupProbeDetails) {
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
export interface DatascienceJobJobEnvironmentConfigurationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#cmd DatascienceJob#cmd}
  */
  readonly cmd?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#entrypoint DatascienceJob#entrypoint}
  */
  readonly entrypoint?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#image DatascienceJob#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#image_digest DatascienceJob#image_digest}
  */
  readonly imageDigest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#image_signature_id DatascienceJob#image_signature_id}
  */
  readonly imageSignatureId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#job_environment_type DatascienceJob#job_environment_type}
  */
  readonly jobEnvironmentType: string;
}

export function datascienceJobJobEnvironmentConfigurationDetailsToTerraform(struct?: DatascienceJobJobEnvironmentConfigurationDetailsOutputReference | DatascienceJobJobEnvironmentConfigurationDetails): any {
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


export function datascienceJobJobEnvironmentConfigurationDetailsToHclTerraform(struct?: DatascienceJobJobEnvironmentConfigurationDetailsOutputReference | DatascienceJobJobEnvironmentConfigurationDetails): any {
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

export class DatascienceJobJobEnvironmentConfigurationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceJobJobEnvironmentConfigurationDetails | undefined {
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

  public set internalValue(value: DatascienceJobJobEnvironmentConfigurationDetails | undefined) {
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

  // cmd - computed: false, optional: true, required: false
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

  // entrypoint - computed: false, optional: true, required: false
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

  // image_digest - computed: false, optional: true, required: false
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

  // image_signature_id - computed: false, optional: true, required: false
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
export interface DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#cpu_baseline DatascienceJob#cpu_baseline}
  */
  readonly cpuBaseline?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#memory_in_gbs DatascienceJob#memory_in_gbs}
  */
  readonly memoryInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#ocpus DatascienceJob#ocpus}
  */
  readonly ocpus?: number;
}

export function datascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsToTerraform(struct?: DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference | DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_baseline: cdktf.stringToTerraform(struct!.cpuBaseline),
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
  }
}


export function datascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsToHclTerraform(struct?: DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference | DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_baseline: {
      value: cdktf.stringToHclTerraform(struct!.cpuBaseline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuBaseline !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuBaseline = this._cpuBaseline;
    }
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

  public set internalValue(value: DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuBaseline = undefined;
      this._memoryInGbs = undefined;
      this._ocpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuBaseline = value.cpuBaseline;
      this._memoryInGbs = value.memoryInGbs;
      this._ocpus = value.ocpus;
    }
  }

  // cpu_baseline - computed: true, optional: true, required: false
  private _cpuBaseline?: string; 
  public get cpuBaseline() {
    return this.getStringAttribute('cpu_baseline');
  }
  public set cpuBaseline(value: string) {
    this._cpuBaseline = value;
  }
  public resetCpuBaseline() {
    this._cpuBaseline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuBaselineInput() {
    return this._cpuBaseline;
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
export interface DatascienceJobJobInfrastructureConfigurationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#block_storage_size_in_gbs DatascienceJob#block_storage_size_in_gbs}
  */
  readonly blockStorageSizeInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#job_infrastructure_type DatascienceJob#job_infrastructure_type}
  */
  readonly jobInfrastructureType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#shape_name DatascienceJob#shape_name}
  */
  readonly shapeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#subnet_id DatascienceJob#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * job_shape_config_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#job_shape_config_details DatascienceJob#job_shape_config_details}
  */
  readonly jobShapeConfigDetails?: DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails;
}

export function datascienceJobJobInfrastructureConfigurationDetailsToTerraform(struct?: DatascienceJobJobInfrastructureConfigurationDetailsOutputReference | DatascienceJobJobInfrastructureConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_storage_size_in_gbs: cdktf.numberToTerraform(struct!.blockStorageSizeInGbs),
    job_infrastructure_type: cdktf.stringToTerraform(struct!.jobInfrastructureType),
    shape_name: cdktf.stringToTerraform(struct!.shapeName),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    job_shape_config_details: datascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsToTerraform(struct!.jobShapeConfigDetails),
  }
}


export function datascienceJobJobInfrastructureConfigurationDetailsToHclTerraform(struct?: DatascienceJobJobInfrastructureConfigurationDetailsOutputReference | DatascienceJobJobInfrastructureConfigurationDetails): any {
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
      value: datascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsToHclTerraform(struct!.jobShapeConfigDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceJobJobInfrastructureConfigurationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceJobJobInfrastructureConfigurationDetails | undefined {
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

  public set internalValue(value: DatascienceJobJobInfrastructureConfigurationDetails | undefined) {
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
  private _jobShapeConfigDetails = new DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference(this, "job_shape_config_details");
  public get jobShapeConfigDetails() {
    return this._jobShapeConfigDetails;
  }
  public putJobShapeConfigDetails(value: DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails) {
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
export interface DatascienceJobJobLogConfigurationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#enable_auto_log_creation DatascienceJob#enable_auto_log_creation}
  */
  readonly enableAutoLogCreation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#enable_logging DatascienceJob#enable_logging}
  */
  readonly enableLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#log_group_id DatascienceJob#log_group_id}
  */
  readonly logGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#log_id DatascienceJob#log_id}
  */
  readonly logId?: string;
}

export function datascienceJobJobLogConfigurationDetailsToTerraform(struct?: DatascienceJobJobLogConfigurationDetailsOutputReference | DatascienceJobJobLogConfigurationDetails): any {
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


export function datascienceJobJobLogConfigurationDetailsToHclTerraform(struct?: DatascienceJobJobLogConfigurationDetailsOutputReference | DatascienceJobJobLogConfigurationDetails): any {
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

export class DatascienceJobJobLogConfigurationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceJobJobLogConfigurationDetails | undefined {
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

  public set internalValue(value: DatascienceJobJobLogConfigurationDetails | undefined) {
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
export interface DatascienceJobJobNodeConfigurationDetailsJobNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#job_network_type DatascienceJob#job_network_type}
  */
  readonly jobNetworkType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#subnet_id DatascienceJob#subnet_id}
  */
  readonly subnetId?: string;
}

export function datascienceJobJobNodeConfigurationDetailsJobNetworkConfigurationToTerraform(struct?: DatascienceJobJobNodeConfigurationDetailsJobNetworkConfigurationOutputReference | DatascienceJobJobNodeConfigurationDetailsJobNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    job_network_type: cdktf.stringToTerraform(struct!.jobNetworkType),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function datascienceJobJobNodeConfigurationDetailsJobNetworkConfigurationToHclTerraform(struct?: DatascienceJobJobNodeConfigurationDetailsJobNetworkConfigurationOutputReference | DatascienceJobJobNodeConfigurationDetailsJobNetworkConfiguration): any {
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

export class DatascienceJobJobNodeConfigurationDetailsJobNetworkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceJobJobNodeConfigurationDetailsJobNetworkConfiguration | undefined {
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

  public set internalValue(value: DatascienceJobJobNodeConfigurationDetailsJobNetworkConfiguration | undefined) {
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
export interface DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#command DatascienceJob#command}
  */
  readonly command: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#failure_threshold DatascienceJob#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#initial_delay_in_seconds DatascienceJob#initial_delay_in_seconds}
  */
  readonly initialDelayInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#job_probe_check_type DatascienceJob#job_probe_check_type}
  */
  readonly jobProbeCheckType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#period_in_seconds DatascienceJob#period_in_seconds}
  */
  readonly periodInSeconds?: number;
}

export function datascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetailsToTerraform(struct?: DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetailsOutputReference | DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetails): any {
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


export function datascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetailsToHclTerraform(struct?: DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetailsOutputReference | DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetails): any {
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

export class DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetails | undefined {
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

  public set internalValue(value: DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetails | undefined) {
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
export interface DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#command_line_arguments DatascienceJob#command_line_arguments}
  */
  readonly commandLineArguments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#environment_variables DatascienceJob#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#job_type DatascienceJob#job_type}
  */
  readonly jobType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#maximum_runtime_in_minutes DatascienceJob#maximum_runtime_in_minutes}
  */
  readonly maximumRuntimeInMinutes?: string;
  /**
  * startup_probe_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#startup_probe_details DatascienceJob#startup_probe_details}
  */
  readonly startupProbeDetails?: DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetails;
}

export function datascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsToTerraform(struct?: DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsOutputReference | DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command_line_arguments: cdktf.stringToTerraform(struct!.commandLineArguments),
    environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environmentVariables),
    job_type: cdktf.stringToTerraform(struct!.jobType),
    maximum_runtime_in_minutes: cdktf.stringToTerraform(struct!.maximumRuntimeInMinutes),
    startup_probe_details: datascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetailsToTerraform(struct!.startupProbeDetails),
  }
}


export function datascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsToHclTerraform(struct?: DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsOutputReference | DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetails): any {
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
      value: datascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetailsToHclTerraform(struct!.startupProbeDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetails | undefined {
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

  public set internalValue(value: DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetails | undefined) {
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
  private _startupProbeDetails = new DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetailsOutputReference(this, "startup_probe_details");
  public get startupProbeDetails() {
    return this._startupProbeDetails;
  }
  public putStartupProbeDetails(value: DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsStartupProbeDetails) {
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
export interface DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#cmd DatascienceJob#cmd}
  */
  readonly cmd?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#entrypoint DatascienceJob#entrypoint}
  */
  readonly entrypoint?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#image DatascienceJob#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#image_digest DatascienceJob#image_digest}
  */
  readonly imageDigest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#image_signature_id DatascienceJob#image_signature_id}
  */
  readonly imageSignatureId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#job_environment_type DatascienceJob#job_environment_type}
  */
  readonly jobEnvironmentType: string;
}

export function datascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetailsToTerraform(struct?: DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetailsOutputReference | DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetails): any {
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


export function datascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetailsToHclTerraform(struct?: DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetailsOutputReference | DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetails): any {
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

export class DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetails | undefined {
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

  public set internalValue(value: DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetails | undefined) {
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
export interface DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#cpu_baseline DatascienceJob#cpu_baseline}
  */
  readonly cpuBaseline?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#memory_in_gbs DatascienceJob#memory_in_gbs}
  */
  readonly memoryInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#ocpus DatascienceJob#ocpus}
  */
  readonly ocpus?: number;
}

export function datascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetailsToTerraform(struct?: DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference | DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_baseline: cdktf.stringToTerraform(struct!.cpuBaseline),
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
  }
}


export function datascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetailsToHclTerraform(struct?: DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference | DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_baseline: {
      value: cdktf.stringToHclTerraform(struct!.cpuBaseline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuBaseline !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuBaseline = this._cpuBaseline;
    }
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

  public set internalValue(value: DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuBaseline = undefined;
      this._memoryInGbs = undefined;
      this._ocpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuBaseline = value.cpuBaseline;
      this._memoryInGbs = value.memoryInGbs;
      this._ocpus = value.ocpus;
    }
  }

  // cpu_baseline - computed: true, optional: true, required: false
  private _cpuBaseline?: string; 
  public get cpuBaseline() {
    return this.getStringAttribute('cpu_baseline');
  }
  public set cpuBaseline(value: string) {
    this._cpuBaseline = value;
  }
  public resetCpuBaseline() {
    this._cpuBaseline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuBaselineInput() {
    return this._cpuBaseline;
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
export interface DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#block_storage_size_in_gbs DatascienceJob#block_storage_size_in_gbs}
  */
  readonly blockStorageSizeInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#job_infrastructure_type DatascienceJob#job_infrastructure_type}
  */
  readonly jobInfrastructureType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#shape_name DatascienceJob#shape_name}
  */
  readonly shapeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#subnet_id DatascienceJob#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * job_shape_config_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#job_shape_config_details DatascienceJob#job_shape_config_details}
  */
  readonly jobShapeConfigDetails?: DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetails;
}

export function datascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsToTerraform(struct?: DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsOutputReference | DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_storage_size_in_gbs: cdktf.numberToTerraform(struct!.blockStorageSizeInGbs),
    job_infrastructure_type: cdktf.stringToTerraform(struct!.jobInfrastructureType),
    shape_name: cdktf.stringToTerraform(struct!.shapeName),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    job_shape_config_details: datascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetailsToTerraform(struct!.jobShapeConfigDetails),
  }
}


export function datascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsToHclTerraform(struct?: DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsOutputReference | DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetails): any {
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
      value: datascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetailsToHclTerraform(struct!.jobShapeConfigDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetails | undefined {
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

  public set internalValue(value: DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetails | undefined) {
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
  private _jobShapeConfigDetails = new DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference(this, "job_shape_config_details");
  public get jobShapeConfigDetails() {
    return this._jobShapeConfigDetails;
  }
  public putJobShapeConfigDetails(value: DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsJobShapeConfigDetails) {
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
export interface DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#minimum_success_replicas DatascienceJob#minimum_success_replicas}
  */
  readonly minimumSuccessReplicas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#name DatascienceJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#replicas DatascienceJob#replicas}
  */
  readonly replicas?: number;
  /**
  * job_configuration_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#job_configuration_details DatascienceJob#job_configuration_details}
  */
  readonly jobConfigurationDetails?: DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetails;
  /**
  * job_environment_configuration_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#job_environment_configuration_details DatascienceJob#job_environment_configuration_details}
  */
  readonly jobEnvironmentConfigurationDetails?: DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetails;
  /**
  * job_infrastructure_configuration_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#job_infrastructure_configuration_details DatascienceJob#job_infrastructure_configuration_details}
  */
  readonly jobInfrastructureConfigurationDetails?: DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetails;
}

export function datascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListStructToTerraform(struct?: DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum_success_replicas: cdktf.numberToTerraform(struct!.minimumSuccessReplicas),
    name: cdktf.stringToTerraform(struct!.name),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    job_configuration_details: datascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsToTerraform(struct!.jobConfigurationDetails),
    job_environment_configuration_details: datascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetailsToTerraform(struct!.jobEnvironmentConfigurationDetails),
    job_infrastructure_configuration_details: datascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsToTerraform(struct!.jobInfrastructureConfigurationDetails),
  }
}


export function datascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListStructToHclTerraform(struct?: DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListStruct | cdktf.IResolvable): any {
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
      value: datascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsToHclTerraform(struct!.jobConfigurationDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsList",
    },
    job_environment_configuration_details: {
      value: datascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetailsToHclTerraform(struct!.jobEnvironmentConfigurationDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetailsList",
    },
    job_infrastructure_configuration_details: {
      value: datascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsToHclTerraform(struct!.jobInfrastructureConfigurationDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListStruct | cdktf.IResolvable | undefined) {
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
  private _jobConfigurationDetails = new DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetailsOutputReference(this, "job_configuration_details");
  public get jobConfigurationDetails() {
    return this._jobConfigurationDetails;
  }
  public putJobConfigurationDetails(value: DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobConfigurationDetails) {
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
  private _jobEnvironmentConfigurationDetails = new DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetailsOutputReference(this, "job_environment_configuration_details");
  public get jobEnvironmentConfigurationDetails() {
    return this._jobEnvironmentConfigurationDetails;
  }
  public putJobEnvironmentConfigurationDetails(value: DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobEnvironmentConfigurationDetails) {
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
  private _jobInfrastructureConfigurationDetails = new DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetailsOutputReference(this, "job_infrastructure_configuration_details");
  public get jobInfrastructureConfigurationDetails() {
    return this._jobInfrastructureConfigurationDetails;
  }
  public putJobInfrastructureConfigurationDetails(value: DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListJobInfrastructureConfigurationDetails) {
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

export class DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListStructList extends cdktf.ComplexList {
  public internalValue? : DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListStruct[] | cdktf.IResolvable

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
  public get(index: number): DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListStructOutputReference {
    return new DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatascienceJobJobNodeConfigurationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#job_node_type DatascienceJob#job_node_type}
  */
  readonly jobNodeType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#maximum_runtime_in_minutes DatascienceJob#maximum_runtime_in_minutes}
  */
  readonly maximumRuntimeInMinutes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#startup_order DatascienceJob#startup_order}
  */
  readonly startupOrder?: string;
  /**
  * job_network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#job_network_configuration DatascienceJob#job_network_configuration}
  */
  readonly jobNetworkConfiguration?: DatascienceJobJobNodeConfigurationDetailsJobNetworkConfiguration;
  /**
  * job_node_group_configuration_details_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#job_node_group_configuration_details_list DatascienceJob#job_node_group_configuration_details_list}
  */
  readonly jobNodeGroupConfigurationDetailsList?: DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListStruct[] | cdktf.IResolvable;
}

export function datascienceJobJobNodeConfigurationDetailsToTerraform(struct?: DatascienceJobJobNodeConfigurationDetailsOutputReference | DatascienceJobJobNodeConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    job_node_type: cdktf.stringToTerraform(struct!.jobNodeType),
    maximum_runtime_in_minutes: cdktf.stringToTerraform(struct!.maximumRuntimeInMinutes),
    startup_order: cdktf.stringToTerraform(struct!.startupOrder),
    job_network_configuration: datascienceJobJobNodeConfigurationDetailsJobNetworkConfigurationToTerraform(struct!.jobNetworkConfiguration),
    job_node_group_configuration_details_list: cdktf.listMapper(datascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListStructToTerraform, true)(struct!.jobNodeGroupConfigurationDetailsList),
  }
}


export function datascienceJobJobNodeConfigurationDetailsToHclTerraform(struct?: DatascienceJobJobNodeConfigurationDetailsOutputReference | DatascienceJobJobNodeConfigurationDetails): any {
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
      value: datascienceJobJobNodeConfigurationDetailsJobNetworkConfigurationToHclTerraform(struct!.jobNetworkConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceJobJobNodeConfigurationDetailsJobNetworkConfigurationList",
    },
    job_node_group_configuration_details_list: {
      value: cdktf.listMapperHcl(datascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListStructToHclTerraform, true)(struct!.jobNodeGroupConfigurationDetailsList),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceJobJobNodeConfigurationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceJobJobNodeConfigurationDetails | undefined {
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

  public set internalValue(value: DatascienceJobJobNodeConfigurationDetails | undefined) {
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
  private _jobNetworkConfiguration = new DatascienceJobJobNodeConfigurationDetailsJobNetworkConfigurationOutputReference(this, "job_network_configuration");
  public get jobNetworkConfiguration() {
    return this._jobNetworkConfiguration;
  }
  public putJobNetworkConfiguration(value: DatascienceJobJobNodeConfigurationDetailsJobNetworkConfiguration) {
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
  private _jobNodeGroupConfigurationDetailsList = new DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListStructList(this, "job_node_group_configuration_details_list", false);
  public get jobNodeGroupConfigurationDetailsList() {
    return this._jobNodeGroupConfigurationDetailsList;
  }
  public putJobNodeGroupConfigurationDetailsList(value: DatascienceJobJobNodeConfigurationDetailsJobNodeGroupConfigurationDetailsListStruct[] | cdktf.IResolvable) {
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
export interface DatascienceJobJobStorageMountConfigurationDetailsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#bucket DatascienceJob#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#destination_directory_name DatascienceJob#destination_directory_name}
  */
  readonly destinationDirectoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#destination_path DatascienceJob#destination_path}
  */
  readonly destinationPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#export_id DatascienceJob#export_id}
  */
  readonly exportId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#mount_target_id DatascienceJob#mount_target_id}
  */
  readonly mountTargetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#namespace DatascienceJob#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#prefix DatascienceJob#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#storage_type DatascienceJob#storage_type}
  */
  readonly storageType: string;
}

export function datascienceJobJobStorageMountConfigurationDetailsListStructToTerraform(struct?: DatascienceJobJobStorageMountConfigurationDetailsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    destination_directory_name: cdktf.stringToTerraform(struct!.destinationDirectoryName),
    destination_path: cdktf.stringToTerraform(struct!.destinationPath),
    export_id: cdktf.stringToTerraform(struct!.exportId),
    mount_target_id: cdktf.stringToTerraform(struct!.mountTargetId),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    storage_type: cdktf.stringToTerraform(struct!.storageType),
  }
}


export function datascienceJobJobStorageMountConfigurationDetailsListStructToHclTerraform(struct?: DatascienceJobJobStorageMountConfigurationDetailsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_directory_name: {
      value: cdktf.stringToHclTerraform(struct!.destinationDirectoryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_path: {
      value: cdktf.stringToHclTerraform(struct!.destinationPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    export_id: {
      value: cdktf.stringToHclTerraform(struct!.exportId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_target_id: {
      value: cdktf.stringToHclTerraform(struct!.mountTargetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_type: {
      value: cdktf.stringToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatascienceJobJobStorageMountConfigurationDetailsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._destinationDirectoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDirectoryName = this._destinationDirectoryName;
    }
    if (this._destinationPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPath = this._destinationPath;
    }
    if (this._exportId !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportId = this._exportId;
    }
    if (this._mountTargetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountTargetId = this._mountTargetId;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceJobJobStorageMountConfigurationDetailsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._destinationDirectoryName = undefined;
      this._destinationPath = undefined;
      this._exportId = undefined;
      this._mountTargetId = undefined;
      this._namespace = undefined;
      this._prefix = undefined;
      this._storageType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._destinationDirectoryName = value.destinationDirectoryName;
      this._destinationPath = value.destinationPath;
      this._exportId = value.exportId;
      this._mountTargetId = value.mountTargetId;
      this._namespace = value.namespace;
      this._prefix = value.prefix;
      this._storageType = value.storageType;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // destination_directory_name - computed: false, optional: false, required: true
  private _destinationDirectoryName?: string; 
  public get destinationDirectoryName() {
    return this.getStringAttribute('destination_directory_name');
  }
  public set destinationDirectoryName(value: string) {
    this._destinationDirectoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDirectoryNameInput() {
    return this._destinationDirectoryName;
  }

  // destination_path - computed: true, optional: true, required: false
  private _destinationPath?: string; 
  public get destinationPath() {
    return this.getStringAttribute('destination_path');
  }
  public set destinationPath(value: string) {
    this._destinationPath = value;
  }
  public resetDestinationPath() {
    this._destinationPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPathInput() {
    return this._destinationPath;
  }

  // export_id - computed: true, optional: true, required: false
  private _exportId?: string; 
  public get exportId() {
    return this.getStringAttribute('export_id');
  }
  public set exportId(value: string) {
    this._exportId = value;
  }
  public resetExportId() {
    this._exportId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportIdInput() {
    return this._exportId;
  }

  // mount_target_id - computed: true, optional: true, required: false
  private _mountTargetId?: string; 
  public get mountTargetId() {
    return this.getStringAttribute('mount_target_id');
  }
  public set mountTargetId(value: string) {
    this._mountTargetId = value;
  }
  public resetMountTargetId() {
    this._mountTargetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountTargetIdInput() {
    return this._mountTargetId;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // storage_type - computed: false, optional: false, required: true
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }
}

export class DatascienceJobJobStorageMountConfigurationDetailsListStructList extends cdktf.ComplexList {
  public internalValue? : DatascienceJobJobStorageMountConfigurationDetailsListStruct[] | cdktf.IResolvable

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
  public get(index: number): DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference {
    return new DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatascienceJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#create DatascienceJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#delete DatascienceJob#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#update DatascienceJob#update}
  */
  readonly update?: string;
}

export function datascienceJobTimeoutsToTerraform(struct?: DatascienceJobTimeouts | cdktf.IResolvable): any {
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


export function datascienceJobTimeoutsToHclTerraform(struct?: DatascienceJobTimeouts | cdktf.IResolvable): any {
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

export class DatascienceJobTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatascienceJobTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatascienceJobTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job oci_datascience_job}
*/
export class DatascienceJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_datascience_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatascienceJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatascienceJob to import
  * @param importFromId The id of the existing DatascienceJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatascienceJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_datascience_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_job oci_datascience_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatascienceJobConfig
  */
  public constructor(scope: Construct, id: string, config: DatascienceJobConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datascience_job',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._artifactContentDisposition = config.artifactContentDisposition;
    this._artifactContentLength = config.artifactContentLength;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._deleteRelatedJobRuns = config.deleteRelatedJobRuns;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._jobArtifact = config.jobArtifact;
    this._projectId = config.projectId;
    this._jobConfigurationDetails.internalValue = config.jobConfigurationDetails;
    this._jobEnvironmentConfigurationDetails.internalValue = config.jobEnvironmentConfigurationDetails;
    this._jobInfrastructureConfigurationDetails.internalValue = config.jobInfrastructureConfigurationDetails;
    this._jobLogConfigurationDetails.internalValue = config.jobLogConfigurationDetails;
    this._jobNodeConfigurationDetails.internalValue = config.jobNodeConfigurationDetails;
    this._jobStorageMountConfigurationDetailsList.internalValue = config.jobStorageMountConfigurationDetailsList;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // artifact_content_disposition - computed: false, optional: true, required: false
  private _artifactContentDisposition?: string; 
  public get artifactContentDisposition() {
    return this.getStringAttribute('artifact_content_disposition');
  }
  public set artifactContentDisposition(value: string) {
    this._artifactContentDisposition = value;
  }
  public resetArtifactContentDisposition() {
    this._artifactContentDisposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactContentDispositionInput() {
    return this._artifactContentDisposition;
  }

  // artifact_content_length - computed: false, optional: true, required: false
  private _artifactContentLength?: string; 
  public get artifactContentLength() {
    return this.getStringAttribute('artifact_content_length');
  }
  public set artifactContentLength(value: string) {
    this._artifactContentLength = value;
  }
  public resetArtifactContentLength() {
    this._artifactContentLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactContentLengthInput() {
    return this._artifactContentLength;
  }

  // artifact_content_md5 - computed: true, optional: false, required: false
  public get artifactContentMd5() {
    return this.getStringAttribute('artifact_content_md5');
  }

  // artifact_last_modified - computed: true, optional: false, required: false
  public get artifactLastModified() {
    return this.getStringAttribute('artifact_last_modified');
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

  // delete_related_job_runs - computed: false, optional: true, required: false
  private _deleteRelatedJobRuns?: boolean | cdktf.IResolvable; 
  public get deleteRelatedJobRuns() {
    return this.getBooleanAttribute('delete_related_job_runs');
  }
  public set deleteRelatedJobRuns(value: boolean | cdktf.IResolvable) {
    this._deleteRelatedJobRuns = value;
  }
  public resetDeleteRelatedJobRuns() {
    this._deleteRelatedJobRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRelatedJobRunsInput() {
    return this._deleteRelatedJobRuns;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // empty_artifact - computed: true, optional: false, required: false
  public get emptyArtifact() {
    return this.getBooleanAttribute('empty_artifact');
  }

  // freeform_tags - computed: false, optional: true, required: false
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

  // job_artifact - computed: false, optional: true, required: false
  private _jobArtifact?: string; 
  public get jobArtifact() {
    return this.getStringAttribute('job_artifact');
  }
  public set jobArtifact(value: string) {
    this._jobArtifact = value;
  }
  public resetJobArtifact() {
    this._jobArtifact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobArtifactInput() {
    return this._jobArtifact;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
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

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // job_configuration_details - computed: false, optional: true, required: false
  private _jobConfigurationDetails = new DatascienceJobJobConfigurationDetailsOutputReference(this, "job_configuration_details");
  public get jobConfigurationDetails() {
    return this._jobConfigurationDetails;
  }
  public putJobConfigurationDetails(value: DatascienceJobJobConfigurationDetails) {
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
  private _jobEnvironmentConfigurationDetails = new DatascienceJobJobEnvironmentConfigurationDetailsOutputReference(this, "job_environment_configuration_details");
  public get jobEnvironmentConfigurationDetails() {
    return this._jobEnvironmentConfigurationDetails;
  }
  public putJobEnvironmentConfigurationDetails(value: DatascienceJobJobEnvironmentConfigurationDetails) {
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
  private _jobInfrastructureConfigurationDetails = new DatascienceJobJobInfrastructureConfigurationDetailsOutputReference(this, "job_infrastructure_configuration_details");
  public get jobInfrastructureConfigurationDetails() {
    return this._jobInfrastructureConfigurationDetails;
  }
  public putJobInfrastructureConfigurationDetails(value: DatascienceJobJobInfrastructureConfigurationDetails) {
    this._jobInfrastructureConfigurationDetails.internalValue = value;
  }
  public resetJobInfrastructureConfigurationDetails() {
    this._jobInfrastructureConfigurationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobInfrastructureConfigurationDetailsInput() {
    return this._jobInfrastructureConfigurationDetails.internalValue;
  }

  // job_log_configuration_details - computed: false, optional: true, required: false
  private _jobLogConfigurationDetails = new DatascienceJobJobLogConfigurationDetailsOutputReference(this, "job_log_configuration_details");
  public get jobLogConfigurationDetails() {
    return this._jobLogConfigurationDetails;
  }
  public putJobLogConfigurationDetails(value: DatascienceJobJobLogConfigurationDetails) {
    this._jobLogConfigurationDetails.internalValue = value;
  }
  public resetJobLogConfigurationDetails() {
    this._jobLogConfigurationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobLogConfigurationDetailsInput() {
    return this._jobLogConfigurationDetails.internalValue;
  }

  // job_node_configuration_details - computed: false, optional: true, required: false
  private _jobNodeConfigurationDetails = new DatascienceJobJobNodeConfigurationDetailsOutputReference(this, "job_node_configuration_details");
  public get jobNodeConfigurationDetails() {
    return this._jobNodeConfigurationDetails;
  }
  public putJobNodeConfigurationDetails(value: DatascienceJobJobNodeConfigurationDetails) {
    this._jobNodeConfigurationDetails.internalValue = value;
  }
  public resetJobNodeConfigurationDetails() {
    this._jobNodeConfigurationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobNodeConfigurationDetailsInput() {
    return this._jobNodeConfigurationDetails.internalValue;
  }

  // job_storage_mount_configuration_details_list - computed: false, optional: true, required: false
  private _jobStorageMountConfigurationDetailsList = new DatascienceJobJobStorageMountConfigurationDetailsListStructList(this, "job_storage_mount_configuration_details_list", false);
  public get jobStorageMountConfigurationDetailsList() {
    return this._jobStorageMountConfigurationDetailsList;
  }
  public putJobStorageMountConfigurationDetailsList(value: DatascienceJobJobStorageMountConfigurationDetailsListStruct[] | cdktf.IResolvable) {
    this._jobStorageMountConfigurationDetailsList.internalValue = value;
  }
  public resetJobStorageMountConfigurationDetailsList() {
    this._jobStorageMountConfigurationDetailsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobStorageMountConfigurationDetailsListInput() {
    return this._jobStorageMountConfigurationDetailsList.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatascienceJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatascienceJobTimeouts) {
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
      artifact_content_disposition: cdktf.stringToTerraform(this._artifactContentDisposition),
      artifact_content_length: cdktf.stringToTerraform(this._artifactContentLength),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      delete_related_job_runs: cdktf.booleanToTerraform(this._deleteRelatedJobRuns),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      job_artifact: cdktf.stringToTerraform(this._jobArtifact),
      project_id: cdktf.stringToTerraform(this._projectId),
      job_configuration_details: datascienceJobJobConfigurationDetailsToTerraform(this._jobConfigurationDetails.internalValue),
      job_environment_configuration_details: datascienceJobJobEnvironmentConfigurationDetailsToTerraform(this._jobEnvironmentConfigurationDetails.internalValue),
      job_infrastructure_configuration_details: datascienceJobJobInfrastructureConfigurationDetailsToTerraform(this._jobInfrastructureConfigurationDetails.internalValue),
      job_log_configuration_details: datascienceJobJobLogConfigurationDetailsToTerraform(this._jobLogConfigurationDetails.internalValue),
      job_node_configuration_details: datascienceJobJobNodeConfigurationDetailsToTerraform(this._jobNodeConfigurationDetails.internalValue),
      job_storage_mount_configuration_details_list: cdktf.listMapper(datascienceJobJobStorageMountConfigurationDetailsListStructToTerraform, true)(this._jobStorageMountConfigurationDetailsList.internalValue),
      timeouts: datascienceJobTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      artifact_content_disposition: {
        value: cdktf.stringToHclTerraform(this._artifactContentDisposition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      artifact_content_length: {
        value: cdktf.stringToHclTerraform(this._artifactContentLength),
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
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      delete_related_job_runs: {
        value: cdktf.booleanToHclTerraform(this._deleteRelatedJobRuns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      job_artifact: {
        value: cdktf.stringToHclTerraform(this._jobArtifact),
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
      job_configuration_details: {
        value: datascienceJobJobConfigurationDetailsToHclTerraform(this._jobConfigurationDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatascienceJobJobConfigurationDetailsList",
      },
      job_environment_configuration_details: {
        value: datascienceJobJobEnvironmentConfigurationDetailsToHclTerraform(this._jobEnvironmentConfigurationDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatascienceJobJobEnvironmentConfigurationDetailsList",
      },
      job_infrastructure_configuration_details: {
        value: datascienceJobJobInfrastructureConfigurationDetailsToHclTerraform(this._jobInfrastructureConfigurationDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatascienceJobJobInfrastructureConfigurationDetailsList",
      },
      job_log_configuration_details: {
        value: datascienceJobJobLogConfigurationDetailsToHclTerraform(this._jobLogConfigurationDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatascienceJobJobLogConfigurationDetailsList",
      },
      job_node_configuration_details: {
        value: datascienceJobJobNodeConfigurationDetailsToHclTerraform(this._jobNodeConfigurationDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatascienceJobJobNodeConfigurationDetailsList",
      },
      job_storage_mount_configuration_details_list: {
        value: cdktf.listMapperHcl(datascienceJobJobStorageMountConfigurationDetailsListStructToHclTerraform, true)(this._jobStorageMountConfigurationDetailsList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatascienceJobJobStorageMountConfigurationDetailsListStructList",
      },
      timeouts: {
        value: datascienceJobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatascienceJobTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
