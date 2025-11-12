// https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs/resources/script
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScriptConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs/resources/script#dirty Script#dirty}
  */
  readonly dirty?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs/resources/script#environment Script#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs/resources/script#id Script#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs/resources/script#interpreter Script#interpreter}
  */
  readonly interpreter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs/resources/script#read_error Script#read_error}
  */
  readonly readError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs/resources/script#sensitive_environment Script#sensitive_environment}
  */
  readonly sensitiveEnvironment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs/resources/script#triggers Script#triggers}
  */
  readonly triggers?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs/resources/script#working_directory Script#working_directory}
  */
  readonly workingDirectory?: string;
  /**
  * lifecycle_commands block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs/resources/script#lifecycle_commands Script#lifecycle_commands}
  */
  readonly lifecycleCommands: ScriptLifecycleCommands;
}
export interface ScriptLifecycleCommands {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs/resources/script#create Script#create}
  */
  readonly create: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs/resources/script#delete Script#delete}
  */
  readonly delete: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs/resources/script#read Script#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs/resources/script#update Script#update}
  */
  readonly update?: string;
}

export function scriptLifecycleCommandsToTerraform(struct?: ScriptLifecycleCommandsOutputReference | ScriptLifecycleCommands): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function scriptLifecycleCommandsToHclTerraform(struct?: ScriptLifecycleCommandsOutputReference | ScriptLifecycleCommands): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScriptLifecycleCommandsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScriptLifecycleCommands | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScriptLifecycleCommands | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: false, required: true
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: false, required: true
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs/resources/script shell_script}
*/
export class Script extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "shell_script";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Script resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Script to import
  * @param importFromId The id of the existing Script that should be imported. Refer to the {@link https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs/resources/script#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Script to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "shell_script", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs/resources/script shell_script} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScriptConfig
  */
  public constructor(scope: Construct, id: string, config: ScriptConfig) {
    super(scope, id, {
      terraformResourceType: 'shell_script',
      terraformGeneratorMetadata: {
        providerName: 'shell',
        providerVersion: '1.7.10',
        providerVersionConstraint: '1.7.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dirty = config.dirty;
    this._environment = config.environment;
    this._id = config.id;
    this._interpreter = config.interpreter;
    this._readError = config.readError;
    this._sensitiveEnvironment = config.sensitiveEnvironment;
    this._triggers = config.triggers;
    this._workingDirectory = config.workingDirectory;
    this._lifecycleCommands.internalValue = config.lifecycleCommands;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dirty - computed: false, optional: true, required: false
  private _dirty?: boolean | cdktf.IResolvable; 
  public get dirty() {
    return this.getBooleanAttribute('dirty');
  }
  public set dirty(value: boolean | cdktf.IResolvable) {
    this._dirty = value;
  }
  public resetDirty() {
    this._dirty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirtyInput() {
    return this._dirty;
  }

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

  // read_error - computed: false, optional: true, required: false
  private _readError?: string; 
  public get readError() {
    return this.getStringAttribute('read_error');
  }
  public set readError(value: string) {
    this._readError = value;
  }
  public resetReadError() {
    this._readError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readErrorInput() {
    return this._readError;
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

  // triggers - computed: false, optional: true, required: false
  private _triggers?: { [key: string]: string }; 
  public get triggers() {
    return this.getStringMapAttribute('triggers');
  }
  public set triggers(value: { [key: string]: string }) {
    this._triggers = value;
  }
  public resetTriggers() {
    this._triggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers;
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
  private _lifecycleCommands = new ScriptLifecycleCommandsOutputReference(this, "lifecycle_commands");
  public get lifecycleCommands() {
    return this._lifecycleCommands;
  }
  public putLifecycleCommands(value: ScriptLifecycleCommands) {
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
      dirty: cdktf.booleanToTerraform(this._dirty),
      environment: cdktf.hashMapper(cdktf.stringToTerraform)(this._environment),
      id: cdktf.stringToTerraform(this._id),
      interpreter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interpreter),
      read_error: cdktf.stringToTerraform(this._readError),
      sensitive_environment: cdktf.hashMapper(cdktf.stringToTerraform)(this._sensitiveEnvironment),
      triggers: cdktf.hashMapper(cdktf.stringToTerraform)(this._triggers),
      working_directory: cdktf.stringToTerraform(this._workingDirectory),
      lifecycle_commands: scriptLifecycleCommandsToTerraform(this._lifecycleCommands.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dirty: {
        value: cdktf.booleanToHclTerraform(this._dirty),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      read_error: {
        value: cdktf.stringToHclTerraform(this._readError),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensitive_environment: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._sensitiveEnvironment),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      triggers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._triggers),
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
        value: scriptLifecycleCommandsToHclTerraform(this._lifecycleCommands.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScriptLifecycleCommandsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
