// https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_workspace_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SparkWorkspaceSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Automatic Log properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_workspace_settings#automatic_log SparkWorkspaceSettings#automatic_log}
  */
  readonly automaticLog?: SparkWorkspaceSettingsAutomaticLog;
  /**
  * Environment properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_workspace_settings#environment SparkWorkspaceSettings#environment}
  */
  readonly environment?: SparkWorkspaceSettingsEnvironment;
  /**
  * High Concurrency properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_workspace_settings#high_concurrency SparkWorkspaceSettings#high_concurrency}
  */
  readonly highConcurrency?: SparkWorkspaceSettingsHighConcurrency;
  /**
  * Job properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_workspace_settings#job SparkWorkspaceSettings#job}
  */
  readonly job?: SparkWorkspaceSettingsJob;
  /**
  * Pool properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_workspace_settings#pool SparkWorkspaceSettings#pool}
  */
  readonly pool?: SparkWorkspaceSettingsPool;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_workspace_settings#timeouts SparkWorkspaceSettings#timeouts}
  */
  readonly timeouts?: SparkWorkspaceSettingsTimeouts;
  /**
  * <i style="color:red;font-weight: bold">(ForceNew)</i> The Workspace ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_workspace_settings#workspace_id SparkWorkspaceSettings#workspace_id}
  */
  readonly workspaceId: string;
}
export interface SparkWorkspaceSettingsAutomaticLog {
  /**
  * The status of the automatic log: `false` - Disabled, `true` - Enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_workspace_settings#enabled SparkWorkspaceSettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function sparkWorkspaceSettingsAutomaticLogToTerraform(struct?: SparkWorkspaceSettingsAutomaticLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function sparkWorkspaceSettingsAutomaticLogToHclTerraform(struct?: SparkWorkspaceSettingsAutomaticLog | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SparkWorkspaceSettingsAutomaticLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SparkWorkspaceSettingsAutomaticLog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SparkWorkspaceSettingsAutomaticLog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
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
}
export interface SparkWorkspaceSettingsEnvironment {
  /**
  * The name of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_workspace_settings#name SparkWorkspaceSettings#name}
  */
  readonly name?: string;
  /**
  * [Runtime](https://review.learn.microsoft.com/fabric/data-engineering/runtime) version. Value must be one of : `1.1`, `1.2`, `1.3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_workspace_settings#runtime_version SparkWorkspaceSettings#runtime_version}
  */
  readonly runtimeVersion?: string;
}

export function sparkWorkspaceSettingsEnvironmentToTerraform(struct?: SparkWorkspaceSettingsEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    runtime_version: cdktf.stringToTerraform(struct!.runtimeVersion),
  }
}


export function sparkWorkspaceSettingsEnvironmentToHclTerraform(struct?: SparkWorkspaceSettingsEnvironment | cdktf.IResolvable): any {
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
    runtime_version: {
      value: cdktf.stringToHclTerraform(struct!.runtimeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SparkWorkspaceSettingsEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SparkWorkspaceSettingsEnvironment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._runtimeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeVersion = this._runtimeVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SparkWorkspaceSettingsEnvironment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._runtimeVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._runtimeVersion = value.runtimeVersion;
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

  // runtime_version - computed: true, optional: true, required: false
  private _runtimeVersion?: string; 
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }
  public set runtimeVersion(value: string) {
    this._runtimeVersion = value;
  }
  public resetRuntimeVersion() {
    this._runtimeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeVersionInput() {
    return this._runtimeVersion;
  }
}
export interface SparkWorkspaceSettingsHighConcurrency {
  /**
  * The status of the high concurrency for notebook interactive run: `false` - Disabled, `true` - Enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_workspace_settings#notebook_interactive_run_enabled SparkWorkspaceSettings#notebook_interactive_run_enabled}
  */
  readonly notebookInteractiveRunEnabled?: boolean | cdktf.IResolvable;
  /**
  * The status of the high concurrency for notebook pipeline run: `false` - Disabled, `true` - Enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_workspace_settings#notebook_pipeline_run_enabled SparkWorkspaceSettings#notebook_pipeline_run_enabled}
  */
  readonly notebookPipelineRunEnabled?: boolean | cdktf.IResolvable;
}

export function sparkWorkspaceSettingsHighConcurrencyToTerraform(struct?: SparkWorkspaceSettingsHighConcurrency | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notebook_interactive_run_enabled: cdktf.booleanToTerraform(struct!.notebookInteractiveRunEnabled),
    notebook_pipeline_run_enabled: cdktf.booleanToTerraform(struct!.notebookPipelineRunEnabled),
  }
}


export function sparkWorkspaceSettingsHighConcurrencyToHclTerraform(struct?: SparkWorkspaceSettingsHighConcurrency | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notebook_interactive_run_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.notebookInteractiveRunEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notebook_pipeline_run_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.notebookPipelineRunEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SparkWorkspaceSettingsHighConcurrencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SparkWorkspaceSettingsHighConcurrency | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notebookInteractiveRunEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookInteractiveRunEnabled = this._notebookInteractiveRunEnabled;
    }
    if (this._notebookPipelineRunEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookPipelineRunEnabled = this._notebookPipelineRunEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SparkWorkspaceSettingsHighConcurrency | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notebookInteractiveRunEnabled = undefined;
      this._notebookPipelineRunEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notebookInteractiveRunEnabled = value.notebookInteractiveRunEnabled;
      this._notebookPipelineRunEnabled = value.notebookPipelineRunEnabled;
    }
  }

  // notebook_interactive_run_enabled - computed: true, optional: true, required: false
  private _notebookInteractiveRunEnabled?: boolean | cdktf.IResolvable; 
  public get notebookInteractiveRunEnabled() {
    return this.getBooleanAttribute('notebook_interactive_run_enabled');
  }
  public set notebookInteractiveRunEnabled(value: boolean | cdktf.IResolvable) {
    this._notebookInteractiveRunEnabled = value;
  }
  public resetNotebookInteractiveRunEnabled() {
    this._notebookInteractiveRunEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookInteractiveRunEnabledInput() {
    return this._notebookInteractiveRunEnabled;
  }

  // notebook_pipeline_run_enabled - computed: true, optional: true, required: false
  private _notebookPipelineRunEnabled?: boolean | cdktf.IResolvable; 
  public get notebookPipelineRunEnabled() {
    return this.getBooleanAttribute('notebook_pipeline_run_enabled');
  }
  public set notebookPipelineRunEnabled(value: boolean | cdktf.IResolvable) {
    this._notebookPipelineRunEnabled = value;
  }
  public resetNotebookPipelineRunEnabled() {
    this._notebookPipelineRunEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookPipelineRunEnabledInput() {
    return this._notebookPipelineRunEnabled;
  }
}
export interface SparkWorkspaceSettingsJob {
  /**
  * Reserve maximum cores for active Spark jobs. When this setting is enabled, your Fabric capacity reserves the maximum number of cores needed for active Spark jobs, ensuring job reliability by making sure that cores are available if a job scales up. When this setting is disabled, jobs are started based on the minimum number of cores needed, letting more jobs run at the same time. `false` - Disabled, `true` - Enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_workspace_settings#conservative_job_admission_enabled SparkWorkspaceSettings#conservative_job_admission_enabled}
  */
  readonly conservativeJobAdmissionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Time to terminate inactive Spark sessions. The maximum is 14 days (20160 minutes). Value must be at most 20160.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_workspace_settings#session_timeout_in_minutes SparkWorkspaceSettings#session_timeout_in_minutes}
  */
  readonly sessionTimeoutInMinutes?: number;
}

export function sparkWorkspaceSettingsJobToTerraform(struct?: SparkWorkspaceSettingsJob | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conservative_job_admission_enabled: cdktf.booleanToTerraform(struct!.conservativeJobAdmissionEnabled),
    session_timeout_in_minutes: cdktf.numberToTerraform(struct!.sessionTimeoutInMinutes),
  }
}


export function sparkWorkspaceSettingsJobToHclTerraform(struct?: SparkWorkspaceSettingsJob | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conservative_job_admission_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.conservativeJobAdmissionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    session_timeout_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.sessionTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SparkWorkspaceSettingsJobOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SparkWorkspaceSettingsJob | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conservativeJobAdmissionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.conservativeJobAdmissionEnabled = this._conservativeJobAdmissionEnabled;
    }
    if (this._sessionTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTimeoutInMinutes = this._sessionTimeoutInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SparkWorkspaceSettingsJob | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conservativeJobAdmissionEnabled = undefined;
      this._sessionTimeoutInMinutes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conservativeJobAdmissionEnabled = value.conservativeJobAdmissionEnabled;
      this._sessionTimeoutInMinutes = value.sessionTimeoutInMinutes;
    }
  }

  // conservative_job_admission_enabled - computed: true, optional: true, required: false
  private _conservativeJobAdmissionEnabled?: boolean | cdktf.IResolvable; 
  public get conservativeJobAdmissionEnabled() {
    return this.getBooleanAttribute('conservative_job_admission_enabled');
  }
  public set conservativeJobAdmissionEnabled(value: boolean | cdktf.IResolvable) {
    this._conservativeJobAdmissionEnabled = value;
  }
  public resetConservativeJobAdmissionEnabled() {
    this._conservativeJobAdmissionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conservativeJobAdmissionEnabledInput() {
    return this._conservativeJobAdmissionEnabled;
  }

  // session_timeout_in_minutes - computed: true, optional: true, required: false
  private _sessionTimeoutInMinutes?: number; 
  public get sessionTimeoutInMinutes() {
    return this.getNumberAttribute('session_timeout_in_minutes');
  }
  public set sessionTimeoutInMinutes(value: number) {
    this._sessionTimeoutInMinutes = value;
  }
  public resetSessionTimeoutInMinutes() {
    this._sessionTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutInMinutesInput() {
    return this._sessionTimeoutInMinutes;
  }
}
export interface SparkWorkspaceSettingsPoolDefaultPool {
  /**
  * The Pool ID. `00000000-0000-0000-0000-000000000000` means use the starter pool. Ensure that if an attribute is set, these are not set: "[<.name,<.type]".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_workspace_settings#id SparkWorkspaceSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Pool name. `Starter Pool` means use the starting pool. Ensure that if an attribute is set, also these are set: "[<.type]". Ensure that if an attribute is set, these are not set: "[<.id]".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_workspace_settings#name SparkWorkspaceSettings#name}
  */
  readonly name?: string;
  /**
  * The Pool type. Value must be one of : `Capacity`, `Workspace`. Ensure that if an attribute is set, also these are set: "[<.name]". Ensure that if an attribute is set, these are not set: "[<.id]".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_workspace_settings#type SparkWorkspaceSettings#type}
  */
  readonly type?: string;
}

export function sparkWorkspaceSettingsPoolDefaultPoolToTerraform(struct?: SparkWorkspaceSettingsPoolDefaultPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function sparkWorkspaceSettingsPoolDefaultPoolToHclTerraform(struct?: SparkWorkspaceSettingsPoolDefaultPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class SparkWorkspaceSettingsPoolDefaultPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SparkWorkspaceSettingsPoolDefaultPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SparkWorkspaceSettingsPoolDefaultPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface SparkWorkspaceSettingsPoolStarterPool {
  /**
  * The maximum executors count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_workspace_settings#max_executors SparkWorkspaceSettings#max_executors}
  */
  readonly maxExecutors?: number;
  /**
  * The maximum node count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_workspace_settings#max_node_count SparkWorkspaceSettings#max_node_count}
  */
  readonly maxNodeCount?: number;
}

export function sparkWorkspaceSettingsPoolStarterPoolToTerraform(struct?: SparkWorkspaceSettingsPoolStarterPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_executors: cdktf.numberToTerraform(struct!.maxExecutors),
    max_node_count: cdktf.numberToTerraform(struct!.maxNodeCount),
  }
}


export function sparkWorkspaceSettingsPoolStarterPoolToHclTerraform(struct?: SparkWorkspaceSettingsPoolStarterPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_executors: {
      value: cdktf.numberToHclTerraform(struct!.maxExecutors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_node_count: {
      value: cdktf.numberToHclTerraform(struct!.maxNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SparkWorkspaceSettingsPoolStarterPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SparkWorkspaceSettingsPoolStarterPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxExecutors !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxExecutors = this._maxExecutors;
    }
    if (this._maxNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodeCount = this._maxNodeCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SparkWorkspaceSettingsPoolStarterPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxExecutors = undefined;
      this._maxNodeCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxExecutors = value.maxExecutors;
      this._maxNodeCount = value.maxNodeCount;
    }
  }

  // max_executors - computed: true, optional: true, required: false
  private _maxExecutors?: number; 
  public get maxExecutors() {
    return this.getNumberAttribute('max_executors');
  }
  public set maxExecutors(value: number) {
    this._maxExecutors = value;
  }
  public resetMaxExecutors() {
    this._maxExecutors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxExecutorsInput() {
    return this._maxExecutors;
  }

  // max_node_count - computed: true, optional: true, required: false
  private _maxNodeCount?: number; 
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }
  public set maxNodeCount(value: number) {
    this._maxNodeCount = value;
  }
  public resetMaxNodeCount() {
    this._maxNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodeCountInput() {
    return this._maxNodeCount;
  }
}
export interface SparkWorkspaceSettingsPool {
  /**
  * Customize compute configurations for items. `false` - Disabled, `true` - Enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_workspace_settings#customize_compute_enabled SparkWorkspaceSettings#customize_compute_enabled}
  */
  readonly customizeComputeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Default pool for workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_workspace_settings#default_pool SparkWorkspaceSettings#default_pool}
  */
  readonly defaultPool?: SparkWorkspaceSettingsPoolDefaultPool;
  /**
  * Starter pool for workspace. For more information about configuring starter pool, see [configuring starter pool](https://review.learn.microsoft.com/fabric/data-engineering/configure-starter-pools).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_workspace_settings#starter_pool SparkWorkspaceSettings#starter_pool}
  */
  readonly starterPool?: SparkWorkspaceSettingsPoolStarterPool;
}

export function sparkWorkspaceSettingsPoolToTerraform(struct?: SparkWorkspaceSettingsPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customize_compute_enabled: cdktf.booleanToTerraform(struct!.customizeComputeEnabled),
    default_pool: sparkWorkspaceSettingsPoolDefaultPoolToTerraform(struct!.defaultPool),
    starter_pool: sparkWorkspaceSettingsPoolStarterPoolToTerraform(struct!.starterPool),
  }
}


export function sparkWorkspaceSettingsPoolToHclTerraform(struct?: SparkWorkspaceSettingsPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customize_compute_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.customizeComputeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_pool: {
      value: sparkWorkspaceSettingsPoolDefaultPoolToHclTerraform(struct!.defaultPool),
      isBlock: true,
      type: "struct",
      storageClassType: "SparkWorkspaceSettingsPoolDefaultPool",
    },
    starter_pool: {
      value: sparkWorkspaceSettingsPoolStarterPoolToHclTerraform(struct!.starterPool),
      isBlock: true,
      type: "struct",
      storageClassType: "SparkWorkspaceSettingsPoolStarterPool",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SparkWorkspaceSettingsPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SparkWorkspaceSettingsPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customizeComputeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.customizeComputeEnabled = this._customizeComputeEnabled;
    }
    if (this._defaultPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPool = this._defaultPool?.internalValue;
    }
    if (this._starterPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.starterPool = this._starterPool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SparkWorkspaceSettingsPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customizeComputeEnabled = undefined;
      this._defaultPool.internalValue = undefined;
      this._starterPool.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customizeComputeEnabled = value.customizeComputeEnabled;
      this._defaultPool.internalValue = value.defaultPool;
      this._starterPool.internalValue = value.starterPool;
    }
  }

  // customize_compute_enabled - computed: true, optional: true, required: false
  private _customizeComputeEnabled?: boolean | cdktf.IResolvable; 
  public get customizeComputeEnabled() {
    return this.getBooleanAttribute('customize_compute_enabled');
  }
  public set customizeComputeEnabled(value: boolean | cdktf.IResolvable) {
    this._customizeComputeEnabled = value;
  }
  public resetCustomizeComputeEnabled() {
    this._customizeComputeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizeComputeEnabledInput() {
    return this._customizeComputeEnabled;
  }

  // default_pool - computed: true, optional: true, required: false
  private _defaultPool = new SparkWorkspaceSettingsPoolDefaultPoolOutputReference(this, "default_pool");
  public get defaultPool() {
    return this._defaultPool;
  }
  public putDefaultPool(value: SparkWorkspaceSettingsPoolDefaultPool) {
    this._defaultPool.internalValue = value;
  }
  public resetDefaultPool() {
    this._defaultPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPoolInput() {
    return this._defaultPool.internalValue;
  }

  // starter_pool - computed: true, optional: true, required: false
  private _starterPool = new SparkWorkspaceSettingsPoolStarterPoolOutputReference(this, "starter_pool");
  public get starterPool() {
    return this._starterPool;
  }
  public putStarterPool(value: SparkWorkspaceSettingsPoolStarterPool) {
    this._starterPool.internalValue = value;
  }
  public resetStarterPool() {
    this._starterPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get starterPoolInput() {
    return this._starterPool.internalValue;
  }
}
export interface SparkWorkspaceSettingsTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_workspace_settings#create SparkWorkspaceSettings#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_workspace_settings#delete SparkWorkspaceSettings#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_workspace_settings#read SparkWorkspaceSettings#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_workspace_settings#update SparkWorkspaceSettings#update}
  */
  readonly update?: string;
}

export function sparkWorkspaceSettingsTimeoutsToTerraform(struct?: SparkWorkspaceSettingsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function sparkWorkspaceSettingsTimeoutsToHclTerraform(struct?: SparkWorkspaceSettingsTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class SparkWorkspaceSettingsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SparkWorkspaceSettingsTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SparkWorkspaceSettingsTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_workspace_settings fabric_spark_workspace_settings}
*/
export class SparkWorkspaceSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fabric_spark_workspace_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SparkWorkspaceSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SparkWorkspaceSettings to import
  * @param importFromId The id of the existing SparkWorkspaceSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_workspace_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SparkWorkspaceSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fabric_spark_workspace_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_workspace_settings fabric_spark_workspace_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SparkWorkspaceSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: SparkWorkspaceSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'fabric_spark_workspace_settings',
      terraformGeneratorMetadata: {
        providerName: 'fabric',
        providerVersion: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._automaticLog.internalValue = config.automaticLog;
    this._environment.internalValue = config.environment;
    this._highConcurrency.internalValue = config.highConcurrency;
    this._job.internalValue = config.job;
    this._pool.internalValue = config.pool;
    this._timeouts.internalValue = config.timeouts;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automatic_log - computed: true, optional: true, required: false
  private _automaticLog = new SparkWorkspaceSettingsAutomaticLogOutputReference(this, "automatic_log");
  public get automaticLog() {
    return this._automaticLog;
  }
  public putAutomaticLog(value: SparkWorkspaceSettingsAutomaticLog) {
    this._automaticLog.internalValue = value;
  }
  public resetAutomaticLog() {
    this._automaticLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticLogInput() {
    return this._automaticLog.internalValue;
  }

  // environment - computed: true, optional: true, required: false
  private _environment = new SparkWorkspaceSettingsEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: SparkWorkspaceSettingsEnvironment) {
    this._environment.internalValue = value;
  }
  public resetEnvironment() {
    this._environment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // high_concurrency - computed: true, optional: true, required: false
  private _highConcurrency = new SparkWorkspaceSettingsHighConcurrencyOutputReference(this, "high_concurrency");
  public get highConcurrency() {
    return this._highConcurrency;
  }
  public putHighConcurrency(value: SparkWorkspaceSettingsHighConcurrency) {
    this._highConcurrency.internalValue = value;
  }
  public resetHighConcurrency() {
    this._highConcurrency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highConcurrencyInput() {
    return this._highConcurrency.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job - computed: true, optional: true, required: false
  private _job = new SparkWorkspaceSettingsJobOutputReference(this, "job");
  public get job() {
    return this._job;
  }
  public putJob(value: SparkWorkspaceSettingsJob) {
    this._job.internalValue = value;
  }
  public resetJob() {
    this._job.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobInput() {
    return this._job.internalValue;
  }

  // pool - computed: true, optional: true, required: false
  private _pool = new SparkWorkspaceSettingsPoolOutputReference(this, "pool");
  public get pool() {
    return this._pool;
  }
  public putPool(value: SparkWorkspaceSettingsPool) {
    this._pool.internalValue = value;
  }
  public resetPool() {
    this._pool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SparkWorkspaceSettingsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SparkWorkspaceSettingsTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automatic_log: sparkWorkspaceSettingsAutomaticLogToTerraform(this._automaticLog.internalValue),
      environment: sparkWorkspaceSettingsEnvironmentToTerraform(this._environment.internalValue),
      high_concurrency: sparkWorkspaceSettingsHighConcurrencyToTerraform(this._highConcurrency.internalValue),
      job: sparkWorkspaceSettingsJobToTerraform(this._job.internalValue),
      pool: sparkWorkspaceSettingsPoolToTerraform(this._pool.internalValue),
      timeouts: sparkWorkspaceSettingsTimeoutsToTerraform(this._timeouts.internalValue),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      automatic_log: {
        value: sparkWorkspaceSettingsAutomaticLogToHclTerraform(this._automaticLog.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SparkWorkspaceSettingsAutomaticLog",
      },
      environment: {
        value: sparkWorkspaceSettingsEnvironmentToHclTerraform(this._environment.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SparkWorkspaceSettingsEnvironment",
      },
      high_concurrency: {
        value: sparkWorkspaceSettingsHighConcurrencyToHclTerraform(this._highConcurrency.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SparkWorkspaceSettingsHighConcurrency",
      },
      job: {
        value: sparkWorkspaceSettingsJobToHclTerraform(this._job.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SparkWorkspaceSettingsJob",
      },
      pool: {
        value: sparkWorkspaceSettingsPoolToHclTerraform(this._pool.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SparkWorkspaceSettingsPool",
      },
      timeouts: {
        value: sparkWorkspaceSettingsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SparkWorkspaceSettingsTimeouts",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
