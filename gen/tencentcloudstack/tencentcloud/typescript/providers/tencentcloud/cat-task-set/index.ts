// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cat_task_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CatTaskSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Timer task cron expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cat_task_set#cron CatTaskSet#cron}
  */
  readonly cron?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cat_task_set#id CatTaskSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Task interval minutes in (1,5,10,15,30,60,120,240).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cat_task_set#interval CatTaskSet#interval}
  */
  readonly interval: number;
  /**
  * `0`-Unlimit ip type, `1`-IPv4, `2`-IPv6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cat_task_set#node_ip_type CatTaskSet#node_ip_type}
  */
  readonly nodeIpType?: number;
  /**
  * Task Nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cat_task_set#nodes CatTaskSet#nodes}
  */
  readonly nodes: string[];
  /**
  * The input is valid when the parameter is modified, `suspend`/`resume`, used to suspend/resume the dial test task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cat_task_set#operate CatTaskSet#operate}
  */
  readonly operate?: string;
  /**
  * tasks parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cat_task_set#parameters CatTaskSet#parameters}
  */
  readonly parameters: string;
  /**
  * Tag description list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cat_task_set#tags CatTaskSet#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Task category,1:PC,2:Mobile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cat_task_set#task_category CatTaskSet#task_category}
  */
  readonly taskCategory: number;
  /**
  * Task Type 1:Page Performance, 2:File upload,3:File Download,4:Port performance 5:Audio and video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cat_task_set#task_type CatTaskSet#task_type}
  */
  readonly taskType: number;
  /**
  * batch_tasks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cat_task_set#batch_tasks CatTaskSet#batch_tasks}
  */
  readonly batchTasks: CatTaskSetBatchTasks;
}
export interface CatTaskSetBatchTasks {
  /**
  * Task name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cat_task_set#name CatTaskSet#name}
  */
  readonly name: string;
  /**
  * Target address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cat_task_set#target_address CatTaskSet#target_address}
  */
  readonly targetAddress: string;
}

export function catTaskSetBatchTasksToTerraform(struct?: CatTaskSetBatchTasksOutputReference | CatTaskSetBatchTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    target_address: cdktf.stringToTerraform(struct!.targetAddress),
  }
}


export function catTaskSetBatchTasksToHclTerraform(struct?: CatTaskSetBatchTasksOutputReference | CatTaskSetBatchTasks): any {
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
    target_address: {
      value: cdktf.stringToHclTerraform(struct!.targetAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CatTaskSetBatchTasksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CatTaskSetBatchTasks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._targetAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetAddress = this._targetAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatTaskSetBatchTasks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._targetAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._targetAddress = value.targetAddress;
    }
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

  // target_address - computed: false, optional: false, required: true
  private _targetAddress?: string; 
  public get targetAddress() {
    return this.getStringAttribute('target_address');
  }
  public set targetAddress(value: string) {
    this._targetAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAddressInput() {
    return this._targetAddress;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cat_task_set tencentcloud_cat_task_set}
*/
export class CatTaskSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cat_task_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CatTaskSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CatTaskSet to import
  * @param importFromId The id of the existing CatTaskSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cat_task_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CatTaskSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cat_task_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cat_task_set tencentcloud_cat_task_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CatTaskSetConfig
  */
  public constructor(scope: Construct, id: string, config: CatTaskSetConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cat_task_set',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35',
        providerVersionConstraint: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cron = config.cron;
    this._id = config.id;
    this._interval = config.interval;
    this._nodeIpType = config.nodeIpType;
    this._nodes = config.nodes;
    this._operate = config.operate;
    this._parameters = config.parameters;
    this._tags = config.tags;
    this._taskCategory = config.taskCategory;
    this._taskType = config.taskType;
    this._batchTasks.internalValue = config.batchTasks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cron - computed: false, optional: true, required: false
  private _cron?: string; 
  public get cron() {
    return this.getStringAttribute('cron');
  }
  public set cron(value: string) {
    this._cron = value;
  }
  public resetCron() {
    this._cron = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron;
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

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // node_ip_type - computed: true, optional: true, required: false
  private _nodeIpType?: number; 
  public get nodeIpType() {
    return this.getNumberAttribute('node_ip_type');
  }
  public set nodeIpType(value: number) {
    this._nodeIpType = value;
  }
  public resetNodeIpType() {
    this._nodeIpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIpTypeInput() {
    return this._nodeIpType;
  }

  // nodes - computed: false, optional: false, required: true
  private _nodes?: string[]; 
  public get nodes() {
    return cdktf.Fn.tolist(this.getListAttribute('nodes'));
  }
  public set nodes(value: string[]) {
    this._nodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes;
  }

  // operate - computed: false, optional: true, required: false
  private _operate?: string; 
  public get operate() {
    return this.getStringAttribute('operate');
  }
  public set operate(value: string) {
    this._operate = value;
  }
  public resetOperate() {
    this._operate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operateInput() {
    return this._operate;
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // task_category - computed: false, optional: false, required: true
  private _taskCategory?: number; 
  public get taskCategory() {
    return this.getNumberAttribute('task_category');
  }
  public set taskCategory(value: number) {
    this._taskCategory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskCategoryInput() {
    return this._taskCategory;
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // task_type - computed: false, optional: false, required: true
  private _taskType?: number; 
  public get taskType() {
    return this.getNumberAttribute('task_type');
  }
  public set taskType(value: number) {
    this._taskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }

  // batch_tasks - computed: false, optional: false, required: true
  private _batchTasks = new CatTaskSetBatchTasksOutputReference(this, "batch_tasks");
  public get batchTasks() {
    return this._batchTasks;
  }
  public putBatchTasks(value: CatTaskSetBatchTasks) {
    this._batchTasks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get batchTasksInput() {
    return this._batchTasks.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cron: cdktf.stringToTerraform(this._cron),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      node_ip_type: cdktf.numberToTerraform(this._nodeIpType),
      nodes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nodes),
      operate: cdktf.stringToTerraform(this._operate),
      parameters: cdktf.stringToTerraform(this._parameters),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      task_category: cdktf.numberToTerraform(this._taskCategory),
      task_type: cdktf.numberToTerraform(this._taskType),
      batch_tasks: catTaskSetBatchTasksToTerraform(this._batchTasks.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cron: {
        value: cdktf.stringToHclTerraform(this._cron),
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
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      node_ip_type: {
        value: cdktf.numberToHclTerraform(this._nodeIpType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nodes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nodes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      operate: {
        value: cdktf.stringToHclTerraform(this._operate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktf.stringToHclTerraform(this._parameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      task_category: {
        value: cdktf.numberToHclTerraform(this._taskCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      task_type: {
        value: cdktf.numberToHclTerraform(this._taskType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      batch_tasks: {
        value: catTaskSetBatchTasksToHclTerraform(this._batchTasks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CatTaskSetBatchTasksList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
