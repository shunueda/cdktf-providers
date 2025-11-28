// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/wedata_ops_stop_task_async
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WedataOpsStopTaskAsyncConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/wedata_ops_stop_task_async#id WedataOpsStopTaskAsync#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to terminate the generated instance, the default is false; if true, it will wait for all forces to terminate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/wedata_ops_stop_task_async#kill_instance WedataOpsStopTaskAsync#kill_instance}
  */
  readonly killInstance?: boolean | cdktf.IResolvable;
  /**
  * Project id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/wedata_ops_stop_task_async#project_id WedataOpsStopTaskAsync#project_id}
  */
  readonly projectId: string;
  /**
  * Task id list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/wedata_ops_stop_task_async#task_ids WedataOpsStopTaskAsync#task_ids}
  */
  readonly taskIds: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/wedata_ops_stop_task_async tencentcloud_wedata_ops_stop_task_async}
*/
export class WedataOpsStopTaskAsync extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_wedata_ops_stop_task_async";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WedataOpsStopTaskAsync resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WedataOpsStopTaskAsync to import
  * @param importFromId The id of the existing WedataOpsStopTaskAsync that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/wedata_ops_stop_task_async#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WedataOpsStopTaskAsync to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_wedata_ops_stop_task_async", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/wedata_ops_stop_task_async tencentcloud_wedata_ops_stop_task_async} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WedataOpsStopTaskAsyncConfig
  */
  public constructor(scope: Construct, id: string, config: WedataOpsStopTaskAsyncConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_wedata_ops_stop_task_async',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._killInstance = config.killInstance;
    this._projectId = config.projectId;
    this._taskIds = config.taskIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // kill_instance - computed: false, optional: true, required: false
  private _killInstance?: boolean | cdktf.IResolvable; 
  public get killInstance() {
    return this.getBooleanAttribute('kill_instance');
  }
  public set killInstance(value: boolean | cdktf.IResolvable) {
    this._killInstance = value;
  }
  public resetKillInstance() {
    this._killInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get killInstanceInput() {
    return this._killInstance;
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

  // task_ids - computed: false, optional: false, required: true
  private _taskIds?: string[]; 
  public get taskIds() {
    return cdktf.Fn.tolist(this.getListAttribute('task_ids'));
  }
  public set taskIds(value: string[]) {
    this._taskIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskIdsInput() {
    return this._taskIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      kill_instance: cdktf.booleanToTerraform(this._killInstance),
      project_id: cdktf.stringToTerraform(this._projectId),
      task_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._taskIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kill_instance: {
        value: cdktf.booleanToHclTerraform(this._killInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._taskIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
