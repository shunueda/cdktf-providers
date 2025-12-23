// https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/upgradestatussummary
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UpgradestatussummaryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/upgradestatussummary#enable_patch_rollback Upgradestatussummary#enable_patch_rollback}
  */
  readonly enablePatchRollback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/upgradestatussummary#enable_rollback Upgradestatussummary#enable_rollback}
  */
  readonly enableRollback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/upgradestatussummary#end_time Upgradestatussummary#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/upgradestatussummary#id Upgradestatussummary#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/upgradestatussummary#image_ref Upgradestatussummary#image_ref}
  */
  readonly imageRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/upgradestatussummary#name Upgradestatussummary#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/upgradestatussummary#node_type Upgradestatussummary#node_type}
  */
  readonly nodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/upgradestatussummary#obj_cloud_ref Upgradestatussummary#obj_cloud_ref}
  */
  readonly objCloudRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/upgradestatussummary#patch_image_ref Upgradestatussummary#patch_image_ref}
  */
  readonly patchImageRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/upgradestatussummary#start_time Upgradestatussummary#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/upgradestatussummary#tasks_completed Upgradestatussummary#tasks_completed}
  */
  readonly tasksCompleted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/upgradestatussummary#tenant_ref Upgradestatussummary#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/upgradestatussummary#total_tasks Upgradestatussummary#total_tasks}
  */
  readonly totalTasks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/upgradestatussummary#upgrade_ops Upgradestatussummary#upgrade_ops}
  */
  readonly upgradeOps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/upgradestatussummary#uuid Upgradestatussummary#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/upgradestatussummary#version Upgradestatussummary#version}
  */
  readonly version?: string;
  /**
  * state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/upgradestatussummary#state Upgradestatussummary#state}
  */
  readonly state?: UpgradestatussummaryState[] | cdktf.IResolvable;
}
export interface UpgradestatussummaryStateLastChangedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/upgradestatussummary#secs Upgradestatussummary#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/upgradestatussummary#usecs Upgradestatussummary#usecs}
  */
  readonly usecs: string;
}

export function upgradestatussummaryStateLastChangedTimeToTerraform(struct?: UpgradestatussummaryStateLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function upgradestatussummaryStateLastChangedTimeToHclTerraform(struct?: UpgradestatussummaryStateLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secs: {
      value: cdktf.stringToHclTerraform(struct!.secs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usecs: {
      value: cdktf.stringToHclTerraform(struct!.usecs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatussummaryStateLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatussummaryStateLastChangedTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secs !== undefined) {
      hasAnyValues = true;
      internalValueResult.secs = this._secs;
    }
    if (this._usecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.usecs = this._usecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradestatussummaryStateLastChangedTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secs = undefined;
      this._usecs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secs = value.secs;
      this._usecs = value.usecs;
    }
  }

  // secs - computed: false, optional: false, required: true
  private _secs?: string; 
  public get secs() {
    return this.getStringAttribute('secs');
  }
  public set secs(value: string) {
    this._secs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secsInput() {
    return this._secs;
  }

  // usecs - computed: false, optional: false, required: true
  private _usecs?: string; 
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
  public set usecs(value: string) {
    this._usecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usecsInput() {
    return this._usecs;
  }
}

export class UpgradestatussummaryStateLastChangedTimeList extends cdktf.ComplexList {
  public internalValue? : UpgradestatussummaryStateLastChangedTime[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatussummaryStateLastChangedTimeOutputReference {
    return new UpgradestatussummaryStateLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatussummaryState {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/upgradestatussummary#reason Upgradestatussummary#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/upgradestatussummary#rebooted Upgradestatussummary#rebooted}
  */
  readonly rebooted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/upgradestatussummary#state Upgradestatussummary#state}
  */
  readonly state?: string;
  /**
  * last_changed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/upgradestatussummary#last_changed_time Upgradestatussummary#last_changed_time}
  */
  readonly lastChangedTime?: UpgradestatussummaryStateLastChangedTime[] | cdktf.IResolvable;
}

export function upgradestatussummaryStateToTerraform(struct?: UpgradestatussummaryState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reason: cdktf.stringToTerraform(struct!.reason),
    rebooted: cdktf.stringToTerraform(struct!.rebooted),
    state: cdktf.stringToTerraform(struct!.state),
    last_changed_time: cdktf.listMapper(upgradestatussummaryStateLastChangedTimeToTerraform, true)(struct!.lastChangedTime),
  }
}


export function upgradestatussummaryStateToHclTerraform(struct?: UpgradestatussummaryState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rebooted: {
      value: cdktf.stringToHclTerraform(struct!.rebooted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_changed_time: {
      value: cdktf.listMapperHcl(upgradestatussummaryStateLastChangedTimeToHclTerraform, true)(struct!.lastChangedTime),
      isBlock: true,
      type: "set",
      storageClassType: "UpgradestatussummaryStateLastChangedTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatussummaryStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatussummaryState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._rebooted !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebooted = this._rebooted;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._lastChangedTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastChangedTime = this._lastChangedTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradestatussummaryState | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reason = undefined;
      this._rebooted = undefined;
      this._state = undefined;
      this._lastChangedTime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reason = value.reason;
      this._rebooted = value.rebooted;
      this._state = value.state;
      this._lastChangedTime.internalValue = value.lastChangedTime;
    }
  }

  // reason - computed: true, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // rebooted - computed: true, optional: true, required: false
  private _rebooted?: string; 
  public get rebooted() {
    return this.getStringAttribute('rebooted');
  }
  public set rebooted(value: string) {
    this._rebooted = value;
  }
  public resetRebooted() {
    this._rebooted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootedInput() {
    return this._rebooted;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // last_changed_time - computed: false, optional: true, required: false
  private _lastChangedTime = new UpgradestatussummaryStateLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }
  public putLastChangedTime(value: UpgradestatussummaryStateLastChangedTime[] | cdktf.IResolvable) {
    this._lastChangedTime.internalValue = value;
  }
  public resetLastChangedTime() {
    this._lastChangedTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastChangedTimeInput() {
    return this._lastChangedTime.internalValue;
  }
}

export class UpgradestatussummaryStateList extends cdktf.ComplexList {
  public internalValue? : UpgradestatussummaryState[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatussummaryStateOutputReference {
    return new UpgradestatussummaryStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/upgradestatussummary avi_upgradestatussummary}
*/
export class Upgradestatussummary extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_upgradestatussummary";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Upgradestatussummary resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Upgradestatussummary to import
  * @param importFromId The id of the existing Upgradestatussummary that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/upgradestatussummary#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Upgradestatussummary to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_upgradestatussummary", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/upgradestatussummary avi_upgradestatussummary} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UpgradestatussummaryConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UpgradestatussummaryConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_upgradestatussummary',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.2.1',
        providerVersionConstraint: '31.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enablePatchRollback = config.enablePatchRollback;
    this._enableRollback = config.enableRollback;
    this._endTime = config.endTime;
    this._id = config.id;
    this._imageRef = config.imageRef;
    this._name = config.name;
    this._nodeType = config.nodeType;
    this._objCloudRef = config.objCloudRef;
    this._patchImageRef = config.patchImageRef;
    this._startTime = config.startTime;
    this._tasksCompleted = config.tasksCompleted;
    this._tenantRef = config.tenantRef;
    this._totalTasks = config.totalTasks;
    this._upgradeOps = config.upgradeOps;
    this._uuid = config.uuid;
    this._version = config.version;
    this._state.internalValue = config.state;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_patch_rollback - computed: false, optional: true, required: false
  private _enablePatchRollback?: string; 
  public get enablePatchRollback() {
    return this.getStringAttribute('enable_patch_rollback');
  }
  public set enablePatchRollback(value: string) {
    this._enablePatchRollback = value;
  }
  public resetEnablePatchRollback() {
    this._enablePatchRollback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePatchRollbackInput() {
    return this._enablePatchRollback;
  }

  // enable_rollback - computed: false, optional: true, required: false
  private _enableRollback?: string; 
  public get enableRollback() {
    return this.getStringAttribute('enable_rollback');
  }
  public set enableRollback(value: string) {
    this._enableRollback = value;
  }
  public resetEnableRollback() {
    this._enableRollback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRollbackInput() {
    return this._enableRollback;
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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

  // image_ref - computed: true, optional: true, required: false
  private _imageRef?: string; 
  public get imageRef() {
    return this.getStringAttribute('image_ref');
  }
  public set imageRef(value: string) {
    this._imageRef = value;
  }
  public resetImageRef() {
    this._imageRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRefInput() {
    return this._imageRef;
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

  // node_type - computed: true, optional: true, required: false
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // obj_cloud_ref - computed: true, optional: true, required: false
  private _objCloudRef?: string; 
  public get objCloudRef() {
    return this.getStringAttribute('obj_cloud_ref');
  }
  public set objCloudRef(value: string) {
    this._objCloudRef = value;
  }
  public resetObjCloudRef() {
    this._objCloudRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objCloudRefInput() {
    return this._objCloudRef;
  }

  // patch_image_ref - computed: true, optional: true, required: false
  private _patchImageRef?: string; 
  public get patchImageRef() {
    return this.getStringAttribute('patch_image_ref');
  }
  public set patchImageRef(value: string) {
    this._patchImageRef = value;
  }
  public resetPatchImageRef() {
    this._patchImageRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchImageRefInput() {
    return this._patchImageRef;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // tasks_completed - computed: true, optional: true, required: false
  private _tasksCompleted?: string; 
  public get tasksCompleted() {
    return this.getStringAttribute('tasks_completed');
  }
  public set tasksCompleted(value: string) {
    this._tasksCompleted = value;
  }
  public resetTasksCompleted() {
    this._tasksCompleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksCompletedInput() {
    return this._tasksCompleted;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // total_tasks - computed: true, optional: true, required: false
  private _totalTasks?: string; 
  public get totalTasks() {
    return this.getStringAttribute('total_tasks');
  }
  public set totalTasks(value: string) {
    this._totalTasks = value;
  }
  public resetTotalTasks() {
    this._totalTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalTasksInput() {
    return this._totalTasks;
  }

  // upgrade_ops - computed: true, optional: true, required: false
  private _upgradeOps?: string; 
  public get upgradeOps() {
    return this.getStringAttribute('upgrade_ops');
  }
  public set upgradeOps(value: string) {
    this._upgradeOps = value;
  }
  public resetUpgradeOps() {
    this._upgradeOps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeOpsInput() {
    return this._upgradeOps;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // state - computed: false, optional: true, required: false
  private _state = new UpgradestatussummaryStateList(this, "state", true);
  public get state() {
    return this._state;
  }
  public putState(value: UpgradestatussummaryState[] | cdktf.IResolvable) {
    this._state.internalValue = value;
  }
  public resetState() {
    this._state.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_patch_rollback: cdktf.stringToTerraform(this._enablePatchRollback),
      enable_rollback: cdktf.stringToTerraform(this._enableRollback),
      end_time: cdktf.stringToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      image_ref: cdktf.stringToTerraform(this._imageRef),
      name: cdktf.stringToTerraform(this._name),
      node_type: cdktf.stringToTerraform(this._nodeType),
      obj_cloud_ref: cdktf.stringToTerraform(this._objCloudRef),
      patch_image_ref: cdktf.stringToTerraform(this._patchImageRef),
      start_time: cdktf.stringToTerraform(this._startTime),
      tasks_completed: cdktf.stringToTerraform(this._tasksCompleted),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      total_tasks: cdktf.stringToTerraform(this._totalTasks),
      upgrade_ops: cdktf.stringToTerraform(this._upgradeOps),
      uuid: cdktf.stringToTerraform(this._uuid),
      version: cdktf.stringToTerraform(this._version),
      state: cdktf.listMapper(upgradestatussummaryStateToTerraform, true)(this._state.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_patch_rollback: {
        value: cdktf.stringToHclTerraform(this._enablePatchRollback),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_rollback: {
        value: cdktf.stringToHclTerraform(this._enableRollback),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_time: {
        value: cdktf.stringToHclTerraform(this._endTime),
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
      image_ref: {
        value: cdktf.stringToHclTerraform(this._imageRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_type: {
        value: cdktf.stringToHclTerraform(this._nodeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      obj_cloud_ref: {
        value: cdktf.stringToHclTerraform(this._objCloudRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      patch_image_ref: {
        value: cdktf.stringToHclTerraform(this._patchImageRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tasks_completed: {
        value: cdktf.stringToHclTerraform(this._tasksCompleted),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      total_tasks: {
        value: cdktf.stringToHclTerraform(this._totalTasks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_ops: {
        value: cdktf.stringToHclTerraform(this._upgradeOps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.listMapperHcl(upgradestatussummaryStateToHclTerraform, true)(this._state.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UpgradestatussummaryStateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
