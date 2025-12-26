// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_pull_stream_task_restart
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CssPullStreamTaskRestartConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_pull_stream_task_restart#id CssPullStreamTaskRestart#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Task operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_pull_stream_task_restart#operator CssPullStreamTaskRestart#operator}
  */
  readonly operator: string;
  /**
  * Task Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_pull_stream_task_restart#task_id CssPullStreamTaskRestart#task_id}
  */
  readonly taskId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_pull_stream_task_restart tencentcloud_css_pull_stream_task_restart}
*/
export class CssPullStreamTaskRestart extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_css_pull_stream_task_restart";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CssPullStreamTaskRestart resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CssPullStreamTaskRestart to import
  * @param importFromId The id of the existing CssPullStreamTaskRestart that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_pull_stream_task_restart#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CssPullStreamTaskRestart to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_css_pull_stream_task_restart", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_pull_stream_task_restart tencentcloud_css_pull_stream_task_restart} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CssPullStreamTaskRestartConfig
  */
  public constructor(scope: Construct, id: string, config: CssPullStreamTaskRestartConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_css_pull_stream_task_restart',
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
    this._id = config.id;
    this._operator = config.operator;
    this._taskId = config.taskId;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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
      id: cdktf.stringToTerraform(this._id),
      operator: cdktf.stringToTerraform(this._operator),
      task_id: cdktf.stringToTerraform(this._taskId),
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
      operator: {
        value: cdktf.stringToHclTerraform(this._operator),
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
