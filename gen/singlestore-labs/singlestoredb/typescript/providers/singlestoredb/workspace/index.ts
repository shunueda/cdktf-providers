// https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.7/docs/resources/workspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the autoscale setting (scale factor) for the workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.7/docs/resources/workspace#auto_scale Workspace#auto_scale}
  */
  readonly autoScale?: WorkspaceAutoScale;
  /**
  * Auto suspend settings for the workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.7/docs/resources/workspace#auto_suspend Workspace#auto_suspend}
  */
  readonly autoSuspend?: WorkspaceAutoSuspend;
  /**
  * Specifies the multiplier for the persistent cache associated with the workspace. It can have one of the following values: 1, 2, or 4. Default is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.7/docs/resources/workspace#cache_config Workspace#cache_config}
  */
  readonly cacheConfig?: number;
  /**
  * Whether the Kai API is enabled for the workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.7/docs/resources/workspace#kai_enabled Workspace#kai_enabled}
  */
  readonly kaiEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name assigned to the workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.7/docs/resources/workspace#name Workspace#name}
  */
  readonly name: string;
  /**
  * Specifies the scale factor for the workspace. The scale factor can be 1, 2 or 4. Default is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.7/docs/resources/workspace#scale_factor Workspace#scale_factor}
  */
  readonly scaleFactor?: number;
  /**
  * The size of the workspace, specified in workspace size notation (S-00, S-0, S-1, S-2).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.7/docs/resources/workspace#size Workspace#size}
  */
  readonly size: string;
  /**
  * The status of the workspace. If true, the workspace is suspended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.7/docs/resources/workspace#suspended Workspace#suspended}
  */
  readonly suspended?: boolean | cdktf.IResolvable;
  /**
  * The unique identifier of the workspace group that the workspace belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.7/docs/resources/workspace#workspace_group_id Workspace#workspace_group_id}
  */
  readonly workspaceGroupId: string;
}
export interface WorkspaceAutoScale {
  /**
  * The maximum scale factor allowed for the workspace. It can have the following values: 1, 2, or 4. To disable autoscaling, set to 1. Default is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.7/docs/resources/workspace#max_scale_factor Workspace#max_scale_factor}
  */
  readonly maxScaleFactor?: number;
  /**
  * Specifies the sensitivity of the autoscale operation to changes in the workload. It can have the following values: `LOW`, `NORMAL`, or `HIGH`. Default is `NORMAL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.7/docs/resources/workspace#sensitivity Workspace#sensitivity}
  */
  readonly sensitivity?: string;
}

export function workspaceAutoScaleToTerraform(struct?: WorkspaceAutoScale | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_scale_factor: cdktf.numberToTerraform(struct!.maxScaleFactor),
    sensitivity: cdktf.stringToTerraform(struct!.sensitivity),
  }
}


export function workspaceAutoScaleToHclTerraform(struct?: WorkspaceAutoScale | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_scale_factor: {
      value: cdktf.numberToHclTerraform(struct!.maxScaleFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sensitivity: {
      value: cdktf.stringToHclTerraform(struct!.sensitivity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceAutoScaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceAutoScale | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxScaleFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxScaleFactor = this._maxScaleFactor;
    }
    if (this._sensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivity = this._sensitivity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceAutoScale | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxScaleFactor = undefined;
      this._sensitivity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxScaleFactor = value.maxScaleFactor;
      this._sensitivity = value.sensitivity;
    }
  }

  // max_scale_factor - computed: true, optional: true, required: false
  private _maxScaleFactor?: number; 
  public get maxScaleFactor() {
    return this.getNumberAttribute('max_scale_factor');
  }
  public set maxScaleFactor(value: number) {
    this._maxScaleFactor = value;
  }
  public resetMaxScaleFactor() {
    this._maxScaleFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxScaleFactorInput() {
    return this._maxScaleFactor;
  }

  // sensitivity - computed: true, optional: true, required: false
  private _sensitivity?: string; 
  public get sensitivity() {
    return this.getStringAttribute('sensitivity');
  }
  public set sensitivity(value: string) {
    this._sensitivity = value;
  }
  public resetSensitivity() {
    this._sensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityInput() {
    return this._sensitivity;
  }
}
export interface WorkspaceAutoSuspend {
  /**
  * When to suspend the workspace, according to the suspend type chosen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.7/docs/resources/workspace#suspend_after_seconds Workspace#suspend_after_seconds}
  */
  readonly suspendAfterSeconds?: number;
  /**
  * The auto suspend mode for the workspace can have the values `IDLE`, `SCHEDULED`, or `DISABLED` (to create the workspace with no auto suspend settings). Default is `DISABLED`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.7/docs/resources/workspace#suspend_type Workspace#suspend_type}
  */
  readonly suspendType?: string;
}

export function workspaceAutoSuspendToTerraform(struct?: WorkspaceAutoSuspend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    suspend_after_seconds: cdktf.numberToTerraform(struct!.suspendAfterSeconds),
    suspend_type: cdktf.stringToTerraform(struct!.suspendType),
  }
}


export function workspaceAutoSuspendToHclTerraform(struct?: WorkspaceAutoSuspend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    suspend_after_seconds: {
      value: cdktf.numberToHclTerraform(struct!.suspendAfterSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    suspend_type: {
      value: cdktf.stringToHclTerraform(struct!.suspendType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceAutoSuspendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceAutoSuspend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._suspendAfterSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspendAfterSeconds = this._suspendAfterSeconds;
    }
    if (this._suspendType !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspendType = this._suspendType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceAutoSuspend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._suspendAfterSeconds = undefined;
      this._suspendType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._suspendAfterSeconds = value.suspendAfterSeconds;
      this._suspendType = value.suspendType;
    }
  }

  // suspend_after_seconds - computed: true, optional: true, required: false
  private _suspendAfterSeconds?: number; 
  public get suspendAfterSeconds() {
    return this.getNumberAttribute('suspend_after_seconds');
  }
  public set suspendAfterSeconds(value: number) {
    this._suspendAfterSeconds = value;
  }
  public resetSuspendAfterSeconds() {
    this._suspendAfterSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendAfterSecondsInput() {
    return this._suspendAfterSeconds;
  }

  // suspend_type - computed: true, optional: true, required: false
  private _suspendType?: string; 
  public get suspendType() {
    return this.getStringAttribute('suspend_type');
  }
  public set suspendType(value: string) {
    this._suspendType = value;
  }
  public resetSuspendType() {
    this._suspendType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendTypeInput() {
    return this._suspendType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.7/docs/resources/workspace singlestoredb_workspace}
*/
export class Workspace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "singlestoredb_workspace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Workspace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Workspace to import
  * @param importFromId The id of the existing Workspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.7/docs/resources/workspace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Workspace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "singlestoredb_workspace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.7/docs/resources/workspace singlestoredb_workspace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'singlestoredb_workspace',
      terraformGeneratorMetadata: {
        providerName: 'singlestoredb',
        providerVersion: '0.1.7',
        providerVersionConstraint: '0.1.7'
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
    this._autoSuspend.internalValue = config.autoSuspend;
    this._cacheConfig = config.cacheConfig;
    this._kaiEnabled = config.kaiEnabled;
    this._name = config.name;
    this._scaleFactor = config.scaleFactor;
    this._size = config.size;
    this._suspended = config.suspended;
    this._workspaceGroupId = config.workspaceGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_scale - computed: true, optional: true, required: false
  private _autoScale = new WorkspaceAutoScaleOutputReference(this, "auto_scale");
  public get autoScale() {
    return this._autoScale;
  }
  public putAutoScale(value: WorkspaceAutoScale) {
    this._autoScale.internalValue = value;
  }
  public resetAutoScale() {
    this._autoScale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScaleInput() {
    return this._autoScale.internalValue;
  }

  // auto_suspend - computed: true, optional: true, required: false
  private _autoSuspend = new WorkspaceAutoSuspendOutputReference(this, "auto_suspend");
  public get autoSuspend() {
    return this._autoSuspend;
  }
  public putAutoSuspend(value: WorkspaceAutoSuspend) {
    this._autoSuspend.internalValue = value;
  }
  public resetAutoSuspend() {
    this._autoSuspend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSuspendInput() {
    return this._autoSuspend.internalValue;
  }

  // cache_config - computed: true, optional: true, required: false
  private _cacheConfig?: number; 
  public get cacheConfig() {
    return this.getNumberAttribute('cache_config');
  }
  public set cacheConfig(value: number) {
    this._cacheConfig = value;
  }
  public resetCacheConfig() {
    this._cacheConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheConfigInput() {
    return this._cacheConfig;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kai_enabled - computed: true, optional: true, required: false
  private _kaiEnabled?: boolean | cdktf.IResolvable; 
  public get kaiEnabled() {
    return this.getBooleanAttribute('kai_enabled');
  }
  public set kaiEnabled(value: boolean | cdktf.IResolvable) {
    this._kaiEnabled = value;
  }
  public resetKaiEnabled() {
    this._kaiEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kaiEnabledInput() {
    return this._kaiEnabled;
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

  // scale_factor - computed: true, optional: true, required: false
  private _scaleFactor?: number; 
  public get scaleFactor() {
    return this.getNumberAttribute('scale_factor');
  }
  public set scaleFactor(value: number) {
    this._scaleFactor = value;
  }
  public resetScaleFactor() {
    this._scaleFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleFactorInput() {
    return this._scaleFactor;
  }

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // suspended - computed: true, optional: true, required: false
  private _suspended?: boolean | cdktf.IResolvable; 
  public get suspended() {
    return this.getBooleanAttribute('suspended');
  }
  public set suspended(value: boolean | cdktf.IResolvable) {
    this._suspended = value;
  }
  public resetSuspended() {
    this._suspended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendedInput() {
    return this._suspended;
  }

  // workspace_group_id - computed: false, optional: false, required: true
  private _workspaceGroupId?: string; 
  public get workspaceGroupId() {
    return this.getStringAttribute('workspace_group_id');
  }
  public set workspaceGroupId(value: string) {
    this._workspaceGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceGroupIdInput() {
    return this._workspaceGroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_scale: workspaceAutoScaleToTerraform(this._autoScale.internalValue),
      auto_suspend: workspaceAutoSuspendToTerraform(this._autoSuspend.internalValue),
      cache_config: cdktf.numberToTerraform(this._cacheConfig),
      kai_enabled: cdktf.booleanToTerraform(this._kaiEnabled),
      name: cdktf.stringToTerraform(this._name),
      scale_factor: cdktf.numberToTerraform(this._scaleFactor),
      size: cdktf.stringToTerraform(this._size),
      suspended: cdktf.booleanToTerraform(this._suspended),
      workspace_group_id: cdktf.stringToTerraform(this._workspaceGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_scale: {
        value: workspaceAutoScaleToHclTerraform(this._autoScale.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkspaceAutoScale",
      },
      auto_suspend: {
        value: workspaceAutoSuspendToHclTerraform(this._autoSuspend.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkspaceAutoSuspend",
      },
      cache_config: {
        value: cdktf.numberToHclTerraform(this._cacheConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      kai_enabled: {
        value: cdktf.booleanToHclTerraform(this._kaiEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scale_factor: {
        value: cdktf.numberToHclTerraform(this._scaleFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      size: {
        value: cdktf.stringToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suspended: {
        value: cdktf.booleanToHclTerraform(this._suspended),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      workspace_group_id: {
        value: cdktf.stringToHclTerraform(this._workspaceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
