// https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_plugin_instance_executable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Vns3PluginInstanceExecutableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of command to run in the plugin executable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_plugin_instance_executable#command Vns3PluginInstanceExecutable#command}
  */
  readonly command?: string;
  /**
  * Set path to executable inside plugin instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_plugin_instance_executable#executable_path Vns3PluginInstanceExecutable#executable_path}
  */
  readonly executablePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_plugin_instance_executable#id Vns3PluginInstanceExecutable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of plugin instance the executable is running in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_plugin_instance_executable#instance_id Vns3PluginInstanceExecutable#instance_id}
  */
  readonly instanceId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_plugin_instance_executable#last_updated Vns3PluginInstanceExecutable#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * Increment this number to re-run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_plugin_instance_executable#run_count Vns3PluginInstanceExecutable#run_count}
  */
  readonly runCount?: number;
  /**
  * Set timeout for command execution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_plugin_instance_executable#timeout Vns3PluginInstanceExecutable#timeout}
  */
  readonly timeout?: number;
  /**
  * vns3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_plugin_instance_executable#vns3 Vns3PluginInstanceExecutable#vns3}
  */
  readonly vns3?: Vns3PluginInstanceExecutableVns3;
}
export interface Vns3PluginInstanceExecutableVns3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_plugin_instance_executable#api_token Vns3PluginInstanceExecutable#api_token}
  */
  readonly apiToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_plugin_instance_executable#host Vns3PluginInstanceExecutable#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_plugin_instance_executable#password Vns3PluginInstanceExecutable#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_plugin_instance_executable#timeout Vns3PluginInstanceExecutable#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_plugin_instance_executable#username Vns3PluginInstanceExecutable#username}
  */
  readonly username?: string;
}

export function vns3PluginInstanceExecutableVns3ToTerraform(struct?: Vns3PluginInstanceExecutableVns3OutputReference | Vns3PluginInstanceExecutableVns3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_token: cdktf.stringToTerraform(struct!.apiToken),
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.stringToTerraform(struct!.password),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function vns3PluginInstanceExecutableVns3ToHclTerraform(struct?: Vns3PluginInstanceExecutableVns3OutputReference | Vns3PluginInstanceExecutableVns3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_token: {
      value: cdktf.stringToHclTerraform(struct!.apiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Vns3PluginInstanceExecutableVns3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Vns3PluginInstanceExecutableVns3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Vns3PluginInstanceExecutableVns3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiToken = undefined;
      this._host = undefined;
      this._password = undefined;
      this._timeout = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiToken = value.apiToken;
      this._host = value.host;
      this._password = value.password;
      this._timeout = value.timeout;
      this._username = value.username;
    }
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_plugin_instance_executable cohesivenet_vns3_plugin_instance_executable}
*/
export class Vns3PluginInstanceExecutable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cohesivenet_vns3_plugin_instance_executable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vns3PluginInstanceExecutable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vns3PluginInstanceExecutable to import
  * @param importFromId The id of the existing Vns3PluginInstanceExecutable that should be imported. Refer to the {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_plugin_instance_executable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vns3PluginInstanceExecutable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cohesivenet_vns3_plugin_instance_executable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_plugin_instance_executable cohesivenet_vns3_plugin_instance_executable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Vns3PluginInstanceExecutableConfig
  */
  public constructor(scope: Construct, id: string, config: Vns3PluginInstanceExecutableConfig) {
    super(scope, id, {
      terraformResourceType: 'cohesivenet_vns3_plugin_instance_executable',
      terraformGeneratorMetadata: {
        providerName: 'cohesivenet',
        providerVersion: '1.0.9',
        providerVersionConstraint: '1.0.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._command = config.command;
    this._executablePath = config.executablePath;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._lastUpdated = config.lastUpdated;
    this._runCount = config.runCount;
    this._timeout = config.timeout;
    this._vns3.internalValue = config.vns3;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // error - computed: true, optional: false, required: false
  public get error() {
    return this.getStringAttribute('error');
  }

  // executable_path - computed: false, optional: true, required: false
  private _executablePath?: string; 
  public get executablePath() {
    return this.getStringAttribute('executable_path');
  }
  public set executablePath(value: string) {
    this._executablePath = value;
  }
  public resetExecutablePath() {
    this._executablePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executablePathInput() {
    return this._executablePath;
  }

  // failed - computed: true, optional: false, required: false
  public get failed() {
    return this.getBooleanAttribute('failed');
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // last_executed - computed: true, optional: false, required: false
  public get lastExecuted() {
    return this.getStringAttribute('last_executed');
  }

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // output - computed: true, optional: false, required: false
  public get output() {
    return this.getStringAttribute('output');
  }

  // run_count - computed: false, optional: true, required: false
  private _runCount?: number; 
  public get runCount() {
    return this.getNumberAttribute('run_count');
  }
  public set runCount(value: number) {
    this._runCount = value;
  }
  public resetRunCount() {
    this._runCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runCountInput() {
    return this._runCount;
  }

  // timed_out - computed: true, optional: false, required: false
  public get timedOut() {
    return this.getBooleanAttribute('timed_out');
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

  // vns3 - computed: false, optional: true, required: false
  private _vns3 = new Vns3PluginInstanceExecutableVns3OutputReference(this, "vns3");
  public get vns3() {
    return this._vns3;
  }
  public putVns3(value: Vns3PluginInstanceExecutableVns3) {
    this._vns3.internalValue = value;
  }
  public resetVns3() {
    this._vns3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vns3Input() {
    return this._vns3.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      command: cdktf.stringToTerraform(this._command),
      executable_path: cdktf.stringToTerraform(this._executablePath),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.numberToTerraform(this._instanceId),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      run_count: cdktf.numberToTerraform(this._runCount),
      timeout: cdktf.numberToTerraform(this._timeout),
      vns3: vns3PluginInstanceExecutableVns3ToTerraform(this._vns3.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      command: {
        value: cdktf.stringToHclTerraform(this._command),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      executable_path: {
        value: cdktf.stringToHclTerraform(this._executablePath),
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
      instance_id: {
        value: cdktf.numberToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      last_updated: {
        value: cdktf.stringToHclTerraform(this._lastUpdated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      run_count: {
        value: cdktf.numberToHclTerraform(this._runCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vns3: {
        value: vns3PluginInstanceExecutableVns3ToHclTerraform(this._vns3.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Vns3PluginInstanceExecutableVns3List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
