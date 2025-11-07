// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatascienceScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#compartment_id DatascienceSchedule#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#defined_tags DatascienceSchedule#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#description DatascienceSchedule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#display_name DatascienceSchedule#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#freeform_tags DatascienceSchedule#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#id DatascienceSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#project_id DatascienceSchedule#project_id}
  */
  readonly projectId: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#action DatascienceSchedule#action}
  */
  readonly action: DatascienceScheduleAction;
  /**
  * log_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#log_details DatascienceSchedule#log_details}
  */
  readonly logDetails?: DatascienceScheduleLogDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#timeouts DatascienceSchedule#timeouts}
  */
  readonly timeouts?: DatascienceScheduleTimeouts;
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#trigger DatascienceSchedule#trigger}
  */
  readonly trigger: DatascienceScheduleTrigger;
}
export interface DatascienceScheduleActionActionDetailsCreateJobRunDetailsJobConfigurationOverrideDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#command_line_arguments DatascienceSchedule#command_line_arguments}
  */
  readonly commandLineArguments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#environment_variables DatascienceSchedule#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#job_type DatascienceSchedule#job_type}
  */
  readonly jobType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#maximum_runtime_in_minutes DatascienceSchedule#maximum_runtime_in_minutes}
  */
  readonly maximumRuntimeInMinutes?: string;
}

export function datascienceScheduleActionActionDetailsCreateJobRunDetailsJobConfigurationOverrideDetailsToTerraform(struct?: DatascienceScheduleActionActionDetailsCreateJobRunDetailsJobConfigurationOverrideDetailsOutputReference | DatascienceScheduleActionActionDetailsCreateJobRunDetailsJobConfigurationOverrideDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command_line_arguments: cdktf.stringToTerraform(struct!.commandLineArguments),
    environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environmentVariables),
    job_type: cdktf.stringToTerraform(struct!.jobType),
    maximum_runtime_in_minutes: cdktf.stringToTerraform(struct!.maximumRuntimeInMinutes),
  }
}


export function datascienceScheduleActionActionDetailsCreateJobRunDetailsJobConfigurationOverrideDetailsToHclTerraform(struct?: DatascienceScheduleActionActionDetailsCreateJobRunDetailsJobConfigurationOverrideDetailsOutputReference | DatascienceScheduleActionActionDetailsCreateJobRunDetailsJobConfigurationOverrideDetails): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceScheduleActionActionDetailsCreateJobRunDetailsJobConfigurationOverrideDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceScheduleActionActionDetailsCreateJobRunDetailsJobConfigurationOverrideDetails | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceScheduleActionActionDetailsCreateJobRunDetailsJobConfigurationOverrideDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commandLineArguments = undefined;
      this._environmentVariables = undefined;
      this._jobType = undefined;
      this._maximumRuntimeInMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commandLineArguments = value.commandLineArguments;
      this._environmentVariables = value.environmentVariables;
      this._jobType = value.jobType;
      this._maximumRuntimeInMinutes = value.maximumRuntimeInMinutes;
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
}
export interface DatascienceScheduleActionActionDetailsCreateJobRunDetailsJobEnvironmentConfigurationOverrideDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#cmd DatascienceSchedule#cmd}
  */
  readonly cmd?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#entrypoint DatascienceSchedule#entrypoint}
  */
  readonly entrypoint?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#image DatascienceSchedule#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#image_digest DatascienceSchedule#image_digest}
  */
  readonly imageDigest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#image_signature_id DatascienceSchedule#image_signature_id}
  */
  readonly imageSignatureId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#job_environment_type DatascienceSchedule#job_environment_type}
  */
  readonly jobEnvironmentType: string;
}

export function datascienceScheduleActionActionDetailsCreateJobRunDetailsJobEnvironmentConfigurationOverrideDetailsToTerraform(struct?: DatascienceScheduleActionActionDetailsCreateJobRunDetailsJobEnvironmentConfigurationOverrideDetailsOutputReference | DatascienceScheduleActionActionDetailsCreateJobRunDetailsJobEnvironmentConfigurationOverrideDetails): any {
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


export function datascienceScheduleActionActionDetailsCreateJobRunDetailsJobEnvironmentConfigurationOverrideDetailsToHclTerraform(struct?: DatascienceScheduleActionActionDetailsCreateJobRunDetailsJobEnvironmentConfigurationOverrideDetailsOutputReference | DatascienceScheduleActionActionDetailsCreateJobRunDetailsJobEnvironmentConfigurationOverrideDetails): any {
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

export class DatascienceScheduleActionActionDetailsCreateJobRunDetailsJobEnvironmentConfigurationOverrideDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceScheduleActionActionDetailsCreateJobRunDetailsJobEnvironmentConfigurationOverrideDetails | undefined {
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

  public set internalValue(value: DatascienceScheduleActionActionDetailsCreateJobRunDetailsJobEnvironmentConfigurationOverrideDetails | undefined) {
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
export interface DatascienceScheduleActionActionDetailsCreateJobRunDetailsJobLogConfigurationOverrideDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#enable_auto_log_creation DatascienceSchedule#enable_auto_log_creation}
  */
  readonly enableAutoLogCreation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#enable_logging DatascienceSchedule#enable_logging}
  */
  readonly enableLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#log_group_id DatascienceSchedule#log_group_id}
  */
  readonly logGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#log_id DatascienceSchedule#log_id}
  */
  readonly logId?: string;
}

export function datascienceScheduleActionActionDetailsCreateJobRunDetailsJobLogConfigurationOverrideDetailsToTerraform(struct?: DatascienceScheduleActionActionDetailsCreateJobRunDetailsJobLogConfigurationOverrideDetailsOutputReference | DatascienceScheduleActionActionDetailsCreateJobRunDetailsJobLogConfigurationOverrideDetails): any {
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


export function datascienceScheduleActionActionDetailsCreateJobRunDetailsJobLogConfigurationOverrideDetailsToHclTerraform(struct?: DatascienceScheduleActionActionDetailsCreateJobRunDetailsJobLogConfigurationOverrideDetailsOutputReference | DatascienceScheduleActionActionDetailsCreateJobRunDetailsJobLogConfigurationOverrideDetails): any {
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

export class DatascienceScheduleActionActionDetailsCreateJobRunDetailsJobLogConfigurationOverrideDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceScheduleActionActionDetailsCreateJobRunDetailsJobLogConfigurationOverrideDetails | undefined {
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

  public set internalValue(value: DatascienceScheduleActionActionDetailsCreateJobRunDetailsJobLogConfigurationOverrideDetails | undefined) {
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
export interface DatascienceScheduleActionActionDetailsCreateJobRunDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#compartment_id DatascienceSchedule#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#defined_tags DatascienceSchedule#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#display_name DatascienceSchedule#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#freeform_tags DatascienceSchedule#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#job_id DatascienceSchedule#job_id}
  */
  readonly jobId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#project_id DatascienceSchedule#project_id}
  */
  readonly projectId?: string;
  /**
  * job_configuration_override_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#job_configuration_override_details DatascienceSchedule#job_configuration_override_details}
  */
  readonly jobConfigurationOverrideDetails?: DatascienceScheduleActionActionDetailsCreateJobRunDetailsJobConfigurationOverrideDetails;
  /**
  * job_environment_configuration_override_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#job_environment_configuration_override_details DatascienceSchedule#job_environment_configuration_override_details}
  */
  readonly jobEnvironmentConfigurationOverrideDetails?: DatascienceScheduleActionActionDetailsCreateJobRunDetailsJobEnvironmentConfigurationOverrideDetails;
  /**
  * job_log_configuration_override_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#job_log_configuration_override_details DatascienceSchedule#job_log_configuration_override_details}
  */
  readonly jobLogConfigurationOverrideDetails?: DatascienceScheduleActionActionDetailsCreateJobRunDetailsJobLogConfigurationOverrideDetails;
}

export function datascienceScheduleActionActionDetailsCreateJobRunDetailsToTerraform(struct?: DatascienceScheduleActionActionDetailsCreateJobRunDetailsOutputReference | DatascienceScheduleActionActionDetailsCreateJobRunDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.definedTags),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.freeformTags),
    job_id: cdktf.stringToTerraform(struct!.jobId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    job_configuration_override_details: datascienceScheduleActionActionDetailsCreateJobRunDetailsJobConfigurationOverrideDetailsToTerraform(struct!.jobConfigurationOverrideDetails),
    job_environment_configuration_override_details: datascienceScheduleActionActionDetailsCreateJobRunDetailsJobEnvironmentConfigurationOverrideDetailsToTerraform(struct!.jobEnvironmentConfigurationOverrideDetails),
    job_log_configuration_override_details: datascienceScheduleActionActionDetailsCreateJobRunDetailsJobLogConfigurationOverrideDetailsToTerraform(struct!.jobLogConfigurationOverrideDetails),
  }
}


export function datascienceScheduleActionActionDetailsCreateJobRunDetailsToHclTerraform(struct?: DatascienceScheduleActionActionDetailsCreateJobRunDetailsOutputReference | DatascienceScheduleActionActionDetailsCreateJobRunDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    defined_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.definedTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    freeform_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.freeformTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    job_id: {
      value: cdktf.stringToHclTerraform(struct!.jobId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_configuration_override_details: {
      value: datascienceScheduleActionActionDetailsCreateJobRunDetailsJobConfigurationOverrideDetailsToHclTerraform(struct!.jobConfigurationOverrideDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceScheduleActionActionDetailsCreateJobRunDetailsJobConfigurationOverrideDetailsList",
    },
    job_environment_configuration_override_details: {
      value: datascienceScheduleActionActionDetailsCreateJobRunDetailsJobEnvironmentConfigurationOverrideDetailsToHclTerraform(struct!.jobEnvironmentConfigurationOverrideDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceScheduleActionActionDetailsCreateJobRunDetailsJobEnvironmentConfigurationOverrideDetailsList",
    },
    job_log_configuration_override_details: {
      value: datascienceScheduleActionActionDetailsCreateJobRunDetailsJobLogConfigurationOverrideDetailsToHclTerraform(struct!.jobLogConfigurationOverrideDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceScheduleActionActionDetailsCreateJobRunDetailsJobLogConfigurationOverrideDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceScheduleActionActionDetailsCreateJobRunDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceScheduleActionActionDetailsCreateJobRunDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._definedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.definedTags = this._definedTags;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._freeformTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeformTags = this._freeformTags;
    }
    if (this._jobId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobId = this._jobId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._jobConfigurationOverrideDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobConfigurationOverrideDetails = this._jobConfigurationOverrideDetails?.internalValue;
    }
    if (this._jobEnvironmentConfigurationOverrideDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobEnvironmentConfigurationOverrideDetails = this._jobEnvironmentConfigurationOverrideDetails?.internalValue;
    }
    if (this._jobLogConfigurationOverrideDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobLogConfigurationOverrideDetails = this._jobLogConfigurationOverrideDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceScheduleActionActionDetailsCreateJobRunDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compartmentId = undefined;
      this._definedTags = undefined;
      this._displayName = undefined;
      this._freeformTags = undefined;
      this._jobId = undefined;
      this._projectId = undefined;
      this._jobConfigurationOverrideDetails.internalValue = undefined;
      this._jobEnvironmentConfigurationOverrideDetails.internalValue = undefined;
      this._jobLogConfigurationOverrideDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compartmentId = value.compartmentId;
      this._definedTags = value.definedTags;
      this._displayName = value.displayName;
      this._freeformTags = value.freeformTags;
      this._jobId = value.jobId;
      this._projectId = value.projectId;
      this._jobConfigurationOverrideDetails.internalValue = value.jobConfigurationOverrideDetails;
      this._jobEnvironmentConfigurationOverrideDetails.internalValue = value.jobEnvironmentConfigurationOverrideDetails;
      this._jobLogConfigurationOverrideDetails.internalValue = value.jobLogConfigurationOverrideDetails;
    }
  }

  // compartment_id - computed: true, optional: true, required: false
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

  // job_id - computed: true, optional: true, required: false
  private _jobId?: string; 
  public get jobId() {
    return this.getStringAttribute('job_id');
  }
  public set jobId(value: string) {
    this._jobId = value;
  }
  public resetJobId() {
    this._jobId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
  }

  // project_id - computed: true, optional: true, required: false
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

  // job_configuration_override_details - computed: false, optional: true, required: false
  private _jobConfigurationOverrideDetails = new DatascienceScheduleActionActionDetailsCreateJobRunDetailsJobConfigurationOverrideDetailsOutputReference(this, "job_configuration_override_details");
  public get jobConfigurationOverrideDetails() {
    return this._jobConfigurationOverrideDetails;
  }
  public putJobConfigurationOverrideDetails(value: DatascienceScheduleActionActionDetailsCreateJobRunDetailsJobConfigurationOverrideDetails) {
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
  private _jobEnvironmentConfigurationOverrideDetails = new DatascienceScheduleActionActionDetailsCreateJobRunDetailsJobEnvironmentConfigurationOverrideDetailsOutputReference(this, "job_environment_configuration_override_details");
  public get jobEnvironmentConfigurationOverrideDetails() {
    return this._jobEnvironmentConfigurationOverrideDetails;
  }
  public putJobEnvironmentConfigurationOverrideDetails(value: DatascienceScheduleActionActionDetailsCreateJobRunDetailsJobEnvironmentConfigurationOverrideDetails) {
    this._jobEnvironmentConfigurationOverrideDetails.internalValue = value;
  }
  public resetJobEnvironmentConfigurationOverrideDetails() {
    this._jobEnvironmentConfigurationOverrideDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobEnvironmentConfigurationOverrideDetailsInput() {
    return this._jobEnvironmentConfigurationOverrideDetails.internalValue;
  }

  // job_log_configuration_override_details - computed: false, optional: true, required: false
  private _jobLogConfigurationOverrideDetails = new DatascienceScheduleActionActionDetailsCreateJobRunDetailsJobLogConfigurationOverrideDetailsOutputReference(this, "job_log_configuration_override_details");
  public get jobLogConfigurationOverrideDetails() {
    return this._jobLogConfigurationOverrideDetails;
  }
  public putJobLogConfigurationOverrideDetails(value: DatascienceScheduleActionActionDetailsCreateJobRunDetailsJobLogConfigurationOverrideDetails) {
    this._jobLogConfigurationOverrideDetails.internalValue = value;
  }
  public resetJobLogConfigurationOverrideDetails() {
    this._jobLogConfigurationOverrideDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobLogConfigurationOverrideDetailsInput() {
    return this._jobLogConfigurationOverrideDetails.internalValue;
  }
}
export interface DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsConfigurationOverrideDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#command_line_arguments DatascienceSchedule#command_line_arguments}
  */
  readonly commandLineArguments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#environment_variables DatascienceSchedule#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#maximum_runtime_in_minutes DatascienceSchedule#maximum_runtime_in_minutes}
  */
  readonly maximumRuntimeInMinutes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#type DatascienceSchedule#type}
  */
  readonly type: string;
}

export function datascienceScheduleActionActionDetailsCreatePipelineRunDetailsConfigurationOverrideDetailsToTerraform(struct?: DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsConfigurationOverrideDetailsOutputReference | DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsConfigurationOverrideDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command_line_arguments: cdktf.stringToTerraform(struct!.commandLineArguments),
    environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environmentVariables),
    maximum_runtime_in_minutes: cdktf.stringToTerraform(struct!.maximumRuntimeInMinutes),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function datascienceScheduleActionActionDetailsCreatePipelineRunDetailsConfigurationOverrideDetailsToHclTerraform(struct?: DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsConfigurationOverrideDetailsOutputReference | DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsConfigurationOverrideDetails): any {
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
    maximum_runtime_in_minutes: {
      value: cdktf.stringToHclTerraform(struct!.maximumRuntimeInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsConfigurationOverrideDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsConfigurationOverrideDetails | undefined {
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
    if (this._maximumRuntimeInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRuntimeInMinutes = this._maximumRuntimeInMinutes;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsConfigurationOverrideDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commandLineArguments = undefined;
      this._environmentVariables = undefined;
      this._maximumRuntimeInMinutes = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commandLineArguments = value.commandLineArguments;
      this._environmentVariables = value.environmentVariables;
      this._maximumRuntimeInMinutes = value.maximumRuntimeInMinutes;
      this._type = value.type;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsLogConfigurationOverrideDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#enable_auto_log_creation DatascienceSchedule#enable_auto_log_creation}
  */
  readonly enableAutoLogCreation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#enable_logging DatascienceSchedule#enable_logging}
  */
  readonly enableLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#log_group_id DatascienceSchedule#log_group_id}
  */
  readonly logGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#log_id DatascienceSchedule#log_id}
  */
  readonly logId?: string;
}

export function datascienceScheduleActionActionDetailsCreatePipelineRunDetailsLogConfigurationOverrideDetailsToTerraform(struct?: DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsLogConfigurationOverrideDetailsOutputReference | DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsLogConfigurationOverrideDetails): any {
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


export function datascienceScheduleActionActionDetailsCreatePipelineRunDetailsLogConfigurationOverrideDetailsToHclTerraform(struct?: DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsLogConfigurationOverrideDetailsOutputReference | DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsLogConfigurationOverrideDetails): any {
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

export class DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsLogConfigurationOverrideDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsLogConfigurationOverrideDetails | undefined {
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

  public set internalValue(value: DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsLogConfigurationOverrideDetails | undefined) {
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
export interface DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsStepConfigurationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#command_line_arguments DatascienceSchedule#command_line_arguments}
  */
  readonly commandLineArguments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#environment_variables DatascienceSchedule#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#maximum_runtime_in_minutes DatascienceSchedule#maximum_runtime_in_minutes}
  */
  readonly maximumRuntimeInMinutes?: string;
}

export function datascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsStepConfigurationDetailsToTerraform(struct?: DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsStepConfigurationDetailsOutputReference | DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsStepConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command_line_arguments: cdktf.stringToTerraform(struct!.commandLineArguments),
    environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environmentVariables),
    maximum_runtime_in_minutes: cdktf.stringToTerraform(struct!.maximumRuntimeInMinutes),
  }
}


export function datascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsStepConfigurationDetailsToHclTerraform(struct?: DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsStepConfigurationDetailsOutputReference | DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsStepConfigurationDetails): any {
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
    maximum_runtime_in_minutes: {
      value: cdktf.stringToHclTerraform(struct!.maximumRuntimeInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsStepConfigurationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsStepConfigurationDetails | undefined {
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
    if (this._maximumRuntimeInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRuntimeInMinutes = this._maximumRuntimeInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsStepConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commandLineArguments = undefined;
      this._environmentVariables = undefined;
      this._maximumRuntimeInMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commandLineArguments = value.commandLineArguments;
      this._environmentVariables = value.environmentVariables;
      this._maximumRuntimeInMinutes = value.maximumRuntimeInMinutes;
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
}
export interface DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsStepContainerConfigurationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#cmd DatascienceSchedule#cmd}
  */
  readonly cmd?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#container_type DatascienceSchedule#container_type}
  */
  readonly containerType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#entrypoint DatascienceSchedule#entrypoint}
  */
  readonly entrypoint?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#image DatascienceSchedule#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#image_digest DatascienceSchedule#image_digest}
  */
  readonly imageDigest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#image_signature_id DatascienceSchedule#image_signature_id}
  */
  readonly imageSignatureId?: string;
}

export function datascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsStepContainerConfigurationDetailsToTerraform(struct?: DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference | DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsStepContainerConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cmd: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cmd),
    container_type: cdktf.stringToTerraform(struct!.containerType),
    entrypoint: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entrypoint),
    image: cdktf.stringToTerraform(struct!.image),
    image_digest: cdktf.stringToTerraform(struct!.imageDigest),
    image_signature_id: cdktf.stringToTerraform(struct!.imageSignatureId),
  }
}


export function datascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsStepContainerConfigurationDetailsToHclTerraform(struct?: DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference | DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsStepContainerConfigurationDetails): any {
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
    container_type: {
      value: cdktf.stringToHclTerraform(struct!.containerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsStepContainerConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmd !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmd = this._cmd;
    }
    if (this._containerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerType = this._containerType;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsStepContainerConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cmd = undefined;
      this._containerType = undefined;
      this._entrypoint = undefined;
      this._image = undefined;
      this._imageDigest = undefined;
      this._imageSignatureId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cmd = value.cmd;
      this._containerType = value.containerType;
      this._entrypoint = value.entrypoint;
      this._image = value.image;
      this._imageDigest = value.imageDigest;
      this._imageSignatureId = value.imageSignatureId;
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

  // container_type - computed: false, optional: false, required: true
  private _containerType?: string; 
  public get containerType() {
    return this.getStringAttribute('container_type');
  }
  public set containerType(value: string) {
    this._containerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerTypeInput() {
    return this._containerType;
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
}
export interface DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#step_name DatascienceSchedule#step_name}
  */
  readonly stepName?: string;
  /**
  * step_configuration_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#step_configuration_details DatascienceSchedule#step_configuration_details}
  */
  readonly stepConfigurationDetails?: DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsStepConfigurationDetails;
  /**
  * step_container_configuration_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#step_container_configuration_details DatascienceSchedule#step_container_configuration_details}
  */
  readonly stepContainerConfigurationDetails?: DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsStepContainerConfigurationDetails;
}

export function datascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsToTerraform(struct?: DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    step_name: cdktf.stringToTerraform(struct!.stepName),
    step_configuration_details: datascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsStepConfigurationDetailsToTerraform(struct!.stepConfigurationDetails),
    step_container_configuration_details: datascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsStepContainerConfigurationDetailsToTerraform(struct!.stepContainerConfigurationDetails),
  }
}


export function datascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsToHclTerraform(struct?: DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    step_name: {
      value: cdktf.stringToHclTerraform(struct!.stepName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    step_configuration_details: {
      value: datascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsStepConfigurationDetailsToHclTerraform(struct!.stepConfigurationDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsStepConfigurationDetailsList",
    },
    step_container_configuration_details: {
      value: datascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsStepContainerConfigurationDetailsToHclTerraform(struct!.stepContainerConfigurationDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsStepContainerConfigurationDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stepName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepName = this._stepName;
    }
    if (this._stepConfigurationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepConfigurationDetails = this._stepConfigurationDetails?.internalValue;
    }
    if (this._stepContainerConfigurationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepContainerConfigurationDetails = this._stepContainerConfigurationDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stepName = undefined;
      this._stepConfigurationDetails.internalValue = undefined;
      this._stepContainerConfigurationDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stepName = value.stepName;
      this._stepConfigurationDetails.internalValue = value.stepConfigurationDetails;
      this._stepContainerConfigurationDetails.internalValue = value.stepContainerConfigurationDetails;
    }
  }

  // step_name - computed: true, optional: true, required: false
  private _stepName?: string; 
  public get stepName() {
    return this.getStringAttribute('step_name');
  }
  public set stepName(value: string) {
    this._stepName = value;
  }
  public resetStepName() {
    this._stepName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepNameInput() {
    return this._stepName;
  }

  // step_configuration_details - computed: false, optional: true, required: false
  private _stepConfigurationDetails = new DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsStepConfigurationDetailsOutputReference(this, "step_configuration_details");
  public get stepConfigurationDetails() {
    return this._stepConfigurationDetails;
  }
  public putStepConfigurationDetails(value: DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsStepConfigurationDetails) {
    this._stepConfigurationDetails.internalValue = value;
  }
  public resetStepConfigurationDetails() {
    this._stepConfigurationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepConfigurationDetailsInput() {
    return this._stepConfigurationDetails.internalValue;
  }

  // step_container_configuration_details - computed: false, optional: true, required: false
  private _stepContainerConfigurationDetails = new DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference(this, "step_container_configuration_details");
  public get stepContainerConfigurationDetails() {
    return this._stepContainerConfigurationDetails;
  }
  public putStepContainerConfigurationDetails(value: DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsStepContainerConfigurationDetails) {
    this._stepContainerConfigurationDetails.internalValue = value;
  }
  public resetStepContainerConfigurationDetails() {
    this._stepContainerConfigurationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepContainerConfigurationDetailsInput() {
    return this._stepContainerConfigurationDetails.internalValue;
  }
}

export class DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsList extends cdktf.ComplexList {
  public internalValue? : DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetails[] | cdktf.IResolvable

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
  public get(index: number): DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsOutputReference {
    return new DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatascienceScheduleActionActionDetailsCreatePipelineRunDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#compartment_id DatascienceSchedule#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#defined_tags DatascienceSchedule#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#display_name DatascienceSchedule#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#freeform_tags DatascienceSchedule#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#pipeline_id DatascienceSchedule#pipeline_id}
  */
  readonly pipelineId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#project_id DatascienceSchedule#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#system_tags DatascienceSchedule#system_tags}
  */
  readonly systemTags?: { [key: string]: string };
  /**
  * configuration_override_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#configuration_override_details DatascienceSchedule#configuration_override_details}
  */
  readonly configurationOverrideDetails?: DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsConfigurationOverrideDetails;
  /**
  * log_configuration_override_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#log_configuration_override_details DatascienceSchedule#log_configuration_override_details}
  */
  readonly logConfigurationOverrideDetails?: DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsLogConfigurationOverrideDetails;
  /**
  * step_override_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#step_override_details DatascienceSchedule#step_override_details}
  */
  readonly stepOverrideDetails?: DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetails[] | cdktf.IResolvable;
}

export function datascienceScheduleActionActionDetailsCreatePipelineRunDetailsToTerraform(struct?: DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsOutputReference | DatascienceScheduleActionActionDetailsCreatePipelineRunDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.definedTags),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.freeformTags),
    pipeline_id: cdktf.stringToTerraform(struct!.pipelineId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    system_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.systemTags),
    configuration_override_details: datascienceScheduleActionActionDetailsCreatePipelineRunDetailsConfigurationOverrideDetailsToTerraform(struct!.configurationOverrideDetails),
    log_configuration_override_details: datascienceScheduleActionActionDetailsCreatePipelineRunDetailsLogConfigurationOverrideDetailsToTerraform(struct!.logConfigurationOverrideDetails),
    step_override_details: cdktf.listMapper(datascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsToTerraform, true)(struct!.stepOverrideDetails),
  }
}


export function datascienceScheduleActionActionDetailsCreatePipelineRunDetailsToHclTerraform(struct?: DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsOutputReference | DatascienceScheduleActionActionDetailsCreatePipelineRunDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    defined_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.definedTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    freeform_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.freeformTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pipeline_id: {
      value: cdktf.stringToHclTerraform(struct!.pipelineId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.systemTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    configuration_override_details: {
      value: datascienceScheduleActionActionDetailsCreatePipelineRunDetailsConfigurationOverrideDetailsToHclTerraform(struct!.configurationOverrideDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsConfigurationOverrideDetailsList",
    },
    log_configuration_override_details: {
      value: datascienceScheduleActionActionDetailsCreatePipelineRunDetailsLogConfigurationOverrideDetailsToHclTerraform(struct!.logConfigurationOverrideDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsLogConfigurationOverrideDetailsList",
    },
    step_override_details: {
      value: cdktf.listMapperHcl(datascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsToHclTerraform, true)(struct!.stepOverrideDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceScheduleActionActionDetailsCreatePipelineRunDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._definedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.definedTags = this._definedTags;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._freeformTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeformTags = this._freeformTags;
    }
    if (this._pipelineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineId = this._pipelineId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._systemTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemTags = this._systemTags;
    }
    if (this._configurationOverrideDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationOverrideDetails = this._configurationOverrideDetails?.internalValue;
    }
    if (this._logConfigurationOverrideDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logConfigurationOverrideDetails = this._logConfigurationOverrideDetails?.internalValue;
    }
    if (this._stepOverrideDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepOverrideDetails = this._stepOverrideDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceScheduleActionActionDetailsCreatePipelineRunDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compartmentId = undefined;
      this._definedTags = undefined;
      this._displayName = undefined;
      this._freeformTags = undefined;
      this._pipelineId = undefined;
      this._projectId = undefined;
      this._systemTags = undefined;
      this._configurationOverrideDetails.internalValue = undefined;
      this._logConfigurationOverrideDetails.internalValue = undefined;
      this._stepOverrideDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compartmentId = value.compartmentId;
      this._definedTags = value.definedTags;
      this._displayName = value.displayName;
      this._freeformTags = value.freeformTags;
      this._pipelineId = value.pipelineId;
      this._projectId = value.projectId;
      this._systemTags = value.systemTags;
      this._configurationOverrideDetails.internalValue = value.configurationOverrideDetails;
      this._logConfigurationOverrideDetails.internalValue = value.logConfigurationOverrideDetails;
      this._stepOverrideDetails.internalValue = value.stepOverrideDetails;
    }
  }

  // compartment_id - computed: true, optional: true, required: false
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

  // pipeline_id - computed: true, optional: true, required: false
  private _pipelineId?: string; 
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }
  public set pipelineId(value: string) {
    this._pipelineId = value;
  }
  public resetPipelineId() {
    this._pipelineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineIdInput() {
    return this._pipelineId;
  }

  // project_id - computed: true, optional: true, required: false
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

  // system_tags - computed: true, optional: true, required: false
  private _systemTags?: { [key: string]: string }; 
  public get systemTags() {
    return this.getStringMapAttribute('system_tags');
  }
  public set systemTags(value: { [key: string]: string }) {
    this._systemTags = value;
  }
  public resetSystemTags() {
    this._systemTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemTagsInput() {
    return this._systemTags;
  }

  // configuration_override_details - computed: false, optional: true, required: false
  private _configurationOverrideDetails = new DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsConfigurationOverrideDetailsOutputReference(this, "configuration_override_details");
  public get configurationOverrideDetails() {
    return this._configurationOverrideDetails;
  }
  public putConfigurationOverrideDetails(value: DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsConfigurationOverrideDetails) {
    this._configurationOverrideDetails.internalValue = value;
  }
  public resetConfigurationOverrideDetails() {
    this._configurationOverrideDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationOverrideDetailsInput() {
    return this._configurationOverrideDetails.internalValue;
  }

  // log_configuration_override_details - computed: false, optional: true, required: false
  private _logConfigurationOverrideDetails = new DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsLogConfigurationOverrideDetailsOutputReference(this, "log_configuration_override_details");
  public get logConfigurationOverrideDetails() {
    return this._logConfigurationOverrideDetails;
  }
  public putLogConfigurationOverrideDetails(value: DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsLogConfigurationOverrideDetails) {
    this._logConfigurationOverrideDetails.internalValue = value;
  }
  public resetLogConfigurationOverrideDetails() {
    this._logConfigurationOverrideDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigurationOverrideDetailsInput() {
    return this._logConfigurationOverrideDetails.internalValue;
  }

  // step_override_details - computed: false, optional: true, required: false
  private _stepOverrideDetails = new DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetailsList(this, "step_override_details", false);
  public get stepOverrideDetails() {
    return this._stepOverrideDetails;
  }
  public putStepOverrideDetails(value: DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsStepOverrideDetails[] | cdktf.IResolvable) {
    this._stepOverrideDetails.internalValue = value;
  }
  public resetStepOverrideDetails() {
    this._stepOverrideDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepOverrideDetailsInput() {
    return this._stepOverrideDetails.internalValue;
  }
}
export interface DatascienceScheduleActionActionDetailsTriggerMlApplicationInstanceViewFlowDetailsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#name DatascienceSchedule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#value DatascienceSchedule#value}
  */
  readonly value?: string;
}

export function datascienceScheduleActionActionDetailsTriggerMlApplicationInstanceViewFlowDetailsParametersToTerraform(struct?: DatascienceScheduleActionActionDetailsTriggerMlApplicationInstanceViewFlowDetailsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function datascienceScheduleActionActionDetailsTriggerMlApplicationInstanceViewFlowDetailsParametersToHclTerraform(struct?: DatascienceScheduleActionActionDetailsTriggerMlApplicationInstanceViewFlowDetailsParameters | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceScheduleActionActionDetailsTriggerMlApplicationInstanceViewFlowDetailsParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatascienceScheduleActionActionDetailsTriggerMlApplicationInstanceViewFlowDetailsParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceScheduleActionActionDetailsTriggerMlApplicationInstanceViewFlowDetailsParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DatascienceScheduleActionActionDetailsTriggerMlApplicationInstanceViewFlowDetailsParametersList extends cdktf.ComplexList {
  public internalValue? : DatascienceScheduleActionActionDetailsTriggerMlApplicationInstanceViewFlowDetailsParameters[] | cdktf.IResolvable

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
  public get(index: number): DatascienceScheduleActionActionDetailsTriggerMlApplicationInstanceViewFlowDetailsParametersOutputReference {
    return new DatascienceScheduleActionActionDetailsTriggerMlApplicationInstanceViewFlowDetailsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatascienceScheduleActionActionDetailsTriggerMlApplicationInstanceViewFlowDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#trigger_name DatascienceSchedule#trigger_name}
  */
  readonly triggerName?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#parameters DatascienceSchedule#parameters}
  */
  readonly parameters?: DatascienceScheduleActionActionDetailsTriggerMlApplicationInstanceViewFlowDetailsParameters[] | cdktf.IResolvable;
}

export function datascienceScheduleActionActionDetailsTriggerMlApplicationInstanceViewFlowDetailsToTerraform(struct?: DatascienceScheduleActionActionDetailsTriggerMlApplicationInstanceViewFlowDetailsOutputReference | DatascienceScheduleActionActionDetailsTriggerMlApplicationInstanceViewFlowDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trigger_name: cdktf.stringToTerraform(struct!.triggerName),
    parameters: cdktf.listMapper(datascienceScheduleActionActionDetailsTriggerMlApplicationInstanceViewFlowDetailsParametersToTerraform, true)(struct!.parameters),
  }
}


export function datascienceScheduleActionActionDetailsTriggerMlApplicationInstanceViewFlowDetailsToHclTerraform(struct?: DatascienceScheduleActionActionDetailsTriggerMlApplicationInstanceViewFlowDetailsOutputReference | DatascienceScheduleActionActionDetailsTriggerMlApplicationInstanceViewFlowDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    trigger_name: {
      value: cdktf.stringToHclTerraform(struct!.triggerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(datascienceScheduleActionActionDetailsTriggerMlApplicationInstanceViewFlowDetailsParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceScheduleActionActionDetailsTriggerMlApplicationInstanceViewFlowDetailsParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceScheduleActionActionDetailsTriggerMlApplicationInstanceViewFlowDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceScheduleActionActionDetailsTriggerMlApplicationInstanceViewFlowDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._triggerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerName = this._triggerName;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceScheduleActionActionDetailsTriggerMlApplicationInstanceViewFlowDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._triggerName = undefined;
      this._parameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._triggerName = value.triggerName;
      this._parameters.internalValue = value.parameters;
    }
  }

  // trigger_name - computed: true, optional: true, required: false
  private _triggerName?: string; 
  public get triggerName() {
    return this.getStringAttribute('trigger_name');
  }
  public set triggerName(value: string) {
    this._triggerName = value;
  }
  public resetTriggerName() {
    this._triggerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerNameInput() {
    return this._triggerName;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new DatascienceScheduleActionActionDetailsTriggerMlApplicationInstanceViewFlowDetailsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DatascienceScheduleActionActionDetailsTriggerMlApplicationInstanceViewFlowDetailsParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}
export interface DatascienceScheduleActionActionDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#http_action_type DatascienceSchedule#http_action_type}
  */
  readonly httpActionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#ml_application_instance_view_id DatascienceSchedule#ml_application_instance_view_id}
  */
  readonly mlApplicationInstanceViewId?: string;
  /**
  * create_job_run_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#create_job_run_details DatascienceSchedule#create_job_run_details}
  */
  readonly createJobRunDetails?: DatascienceScheduleActionActionDetailsCreateJobRunDetails;
  /**
  * create_pipeline_run_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#create_pipeline_run_details DatascienceSchedule#create_pipeline_run_details}
  */
  readonly createPipelineRunDetails?: DatascienceScheduleActionActionDetailsCreatePipelineRunDetails;
  /**
  * trigger_ml_application_instance_view_flow_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#trigger_ml_application_instance_view_flow_details DatascienceSchedule#trigger_ml_application_instance_view_flow_details}
  */
  readonly triggerMlApplicationInstanceViewFlowDetails?: DatascienceScheduleActionActionDetailsTriggerMlApplicationInstanceViewFlowDetails;
}

export function datascienceScheduleActionActionDetailsToTerraform(struct?: DatascienceScheduleActionActionDetailsOutputReference | DatascienceScheduleActionActionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_action_type: cdktf.stringToTerraform(struct!.httpActionType),
    ml_application_instance_view_id: cdktf.stringToTerraform(struct!.mlApplicationInstanceViewId),
    create_job_run_details: datascienceScheduleActionActionDetailsCreateJobRunDetailsToTerraform(struct!.createJobRunDetails),
    create_pipeline_run_details: datascienceScheduleActionActionDetailsCreatePipelineRunDetailsToTerraform(struct!.createPipelineRunDetails),
    trigger_ml_application_instance_view_flow_details: datascienceScheduleActionActionDetailsTriggerMlApplicationInstanceViewFlowDetailsToTerraform(struct!.triggerMlApplicationInstanceViewFlowDetails),
  }
}


export function datascienceScheduleActionActionDetailsToHclTerraform(struct?: DatascienceScheduleActionActionDetailsOutputReference | DatascienceScheduleActionActionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_action_type: {
      value: cdktf.stringToHclTerraform(struct!.httpActionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ml_application_instance_view_id: {
      value: cdktf.stringToHclTerraform(struct!.mlApplicationInstanceViewId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_job_run_details: {
      value: datascienceScheduleActionActionDetailsCreateJobRunDetailsToHclTerraform(struct!.createJobRunDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceScheduleActionActionDetailsCreateJobRunDetailsList",
    },
    create_pipeline_run_details: {
      value: datascienceScheduleActionActionDetailsCreatePipelineRunDetailsToHclTerraform(struct!.createPipelineRunDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsList",
    },
    trigger_ml_application_instance_view_flow_details: {
      value: datascienceScheduleActionActionDetailsTriggerMlApplicationInstanceViewFlowDetailsToHclTerraform(struct!.triggerMlApplicationInstanceViewFlowDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceScheduleActionActionDetailsTriggerMlApplicationInstanceViewFlowDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceScheduleActionActionDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceScheduleActionActionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpActionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpActionType = this._httpActionType;
    }
    if (this._mlApplicationInstanceViewId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mlApplicationInstanceViewId = this._mlApplicationInstanceViewId;
    }
    if (this._createJobRunDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createJobRunDetails = this._createJobRunDetails?.internalValue;
    }
    if (this._createPipelineRunDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createPipelineRunDetails = this._createPipelineRunDetails?.internalValue;
    }
    if (this._triggerMlApplicationInstanceViewFlowDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerMlApplicationInstanceViewFlowDetails = this._triggerMlApplicationInstanceViewFlowDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceScheduleActionActionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpActionType = undefined;
      this._mlApplicationInstanceViewId = undefined;
      this._createJobRunDetails.internalValue = undefined;
      this._createPipelineRunDetails.internalValue = undefined;
      this._triggerMlApplicationInstanceViewFlowDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpActionType = value.httpActionType;
      this._mlApplicationInstanceViewId = value.mlApplicationInstanceViewId;
      this._createJobRunDetails.internalValue = value.createJobRunDetails;
      this._createPipelineRunDetails.internalValue = value.createPipelineRunDetails;
      this._triggerMlApplicationInstanceViewFlowDetails.internalValue = value.triggerMlApplicationInstanceViewFlowDetails;
    }
  }

  // http_action_type - computed: false, optional: false, required: true
  private _httpActionType?: string; 
  public get httpActionType() {
    return this.getStringAttribute('http_action_type');
  }
  public set httpActionType(value: string) {
    this._httpActionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpActionTypeInput() {
    return this._httpActionType;
  }

  // ml_application_instance_view_id - computed: true, optional: true, required: false
  private _mlApplicationInstanceViewId?: string; 
  public get mlApplicationInstanceViewId() {
    return this.getStringAttribute('ml_application_instance_view_id');
  }
  public set mlApplicationInstanceViewId(value: string) {
    this._mlApplicationInstanceViewId = value;
  }
  public resetMlApplicationInstanceViewId() {
    this._mlApplicationInstanceViewId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlApplicationInstanceViewIdInput() {
    return this._mlApplicationInstanceViewId;
  }

  // create_job_run_details - computed: false, optional: true, required: false
  private _createJobRunDetails = new DatascienceScheduleActionActionDetailsCreateJobRunDetailsOutputReference(this, "create_job_run_details");
  public get createJobRunDetails() {
    return this._createJobRunDetails;
  }
  public putCreateJobRunDetails(value: DatascienceScheduleActionActionDetailsCreateJobRunDetails) {
    this._createJobRunDetails.internalValue = value;
  }
  public resetCreateJobRunDetails() {
    this._createJobRunDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createJobRunDetailsInput() {
    return this._createJobRunDetails.internalValue;
  }

  // create_pipeline_run_details - computed: false, optional: true, required: false
  private _createPipelineRunDetails = new DatascienceScheduleActionActionDetailsCreatePipelineRunDetailsOutputReference(this, "create_pipeline_run_details");
  public get createPipelineRunDetails() {
    return this._createPipelineRunDetails;
  }
  public putCreatePipelineRunDetails(value: DatascienceScheduleActionActionDetailsCreatePipelineRunDetails) {
    this._createPipelineRunDetails.internalValue = value;
  }
  public resetCreatePipelineRunDetails() {
    this._createPipelineRunDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createPipelineRunDetailsInput() {
    return this._createPipelineRunDetails.internalValue;
  }

  // trigger_ml_application_instance_view_flow_details - computed: false, optional: true, required: false
  private _triggerMlApplicationInstanceViewFlowDetails = new DatascienceScheduleActionActionDetailsTriggerMlApplicationInstanceViewFlowDetailsOutputReference(this, "trigger_ml_application_instance_view_flow_details");
  public get triggerMlApplicationInstanceViewFlowDetails() {
    return this._triggerMlApplicationInstanceViewFlowDetails;
  }
  public putTriggerMlApplicationInstanceViewFlowDetails(value: DatascienceScheduleActionActionDetailsTriggerMlApplicationInstanceViewFlowDetails) {
    this._triggerMlApplicationInstanceViewFlowDetails.internalValue = value;
  }
  public resetTriggerMlApplicationInstanceViewFlowDetails() {
    this._triggerMlApplicationInstanceViewFlowDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerMlApplicationInstanceViewFlowDetailsInput() {
    return this._triggerMlApplicationInstanceViewFlowDetails.internalValue;
  }
}
export interface DatascienceScheduleAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#action_type DatascienceSchedule#action_type}
  */
  readonly actionType: string;
  /**
  * action_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#action_details DatascienceSchedule#action_details}
  */
  readonly actionDetails: DatascienceScheduleActionActionDetails;
}

export function datascienceScheduleActionToTerraform(struct?: DatascienceScheduleActionOutputReference | DatascienceScheduleAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    action_details: datascienceScheduleActionActionDetailsToTerraform(struct!.actionDetails),
  }
}


export function datascienceScheduleActionToHclTerraform(struct?: DatascienceScheduleActionOutputReference | DatascienceScheduleAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_details: {
      value: datascienceScheduleActionActionDetailsToHclTerraform(struct!.actionDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceScheduleActionActionDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceScheduleActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceScheduleAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._actionDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionDetails = this._actionDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceScheduleAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionType = undefined;
      this._actionDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionType = value.actionType;
      this._actionDetails.internalValue = value.actionDetails;
    }
  }

  // action_type - computed: false, optional: false, required: true
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // action_details - computed: false, optional: false, required: true
  private _actionDetails = new DatascienceScheduleActionActionDetailsOutputReference(this, "action_details");
  public get actionDetails() {
    return this._actionDetails;
  }
  public putActionDetails(value: DatascienceScheduleActionActionDetails) {
    this._actionDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionDetailsInput() {
    return this._actionDetails.internalValue;
  }
}
export interface DatascienceScheduleLogDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#log_group_id DatascienceSchedule#log_group_id}
  */
  readonly logGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#log_id DatascienceSchedule#log_id}
  */
  readonly logId: string;
}

export function datascienceScheduleLogDetailsToTerraform(struct?: DatascienceScheduleLogDetailsOutputReference | DatascienceScheduleLogDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_group_id: cdktf.stringToTerraform(struct!.logGroupId),
    log_id: cdktf.stringToTerraform(struct!.logId),
  }
}


export function datascienceScheduleLogDetailsToHclTerraform(struct?: DatascienceScheduleLogDetailsOutputReference | DatascienceScheduleLogDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DatascienceScheduleLogDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceScheduleLogDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DatascienceScheduleLogDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logGroupId = undefined;
      this._logId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logGroupId = value.logGroupId;
      this._logId = value.logId;
    }
  }

  // log_group_id - computed: false, optional: false, required: true
  private _logGroupId?: string; 
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }
  public set logGroupId(value: string) {
    this._logGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdInput() {
    return this._logGroupId;
  }

  // log_id - computed: false, optional: false, required: true
  private _logId?: string; 
  public get logId() {
    return this.getStringAttribute('log_id');
  }
  public set logId(value: string) {
    this._logId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logIdInput() {
    return this._logId;
  }
}
export interface DatascienceScheduleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#create DatascienceSchedule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#delete DatascienceSchedule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#update DatascienceSchedule#update}
  */
  readonly update?: string;
}

export function datascienceScheduleTimeoutsToTerraform(struct?: DatascienceScheduleTimeouts | cdktf.IResolvable): any {
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


export function datascienceScheduleTimeoutsToHclTerraform(struct?: DatascienceScheduleTimeouts | cdktf.IResolvable): any {
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

export class DatascienceScheduleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatascienceScheduleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatascienceScheduleTimeouts | cdktf.IResolvable | undefined) {
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
export interface DatascienceScheduleTrigger {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#cron_expression DatascienceSchedule#cron_expression}
  */
  readonly cronExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#frequency DatascienceSchedule#frequency}
  */
  readonly frequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#interval DatascienceSchedule#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#is_random_start_time DatascienceSchedule#is_random_start_time}
  */
  readonly isRandomStartTime?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#recurrence DatascienceSchedule#recurrence}
  */
  readonly recurrence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#time_end DatascienceSchedule#time_end}
  */
  readonly timeEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#time_start DatascienceSchedule#time_start}
  */
  readonly timeStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#trigger_type DatascienceSchedule#trigger_type}
  */
  readonly triggerType: string;
}

export function datascienceScheduleTriggerToTerraform(struct?: DatascienceScheduleTriggerOutputReference | DatascienceScheduleTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    interval: cdktf.numberToTerraform(struct!.interval),
    is_random_start_time: cdktf.booleanToTerraform(struct!.isRandomStartTime),
    recurrence: cdktf.stringToTerraform(struct!.recurrence),
    time_end: cdktf.stringToTerraform(struct!.timeEnd),
    time_start: cdktf.stringToTerraform(struct!.timeStart),
    trigger_type: cdktf.stringToTerraform(struct!.triggerType),
  }
}


export function datascienceScheduleTriggerToHclTerraform(struct?: DatascienceScheduleTriggerOutputReference | DatascienceScheduleTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_expression: {
      value: cdktf.stringToHclTerraform(struct!.cronExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_random_start_time: {
      value: cdktf.booleanToHclTerraform(struct!.isRandomStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recurrence: {
      value: cdktf.stringToHclTerraform(struct!.recurrence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_end: {
      value: cdktf.stringToHclTerraform(struct!.timeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_start: {
      value: cdktf.stringToHclTerraform(struct!.timeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_type: {
      value: cdktf.stringToHclTerraform(struct!.triggerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceScheduleTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceScheduleTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._isRandomStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRandomStartTime = this._isRandomStartTime;
    }
    if (this._recurrence !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrence = this._recurrence;
    }
    if (this._timeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeEnd = this._timeEnd;
    }
    if (this._timeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeStart = this._timeStart;
    }
    if (this._triggerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerType = this._triggerType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceScheduleTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cronExpression = undefined;
      this._frequency = undefined;
      this._interval = undefined;
      this._isRandomStartTime = undefined;
      this._recurrence = undefined;
      this._timeEnd = undefined;
      this._timeStart = undefined;
      this._triggerType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cronExpression = value.cronExpression;
      this._frequency = value.frequency;
      this._interval = value.interval;
      this._isRandomStartTime = value.isRandomStartTime;
      this._recurrence = value.recurrence;
      this._timeEnd = value.timeEnd;
      this._timeStart = value.timeStart;
      this._triggerType = value.triggerType;
    }
  }

  // cron_expression - computed: false, optional: true, required: false
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  public resetCronExpression() {
    this._cronExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // is_random_start_time - computed: false, optional: true, required: false
  private _isRandomStartTime?: boolean | cdktf.IResolvable; 
  public get isRandomStartTime() {
    return this.getBooleanAttribute('is_random_start_time');
  }
  public set isRandomStartTime(value: boolean | cdktf.IResolvable) {
    this._isRandomStartTime = value;
  }
  public resetIsRandomStartTime() {
    this._isRandomStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRandomStartTimeInput() {
    return this._isRandomStartTime;
  }

  // recurrence - computed: false, optional: true, required: false
  private _recurrence?: string; 
  public get recurrence() {
    return this.getStringAttribute('recurrence');
  }
  public set recurrence(value: string) {
    this._recurrence = value;
  }
  public resetRecurrence() {
    this._recurrence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceInput() {
    return this._recurrence;
  }

  // time_end - computed: false, optional: true, required: false
  private _timeEnd?: string; 
  public get timeEnd() {
    return this.getStringAttribute('time_end');
  }
  public set timeEnd(value: string) {
    this._timeEnd = value;
  }
  public resetTimeEnd() {
    this._timeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeEndInput() {
    return this._timeEnd;
  }

  // time_start - computed: true, optional: true, required: false
  private _timeStart?: string; 
  public get timeStart() {
    return this.getStringAttribute('time_start');
  }
  public set timeStart(value: string) {
    this._timeStart = value;
  }
  public resetTimeStart() {
    this._timeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeStartInput() {
    return this._timeStart;
  }

  // trigger_type - computed: false, optional: false, required: true
  private _triggerType?: string; 
  public get triggerType() {
    return this.getStringAttribute('trigger_type');
  }
  public set triggerType(value: string) {
    this._triggerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTypeInput() {
    return this._triggerType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule oci_datascience_schedule}
*/
export class DatascienceSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_datascience_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatascienceSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatascienceSchedule to import
  * @param importFromId The id of the existing DatascienceSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatascienceSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_datascience_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_schedule oci_datascience_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatascienceScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: DatascienceScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datascience_schedule',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
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
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._projectId = config.projectId;
    this._action.internalValue = config.action;
    this._logDetails.internalValue = config.logDetails;
    this._timeouts.internalValue = config.timeouts;
    this._trigger.internalValue = config.trigger;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
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

  // last_schedule_run_details - computed: true, optional: false, required: false
  public get lastScheduleRunDetails() {
    return this.getStringAttribute('last_schedule_run_details');
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

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_schedule_run - computed: true, optional: false, required: false
  public get timeLastScheduleRun() {
    return this.getStringAttribute('time_last_schedule_run');
  }

  // time_next_scheduled_run - computed: true, optional: false, required: false
  public get timeNextScheduledRun() {
    return this.getStringAttribute('time_next_scheduled_run');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // action - computed: false, optional: false, required: true
  private _action = new DatascienceScheduleActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: DatascienceScheduleAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // log_details - computed: false, optional: true, required: false
  private _logDetails = new DatascienceScheduleLogDetailsOutputReference(this, "log_details");
  public get logDetails() {
    return this._logDetails;
  }
  public putLogDetails(value: DatascienceScheduleLogDetails) {
    this._logDetails.internalValue = value;
  }
  public resetLogDetails() {
    this._logDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDetailsInput() {
    return this._logDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatascienceScheduleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatascienceScheduleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // trigger - computed: false, optional: false, required: true
  private _trigger = new DatascienceScheduleTriggerOutputReference(this, "trigger");
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: DatascienceScheduleTrigger) {
    this._trigger.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      action: datascienceScheduleActionToTerraform(this._action.internalValue),
      log_details: datascienceScheduleLogDetailsToTerraform(this._logDetails.internalValue),
      timeouts: datascienceScheduleTimeoutsToTerraform(this._timeouts.internalValue),
      trigger: datascienceScheduleTriggerToTerraform(this._trigger.internalValue),
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
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action: {
        value: datascienceScheduleActionToHclTerraform(this._action.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatascienceScheduleActionList",
      },
      log_details: {
        value: datascienceScheduleLogDetailsToHclTerraform(this._logDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatascienceScheduleLogDetailsList",
      },
      timeouts: {
        value: datascienceScheduleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatascienceScheduleTimeouts",
      },
      trigger: {
        value: datascienceScheduleTriggerToHclTerraform(this._trigger.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatascienceScheduleTriggerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
