// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/command
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CommandConfig extends cdktf.TerraformMetaArguments {
  /**
  * Partition of ssl certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/command#command_result Command#command_result}
  */
  readonly commandResult?: string[];
  /**
  * The commands to send to the remote BIG-IP device over the configured provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/command#commands Command#commands}
  */
  readonly commands: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/command#id Command#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/command#when Command#when}
  */
  readonly when?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/command bigip_command}
*/
export class Command extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_command";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Command resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Command to import
  * @param importFromId The id of the existing Command that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/command#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Command to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_command", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/command bigip_command} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CommandConfig
  */
  public constructor(scope: Construct, id: string, config: CommandConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_command',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._commandResult = config.commandResult;
    this._commands = config.commands;
    this._id = config.id;
    this._when = config.when;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // command_result - computed: true, optional: true, required: false
  private _commandResult?: string[]; 
  public get commandResult() {
    return this.getListAttribute('command_result');
  }
  public set commandResult(value: string[]) {
    this._commandResult = value;
  }
  public resetCommandResult() {
    this._commandResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandResultInput() {
    return this._commandResult;
  }

  // commands - computed: false, optional: false, required: true
  private _commands?: string[]; 
  public get commands() {
    return this.getListAttribute('commands');
  }
  public set commands(value: string[]) {
    this._commands = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands;
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

  // when - computed: false, optional: true, required: false
  private _when?: string; 
  public get when() {
    return this.getStringAttribute('when');
  }
  public set when(value: string) {
    this._when = value;
  }
  public resetWhen() {
    this._when = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenInput() {
    return this._when;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      command_result: cdktf.listMapper(cdktf.stringToTerraform, false)(this._commandResult),
      commands: cdktf.listMapper(cdktf.stringToTerraform, false)(this._commands),
      id: cdktf.stringToTerraform(this._id),
      when: cdktf.stringToTerraform(this._when),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      command_result: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._commandResult),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      commands: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._commands),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      when: {
        value: cdktf.stringToHclTerraform(this._when),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
