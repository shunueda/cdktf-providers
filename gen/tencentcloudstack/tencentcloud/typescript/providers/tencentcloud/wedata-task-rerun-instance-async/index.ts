// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_task_rerun_instance_async
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WedataTaskRerunInstanceAsyncConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to check upstream tasks: ALL, MAKE_SCOPE (selected), NONE (do not check anything), default is NONE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_task_rerun_instance_async#check_parent_type WedataTaskRerunInstanceAsync#check_parent_type}
  */
  readonly checkParentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_task_rerun_instance_async#id WedataTaskRerunInstanceAsync#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance id list, which can be obtained from ListInstances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_task_rerun_instance_async#instance_key_list WedataTaskRerunInstanceAsync#instance_key_list}
  */
  readonly instanceKeyList: string[];
  /**
  * Project Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_task_rerun_instance_async#project_id WedataTaskRerunInstanceAsync#project_id}
  */
  readonly projectId: string;
  /**
  * Customize the instance running concurrency. If not configured, the original self-dependency of the task will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_task_rerun_instance_async#redefine_parallel_num WedataTaskRerunInstanceAsync#redefine_parallel_num}
  */
  readonly redefineParallelNum?: number;
  /**
  * Customized workflow self-dependence: yes to enable, no to disable. If not configured, the original workflow self-dependence will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_task_rerun_instance_async#redefine_self_workflow_dependency WedataTaskRerunInstanceAsync#redefine_self_workflow_dependency}
  */
  readonly redefineSelfWorkflowDependency?: string;
  /**
  * Rerun type, 1: self; 3: children; 2: self and children, default 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_task_rerun_instance_async#rerun_type WedataTaskRerunInstanceAsync#rerun_type}
  */
  readonly rerunType?: string;
  /**
  * Whether to ignore event monitoring when rerunning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_task_rerun_instance_async#skip_event_listening WedataTaskRerunInstanceAsync#skip_event_listening}
  */
  readonly skipEventListening?: boolean | cdktf.IResolvable;
  /**
  * Downstream instance scope WORKFLOW: workflow PROJECT: project ALL: all cross-workflow dependent projects, default WORKFLOW.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_task_rerun_instance_async#son_range_type WedataTaskRerunInstanceAsync#son_range_type}
  */
  readonly sonRangeType?: string;
  /**
  * redefine_param_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_task_rerun_instance_async#redefine_param_list WedataTaskRerunInstanceAsync#redefine_param_list}
  */
  readonly redefineParamList?: WedataTaskRerunInstanceAsyncRedefineParamListStruct;
}
export interface WedataTaskRerunInstanceAsyncRedefineParamListStruct {
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_task_rerun_instance_async#k WedataTaskRerunInstanceAsync#k}
  */
  readonly k?: string;
  /**
  * Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_task_rerun_instance_async#v WedataTaskRerunInstanceAsync#v}
  */
  readonly v?: string;
}

export function wedataTaskRerunInstanceAsyncRedefineParamListStructToTerraform(struct?: WedataTaskRerunInstanceAsyncRedefineParamListStructOutputReference | WedataTaskRerunInstanceAsyncRedefineParamListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    k: cdktf.stringToTerraform(struct!.k),
    v: cdktf.stringToTerraform(struct!.v),
  }
}


export function wedataTaskRerunInstanceAsyncRedefineParamListStructToHclTerraform(struct?: WedataTaskRerunInstanceAsyncRedefineParamListStructOutputReference | WedataTaskRerunInstanceAsyncRedefineParamListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    k: {
      value: cdktf.stringToHclTerraform(struct!.k),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v: {
      value: cdktf.stringToHclTerraform(struct!.v),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataTaskRerunInstanceAsyncRedefineParamListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WedataTaskRerunInstanceAsyncRedefineParamListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._k !== undefined) {
      hasAnyValues = true;
      internalValueResult.k = this._k;
    }
    if (this._v !== undefined) {
      hasAnyValues = true;
      internalValueResult.v = this._v;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataTaskRerunInstanceAsyncRedefineParamListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._k = undefined;
      this._v = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._k = value.k;
      this._v = value.v;
    }
  }

  // k - computed: false, optional: true, required: false
  private _k?: string; 
  public get k() {
    return this.getStringAttribute('k');
  }
  public set k(value: string) {
    this._k = value;
  }
  public resetK() {
    this._k = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kInput() {
    return this._k;
  }

  // v - computed: false, optional: true, required: false
  private _v?: string; 
  public get v() {
    return this.getStringAttribute('v');
  }
  public set v(value: string) {
    this._v = value;
  }
  public resetV() {
    this._v = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vInput() {
    return this._v;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_task_rerun_instance_async tencentcloud_wedata_task_rerun_instance_async}
*/
export class WedataTaskRerunInstanceAsync extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_wedata_task_rerun_instance_async";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WedataTaskRerunInstanceAsync resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WedataTaskRerunInstanceAsync to import
  * @param importFromId The id of the existing WedataTaskRerunInstanceAsync that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_task_rerun_instance_async#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WedataTaskRerunInstanceAsync to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_wedata_task_rerun_instance_async", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_task_rerun_instance_async tencentcloud_wedata_task_rerun_instance_async} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WedataTaskRerunInstanceAsyncConfig
  */
  public constructor(scope: Construct, id: string, config: WedataTaskRerunInstanceAsyncConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_wedata_task_rerun_instance_async',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._checkParentType = config.checkParentType;
    this._id = config.id;
    this._instanceKeyList = config.instanceKeyList;
    this._projectId = config.projectId;
    this._redefineParallelNum = config.redefineParallelNum;
    this._redefineSelfWorkflowDependency = config.redefineSelfWorkflowDependency;
    this._rerunType = config.rerunType;
    this._skipEventListening = config.skipEventListening;
    this._sonRangeType = config.sonRangeType;
    this._redefineParamList.internalValue = config.redefineParamList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // check_parent_type - computed: false, optional: true, required: false
  private _checkParentType?: string; 
  public get checkParentType() {
    return this.getStringAttribute('check_parent_type');
  }
  public set checkParentType(value: string) {
    this._checkParentType = value;
  }
  public resetCheckParentType() {
    this._checkParentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkParentTypeInput() {
    return this._checkParentType;
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

  // instance_key_list - computed: false, optional: false, required: true
  private _instanceKeyList?: string[]; 
  public get instanceKeyList() {
    return cdktf.Fn.tolist(this.getListAttribute('instance_key_list'));
  }
  public set instanceKeyList(value: string[]) {
    this._instanceKeyList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceKeyListInput() {
    return this._instanceKeyList;
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

  // redefine_parallel_num - computed: false, optional: true, required: false
  private _redefineParallelNum?: number; 
  public get redefineParallelNum() {
    return this.getNumberAttribute('redefine_parallel_num');
  }
  public set redefineParallelNum(value: number) {
    this._redefineParallelNum = value;
  }
  public resetRedefineParallelNum() {
    this._redefineParallelNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redefineParallelNumInput() {
    return this._redefineParallelNum;
  }

  // redefine_self_workflow_dependency - computed: false, optional: true, required: false
  private _redefineSelfWorkflowDependency?: string; 
  public get redefineSelfWorkflowDependency() {
    return this.getStringAttribute('redefine_self_workflow_dependency');
  }
  public set redefineSelfWorkflowDependency(value: string) {
    this._redefineSelfWorkflowDependency = value;
  }
  public resetRedefineSelfWorkflowDependency() {
    this._redefineSelfWorkflowDependency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redefineSelfWorkflowDependencyInput() {
    return this._redefineSelfWorkflowDependency;
  }

  // rerun_type - computed: false, optional: true, required: false
  private _rerunType?: string; 
  public get rerunType() {
    return this.getStringAttribute('rerun_type');
  }
  public set rerunType(value: string) {
    this._rerunType = value;
  }
  public resetRerunType() {
    this._rerunType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rerunTypeInput() {
    return this._rerunType;
  }

  // skip_event_listening - computed: false, optional: true, required: false
  private _skipEventListening?: boolean | cdktf.IResolvable; 
  public get skipEventListening() {
    return this.getBooleanAttribute('skip_event_listening');
  }
  public set skipEventListening(value: boolean | cdktf.IResolvable) {
    this._skipEventListening = value;
  }
  public resetSkipEventListening() {
    this._skipEventListening = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipEventListeningInput() {
    return this._skipEventListening;
  }

  // son_range_type - computed: false, optional: true, required: false
  private _sonRangeType?: string; 
  public get sonRangeType() {
    return this.getStringAttribute('son_range_type');
  }
  public set sonRangeType(value: string) {
    this._sonRangeType = value;
  }
  public resetSonRangeType() {
    this._sonRangeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sonRangeTypeInput() {
    return this._sonRangeType;
  }

  // redefine_param_list - computed: false, optional: true, required: false
  private _redefineParamList = new WedataTaskRerunInstanceAsyncRedefineParamListStructOutputReference(this, "redefine_param_list");
  public get redefineParamList() {
    return this._redefineParamList;
  }
  public putRedefineParamList(value: WedataTaskRerunInstanceAsyncRedefineParamListStruct) {
    this._redefineParamList.internalValue = value;
  }
  public resetRedefineParamList() {
    this._redefineParamList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redefineParamListInput() {
    return this._redefineParamList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      check_parent_type: cdktf.stringToTerraform(this._checkParentType),
      id: cdktf.stringToTerraform(this._id),
      instance_key_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceKeyList),
      project_id: cdktf.stringToTerraform(this._projectId),
      redefine_parallel_num: cdktf.numberToTerraform(this._redefineParallelNum),
      redefine_self_workflow_dependency: cdktf.stringToTerraform(this._redefineSelfWorkflowDependency),
      rerun_type: cdktf.stringToTerraform(this._rerunType),
      skip_event_listening: cdktf.booleanToTerraform(this._skipEventListening),
      son_range_type: cdktf.stringToTerraform(this._sonRangeType),
      redefine_param_list: wedataTaskRerunInstanceAsyncRedefineParamListStructToTerraform(this._redefineParamList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      check_parent_type: {
        value: cdktf.stringToHclTerraform(this._checkParentType),
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
      instance_key_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceKeyList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redefine_parallel_num: {
        value: cdktf.numberToHclTerraform(this._redefineParallelNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      redefine_self_workflow_dependency: {
        value: cdktf.stringToHclTerraform(this._redefineSelfWorkflowDependency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rerun_type: {
        value: cdktf.stringToHclTerraform(this._rerunType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_event_listening: {
        value: cdktf.booleanToHclTerraform(this._skipEventListening),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      son_range_type: {
        value: cdktf.stringToHclTerraform(this._sonRangeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redefine_param_list: {
        value: wedataTaskRerunInstanceAsyncRedefineParamListStructToHclTerraform(this._redefineParamList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WedataTaskRerunInstanceAsyncRedefineParamListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
