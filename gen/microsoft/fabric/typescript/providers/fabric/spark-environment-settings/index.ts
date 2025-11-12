// https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_environment_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SparkEnvironmentSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Publication status. Value must be one of : `4`, `8`, `16`, `32`, `64`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_environment_settings#driver_cores SparkEnvironmentSettings#driver_cores}
  */
  readonly driverCores?: number;
  /**
  * Spark driver memory. Value must be one of : `28g`, `56g`, `112g`, `224g`, `400g`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_environment_settings#driver_memory SparkEnvironmentSettings#driver_memory}
  */
  readonly driverMemory?: string;
  /**
  * Dynamic Executor Allocation properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_environment_settings#dynamic_executor_allocation SparkEnvironmentSettings#dynamic_executor_allocation}
  */
  readonly dynamicExecutorAllocation?: SparkEnvironmentSettingsDynamicExecutorAllocation;
  /**
  * <i style="color:red;font-weight: bold">(ForceNew)</i> The Environment ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_environment_settings#environment_id SparkEnvironmentSettings#environment_id}
  */
  readonly environmentId: string;
  /**
  * Spark executor core. Value must be one of : `4`, `8`, `16`, `32`, `64`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_environment_settings#executor_cores SparkEnvironmentSettings#executor_cores}
  */
  readonly executorCores?: number;
  /**
  * Spark executor memory. Value must be one of : `28g`, `56g`, `112g`, `224g`, `400g`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_environment_settings#executor_memory SparkEnvironmentSettings#executor_memory}
  */
  readonly executorMemory?: string;
  /**
  * Environment pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_environment_settings#pool SparkEnvironmentSettings#pool}
  */
  readonly pool?: SparkEnvironmentSettingsPool;
  /**
  * <i style="color:red;font-weight: bold">(ForceNew)</i> Publication status. Value must be one of : `Published`, `Staging`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_environment_settings#publication_status SparkEnvironmentSettings#publication_status}
  */
  readonly publicationStatus: string;
  /**
  * [Runtime](https://review.learn.microsoft.com/fabric/data-engineering/runtime) version. Value must be one of : `1.1`, `1.2`, `1.3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_environment_settings#runtime_version SparkEnvironmentSettings#runtime_version}
  */
  readonly runtimeVersion?: string;
  /**
  * A map of key/value pairs of Spark properties. Key must satisfy all validations: Spark properties:
  * - must starts with 'spark.'
  * - cannot contains any white spaces
  * - dot '.' is allowed but not at the start or end of the property key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_environment_settings#spark_properties SparkEnvironmentSettings#spark_properties}
  */
  readonly sparkProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_environment_settings#timeouts SparkEnvironmentSettings#timeouts}
  */
  readonly timeouts?: SparkEnvironmentSettingsTimeouts;
  /**
  * <i style="color:red;font-weight: bold">(ForceNew)</i> The Workspace ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_environment_settings#workspace_id SparkEnvironmentSettings#workspace_id}
  */
  readonly workspaceId: string;
}
export interface SparkEnvironmentSettingsDynamicExecutorAllocation {
  /**
  * The status of the dynamic executor allocation: `false` - Disabled, `true` - Enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_environment_settings#enabled SparkEnvironmentSettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum executors. Value must be at least 1. Ensure that if an attribute is set, also these are set: "[<.min_executors]".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_environment_settings#max_executors SparkEnvironmentSettings#max_executors}
  */
  readonly maxExecutors?: number;
  /**
  * The minimum executors. Value must be at least 1. Ensure that if an attribute is set, also these are set: "[<.max_executors]".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_environment_settings#min_executors SparkEnvironmentSettings#min_executors}
  */
  readonly minExecutors?: number;
}

export function sparkEnvironmentSettingsDynamicExecutorAllocationToTerraform(struct?: SparkEnvironmentSettingsDynamicExecutorAllocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_executors: cdktf.numberToTerraform(struct!.maxExecutors),
    min_executors: cdktf.numberToTerraform(struct!.minExecutors),
  }
}


export function sparkEnvironmentSettingsDynamicExecutorAllocationToHclTerraform(struct?: SparkEnvironmentSettingsDynamicExecutorAllocation | cdktf.IResolvable): any {
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
    max_executors: {
      value: cdktf.numberToHclTerraform(struct!.maxExecutors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_executors: {
      value: cdktf.numberToHclTerraform(struct!.minExecutors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SparkEnvironmentSettingsDynamicExecutorAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SparkEnvironmentSettingsDynamicExecutorAllocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxExecutors !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxExecutors = this._maxExecutors;
    }
    if (this._minExecutors !== undefined) {
      hasAnyValues = true;
      internalValueResult.minExecutors = this._minExecutors;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SparkEnvironmentSettingsDynamicExecutorAllocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._maxExecutors = undefined;
      this._minExecutors = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._maxExecutors = value.maxExecutors;
      this._minExecutors = value.minExecutors;
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

  // min_executors - computed: true, optional: true, required: false
  private _minExecutors?: number; 
  public get minExecutors() {
    return this.getNumberAttribute('min_executors');
  }
  public set minExecutors(value: number) {
    this._minExecutors = value;
  }
  public resetMinExecutors() {
    this._minExecutors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minExecutorsInput() {
    return this._minExecutors;
  }
}
export interface SparkEnvironmentSettingsPool {
  /**
  * The Pool name. `Starter Pool` means using the starting pool. Ensure that if an attribute is set, also these are set: "[<.type]".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_environment_settings#name SparkEnvironmentSettings#name}
  */
  readonly name?: string;
  /**
  * The Pool type. Value must be one of : `Capacity`, `Workspace`. Ensure that if an attribute is set, also these are set: "[<.name]".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_environment_settings#type SparkEnvironmentSettings#type}
  */
  readonly type?: string;
}

export function sparkEnvironmentSettingsPoolToTerraform(struct?: SparkEnvironmentSettingsPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function sparkEnvironmentSettingsPoolToHclTerraform(struct?: SparkEnvironmentSettingsPool | cdktf.IResolvable): any {
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

export class SparkEnvironmentSettingsPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SparkEnvironmentSettingsPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: SparkEnvironmentSettingsPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._type = value.type;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
export interface SparkEnvironmentSettingsTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_environment_settings#create SparkEnvironmentSettings#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_environment_settings#delete SparkEnvironmentSettings#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_environment_settings#read SparkEnvironmentSettings#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_environment_settings#update SparkEnvironmentSettings#update}
  */
  readonly update?: string;
}

export function sparkEnvironmentSettingsTimeoutsToTerraform(struct?: SparkEnvironmentSettingsTimeouts | cdktf.IResolvable): any {
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


export function sparkEnvironmentSettingsTimeoutsToHclTerraform(struct?: SparkEnvironmentSettingsTimeouts | cdktf.IResolvable): any {
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

export class SparkEnvironmentSettingsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SparkEnvironmentSettingsTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SparkEnvironmentSettingsTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_environment_settings fabric_spark_environment_settings}
*/
export class SparkEnvironmentSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fabric_spark_environment_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SparkEnvironmentSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SparkEnvironmentSettings to import
  * @param importFromId The id of the existing SparkEnvironmentSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_environment_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SparkEnvironmentSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fabric_spark_environment_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/spark_environment_settings fabric_spark_environment_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SparkEnvironmentSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: SparkEnvironmentSettingsConfig) {
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
    this._driverCores = config.driverCores;
    this._driverMemory = config.driverMemory;
    this._dynamicExecutorAllocation.internalValue = config.dynamicExecutorAllocation;
    this._environmentId = config.environmentId;
    this._executorCores = config.executorCores;
    this._executorMemory = config.executorMemory;
    this._pool.internalValue = config.pool;
    this._publicationStatus = config.publicationStatus;
    this._runtimeVersion = config.runtimeVersion;
    this._sparkProperties = config.sparkProperties;
    this._timeouts.internalValue = config.timeouts;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // driver_cores - computed: true, optional: true, required: false
  private _driverCores?: number; 
  public get driverCores() {
    return this.getNumberAttribute('driver_cores');
  }
  public set driverCores(value: number) {
    this._driverCores = value;
  }
  public resetDriverCores() {
    this._driverCores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverCoresInput() {
    return this._driverCores;
  }

  // driver_memory - computed: true, optional: true, required: false
  private _driverMemory?: string; 
  public get driverMemory() {
    return this.getStringAttribute('driver_memory');
  }
  public set driverMemory(value: string) {
    this._driverMemory = value;
  }
  public resetDriverMemory() {
    this._driverMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverMemoryInput() {
    return this._driverMemory;
  }

  // dynamic_executor_allocation - computed: true, optional: true, required: false
  private _dynamicExecutorAllocation = new SparkEnvironmentSettingsDynamicExecutorAllocationOutputReference(this, "dynamic_executor_allocation");
  public get dynamicExecutorAllocation() {
    return this._dynamicExecutorAllocation;
  }
  public putDynamicExecutorAllocation(value: SparkEnvironmentSettingsDynamicExecutorAllocation) {
    this._dynamicExecutorAllocation.internalValue = value;
  }
  public resetDynamicExecutorAllocation() {
    this._dynamicExecutorAllocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicExecutorAllocationInput() {
    return this._dynamicExecutorAllocation.internalValue;
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

  // executor_cores - computed: true, optional: true, required: false
  private _executorCores?: number; 
  public get executorCores() {
    return this.getNumberAttribute('executor_cores');
  }
  public set executorCores(value: number) {
    this._executorCores = value;
  }
  public resetExecutorCores() {
    this._executorCores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executorCoresInput() {
    return this._executorCores;
  }

  // executor_memory - computed: true, optional: true, required: false
  private _executorMemory?: string; 
  public get executorMemory() {
    return this.getStringAttribute('executor_memory');
  }
  public set executorMemory(value: string) {
    this._executorMemory = value;
  }
  public resetExecutorMemory() {
    this._executorMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executorMemoryInput() {
    return this._executorMemory;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pool - computed: true, optional: true, required: false
  private _pool = new SparkEnvironmentSettingsPoolOutputReference(this, "pool");
  public get pool() {
    return this._pool;
  }
  public putPool(value: SparkEnvironmentSettingsPool) {
    this._pool.internalValue = value;
  }
  public resetPool() {
    this._pool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool.internalValue;
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

  // spark_properties - computed: true, optional: true, required: false
  private _sparkProperties?: { [key: string]: string }; 
  public get sparkProperties() {
    return this.getStringMapAttribute('spark_properties');
  }
  public set sparkProperties(value: { [key: string]: string }) {
    this._sparkProperties = value;
  }
  public resetSparkProperties() {
    this._sparkProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkPropertiesInput() {
    return this._sparkProperties;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SparkEnvironmentSettingsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SparkEnvironmentSettingsTimeouts) {
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
      driver_cores: cdktf.numberToTerraform(this._driverCores),
      driver_memory: cdktf.stringToTerraform(this._driverMemory),
      dynamic_executor_allocation: sparkEnvironmentSettingsDynamicExecutorAllocationToTerraform(this._dynamicExecutorAllocation.internalValue),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      executor_cores: cdktf.numberToTerraform(this._executorCores),
      executor_memory: cdktf.stringToTerraform(this._executorMemory),
      pool: sparkEnvironmentSettingsPoolToTerraform(this._pool.internalValue),
      publication_status: cdktf.stringToTerraform(this._publicationStatus),
      runtime_version: cdktf.stringToTerraform(this._runtimeVersion),
      spark_properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._sparkProperties),
      timeouts: sparkEnvironmentSettingsTimeoutsToTerraform(this._timeouts.internalValue),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      driver_cores: {
        value: cdktf.numberToHclTerraform(this._driverCores),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      driver_memory: {
        value: cdktf.stringToHclTerraform(this._driverMemory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_executor_allocation: {
        value: sparkEnvironmentSettingsDynamicExecutorAllocationToHclTerraform(this._dynamicExecutorAllocation.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SparkEnvironmentSettingsDynamicExecutorAllocation",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      executor_cores: {
        value: cdktf.numberToHclTerraform(this._executorCores),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      executor_memory: {
        value: cdktf.stringToHclTerraform(this._executorMemory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool: {
        value: sparkEnvironmentSettingsPoolToHclTerraform(this._pool.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SparkEnvironmentSettingsPool",
      },
      publication_status: {
        value: cdktf.stringToHclTerraform(this._publicationStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime_version: {
        value: cdktf.stringToHclTerraform(this._runtimeVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spark_properties: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._sparkProperties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeouts: {
        value: sparkEnvironmentSettingsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SparkEnvironmentSettingsTimeouts",
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
