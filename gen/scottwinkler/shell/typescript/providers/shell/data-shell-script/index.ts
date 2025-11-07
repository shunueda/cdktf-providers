// https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs/data-sources/script
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataShellScriptConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs/data-sources/script#environment DataShellScript#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs/data-sources/script#id DataShellScript#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs/data-sources/script#interpreter DataShellScript#interpreter}
  */
  readonly interpreter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs/data-sources/script#sensitive_environment DataShellScript#sensitive_environment}
  */
  readonly sensitiveEnvironment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs/data-sources/script#working_directory DataShellScript#working_directory}
  */
  readonly workingDirectory?: string;
  /**
  * lifecycle_commands block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs/data-sources/script#lifecycle_commands DataShellScript#lifecycle_commands}
  */
  readonly lifecycleCommands: DataShellScriptLifecycleCommands;
}
export interface DataShellScriptLifecycleCommands {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs/data-sources/script#read DataShellScript#read}
  */
  readonly read: string;
}

export function dataShellScriptLifecycleCommandsToTerraform(struct?: DataShellScriptLifecycleCommandsOutputReference | DataShellScriptLifecycleCommands): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataShellScriptLifecycleCommandsToHclTerraform(struct?: DataShellScriptLifecycleCommandsOutputReference | DataShellScriptLifecycleCommands): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataShellScriptLifecycleCommandsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataShellScriptLifecycleCommands | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataShellScriptLifecycleCommands | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._read = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: false, required: true
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs/data-sources/script shell_script}
*/
export class DataShellScript extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "shell_script";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataShellScript resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataShellScript to import
  * @param importFromId The id of the existing DataShellScript that should be imported. Refer to the {@link https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs/data-sources/script#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataShellScript to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "shell_script", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs/data-sources/script shell_script} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataShellScriptConfig
  */
  public constructor(scope: Construct, id: string, config: DataShellScriptConfig) {
    super(scope, id, {
      terraformResourceType: 'shell_script',
      terraformGeneratorMetadata: {
        providerName: 'shell',
        providerVersion: '1.7.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environment = config.environment;
    this._id = config.id;
    this._interpreter = config.interpreter;
    this._sensitiveEnvironment = config.sensitiveEnvironment;
    this._workingDirectory = config.workingDirectory;
    this._lifecycleCommands.internalValue = config.lifecycleCommands;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
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

  // interpreter - computed: false, optional: true, required: false
  private _interpreter?: string[]; 
  public get interpreter() {
    return this.getListAttribute('interpreter');
  }
  public set interpreter(value: string[]) {
    this._interpreter = value;
  }
  public resetInterpreter() {
    this._interpreter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interpreterInput() {
    return this._interpreter;
  }

  // output - computed: true, optional: false, required: false
  private _output = new cdktf.StringMap(this, "output");
  public get output() {
    return this._output;
  }

  // sensitive_environment - computed: false, optional: true, required: false
  private _sensitiveEnvironment?: { [key: string]: string }; 
  public get sensitiveEnvironment() {
    return this.getStringMapAttribute('sensitive_environment');
  }
  public set sensitiveEnvironment(value: { [key: string]: string }) {
    this._sensitiveEnvironment = value;
  }
  public resetSensitiveEnvironment() {
    this._sensitiveEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveEnvironmentInput() {
    return this._sensitiveEnvironment;
  }

  // working_directory - computed: false, optional: true, required: false
  private _workingDirectory?: string; 
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }
  public set workingDirectory(value: string) {
    this._workingDirectory = value;
  }
  public resetWorkingDirectory() {
    this._workingDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirectoryInput() {
    return this._workingDirectory;
  }

  // lifecycle_commands - computed: false, optional: false, required: true
  private _lifecycleCommands = new DataShellScriptLifecycleCommandsOutputReference(this, "lifecycle_commands");
  public get lifecycleCommands() {
    return this._lifecycleCommands;
  }
  public putLifecycleCommands(value: DataShellScriptLifecycleCommands) {
    this._lifecycleCommands.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleCommandsInput() {
    return this._lifecycleCommands.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment: cdktf.hashMapper(cdktf.stringToTerraform)(this._environment),
      id: cdktf.stringToTerraform(this._id),
      interpreter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interpreter),
      sensitive_environment: cdktf.hashMapper(cdktf.stringToTerraform)(this._sensitiveEnvironment),
      working_directory: cdktf.stringToTerraform(this._workingDirectory),
      lifecycle_commands: dataShellScriptLifecycleCommandsToTerraform(this._lifecycleCommands.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._environment),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interpreter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interpreter),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sensitive_environment: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._sensitiveEnvironment),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      working_directory: {
        value: cdktf.stringToHclTerraform(this._workingDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lifecycle_commands: {
        value: dataShellScriptLifecycleCommandsToHclTerraform(this._lifecycleCommands.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataShellScriptLifecycleCommandsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
