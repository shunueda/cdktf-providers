// https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/sudo_command_bundle
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SudoCommandBundleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/sudo_command_bundle#add_env SudoCommandBundle#add_env}
  */
  readonly addEnv?: string[];
  /**
  * The human-readable name of the resource. Values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/sudo_command_bundle#name SudoCommandBundle#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/sudo_command_bundle#no_exec SudoCommandBundle#no_exec}
  */
  readonly noExec?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/sudo_command_bundle#no_passwd SudoCommandBundle#no_passwd}
  */
  readonly noPasswd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/sudo_command_bundle#run_as SudoCommandBundle#run_as}
  */
  readonly runAs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/sudo_command_bundle#set_env SudoCommandBundle#set_env}
  */
  readonly setEnv?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/sudo_command_bundle#sub_env SudoCommandBundle#sub_env}
  */
  readonly subEnv?: string[];
  /**
  * structured_commands block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/sudo_command_bundle#structured_commands SudoCommandBundle#structured_commands}
  */
  readonly structuredCommands: SudoCommandBundleStructuredCommands[] | cdktf.IResolvable;
}
export interface SudoCommandBundleStructuredCommands {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/sudo_command_bundle#args SudoCommandBundle#args}
  */
  readonly args?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/sudo_command_bundle#args_type SudoCommandBundle#args_type}
  */
  readonly argsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/sudo_command_bundle#command SudoCommandBundle#command}
  */
  readonly command: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/sudo_command_bundle#command_type SudoCommandBundle#command_type}
  */
  readonly commandType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/sudo_command_bundle#rendered_command SudoCommandBundle#rendered_command}
  */
  readonly renderedCommand?: string;
}

export function sudoCommandBundleStructuredCommandsToTerraform(struct?: SudoCommandBundleStructuredCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.stringToTerraform(struct!.args),
    args_type: cdktf.stringToTerraform(struct!.argsType),
    command: cdktf.stringToTerraform(struct!.command),
    command_type: cdktf.stringToTerraform(struct!.commandType),
    rendered_command: cdktf.stringToTerraform(struct!.renderedCommand),
  }
}


export function sudoCommandBundleStructuredCommandsToHclTerraform(struct?: SudoCommandBundleStructuredCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.stringToHclTerraform(struct!.args),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    args_type: {
      value: cdktf.stringToHclTerraform(struct!.argsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    command_type: {
      value: cdktf.stringToHclTerraform(struct!.commandType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rendered_command: {
      value: cdktf.stringToHclTerraform(struct!.renderedCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SudoCommandBundleStructuredCommandsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SudoCommandBundleStructuredCommands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._argsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.argsType = this._argsType;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._commandType !== undefined) {
      hasAnyValues = true;
      internalValueResult.commandType = this._commandType;
    }
    if (this._renderedCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.renderedCommand = this._renderedCommand;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SudoCommandBundleStructuredCommands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._argsType = undefined;
      this._command = undefined;
      this._commandType = undefined;
      this._renderedCommand = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._argsType = value.argsType;
      this._command = value.command;
      this._commandType = value.commandType;
      this._renderedCommand = value.renderedCommand;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string; 
  public get args() {
    return this.getStringAttribute('args');
  }
  public set args(value: string) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // args_type - computed: false, optional: true, required: false
  private _argsType?: string; 
  public get argsType() {
    return this.getStringAttribute('args_type');
  }
  public set argsType(value: string) {
    this._argsType = value;
  }
  public resetArgsType() {
    this._argsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsTypeInput() {
    return this._argsType;
  }

  // command - computed: false, optional: false, required: true
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // command_type - computed: false, optional: false, required: true
  private _commandType?: string; 
  public get commandType() {
    return this.getStringAttribute('command_type');
  }
  public set commandType(value: string) {
    this._commandType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandTypeInput() {
    return this._commandType;
  }

  // rendered_command - computed: false, optional: true, required: false
  private _renderedCommand?: string; 
  public get renderedCommand() {
    return this.getStringAttribute('rendered_command');
  }
  public set renderedCommand(value: string) {
    this._renderedCommand = value;
  }
  public resetRenderedCommand() {
    this._renderedCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renderedCommandInput() {
    return this._renderedCommand;
  }
}

export class SudoCommandBundleStructuredCommandsList extends cdktf.ComplexList {
  public internalValue? : SudoCommandBundleStructuredCommands[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SudoCommandBundleStructuredCommandsOutputReference {
    return new SudoCommandBundleStructuredCommandsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/sudo_command_bundle oktapam_sudo_command_bundle}
*/
export class SudoCommandBundle extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oktapam_sudo_command_bundle";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SudoCommandBundle resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SudoCommandBundle to import
  * @param importFromId The id of the existing SudoCommandBundle that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/sudo_command_bundle#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SudoCommandBundle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oktapam_sudo_command_bundle", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/sudo_command_bundle oktapam_sudo_command_bundle} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SudoCommandBundleConfig
  */
  public constructor(scope: Construct, id: string, config: SudoCommandBundleConfig) {
    super(scope, id, {
      terraformResourceType: 'oktapam_sudo_command_bundle',
      terraformGeneratorMetadata: {
        providerName: 'oktapam',
        providerVersion: '0.6.2',
        providerVersionConstraint: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addEnv = config.addEnv;
    this._name = config.name;
    this._noExec = config.noExec;
    this._noPasswd = config.noPasswd;
    this._runAs = config.runAs;
    this._setEnv = config.setEnv;
    this._subEnv = config.subEnv;
    this._structuredCommands.internalValue = config.structuredCommands;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_env - computed: false, optional: true, required: false
  private _addEnv?: string[]; 
  public get addEnv() {
    return this.getListAttribute('add_env');
  }
  public set addEnv(value: string[]) {
    this._addEnv = value;
  }
  public resetAddEnv() {
    this._addEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addEnvInput() {
    return this._addEnv;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // no_exec - computed: false, optional: true, required: false
  private _noExec?: boolean | cdktf.IResolvable; 
  public get noExec() {
    return this.getBooleanAttribute('no_exec');
  }
  public set noExec(value: boolean | cdktf.IResolvable) {
    this._noExec = value;
  }
  public resetNoExec() {
    this._noExec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noExecInput() {
    return this._noExec;
  }

  // no_passwd - computed: false, optional: true, required: false
  private _noPasswd?: boolean | cdktf.IResolvable; 
  public get noPasswd() {
    return this.getBooleanAttribute('no_passwd');
  }
  public set noPasswd(value: boolean | cdktf.IResolvable) {
    this._noPasswd = value;
  }
  public resetNoPasswd() {
    this._noPasswd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPasswdInput() {
    return this._noPasswd;
  }

  // run_as - computed: false, optional: true, required: false
  private _runAs?: string; 
  public get runAs() {
    return this.getStringAttribute('run_as');
  }
  public set runAs(value: string) {
    this._runAs = value;
  }
  public resetRunAs() {
    this._runAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsInput() {
    return this._runAs;
  }

  // set_env - computed: false, optional: true, required: false
  private _setEnv?: boolean | cdktf.IResolvable; 
  public get setEnv() {
    return this.getBooleanAttribute('set_env');
  }
  public set setEnv(value: boolean | cdktf.IResolvable) {
    this._setEnv = value;
  }
  public resetSetEnv() {
    this._setEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setEnvInput() {
    return this._setEnv;
  }

  // sub_env - computed: false, optional: true, required: false
  private _subEnv?: string[]; 
  public get subEnv() {
    return this.getListAttribute('sub_env');
  }
  public set subEnv(value: string[]) {
    this._subEnv = value;
  }
  public resetSubEnv() {
    this._subEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subEnvInput() {
    return this._subEnv;
  }

  // structured_commands - computed: false, optional: false, required: true
  private _structuredCommands = new SudoCommandBundleStructuredCommandsList(this, "structured_commands", false);
  public get structuredCommands() {
    return this._structuredCommands;
  }
  public putStructuredCommands(value: SudoCommandBundleStructuredCommands[] | cdktf.IResolvable) {
    this._structuredCommands.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get structuredCommandsInput() {
    return this._structuredCommands.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_env: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addEnv),
      name: cdktf.stringToTerraform(this._name),
      no_exec: cdktf.booleanToTerraform(this._noExec),
      no_passwd: cdktf.booleanToTerraform(this._noPasswd),
      run_as: cdktf.stringToTerraform(this._runAs),
      set_env: cdktf.booleanToTerraform(this._setEnv),
      sub_env: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subEnv),
      structured_commands: cdktf.listMapper(sudoCommandBundleStructuredCommandsToTerraform, true)(this._structuredCommands.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_env: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addEnv),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_exec: {
        value: cdktf.booleanToHclTerraform(this._noExec),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_passwd: {
        value: cdktf.booleanToHclTerraform(this._noPasswd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      run_as: {
        value: cdktf.stringToHclTerraform(this._runAs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_env: {
        value: cdktf.booleanToHclTerraform(this._setEnv),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sub_env: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subEnv),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      structured_commands: {
        value: cdktf.listMapperHcl(sudoCommandBundleStructuredCommandsToHclTerraform, true)(this._structuredCommands.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SudoCommandBundleStructuredCommandsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
