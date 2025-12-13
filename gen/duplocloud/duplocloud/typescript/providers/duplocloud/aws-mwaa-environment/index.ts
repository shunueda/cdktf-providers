// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsMwaaEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The `airflow_configuration_options` parameter specifies airflow override options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#airflow_configuration_options AwsMwaaEnvironment#airflow_configuration_options}
  */
  readonly airflowConfigurationOptions?: { [key: string]: string };
  /**
  * Airflow version of your environment, will be set by default to the latest version that MWAA supports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#airflow_version AwsMwaaEnvironment#airflow_version}
  */
  readonly airflowVersion?: string;
  /**
  * The relative path to the DAG folder on your Amazon S3 storage bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#dag_s3_path AwsMwaaEnvironment#dag_s3_path}
  */
  readonly dagS3Path: string;
  /**
  * Environment class for the cluster. Possible options are `mw1.micro`, `mw1.small`, `mw1.medium`, `mw1.large`, `mw1.xlarge`, `mw1.2xlarge`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#environment_class AwsMwaaEnvironment#environment_class}
  */
  readonly environmentClass?: string;
  /**
  * The Execution Role ARN of the Amazon MWAA Environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#execution_role_arn AwsMwaaEnvironment#execution_role_arn}
  */
  readonly executionRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#id AwsMwaaEnvironment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Amazon Resource Name (ARN) of your KMS key that you want to use for encryption. Will be set to the ARN of the managed KMS key aws/airflow by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#kms_key AwsMwaaEnvironment#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * The maximum number of workers that can be automatically scaled up. Value need to be between `1` and `25`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#max_workers AwsMwaaEnvironment#max_workers}
  */
  readonly maxWorkers?: number;
  /**
  * The minimum number of workers that you want to run in your environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#min_workers AwsMwaaEnvironment#min_workers}
  */
  readonly minWorkers?: number;
  /**
  * The name of the Apache Airflow Environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#name AwsMwaaEnvironment#name}
  */
  readonly name: string;
  /**
  * The plugins.zip file version you want to use. If not set, latest s3 file version will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#plugins_s3_object_version AwsMwaaEnvironment#plugins_s3_object_version}
  */
  readonly pluginsS3ObjectVersion?: string;
  /**
  * The relative path to the plugins.zip file on your Amazon S3 storage bucket. For example, plugins.zip. If a relative path is provided in the request, then `plugins_s3_object_version` is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#plugins_s3_path AwsMwaaEnvironment#plugins_s3_path}
  */
  readonly pluginsS3Path?: string;
  /**
  * The requirements.txt file version you want to use. If not set, latest s3 file version will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#requirements_s3_object_version AwsMwaaEnvironment#requirements_s3_object_version}
  */
  readonly requirementsS3ObjectVersion?: string;
  /**
  * The relative path to the requirements.txt file on your Amazon S3 storage bucket. For example, requirements.txt. If a relative path is provided in the request, then requirements_s3_object_version is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#requirements_s3_path AwsMwaaEnvironment#requirements_s3_path}
  */
  readonly requirementsS3Path?: string;
  /**
  * The number of schedulers that you want to run in your environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#schedulers AwsMwaaEnvironment#schedulers}
  */
  readonly schedulers?: number;
  /**
  * The Amazon Resource Name (ARN) of your Amazon S3 storage bucket. For example, arn:aws:s3:::airflow-mybucketname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#source_bucket_arn AwsMwaaEnvironment#source_bucket_arn}
  */
  readonly sourceBucketArn: string;
  /**
  * The startup script file version you want to use. If not set, latest s3 file version will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#startup_script_s3_object_version AwsMwaaEnvironment#startup_script_s3_object_version}
  */
  readonly startupScriptS3ObjectVersion?: string;
  /**
  * The relative path to the startup script file on your Amazon S3 storage bucket. For example, startup_script.sh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#startup_script_s3_path AwsMwaaEnvironment#startup_script_s3_path}
  */
  readonly startupScriptS3Path?: string;
  /**
  * The GUID of the tenant that the Managed Workflows Apache Airflow will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#tenant_id AwsMwaaEnvironment#tenant_id}
  */
  readonly tenantId: string;
  /**
  * Whether or not to wait until Amazon MWAA Environment to be ready, after creation. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#wait_until_ready AwsMwaaEnvironment#wait_until_ready}
  */
  readonly waitUntilReady?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether the webserver should be accessible over the internet or via your specified VPC.  Defaults to `PUBLIC_ONLY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#webserver_access_mode AwsMwaaEnvironment#webserver_access_mode}
  */
  readonly webserverAccessMode?: string;
  /**
  * Specifies the start date for the weekly maintenance window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#weekly_maintenance_window_start AwsMwaaEnvironment#weekly_maintenance_window_start}
  */
  readonly weeklyMaintenanceWindowStart?: string;
  /**
  * logging_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#logging_configuration AwsMwaaEnvironment#logging_configuration}
  */
  readonly loggingConfiguration?: AwsMwaaEnvironmentLoggingConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#timeouts AwsMwaaEnvironment#timeouts}
  */
  readonly timeouts?: AwsMwaaEnvironmentTimeouts;
}
export interface AwsMwaaEnvironmentLastUpdatedError {
}

export function awsMwaaEnvironmentLastUpdatedErrorToTerraform(struct?: AwsMwaaEnvironmentLastUpdatedError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function awsMwaaEnvironmentLastUpdatedErrorToHclTerraform(struct?: AwsMwaaEnvironmentLastUpdatedError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AwsMwaaEnvironmentLastUpdatedErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsMwaaEnvironmentLastUpdatedError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsMwaaEnvironmentLastUpdatedError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }
}

export class AwsMwaaEnvironmentLastUpdatedErrorList extends cdktf.ComplexList {

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
  public get(index: number): AwsMwaaEnvironmentLastUpdatedErrorOutputReference {
    return new AwsMwaaEnvironmentLastUpdatedErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsMwaaEnvironmentLastUpdated {
}

export function awsMwaaEnvironmentLastUpdatedToTerraform(struct?: AwsMwaaEnvironmentLastUpdated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function awsMwaaEnvironmentLastUpdatedToHclTerraform(struct?: AwsMwaaEnvironmentLastUpdated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AwsMwaaEnvironmentLastUpdatedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsMwaaEnvironmentLastUpdated | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsMwaaEnvironmentLastUpdated | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // error - computed: true, optional: false, required: false
  private _error = new AwsMwaaEnvironmentLastUpdatedErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class AwsMwaaEnvironmentLastUpdatedList extends cdktf.ComplexList {

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
  public get(index: number): AwsMwaaEnvironmentLastUpdatedOutputReference {
    return new AwsMwaaEnvironmentLastUpdatedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsMwaaEnvironmentLoggingConfigurationDagProcessingLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#enabled AwsMwaaEnvironment#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#log_level AwsMwaaEnvironment#log_level}
  */
  readonly logLevel?: string;
}

export function awsMwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform(struct?: AwsMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference | AwsMwaaEnvironmentLoggingConfigurationDagProcessingLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
  }
}


export function awsMwaaEnvironmentLoggingConfigurationDagProcessingLogsToHclTerraform(struct?: AwsMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference | AwsMwaaEnvironmentLoggingConfigurationDagProcessingLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsMwaaEnvironmentLoggingConfigurationDagProcessingLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsMwaaEnvironmentLoggingConfigurationDagProcessingLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logLevel = value.logLevel;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }
}
export interface AwsMwaaEnvironmentLoggingConfigurationSchedulerLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#enabled AwsMwaaEnvironment#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#log_level AwsMwaaEnvironment#log_level}
  */
  readonly logLevel?: string;
}

export function awsMwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform(struct?: AwsMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference | AwsMwaaEnvironmentLoggingConfigurationSchedulerLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
  }
}


export function awsMwaaEnvironmentLoggingConfigurationSchedulerLogsToHclTerraform(struct?: AwsMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference | AwsMwaaEnvironmentLoggingConfigurationSchedulerLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsMwaaEnvironmentLoggingConfigurationSchedulerLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsMwaaEnvironmentLoggingConfigurationSchedulerLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logLevel = value.logLevel;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }
}
export interface AwsMwaaEnvironmentLoggingConfigurationTaskLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#enabled AwsMwaaEnvironment#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#log_level AwsMwaaEnvironment#log_level}
  */
  readonly logLevel?: string;
}

export function awsMwaaEnvironmentLoggingConfigurationTaskLogsToTerraform(struct?: AwsMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference | AwsMwaaEnvironmentLoggingConfigurationTaskLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
  }
}


export function awsMwaaEnvironmentLoggingConfigurationTaskLogsToHclTerraform(struct?: AwsMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference | AwsMwaaEnvironmentLoggingConfigurationTaskLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsMwaaEnvironmentLoggingConfigurationTaskLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsMwaaEnvironmentLoggingConfigurationTaskLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logLevel = value.logLevel;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }
}
export interface AwsMwaaEnvironmentLoggingConfigurationWebserverLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#enabled AwsMwaaEnvironment#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#log_level AwsMwaaEnvironment#log_level}
  */
  readonly logLevel?: string;
}

export function awsMwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform(struct?: AwsMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference | AwsMwaaEnvironmentLoggingConfigurationWebserverLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
  }
}


export function awsMwaaEnvironmentLoggingConfigurationWebserverLogsToHclTerraform(struct?: AwsMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference | AwsMwaaEnvironmentLoggingConfigurationWebserverLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsMwaaEnvironmentLoggingConfigurationWebserverLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsMwaaEnvironmentLoggingConfigurationWebserverLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logLevel = value.logLevel;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }
}
export interface AwsMwaaEnvironmentLoggingConfigurationWorkerLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#enabled AwsMwaaEnvironment#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#log_level AwsMwaaEnvironment#log_level}
  */
  readonly logLevel?: string;
}

export function awsMwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform(struct?: AwsMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference | AwsMwaaEnvironmentLoggingConfigurationWorkerLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
  }
}


export function awsMwaaEnvironmentLoggingConfigurationWorkerLogsToHclTerraform(struct?: AwsMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference | AwsMwaaEnvironmentLoggingConfigurationWorkerLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsMwaaEnvironmentLoggingConfigurationWorkerLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsMwaaEnvironmentLoggingConfigurationWorkerLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logLevel = value.logLevel;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }
}
export interface AwsMwaaEnvironmentLoggingConfiguration {
  /**
  * dag_processing_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#dag_processing_logs AwsMwaaEnvironment#dag_processing_logs}
  */
  readonly dagProcessingLogs?: AwsMwaaEnvironmentLoggingConfigurationDagProcessingLogs;
  /**
  * scheduler_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#scheduler_logs AwsMwaaEnvironment#scheduler_logs}
  */
  readonly schedulerLogs?: AwsMwaaEnvironmentLoggingConfigurationSchedulerLogs;
  /**
  * task_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#task_logs AwsMwaaEnvironment#task_logs}
  */
  readonly taskLogs?: AwsMwaaEnvironmentLoggingConfigurationTaskLogs;
  /**
  * webserver_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#webserver_logs AwsMwaaEnvironment#webserver_logs}
  */
  readonly webserverLogs?: AwsMwaaEnvironmentLoggingConfigurationWebserverLogs;
  /**
  * worker_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#worker_logs AwsMwaaEnvironment#worker_logs}
  */
  readonly workerLogs?: AwsMwaaEnvironmentLoggingConfigurationWorkerLogs;
}

export function awsMwaaEnvironmentLoggingConfigurationToTerraform(struct?: AwsMwaaEnvironmentLoggingConfigurationOutputReference | AwsMwaaEnvironmentLoggingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dag_processing_logs: awsMwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform(struct!.dagProcessingLogs),
    scheduler_logs: awsMwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform(struct!.schedulerLogs),
    task_logs: awsMwaaEnvironmentLoggingConfigurationTaskLogsToTerraform(struct!.taskLogs),
    webserver_logs: awsMwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform(struct!.webserverLogs),
    worker_logs: awsMwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform(struct!.workerLogs),
  }
}


export function awsMwaaEnvironmentLoggingConfigurationToHclTerraform(struct?: AwsMwaaEnvironmentLoggingConfigurationOutputReference | AwsMwaaEnvironmentLoggingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dag_processing_logs: {
      value: awsMwaaEnvironmentLoggingConfigurationDagProcessingLogsToHclTerraform(struct!.dagProcessingLogs),
      isBlock: true,
      type: "list",
      storageClassType: "AwsMwaaEnvironmentLoggingConfigurationDagProcessingLogsList",
    },
    scheduler_logs: {
      value: awsMwaaEnvironmentLoggingConfigurationSchedulerLogsToHclTerraform(struct!.schedulerLogs),
      isBlock: true,
      type: "list",
      storageClassType: "AwsMwaaEnvironmentLoggingConfigurationSchedulerLogsList",
    },
    task_logs: {
      value: awsMwaaEnvironmentLoggingConfigurationTaskLogsToHclTerraform(struct!.taskLogs),
      isBlock: true,
      type: "list",
      storageClassType: "AwsMwaaEnvironmentLoggingConfigurationTaskLogsList",
    },
    webserver_logs: {
      value: awsMwaaEnvironmentLoggingConfigurationWebserverLogsToHclTerraform(struct!.webserverLogs),
      isBlock: true,
      type: "list",
      storageClassType: "AwsMwaaEnvironmentLoggingConfigurationWebserverLogsList",
    },
    worker_logs: {
      value: awsMwaaEnvironmentLoggingConfigurationWorkerLogsToHclTerraform(struct!.workerLogs),
      isBlock: true,
      type: "list",
      storageClassType: "AwsMwaaEnvironmentLoggingConfigurationWorkerLogsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsMwaaEnvironmentLoggingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsMwaaEnvironmentLoggingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dagProcessingLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dagProcessingLogs = this._dagProcessingLogs?.internalValue;
    }
    if (this._schedulerLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulerLogs = this._schedulerLogs?.internalValue;
    }
    if (this._taskLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskLogs = this._taskLogs?.internalValue;
    }
    if (this._webserverLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webserverLogs = this._webserverLogs?.internalValue;
    }
    if (this._workerLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerLogs = this._workerLogs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsMwaaEnvironmentLoggingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dagProcessingLogs.internalValue = undefined;
      this._schedulerLogs.internalValue = undefined;
      this._taskLogs.internalValue = undefined;
      this._webserverLogs.internalValue = undefined;
      this._workerLogs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dagProcessingLogs.internalValue = value.dagProcessingLogs;
      this._schedulerLogs.internalValue = value.schedulerLogs;
      this._taskLogs.internalValue = value.taskLogs;
      this._webserverLogs.internalValue = value.webserverLogs;
      this._workerLogs.internalValue = value.workerLogs;
    }
  }

  // dag_processing_logs - computed: false, optional: true, required: false
  private _dagProcessingLogs = new AwsMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference(this, "dag_processing_logs");
  public get dagProcessingLogs() {
    return this._dagProcessingLogs;
  }
  public putDagProcessingLogs(value: AwsMwaaEnvironmentLoggingConfigurationDagProcessingLogs) {
    this._dagProcessingLogs.internalValue = value;
  }
  public resetDagProcessingLogs() {
    this._dagProcessingLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dagProcessingLogsInput() {
    return this._dagProcessingLogs.internalValue;
  }

  // scheduler_logs - computed: false, optional: true, required: false
  private _schedulerLogs = new AwsMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference(this, "scheduler_logs");
  public get schedulerLogs() {
    return this._schedulerLogs;
  }
  public putSchedulerLogs(value: AwsMwaaEnvironmentLoggingConfigurationSchedulerLogs) {
    this._schedulerLogs.internalValue = value;
  }
  public resetSchedulerLogs() {
    this._schedulerLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerLogsInput() {
    return this._schedulerLogs.internalValue;
  }

  // task_logs - computed: false, optional: true, required: false
  private _taskLogs = new AwsMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference(this, "task_logs");
  public get taskLogs() {
    return this._taskLogs;
  }
  public putTaskLogs(value: AwsMwaaEnvironmentLoggingConfigurationTaskLogs) {
    this._taskLogs.internalValue = value;
  }
  public resetTaskLogs() {
    this._taskLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskLogsInput() {
    return this._taskLogs.internalValue;
  }

  // webserver_logs - computed: false, optional: true, required: false
  private _webserverLogs = new AwsMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference(this, "webserver_logs");
  public get webserverLogs() {
    return this._webserverLogs;
  }
  public putWebserverLogs(value: AwsMwaaEnvironmentLoggingConfigurationWebserverLogs) {
    this._webserverLogs.internalValue = value;
  }
  public resetWebserverLogs() {
    this._webserverLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webserverLogsInput() {
    return this._webserverLogs.internalValue;
  }

  // worker_logs - computed: false, optional: true, required: false
  private _workerLogs = new AwsMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference(this, "worker_logs");
  public get workerLogs() {
    return this._workerLogs;
  }
  public putWorkerLogs(value: AwsMwaaEnvironmentLoggingConfigurationWorkerLogs) {
    this._workerLogs.internalValue = value;
  }
  public resetWorkerLogs() {
    this._workerLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerLogsInput() {
    return this._workerLogs.internalValue;
  }
}
export interface AwsMwaaEnvironmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#create AwsMwaaEnvironment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#delete AwsMwaaEnvironment#delete}
  */
  readonly delete?: string;
}

export function awsMwaaEnvironmentTimeoutsToTerraform(struct?: AwsMwaaEnvironmentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function awsMwaaEnvironmentTimeoutsToHclTerraform(struct?: AwsMwaaEnvironmentTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsMwaaEnvironmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AwsMwaaEnvironmentTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsMwaaEnvironmentTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment duplocloud_aws_mwaa_environment}
*/
export class AwsMwaaEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_aws_mwaa_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsMwaaEnvironment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsMwaaEnvironment to import
  * @param importFromId The id of the existing AwsMwaaEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsMwaaEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_aws_mwaa_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_mwaa_environment duplocloud_aws_mwaa_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsMwaaEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: AwsMwaaEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_aws_mwaa_environment',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.31',
        providerVersionConstraint: '0.11.31'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._airflowConfigurationOptions = config.airflowConfigurationOptions;
    this._airflowVersion = config.airflowVersion;
    this._dagS3Path = config.dagS3Path;
    this._environmentClass = config.environmentClass;
    this._executionRoleArn = config.executionRoleArn;
    this._id = config.id;
    this._kmsKey = config.kmsKey;
    this._maxWorkers = config.maxWorkers;
    this._minWorkers = config.minWorkers;
    this._name = config.name;
    this._pluginsS3ObjectVersion = config.pluginsS3ObjectVersion;
    this._pluginsS3Path = config.pluginsS3Path;
    this._requirementsS3ObjectVersion = config.requirementsS3ObjectVersion;
    this._requirementsS3Path = config.requirementsS3Path;
    this._schedulers = config.schedulers;
    this._sourceBucketArn = config.sourceBucketArn;
    this._startupScriptS3ObjectVersion = config.startupScriptS3ObjectVersion;
    this._startupScriptS3Path = config.startupScriptS3Path;
    this._tenantId = config.tenantId;
    this._waitUntilReady = config.waitUntilReady;
    this._webserverAccessMode = config.webserverAccessMode;
    this._weeklyMaintenanceWindowStart = config.weeklyMaintenanceWindowStart;
    this._loggingConfiguration.internalValue = config.loggingConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // airflow_configuration_options - computed: true, optional: true, required: false
  private _airflowConfigurationOptions?: { [key: string]: string }; 
  public get airflowConfigurationOptions() {
    return this.getStringMapAttribute('airflow_configuration_options');
  }
  public set airflowConfigurationOptions(value: { [key: string]: string }) {
    this._airflowConfigurationOptions = value;
  }
  public resetAirflowConfigurationOptions() {
    this._airflowConfigurationOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get airflowConfigurationOptionsInput() {
    return this._airflowConfigurationOptions;
  }

  // airflow_version - computed: true, optional: true, required: false
  private _airflowVersion?: string; 
  public get airflowVersion() {
    return this.getStringAttribute('airflow_version');
  }
  public set airflowVersion(value: string) {
    this._airflowVersion = value;
  }
  public resetAirflowVersion() {
    this._airflowVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get airflowVersionInput() {
    return this._airflowVersion;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // dag_s3_path - computed: false, optional: false, required: true
  private _dagS3Path?: string; 
  public get dagS3Path() {
    return this.getStringAttribute('dag_s3_path');
  }
  public set dagS3Path(value: string) {
    this._dagS3Path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dagS3PathInput() {
    return this._dagS3Path;
  }

  // environment_class - computed: true, optional: true, required: false
  private _environmentClass?: string; 
  public get environmentClass() {
    return this.getStringAttribute('environment_class');
  }
  public set environmentClass(value: string) {
    this._environmentClass = value;
  }
  public resetEnvironmentClass() {
    this._environmentClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentClassInput() {
    return this._environmentClass;
  }

  // execution_role_arn - computed: true, optional: true, required: false
  private _executionRoleArn?: string; 
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  public resetExecutionRoleArn() {
    this._executionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn;
  }

  // fullname - computed: true, optional: false, required: false
  public get fullname() {
    return this.getStringAttribute('fullname');
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

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }

  // last_updated - computed: true, optional: false, required: false
  private _lastUpdated = new AwsMwaaEnvironmentLastUpdatedList(this, "last_updated", false);
  public get lastUpdated() {
    return this._lastUpdated;
  }

  // max_workers - computed: true, optional: true, required: false
  private _maxWorkers?: number; 
  public get maxWorkers() {
    return this.getNumberAttribute('max_workers');
  }
  public set maxWorkers(value: number) {
    this._maxWorkers = value;
  }
  public resetMaxWorkers() {
    this._maxWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkersInput() {
    return this._maxWorkers;
  }

  // min_workers - computed: true, optional: true, required: false
  private _minWorkers?: number; 
  public get minWorkers() {
    return this.getNumberAttribute('min_workers');
  }
  public set minWorkers(value: number) {
    this._minWorkers = value;
  }
  public resetMinWorkers() {
    this._minWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minWorkersInput() {
    return this._minWorkers;
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

  // plugins_s3_object_version - computed: true, optional: true, required: false
  private _pluginsS3ObjectVersion?: string; 
  public get pluginsS3ObjectVersion() {
    return this.getStringAttribute('plugins_s3_object_version');
  }
  public set pluginsS3ObjectVersion(value: string) {
    this._pluginsS3ObjectVersion = value;
  }
  public resetPluginsS3ObjectVersion() {
    this._pluginsS3ObjectVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginsS3ObjectVersionInput() {
    return this._pluginsS3ObjectVersion;
  }

  // plugins_s3_path - computed: true, optional: true, required: false
  private _pluginsS3Path?: string; 
  public get pluginsS3Path() {
    return this.getStringAttribute('plugins_s3_path');
  }
  public set pluginsS3Path(value: string) {
    this._pluginsS3Path = value;
  }
  public resetPluginsS3Path() {
    this._pluginsS3Path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginsS3PathInput() {
    return this._pluginsS3Path;
  }

  // requirements_s3_object_version - computed: true, optional: true, required: false
  private _requirementsS3ObjectVersion?: string; 
  public get requirementsS3ObjectVersion() {
    return this.getStringAttribute('requirements_s3_object_version');
  }
  public set requirementsS3ObjectVersion(value: string) {
    this._requirementsS3ObjectVersion = value;
  }
  public resetRequirementsS3ObjectVersion() {
    this._requirementsS3ObjectVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementsS3ObjectVersionInput() {
    return this._requirementsS3ObjectVersion;
  }

  // requirements_s3_path - computed: true, optional: true, required: false
  private _requirementsS3Path?: string; 
  public get requirementsS3Path() {
    return this.getStringAttribute('requirements_s3_path');
  }
  public set requirementsS3Path(value: string) {
    this._requirementsS3Path = value;
  }
  public resetRequirementsS3Path() {
    this._requirementsS3Path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementsS3PathInput() {
    return this._requirementsS3Path;
  }

  // schedulers - computed: true, optional: true, required: false
  private _schedulers?: number; 
  public get schedulers() {
    return this.getNumberAttribute('schedulers');
  }
  public set schedulers(value: number) {
    this._schedulers = value;
  }
  public resetSchedulers() {
    this._schedulers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulersInput() {
    return this._schedulers;
  }

  // source_bucket_arn - computed: false, optional: false, required: true
  private _sourceBucketArn?: string; 
  public get sourceBucketArn() {
    return this.getStringAttribute('source_bucket_arn');
  }
  public set sourceBucketArn(value: string) {
    this._sourceBucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceBucketArnInput() {
    return this._sourceBucketArn;
  }

  // startup_script_s3_object_version - computed: true, optional: true, required: false
  private _startupScriptS3ObjectVersion?: string; 
  public get startupScriptS3ObjectVersion() {
    return this.getStringAttribute('startup_script_s3_object_version');
  }
  public set startupScriptS3ObjectVersion(value: string) {
    this._startupScriptS3ObjectVersion = value;
  }
  public resetStartupScriptS3ObjectVersion() {
    this._startupScriptS3ObjectVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupScriptS3ObjectVersionInput() {
    return this._startupScriptS3ObjectVersion;
  }

  // startup_script_s3_path - computed: true, optional: true, required: false
  private _startupScriptS3Path?: string; 
  public get startupScriptS3Path() {
    return this.getStringAttribute('startup_script_s3_path');
  }
  public set startupScriptS3Path(value: string) {
    this._startupScriptS3Path = value;
  }
  public resetStartupScriptS3Path() {
    this._startupScriptS3Path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupScriptS3PathInput() {
    return this._startupScriptS3Path;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getStringAttribute('tags');
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // wait_until_ready - computed: false, optional: true, required: false
  private _waitUntilReady?: boolean | cdktf.IResolvable; 
  public get waitUntilReady() {
    return this.getBooleanAttribute('wait_until_ready');
  }
  public set waitUntilReady(value: boolean | cdktf.IResolvable) {
    this._waitUntilReady = value;
  }
  public resetWaitUntilReady() {
    this._waitUntilReady = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitUntilReadyInput() {
    return this._waitUntilReady;
  }

  // webserver_access_mode - computed: false, optional: true, required: false
  private _webserverAccessMode?: string; 
  public get webserverAccessMode() {
    return this.getStringAttribute('webserver_access_mode');
  }
  public set webserverAccessMode(value: string) {
    this._webserverAccessMode = value;
  }
  public resetWebserverAccessMode() {
    this._webserverAccessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webserverAccessModeInput() {
    return this._webserverAccessMode;
  }

  // webserver_url - computed: true, optional: false, required: false
  public get webserverUrl() {
    return this.getStringAttribute('webserver_url');
  }

  // weekly_maintenance_window_start - computed: true, optional: true, required: false
  private _weeklyMaintenanceWindowStart?: string; 
  public get weeklyMaintenanceWindowStart() {
    return this.getStringAttribute('weekly_maintenance_window_start');
  }
  public set weeklyMaintenanceWindowStart(value: string) {
    this._weeklyMaintenanceWindowStart = value;
  }
  public resetWeeklyMaintenanceWindowStart() {
    this._weeklyMaintenanceWindowStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyMaintenanceWindowStartInput() {
    return this._weeklyMaintenanceWindowStart;
  }

  // logging_configuration - computed: false, optional: true, required: false
  private _loggingConfiguration = new AwsMwaaEnvironmentLoggingConfigurationOutputReference(this, "logging_configuration");
  public get loggingConfiguration() {
    return this._loggingConfiguration;
  }
  public putLoggingConfiguration(value: AwsMwaaEnvironmentLoggingConfiguration) {
    this._loggingConfiguration.internalValue = value;
  }
  public resetLoggingConfiguration() {
    this._loggingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigurationInput() {
    return this._loggingConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsMwaaEnvironmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsMwaaEnvironmentTimeouts) {
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
      airflow_configuration_options: cdktf.hashMapper(cdktf.stringToTerraform)(this._airflowConfigurationOptions),
      airflow_version: cdktf.stringToTerraform(this._airflowVersion),
      dag_s3_path: cdktf.stringToTerraform(this._dagS3Path),
      environment_class: cdktf.stringToTerraform(this._environmentClass),
      execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
      id: cdktf.stringToTerraform(this._id),
      kms_key: cdktf.stringToTerraform(this._kmsKey),
      max_workers: cdktf.numberToTerraform(this._maxWorkers),
      min_workers: cdktf.numberToTerraform(this._minWorkers),
      name: cdktf.stringToTerraform(this._name),
      plugins_s3_object_version: cdktf.stringToTerraform(this._pluginsS3ObjectVersion),
      plugins_s3_path: cdktf.stringToTerraform(this._pluginsS3Path),
      requirements_s3_object_version: cdktf.stringToTerraform(this._requirementsS3ObjectVersion),
      requirements_s3_path: cdktf.stringToTerraform(this._requirementsS3Path),
      schedulers: cdktf.numberToTerraform(this._schedulers),
      source_bucket_arn: cdktf.stringToTerraform(this._sourceBucketArn),
      startup_script_s3_object_version: cdktf.stringToTerraform(this._startupScriptS3ObjectVersion),
      startup_script_s3_path: cdktf.stringToTerraform(this._startupScriptS3Path),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      wait_until_ready: cdktf.booleanToTerraform(this._waitUntilReady),
      webserver_access_mode: cdktf.stringToTerraform(this._webserverAccessMode),
      weekly_maintenance_window_start: cdktf.stringToTerraform(this._weeklyMaintenanceWindowStart),
      logging_configuration: awsMwaaEnvironmentLoggingConfigurationToTerraform(this._loggingConfiguration.internalValue),
      timeouts: awsMwaaEnvironmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      airflow_configuration_options: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._airflowConfigurationOptions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      airflow_version: {
        value: cdktf.stringToHclTerraform(this._airflowVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dag_s3_path: {
        value: cdktf.stringToHclTerraform(this._dagS3Path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_class: {
        value: cdktf.stringToHclTerraform(this._environmentClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_role_arn: {
        value: cdktf.stringToHclTerraform(this._executionRoleArn),
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
      kms_key: {
        value: cdktf.stringToHclTerraform(this._kmsKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_workers: {
        value: cdktf.numberToHclTerraform(this._maxWorkers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_workers: {
        value: cdktf.numberToHclTerraform(this._minWorkers),
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
      plugins_s3_object_version: {
        value: cdktf.stringToHclTerraform(this._pluginsS3ObjectVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugins_s3_path: {
        value: cdktf.stringToHclTerraform(this._pluginsS3Path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requirements_s3_object_version: {
        value: cdktf.stringToHclTerraform(this._requirementsS3ObjectVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requirements_s3_path: {
        value: cdktf.stringToHclTerraform(this._requirementsS3Path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedulers: {
        value: cdktf.numberToHclTerraform(this._schedulers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_bucket_arn: {
        value: cdktf.stringToHclTerraform(this._sourceBucketArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      startup_script_s3_object_version: {
        value: cdktf.stringToHclTerraform(this._startupScriptS3ObjectVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      startup_script_s3_path: {
        value: cdktf.stringToHclTerraform(this._startupScriptS3Path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_until_ready: {
        value: cdktf.booleanToHclTerraform(this._waitUntilReady),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      webserver_access_mode: {
        value: cdktf.stringToHclTerraform(this._webserverAccessMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weekly_maintenance_window_start: {
        value: cdktf.stringToHclTerraform(this._weeklyMaintenanceWindowStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging_configuration: {
        value: awsMwaaEnvironmentLoggingConfigurationToHclTerraform(this._loggingConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsMwaaEnvironmentLoggingConfigurationList",
      },
      timeouts: {
        value: awsMwaaEnvironmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsMwaaEnvironmentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
