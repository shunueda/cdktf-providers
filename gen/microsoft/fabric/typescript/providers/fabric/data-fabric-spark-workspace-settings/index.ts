// https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/data-sources/spark_workspace_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFabricSparkWorkspaceSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/data-sources/spark_workspace_settings#timeouts DataFabricSparkWorkspaceSettings#timeouts}
  */
  readonly timeouts?: DataFabricSparkWorkspaceSettingsTimeouts;
  /**
  * The Workspace ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/data-sources/spark_workspace_settings#workspace_id DataFabricSparkWorkspaceSettings#workspace_id}
  */
  readonly workspaceId: string;
}
export interface DataFabricSparkWorkspaceSettingsAutomaticLog {
}

export function dataFabricSparkWorkspaceSettingsAutomaticLogToTerraform(struct?: DataFabricSparkWorkspaceSettingsAutomaticLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFabricSparkWorkspaceSettingsAutomaticLogToHclTerraform(struct?: DataFabricSparkWorkspaceSettingsAutomaticLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFabricSparkWorkspaceSettingsAutomaticLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFabricSparkWorkspaceSettingsAutomaticLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFabricSparkWorkspaceSettingsAutomaticLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataFabricSparkWorkspaceSettingsEnvironment {
}

export function dataFabricSparkWorkspaceSettingsEnvironmentToTerraform(struct?: DataFabricSparkWorkspaceSettingsEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFabricSparkWorkspaceSettingsEnvironmentToHclTerraform(struct?: DataFabricSparkWorkspaceSettingsEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFabricSparkWorkspaceSettingsEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFabricSparkWorkspaceSettingsEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFabricSparkWorkspaceSettingsEnvironment | undefined) {
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

  // runtime_version - computed: true, optional: false, required: false
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }
}
export interface DataFabricSparkWorkspaceSettingsHighConcurrency {
}

export function dataFabricSparkWorkspaceSettingsHighConcurrencyToTerraform(struct?: DataFabricSparkWorkspaceSettingsHighConcurrency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFabricSparkWorkspaceSettingsHighConcurrencyToHclTerraform(struct?: DataFabricSparkWorkspaceSettingsHighConcurrency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFabricSparkWorkspaceSettingsHighConcurrencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFabricSparkWorkspaceSettingsHighConcurrency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFabricSparkWorkspaceSettingsHighConcurrency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // notebook_interactive_run_enabled - computed: true, optional: false, required: false
  public get notebookInteractiveRunEnabled() {
    return this.getBooleanAttribute('notebook_interactive_run_enabled');
  }

  // notebook_pipeline_run_enabled - computed: true, optional: false, required: false
  public get notebookPipelineRunEnabled() {
    return this.getBooleanAttribute('notebook_pipeline_run_enabled');
  }
}
export interface DataFabricSparkWorkspaceSettingsJob {
}

export function dataFabricSparkWorkspaceSettingsJobToTerraform(struct?: DataFabricSparkWorkspaceSettingsJob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFabricSparkWorkspaceSettingsJobToHclTerraform(struct?: DataFabricSparkWorkspaceSettingsJob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFabricSparkWorkspaceSettingsJobOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFabricSparkWorkspaceSettingsJob | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFabricSparkWorkspaceSettingsJob | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conservative_job_admission_enabled - computed: true, optional: false, required: false
  public get conservativeJobAdmissionEnabled() {
    return this.getBooleanAttribute('conservative_job_admission_enabled');
  }

  // session_timeout_in_minutes - computed: true, optional: false, required: false
  public get sessionTimeoutInMinutes() {
    return this.getNumberAttribute('session_timeout_in_minutes');
  }
}
export interface DataFabricSparkWorkspaceSettingsPoolDefaultPool {
}

export function dataFabricSparkWorkspaceSettingsPoolDefaultPoolToTerraform(struct?: DataFabricSparkWorkspaceSettingsPoolDefaultPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFabricSparkWorkspaceSettingsPoolDefaultPoolToHclTerraform(struct?: DataFabricSparkWorkspaceSettingsPoolDefaultPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFabricSparkWorkspaceSettingsPoolDefaultPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFabricSparkWorkspaceSettingsPoolDefaultPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFabricSparkWorkspaceSettingsPoolDefaultPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataFabricSparkWorkspaceSettingsPoolStarterPool {
}

export function dataFabricSparkWorkspaceSettingsPoolStarterPoolToTerraform(struct?: DataFabricSparkWorkspaceSettingsPoolStarterPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFabricSparkWorkspaceSettingsPoolStarterPoolToHclTerraform(struct?: DataFabricSparkWorkspaceSettingsPoolStarterPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFabricSparkWorkspaceSettingsPoolStarterPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFabricSparkWorkspaceSettingsPoolStarterPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFabricSparkWorkspaceSettingsPoolStarterPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_executors - computed: true, optional: false, required: false
  public get maxExecutors() {
    return this.getNumberAttribute('max_executors');
  }

  // max_node_count - computed: true, optional: false, required: false
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }
}
export interface DataFabricSparkWorkspaceSettingsPool {
}

export function dataFabricSparkWorkspaceSettingsPoolToTerraform(struct?: DataFabricSparkWorkspaceSettingsPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFabricSparkWorkspaceSettingsPoolToHclTerraform(struct?: DataFabricSparkWorkspaceSettingsPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFabricSparkWorkspaceSettingsPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFabricSparkWorkspaceSettingsPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFabricSparkWorkspaceSettingsPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // customize_compute_enabled - computed: true, optional: false, required: false
  public get customizeComputeEnabled() {
    return this.getBooleanAttribute('customize_compute_enabled');
  }

  // default_pool - computed: true, optional: false, required: false
  private _defaultPool = new DataFabricSparkWorkspaceSettingsPoolDefaultPoolOutputReference(this, "default_pool");
  public get defaultPool() {
    return this._defaultPool;
  }

  // starter_pool - computed: true, optional: false, required: false
  private _starterPool = new DataFabricSparkWorkspaceSettingsPoolStarterPoolOutputReference(this, "starter_pool");
  public get starterPool() {
    return this._starterPool;
  }
}
export interface DataFabricSparkWorkspaceSettingsTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/data-sources/spark_workspace_settings#read DataFabricSparkWorkspaceSettings#read}
  */
  readonly read?: string;
}

export function dataFabricSparkWorkspaceSettingsTimeoutsToTerraform(struct?: DataFabricSparkWorkspaceSettingsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataFabricSparkWorkspaceSettingsTimeoutsToHclTerraform(struct?: DataFabricSparkWorkspaceSettingsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFabricSparkWorkspaceSettingsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFabricSparkWorkspaceSettingsTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFabricSparkWorkspaceSettingsTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/data-sources/spark_workspace_settings fabric_spark_workspace_settings}
*/
export class DataFabricSparkWorkspaceSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fabric_spark_workspace_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFabricSparkWorkspaceSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFabricSparkWorkspaceSettings to import
  * @param importFromId The id of the existing DataFabricSparkWorkspaceSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/data-sources/spark_workspace_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFabricSparkWorkspaceSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fabric_spark_workspace_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/data-sources/spark_workspace_settings fabric_spark_workspace_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFabricSparkWorkspaceSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: DataFabricSparkWorkspaceSettingsConfig) {
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
    this._timeouts.internalValue = config.timeouts;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automatic_log - computed: true, optional: false, required: false
  private _automaticLog = new DataFabricSparkWorkspaceSettingsAutomaticLogOutputReference(this, "automatic_log");
  public get automaticLog() {
    return this._automaticLog;
  }

  // environment - computed: true, optional: false, required: false
  private _environment = new DataFabricSparkWorkspaceSettingsEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }

  // high_concurrency - computed: true, optional: false, required: false
  private _highConcurrency = new DataFabricSparkWorkspaceSettingsHighConcurrencyOutputReference(this, "high_concurrency");
  public get highConcurrency() {
    return this._highConcurrency;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job - computed: true, optional: false, required: false
  private _job = new DataFabricSparkWorkspaceSettingsJobOutputReference(this, "job");
  public get job() {
    return this._job;
  }

  // pool - computed: true, optional: false, required: false
  private _pool = new DataFabricSparkWorkspaceSettingsPoolOutputReference(this, "pool");
  public get pool() {
    return this._pool;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataFabricSparkWorkspaceSettingsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataFabricSparkWorkspaceSettingsTimeouts) {
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
      timeouts: dataFabricSparkWorkspaceSettingsTimeoutsToTerraform(this._timeouts.internalValue),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      timeouts: {
        value: dataFabricSparkWorkspaceSettingsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFabricSparkWorkspaceSettingsTimeouts",
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
