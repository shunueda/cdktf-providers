// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/tacacs_command_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TacacsCommandSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/tacacs_command_set#commands TacacsCommandSet#commands}
  */
  readonly commands?: TacacsCommandSetCommands[] | cdktf.IResolvable;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/tacacs_command_set#description TacacsCommandSet#description}
  */
  readonly description?: string;
  /**
  * The name of the TACACS command set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/tacacs_command_set#name TacacsCommandSet#name}
  */
  readonly name: string;
  /**
  * Permit unmatched commands
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/tacacs_command_set#permit_unmatched TacacsCommandSet#permit_unmatched}
  */
  readonly permitUnmatched?: boolean | cdktf.IResolvable;
}
export interface TacacsCommandSetCommands {
  /**
  * Command arguments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/tacacs_command_set#arguments TacacsCommandSet#arguments}
  */
  readonly arguments: string;
  /**
  * Command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/tacacs_command_set#command TacacsCommandSet#command}
  */
  readonly command: string;
  /**
  * Grant
  *   - Choices: `PERMIT`, `DENY`, `DENY_ALWAYS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/tacacs_command_set#grant TacacsCommandSet#grant}
  */
  readonly grant: string;
}

export function tacacsCommandSetCommandsToTerraform(struct?: TacacsCommandSetCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arguments: cdktf.stringToTerraform(struct!.arguments),
    command: cdktf.stringToTerraform(struct!.command),
    grant: cdktf.stringToTerraform(struct!.grant),
  }
}


export function tacacsCommandSetCommandsToHclTerraform(struct?: TacacsCommandSetCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arguments: {
      value: cdktf.stringToHclTerraform(struct!.arguments),
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
    grant: {
      value: cdktf.stringToHclTerraform(struct!.grant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TacacsCommandSetCommandsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TacacsCommandSetCommands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.arguments = this._arguments;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._grant !== undefined) {
      hasAnyValues = true;
      internalValueResult.grant = this._grant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TacacsCommandSetCommands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arguments = undefined;
      this._command = undefined;
      this._grant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arguments = value.arguments;
      this._command = value.command;
      this._grant = value.grant;
    }
  }

  // arguments - computed: false, optional: false, required: true
  private _arguments?: string; 
  public get arguments() {
    return this.getStringAttribute('arguments');
  }
  public set arguments(value: string) {
    this._arguments = value;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments;
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

  // grant - computed: false, optional: false, required: true
  private _grant?: string; 
  public get grant() {
    return this.getStringAttribute('grant');
  }
  public set grant(value: string) {
    this._grant = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grantInput() {
    return this._grant;
  }
}

export class TacacsCommandSetCommandsList extends cdktf.ComplexList {
  public internalValue? : TacacsCommandSetCommands[] | cdktf.IResolvable

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
  public get(index: number): TacacsCommandSetCommandsOutputReference {
    return new TacacsCommandSetCommandsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/tacacs_command_set ise_tacacs_command_set}
*/
export class TacacsCommandSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_tacacs_command_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TacacsCommandSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TacacsCommandSet to import
  * @param importFromId The id of the existing TacacsCommandSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/tacacs_command_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TacacsCommandSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_tacacs_command_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/tacacs_command_set ise_tacacs_command_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TacacsCommandSetConfig
  */
  public constructor(scope: Construct, id: string, config: TacacsCommandSetConfig) {
    super(scope, id, {
      terraformResourceType: 'ise_tacacs_command_set',
      terraformGeneratorMetadata: {
        providerName: 'ise',
        providerVersion: '0.2.12'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._commands.internalValue = config.commands;
    this._description = config.description;
    this._name = config.name;
    this._permitUnmatched = config.permitUnmatched;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // commands - computed: false, optional: true, required: false
  private _commands = new TacacsCommandSetCommandsList(this, "commands", false);
  public get commands() {
    return this._commands;
  }
  public putCommands(value: TacacsCommandSetCommands[] | cdktf.IResolvable) {
    this._commands.internalValue = value;
  }
  public resetCommands() {
    this._commands.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands.internalValue;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // permit_unmatched - computed: true, optional: true, required: false
  private _permitUnmatched?: boolean | cdktf.IResolvable; 
  public get permitUnmatched() {
    return this.getBooleanAttribute('permit_unmatched');
  }
  public set permitUnmatched(value: boolean | cdktf.IResolvable) {
    this._permitUnmatched = value;
  }
  public resetPermitUnmatched() {
    this._permitUnmatched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitUnmatchedInput() {
    return this._permitUnmatched;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      commands: cdktf.listMapper(tacacsCommandSetCommandsToTerraform, false)(this._commands.internalValue),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      permit_unmatched: cdktf.booleanToTerraform(this._permitUnmatched),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      commands: {
        value: cdktf.listMapperHcl(tacacsCommandSetCommandsToHclTerraform, false)(this._commands.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TacacsCommandSetCommandsList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permit_unmatched: {
        value: cdktf.booleanToHclTerraform(this._permitUnmatched),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
