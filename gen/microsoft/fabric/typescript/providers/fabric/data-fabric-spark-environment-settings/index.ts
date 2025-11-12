// https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/data-sources/spark_environment_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFabricSparkEnvironmentSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Environment ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/data-sources/spark_environment_settings#environment_id DataFabricSparkEnvironmentSettings#environment_id}
  */
  readonly environmentId: string;
  /**
  * Publication status. Value must be one of : `Published`, `Staging`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/data-sources/spark_environment_settings#publication_status DataFabricSparkEnvironmentSettings#publication_status}
  */
  readonly publicationStatus: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/data-sources/spark_environment_settings#timeouts DataFabricSparkEnvironmentSettings#timeouts}
  */
  readonly timeouts?: DataFabricSparkEnvironmentSettingsTimeouts;
  /**
  * The Workspace ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/data-sources/spark_environment_settings#workspace_id DataFabricSparkEnvironmentSettings#workspace_id}
  */
  readonly workspaceId: string;
}
export interface DataFabricSparkEnvironmentSettingsDynamicExecutorAllocation {
}

export function dataFabricSparkEnvironmentSettingsDynamicExecutorAllocationToTerraform(struct?: DataFabricSparkEnvironmentSettingsDynamicExecutorAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFabricSparkEnvironmentSettingsDynamicExecutorAllocationToHclTerraform(struct?: DataFabricSparkEnvironmentSettingsDynamicExecutorAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFabricSparkEnvironmentSettingsDynamicExecutorAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFabricSparkEnvironmentSettingsDynamicExecutorAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFabricSparkEnvironmentSettingsDynamicExecutorAllocation | undefined) {
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

  // max_executors - computed: true, optional: false, required: false
  public get maxExecutors() {
    return this.getNumberAttribute('max_executors');
  }

  // min_executors - computed: true, optional: false, required: false
  public get minExecutors() {
    return this.getNumberAttribute('min_executors');
  }
}
export interface DataFabricSparkEnvironmentSettingsPool {
}

export function dataFabricSparkEnvironmentSettingsPoolToTerraform(struct?: DataFabricSparkEnvironmentSettingsPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFabricSparkEnvironmentSettingsPoolToHclTerraform(struct?: DataFabricSparkEnvironmentSettingsPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFabricSparkEnvironmentSettingsPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFabricSparkEnvironmentSettingsPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFabricSparkEnvironmentSettingsPool | undefined) {
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
export interface DataFabricSparkEnvironmentSettingsTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/data-sources/spark_environment_settings#read DataFabricSparkEnvironmentSettings#read}
  */
  readonly read?: string;
}

export function dataFabricSparkEnvironmentSettingsTimeoutsToTerraform(struct?: DataFabricSparkEnvironmentSettingsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataFabricSparkEnvironmentSettingsTimeoutsToHclTerraform(struct?: DataFabricSparkEnvironmentSettingsTimeouts | cdktf.IResolvable): any {
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

export class DataFabricSparkEnvironmentSettingsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFabricSparkEnvironmentSettingsTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataFabricSparkEnvironmentSettingsTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/data-sources/spark_environment_settings fabric_spark_environment_settings}
*/
export class DataFabricSparkEnvironmentSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fabric_spark_environment_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFabricSparkEnvironmentSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFabricSparkEnvironmentSettings to import
  * @param importFromId The id of the existing DataFabricSparkEnvironmentSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/data-sources/spark_environment_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFabricSparkEnvironmentSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fabric_spark_environment_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/data-sources/spark_environment_settings fabric_spark_environment_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFabricSparkEnvironmentSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: DataFabricSparkEnvironmentSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'fabric_spark_environment_settings',
      terraformGeneratorMetadata: {
        providerName: 'fabric',
        providerVersion: '1.6.0',
        providerVersionConstraint: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environmentId = config.environmentId;
    this._publicationStatus = config.publicationStatus;
    this._timeouts.internalValue = config.timeouts;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // driver_cores - computed: true, optional: false, required: false
  public get driverCores() {
    return this.getNumberAttribute('driver_cores');
  }

  // driver_memory - computed: true, optional: false, required: false
  public get driverMemory() {
    return this.getStringAttribute('driver_memory');
  }

  // dynamic_executor_allocation - computed: true, optional: false, required: false
  private _dynamicExecutorAllocation = new DataFabricSparkEnvironmentSettingsDynamicExecutorAllocationOutputReference(this, "dynamic_executor_allocation");
  public get dynamicExecutorAllocation() {
    return this._dynamicExecutorAllocation;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // executor_cores - computed: true, optional: false, required: false
  public get executorCores() {
    return this.getNumberAttribute('executor_cores');
  }

  // executor_memory - computed: true, optional: false, required: false
  public get executorMemory() {
    return this.getStringAttribute('executor_memory');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pool - computed: true, optional: false, required: false
  private _pool = new DataFabricSparkEnvironmentSettingsPoolOutputReference(this, "pool");
  public get pool() {
    return this._pool;
  }

  // publication_status - computed: false, optional: false, required: true
  private _publicationStatus?: string; 
  public get publicationStatus() {
    return this.getStringAttribute('publication_status');
  }
  public set publicationStatus(value: string) {
    this._publicationStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicationStatusInput() {
    return this._publicationStatus;
  }

  // runtime_version - computed: true, optional: false, required: false
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }

  // spark_properties - computed: true, optional: false, required: false
  private _sparkProperties = new cdktf.StringMap(this, "spark_properties");
  public get sparkProperties() {
    return this._sparkProperties;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataFabricSparkEnvironmentSettingsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataFabricSparkEnvironmentSettingsTimeouts) {
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
      environment_id: cdktf.stringToTerraform(this._environmentId),
      publication_status: cdktf.stringToTerraform(this._publicationStatus),
      timeouts: dataFabricSparkEnvironmentSettingsTimeoutsToTerraform(this._timeouts.internalValue),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publication_status: {
        value: cdktf.stringToHclTerraform(this._publicationStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataFabricSparkEnvironmentSettingsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFabricSparkEnvironmentSettingsTimeouts",
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
