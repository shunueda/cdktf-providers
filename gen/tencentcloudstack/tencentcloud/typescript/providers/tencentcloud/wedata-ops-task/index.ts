// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/wedata_ops_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WedataOpsTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Action. Valid values: `START`, `PAUSE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/wedata_ops_task#action WedataOpsTask#action}
  */
  readonly action: string;
  /**
  * Whether to re-record the intermediate instance from the last pause to the current one when starting. The default value is false, which means no re-recording.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/wedata_ops_task#enable_data_backfill WedataOpsTask#enable_data_backfill}
  */
  readonly enableDataBackfill?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/wedata_ops_task#id WedataOpsTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether required to terminate the generated instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/wedata_ops_task#kill_instance WedataOpsTask#kill_instance}
  */
  readonly killInstance?: boolean | cdktf.IResolvable;
  /**
  * Project Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/wedata_ops_task#project_id WedataOpsTask#project_id}
  */
  readonly projectId: string;
  /**
  * Task id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/wedata_ops_task#task_id WedataOpsTask#task_id}
  */
  readonly taskId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/wedata_ops_task tencentcloud_wedata_ops_task}
*/
export class WedataOpsTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_wedata_ops_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WedataOpsTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WedataOpsTask to import
  * @param importFromId The id of the existing WedataOpsTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/wedata_ops_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WedataOpsTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_wedata_ops_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/wedata_ops_task tencentcloud_wedata_ops_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WedataOpsTaskConfig
  */
  public constructor(scope: Construct, id: string, config: WedataOpsTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_wedata_ops_task',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._enableDataBackfill = config.enableDataBackfill;
    this._id = config.id;
    this._killInstance = config.killInstance;
    this._projectId = config.projectId;
    this._taskId = config.taskId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // enable_data_backfill - computed: false, optional: true, required: false
  private _enableDataBackfill?: boolean | cdktf.IResolvable; 
  public get enableDataBackfill() {
    return this.getBooleanAttribute('enable_data_backfill');
  }
  public set enableDataBackfill(value: boolean | cdktf.IResolvable) {
    this._enableDataBackfill = value;
  }
  public resetEnableDataBackfill() {
    this._enableDataBackfill = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDataBackfillInput() {
    return this._enableDataBackfill;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // task_id - computed: false, optional: false, required: true
  private _taskId?: string; 
  public get taskId() {
    return this.getStringAttribute('task_id');
  }
  public set taskId(value: string) {
    this._taskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskIdInput() {
    return this._taskId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      enable_data_backfill: cdktf.booleanToTerraform(this._enableDataBackfill),
      id: cdktf.stringToTerraform(this._id),
      kill_instance: cdktf.booleanToTerraform(this._killInstance),
      project_id: cdktf.stringToTerraform(this._projectId),
      task_id: cdktf.stringToTerraform(this._taskId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_data_backfill: {
        value: cdktf.booleanToHclTerraform(this._enableDataBackfill),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      task_id: {
        value: cdktf.stringToHclTerraform(this._taskId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
