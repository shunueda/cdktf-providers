// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_job_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EhpcJobTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_job_template#array_request EhpcJobTemplate#array_request}
  */
  readonly arrayRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_job_template#clock_time EhpcJobTemplate#clock_time}
  */
  readonly clockTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_job_template#command_line EhpcJobTemplate#command_line}
  */
  readonly commandLine: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_job_template#gpu EhpcJobTemplate#gpu}
  */
  readonly gpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_job_template#id EhpcJobTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_job_template#job_template_name EhpcJobTemplate#job_template_name}
  */
  readonly jobTemplateName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_job_template#mem EhpcJobTemplate#mem}
  */
  readonly mem?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_job_template#node EhpcJobTemplate#node}
  */
  readonly nodeAttribute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_job_template#package_path EhpcJobTemplate#package_path}
  */
  readonly packagePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_job_template#priority EhpcJobTemplate#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_job_template#queue EhpcJobTemplate#queue}
  */
  readonly queue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_job_template#re_runable EhpcJobTemplate#re_runable}
  */
  readonly reRunable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_job_template#runas_user EhpcJobTemplate#runas_user}
  */
  readonly runasUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_job_template#stderr_redirect_path EhpcJobTemplate#stderr_redirect_path}
  */
  readonly stderrRedirectPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_job_template#stdout_redirect_path EhpcJobTemplate#stdout_redirect_path}
  */
  readonly stdoutRedirectPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_job_template#task EhpcJobTemplate#task}
  */
  readonly task?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_job_template#thread EhpcJobTemplate#thread}
  */
  readonly thread?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_job_template#variables EhpcJobTemplate#variables}
  */
  readonly variables?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_job_template alicloud_ehpc_job_template}
*/
export class EhpcJobTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ehpc_job_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EhpcJobTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EhpcJobTemplate to import
  * @param importFromId The id of the existing EhpcJobTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_job_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EhpcJobTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ehpc_job_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ehpc_job_template alicloud_ehpc_job_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EhpcJobTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: EhpcJobTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ehpc_job_template',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arrayRequest = config.arrayRequest;
    this._clockTime = config.clockTime;
    this._commandLine = config.commandLine;
    this._gpu = config.gpu;
    this._id = config.id;
    this._jobTemplateName = config.jobTemplateName;
    this._mem = config.mem;
    this._node = config.nodeAttribute;
    this._packagePath = config.packagePath;
    this._priority = config.priority;
    this._queue = config.queue;
    this._reRunable = config.reRunable;
    this._runasUser = config.runasUser;
    this._stderrRedirectPath = config.stderrRedirectPath;
    this._stdoutRedirectPath = config.stdoutRedirectPath;
    this._task = config.task;
    this._thread = config.thread;
    this._variables = config.variables;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // array_request - computed: false, optional: true, required: false
  private _arrayRequest?: string; 
  public get arrayRequest() {
    return this.getStringAttribute('array_request');
  }
  public set arrayRequest(value: string) {
    this._arrayRequest = value;
  }
  public resetArrayRequest() {
    this._arrayRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayRequestInput() {
    return this._arrayRequest;
  }

  // clock_time - computed: false, optional: true, required: false
  private _clockTime?: string; 
  public get clockTime() {
    return this.getStringAttribute('clock_time');
  }
  public set clockTime(value: string) {
    this._clockTime = value;
  }
  public resetClockTime() {
    this._clockTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clockTimeInput() {
    return this._clockTime;
  }

  // command_line - computed: false, optional: false, required: true
  private _commandLine?: string; 
  public get commandLine() {
    return this.getStringAttribute('command_line');
  }
  public set commandLine(value: string) {
    this._commandLine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandLineInput() {
    return this._commandLine;
  }

  // gpu - computed: false, optional: true, required: false
  private _gpu?: number; 
  public get gpu() {
    return this.getNumberAttribute('gpu');
  }
  public set gpu(value: number) {
    this._gpu = value;
  }
  public resetGpu() {
    this._gpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuInput() {
    return this._gpu;
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

  // job_template_name - computed: false, optional: false, required: true
  private _jobTemplateName?: string; 
  public get jobTemplateName() {
    return this.getStringAttribute('job_template_name');
  }
  public set jobTemplateName(value: string) {
    this._jobTemplateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTemplateNameInput() {
    return this._jobTemplateName;
  }

  // mem - computed: false, optional: true, required: false
  private _mem?: string; 
  public get mem() {
    return this.getStringAttribute('mem');
  }
  public set mem(value: string) {
    this._mem = value;
  }
  public resetMem() {
    this._mem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memInput() {
    return this._mem;
  }

  // node - computed: false, optional: true, required: false
  private _node?: number; 
  public get nodeAttribute() {
    return this.getNumberAttribute('node');
  }
  public set nodeAttribute(value: number) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // package_path - computed: false, optional: true, required: false
  private _packagePath?: string; 
  public get packagePath() {
    return this.getStringAttribute('package_path');
  }
  public set packagePath(value: string) {
    this._packagePath = value;
  }
  public resetPackagePath() {
    this._packagePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagePathInput() {
    return this._packagePath;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // queue - computed: false, optional: true, required: false
  private _queue?: string; 
  public get queue() {
    return this.getStringAttribute('queue');
  }
  public set queue(value: string) {
    this._queue = value;
  }
  public resetQueue() {
    this._queue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue;
  }

  // re_runable - computed: true, optional: true, required: false
  private _reRunable?: boolean | cdktf.IResolvable; 
  public get reRunable() {
    return this.getBooleanAttribute('re_runable');
  }
  public set reRunable(value: boolean | cdktf.IResolvable) {
    this._reRunable = value;
  }
  public resetReRunable() {
    this._reRunable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reRunableInput() {
    return this._reRunable;
  }

  // runas_user - computed: false, optional: true, required: false
  private _runasUser?: string; 
  public get runasUser() {
    return this.getStringAttribute('runas_user');
  }
  public set runasUser(value: string) {
    this._runasUser = value;
  }
  public resetRunasUser() {
    this._runasUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runasUserInput() {
    return this._runasUser;
  }

  // stderr_redirect_path - computed: false, optional: true, required: false
  private _stderrRedirectPath?: string; 
  public get stderrRedirectPath() {
    return this.getStringAttribute('stderr_redirect_path');
  }
  public set stderrRedirectPath(value: string) {
    this._stderrRedirectPath = value;
  }
  public resetStderrRedirectPath() {
    this._stderrRedirectPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stderrRedirectPathInput() {
    return this._stderrRedirectPath;
  }

  // stdout_redirect_path - computed: false, optional: true, required: false
  private _stdoutRedirectPath?: string; 
  public get stdoutRedirectPath() {
    return this.getStringAttribute('stdout_redirect_path');
  }
  public set stdoutRedirectPath(value: string) {
    this._stdoutRedirectPath = value;
  }
  public resetStdoutRedirectPath() {
    this._stdoutRedirectPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stdoutRedirectPathInput() {
    return this._stdoutRedirectPath;
  }

  // task - computed: false, optional: true, required: false
  private _task?: number; 
  public get task() {
    return this.getNumberAttribute('task');
  }
  public set task(value: number) {
    this._task = value;
  }
  public resetTask() {
    this._task = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskInput() {
    return this._task;
  }

  // thread - computed: false, optional: true, required: false
  private _thread?: number; 
  public get thread() {
    return this.getNumberAttribute('thread');
  }
  public set thread(value: number) {
    this._thread = value;
  }
  public resetThread() {
    this._thread = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadInput() {
    return this._thread;
  }

  // variables - computed: false, optional: true, required: false
  private _variables?: string; 
  public get variables() {
    return this.getStringAttribute('variables');
  }
  public set variables(value: string) {
    this._variables = value;
  }
  public resetVariables() {
    this._variables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      array_request: cdktf.stringToTerraform(this._arrayRequest),
      clock_time: cdktf.stringToTerraform(this._clockTime),
      command_line: cdktf.stringToTerraform(this._commandLine),
      gpu: cdktf.numberToTerraform(this._gpu),
      id: cdktf.stringToTerraform(this._id),
      job_template_name: cdktf.stringToTerraform(this._jobTemplateName),
      mem: cdktf.stringToTerraform(this._mem),
      node: cdktf.numberToTerraform(this._node),
      package_path: cdktf.stringToTerraform(this._packagePath),
      priority: cdktf.numberToTerraform(this._priority),
      queue: cdktf.stringToTerraform(this._queue),
      re_runable: cdktf.booleanToTerraform(this._reRunable),
      runas_user: cdktf.stringToTerraform(this._runasUser),
      stderr_redirect_path: cdktf.stringToTerraform(this._stderrRedirectPath),
      stdout_redirect_path: cdktf.stringToTerraform(this._stdoutRedirectPath),
      task: cdktf.numberToTerraform(this._task),
      thread: cdktf.numberToTerraform(this._thread),
      variables: cdktf.stringToTerraform(this._variables),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      array_request: {
        value: cdktf.stringToHclTerraform(this._arrayRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clock_time: {
        value: cdktf.stringToHclTerraform(this._clockTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      command_line: {
        value: cdktf.stringToHclTerraform(this._commandLine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gpu: {
        value: cdktf.numberToHclTerraform(this._gpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_template_name: {
        value: cdktf.stringToHclTerraform(this._jobTemplateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mem: {
        value: cdktf.stringToHclTerraform(this._mem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node: {
        value: cdktf.numberToHclTerraform(this._node),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      package_path: {
        value: cdktf.stringToHclTerraform(this._packagePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queue: {
        value: cdktf.stringToHclTerraform(this._queue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      re_runable: {
        value: cdktf.booleanToHclTerraform(this._reRunable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      runas_user: {
        value: cdktf.stringToHclTerraform(this._runasUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stderr_redirect_path: {
        value: cdktf.stringToHclTerraform(this._stderrRedirectPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stdout_redirect_path: {
        value: cdktf.stringToHclTerraform(this._stdoutRedirectPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task: {
        value: cdktf.numberToHclTerraform(this._task),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      thread: {
        value: cdktf.numberToHclTerraform(this._thread),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      variables: {
        value: cdktf.stringToHclTerraform(this._variables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
