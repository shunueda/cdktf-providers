// https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/spark_custom_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SparkCustomPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auto-scale properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/spark_custom_pool#auto_scale SparkCustomPool#auto_scale}
  */
  readonly autoScale: SparkCustomPoolAutoScale;
  /**
  * Dynamic Executor Allocation properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/spark_custom_pool#dynamic_executor_allocation SparkCustomPool#dynamic_executor_allocation}
  */
  readonly dynamicExecutorAllocation: SparkCustomPoolDynamicExecutorAllocation;
  /**
  * The Spark Custom Pool ID. String length must be at most 64. The name must contain only letters, numbers, dashes, underscores and spaces.Value must not be one of : .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/spark_custom_pool#name SparkCustomPool#name}
  */
  readonly name: string;
  /**
  * The Node family. Value must be one of : `MemoryOptimized`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/spark_custom_pool#node_family SparkCustomPool#node_family}
  */
  readonly nodeFamily: string;
  /**
  * The Node size. Value must be one of : `Large`, `Medium`, `Small`, `XLarge`, `XXLarge`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/spark_custom_pool#node_size SparkCustomPool#node_size}
  */
  readonly nodeSize: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/spark_custom_pool#timeouts SparkCustomPool#timeouts}
  */
  readonly timeouts?: SparkCustomPoolTimeouts;
  /**
  * The Spark Custom Pool type. Value must be one of : `Workspace`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/spark_custom_pool#type SparkCustomPool#type}
  */
  readonly type: string;
  /**
  * <i style="color:red;font-weight: bold">(ForceNew)</i> The Workspace ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/spark_custom_pool#workspace_id SparkCustomPool#workspace_id}
  */
  readonly workspaceId: string;
}
export interface SparkCustomPoolAutoScale {
  /**
  * The status of the auto scale: `false` - Disabled, `true` - Enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/spark_custom_pool#enabled SparkCustomPool#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The maximum node count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/spark_custom_pool#max_node_count SparkCustomPool#max_node_count}
  */
  readonly maxNodeCount: number;
  /**
  * The minimum node count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/spark_custom_pool#min_node_count SparkCustomPool#min_node_count}
  */
  readonly minNodeCount: number;
}

export function sparkCustomPoolAutoScaleToTerraform(struct?: SparkCustomPoolAutoScale | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_node_count: cdktf.numberToTerraform(struct!.maxNodeCount),
    min_node_count: cdktf.numberToTerraform(struct!.minNodeCount),
  }
}


export function sparkCustomPoolAutoScaleToHclTerraform(struct?: SparkCustomPoolAutoScale | cdktf.IResolvable): any {
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
    max_node_count: {
      value: cdktf.numberToHclTerraform(struct!.maxNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_node_count: {
      value: cdktf.numberToHclTerraform(struct!.minNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SparkCustomPoolAutoScaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SparkCustomPoolAutoScale | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodeCount = this._maxNodeCount;
    }
    if (this._minNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodeCount = this._minNodeCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SparkCustomPoolAutoScale | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._maxNodeCount = undefined;
      this._minNodeCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._maxNodeCount = value.maxNodeCount;
      this._minNodeCount = value.minNodeCount;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // max_node_count - computed: false, optional: false, required: true
  private _maxNodeCount?: number; 
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }
  public set maxNodeCount(value: number) {
    this._maxNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodeCountInput() {
    return this._maxNodeCount;
  }

  // min_node_count - computed: false, optional: false, required: true
  private _minNodeCount?: number; 
  public get minNodeCount() {
    return this.getNumberAttribute('min_node_count');
  }
  public set minNodeCount(value: number) {
    this._minNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeCountInput() {
    return this._minNodeCount;
  }
}
export interface SparkCustomPoolDynamicExecutorAllocation {
  /**
  * The status of the dynamic executor allocation: `false` - Disabled, `true` - Enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/spark_custom_pool#enabled SparkCustomPool#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The maximum executors. If the value of [`dynamic_executor_allocation.enabled`](#dynamic_executor_allocation.enabled) attribute is `false` this attribute is **NULL**. If the value of [`dynamic_executor_allocation.enabled`](#dynamic_executor_allocation.enabled) attribute is `true` this attribute is **REQUIRED**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/spark_custom_pool#max_executors SparkCustomPool#max_executors}
  */
  readonly maxExecutors?: number;
  /**
  * The minimum executors. If the value of [`dynamic_executor_allocation.enabled`](#dynamic_executor_allocation.enabled) attribute is `false` this attribute is **NULL**. If the value of [`dynamic_executor_allocation.enabled`](#dynamic_executor_allocation.enabled) attribute is `true` this attribute is **REQUIRED**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/spark_custom_pool#min_executors SparkCustomPool#min_executors}
  */
  readonly minExecutors?: number;
}

export function sparkCustomPoolDynamicExecutorAllocationToTerraform(struct?: SparkCustomPoolDynamicExecutorAllocation | cdktf.IResolvable): any {
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


export function sparkCustomPoolDynamicExecutorAllocationToHclTerraform(struct?: SparkCustomPoolDynamicExecutorAllocation | cdktf.IResolvable): any {
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

export class SparkCustomPoolDynamicExecutorAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SparkCustomPoolDynamicExecutorAllocation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SparkCustomPoolDynamicExecutorAllocation | cdktf.IResolvable | undefined) {
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
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
export interface SparkCustomPoolTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/spark_custom_pool#create SparkCustomPool#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/spark_custom_pool#delete SparkCustomPool#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/spark_custom_pool#read SparkCustomPool#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/spark_custom_pool#update SparkCustomPool#update}
  */
  readonly update?: string;
}

export function sparkCustomPoolTimeoutsToTerraform(struct?: SparkCustomPoolTimeouts | cdktf.IResolvable): any {
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


export function sparkCustomPoolTimeoutsToHclTerraform(struct?: SparkCustomPoolTimeouts | cdktf.IResolvable): any {
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

export class SparkCustomPoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SparkCustomPoolTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SparkCustomPoolTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/spark_custom_pool fabric_spark_custom_pool}
*/
export class SparkCustomPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fabric_spark_custom_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SparkCustomPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SparkCustomPool to import
  * @param importFromId The id of the existing SparkCustomPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/spark_custom_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SparkCustomPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fabric_spark_custom_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/spark_custom_pool fabric_spark_custom_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SparkCustomPoolConfig
  */
  public constructor(scope: Construct, id: string, config: SparkCustomPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'fabric_spark_custom_pool',
      terraformGeneratorMetadata: {
        providerName: 'fabric',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoScale.internalValue = config.autoScale;
    this._dynamicExecutorAllocation.internalValue = config.dynamicExecutorAllocation;
    this._name = config.name;
    this._nodeFamily = config.nodeFamily;
    this._nodeSize = config.nodeSize;
    this._timeouts.internalValue = config.timeouts;
    this._type = config.type;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_scale - computed: false, optional: false, required: true
  private _autoScale = new SparkCustomPoolAutoScaleOutputReference(this, "auto_scale");
  public get autoScale() {
    return this._autoScale;
  }
  public putAutoScale(value: SparkCustomPoolAutoScale) {
    this._autoScale.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScaleInput() {
    return this._autoScale.internalValue;
  }

  // dynamic_executor_allocation - computed: false, optional: false, required: true
  private _dynamicExecutorAllocation = new SparkCustomPoolDynamicExecutorAllocationOutputReference(this, "dynamic_executor_allocation");
  public get dynamicExecutorAllocation() {
    return this._dynamicExecutorAllocation;
  }
  public putDynamicExecutorAllocation(value: SparkCustomPoolDynamicExecutorAllocation) {
    this._dynamicExecutorAllocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicExecutorAllocationInput() {
    return this._dynamicExecutorAllocation.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // node_family - computed: false, optional: false, required: true
  private _nodeFamily?: string; 
  public get nodeFamily() {
    return this.getStringAttribute('node_family');
  }
  public set nodeFamily(value: string) {
    this._nodeFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeFamilyInput() {
    return this._nodeFamily;
  }

  // node_size - computed: false, optional: false, required: true
  private _nodeSize?: string; 
  public get nodeSize() {
    return this.getStringAttribute('node_size');
  }
  public set nodeSize(value: string) {
    this._nodeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSizeInput() {
    return this._nodeSize;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SparkCustomPoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SparkCustomPoolTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      auto_scale: sparkCustomPoolAutoScaleToTerraform(this._autoScale.internalValue),
      dynamic_executor_allocation: sparkCustomPoolDynamicExecutorAllocationToTerraform(this._dynamicExecutorAllocation.internalValue),
      name: cdktf.stringToTerraform(this._name),
      node_family: cdktf.stringToTerraform(this._nodeFamily),
      node_size: cdktf.stringToTerraform(this._nodeSize),
      timeouts: sparkCustomPoolTimeoutsToTerraform(this._timeouts.internalValue),
      type: cdktf.stringToTerraform(this._type),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_scale: {
        value: sparkCustomPoolAutoScaleToHclTerraform(this._autoScale.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SparkCustomPoolAutoScale",
      },
      dynamic_executor_allocation: {
        value: sparkCustomPoolDynamicExecutorAllocationToHclTerraform(this._dynamicExecutorAllocation.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SparkCustomPoolDynamicExecutorAllocation",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_family: {
        value: cdktf.stringToHclTerraform(this._nodeFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_size: {
        value: cdktf.stringToHclTerraform(this._nodeSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: sparkCustomPoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SparkCustomPoolTimeouts",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
