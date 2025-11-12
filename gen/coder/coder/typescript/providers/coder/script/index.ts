// https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/script
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScriptConfig extends cdktf.TerraformMetaArguments {
  /**
  * The `id` property of a `coder_agent` resource to associate with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/script#agent_id Script#agent_id}
  */
  readonly agentId: string;
  /**
  * The cron schedule to run the script on. This uses a 6-field cron expression format: `seconds minutes hours day-of-month month day-of-week`. Note that this differs from the standard Unix 5-field format by including seconds as the first field. Examples: `"0 0 22 * * *"` (daily at 10 PM), `"0 * /5 * * * *"` (every 5 minutes), `"30 0 9 * * 1-5"` (weekdays at 9:30 AM).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/script#cron Script#cron}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly cron?: string;
  /**
  * The display name of the script to display logs in the dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/script#display_name Script#display_name}
  */
  readonly displayName: string;
  /**
  * A URL to an icon that will display in the dashboard. View built-in icons [here](https://github.com/coder/coder/tree/main/site/static/icon). Use a built-in icon with `"${data.coder_workspace.me.access_url}/icon/<path>"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/script#icon Script#icon}
  */
  readonly icon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/script#id Script#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The path of a file to write the logs to. If relative, it will be appended to tmp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/script#log_path Script#log_path}
  */
  readonly logPath?: string;
  /**
  * This option defines whether or not the script should run when the agent starts. The script should exit when it is done to signal that the agent is ready.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/script#run_on_start Script#run_on_start}
  */
  readonly runOnStart?: boolean | cdktf.IResolvable;
  /**
  * This option defines whether or not the script should run when the agent stops. The script should exit when it is done to signal that the workspace can be stopped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/script#run_on_stop Script#run_on_stop}
  */
  readonly runOnStop?: boolean | cdktf.IResolvable;
  /**
  * The content of the script that will be run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/script#script Script#script}
  */
  readonly script: string;
  /**
  * This option determines whether users can log in immediately or must wait for the workspace to finish running this script upon startup. If not enabled, users may encounter an incomplete workspace when logging in. This option only sets the default, the user can still manually override the behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/script#start_blocks_login Script#start_blocks_login}
  */
  readonly startBlocksLogin?: boolean | cdktf.IResolvable;
  /**
  * Time in seconds that the script is allowed to run. If the script does not complete within this time, the script is terminated and the agent lifecycle status is marked as timed out. A value of zero (default) means no timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/script#timeout Script#timeout}
  */
  readonly timeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/script coder_script}
*/
export class Script extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coder_script";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Script resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Script to import
  * @param importFromId The id of the existing Script that should be imported. Refer to the {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/script#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Script to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coder_script", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/script coder_script} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScriptConfig
  */
  public constructor(scope: Construct, id: string, config: ScriptConfig) {
    super(scope, id, {
      terraformResourceType: 'coder_script',
      terraformGeneratorMetadata: {
        providerName: 'coder',
        providerVersion: '2.13.1',
        providerVersionConstraint: '2.13.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentId = config.agentId;
    this._cron = config.cron;
    this._displayName = config.displayName;
    this._icon = config.icon;
    this._id = config.id;
    this._logPath = config.logPath;
    this._runOnStart = config.runOnStart;
    this._runOnStop = config.runOnStop;
    this._script = config.script;
    this._startBlocksLogin = config.startBlocksLogin;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_id - computed: false, optional: false, required: true
  private _agentId?: string; 
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }
  public set agentId(value: string) {
    this._agentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
  }

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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
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

  // log_path - computed: false, optional: true, required: false
  private _logPath?: string; 
  public get logPath() {
    return this.getStringAttribute('log_path');
  }
  public set logPath(value: string) {
    this._logPath = value;
  }
  public resetLogPath() {
    this._logPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPathInput() {
    return this._logPath;
  }

  // run_on_start - computed: false, optional: true, required: false
  private _runOnStart?: boolean | cdktf.IResolvable; 
  public get runOnStart() {
    return this.getBooleanAttribute('run_on_start');
  }
  public set runOnStart(value: boolean | cdktf.IResolvable) {
    this._runOnStart = value;
  }
  public resetRunOnStart() {
    this._runOnStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runOnStartInput() {
    return this._runOnStart;
  }

  // run_on_stop - computed: false, optional: true, required: false
  private _runOnStop?: boolean | cdktf.IResolvable; 
  public get runOnStop() {
    return this.getBooleanAttribute('run_on_stop');
  }
  public set runOnStop(value: boolean | cdktf.IResolvable) {
    this._runOnStop = value;
  }
  public resetRunOnStop() {
    this._runOnStop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runOnStopInput() {
    return this._runOnStop;
  }

  // script - computed: false, optional: false, required: true
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // start_blocks_login - computed: false, optional: true, required: false
  private _startBlocksLogin?: boolean | cdktf.IResolvable; 
  public get startBlocksLogin() {
    return this.getBooleanAttribute('start_blocks_login');
  }
  public set startBlocksLogin(value: boolean | cdktf.IResolvable) {
    this._startBlocksLogin = value;
  }
  public resetStartBlocksLogin() {
    this._startBlocksLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startBlocksLoginInput() {
    return this._startBlocksLogin;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_id: cdktf.stringToTerraform(this._agentId),
      cron: cdktf.stringToTerraform(this._cron),
      display_name: cdktf.stringToTerraform(this._displayName),
      icon: cdktf.stringToTerraform(this._icon),
      id: cdktf.stringToTerraform(this._id),
      log_path: cdktf.stringToTerraform(this._logPath),
      run_on_start: cdktf.booleanToTerraform(this._runOnStart),
      run_on_stop: cdktf.booleanToTerraform(this._runOnStop),
      script: cdktf.stringToTerraform(this._script),
      start_blocks_login: cdktf.booleanToTerraform(this._startBlocksLogin),
      timeout: cdktf.numberToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_id: {
        value: cdktf.stringToHclTerraform(this._agentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cron: {
        value: cdktf.stringToHclTerraform(this._cron),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icon: {
        value: cdktf.stringToHclTerraform(this._icon),
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
      log_path: {
        value: cdktf.stringToHclTerraform(this._logPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      run_on_start: {
        value: cdktf.booleanToHclTerraform(this._runOnStart),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      run_on_stop: {
        value: cdktf.booleanToHclTerraform(this._runOnStop),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      script: {
        value: cdktf.stringToHclTerraform(this._script),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_blocks_login: {
        value: cdktf.booleanToHclTerraform(this._startBlocksLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
