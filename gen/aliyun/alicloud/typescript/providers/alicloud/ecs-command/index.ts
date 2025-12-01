// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_command
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcsCommandConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_command#command_content EcsCommand#command_content}
  */
  readonly commandContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_command#description EcsCommand#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_command#enable_parameter EcsCommand#enable_parameter}
  */
  readonly enableParameter?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_command#id EcsCommand#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_command#name EcsCommand#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_command#timeout EcsCommand#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_command#type EcsCommand#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_command#working_dir EcsCommand#working_dir}
  */
  readonly workingDir?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_command alicloud_ecs_command}
*/
export class EcsCommand extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ecs_command";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EcsCommand resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcsCommand to import
  * @param importFromId The id of the existing EcsCommand that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_command#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcsCommand to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ecs_command", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_command alicloud_ecs_command} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsCommandConfig
  */
  public constructor(scope: Construct, id: string, config: EcsCommandConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ecs_command',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._commandContent = config.commandContent;
    this._description = config.description;
    this._enableParameter = config.enableParameter;
    this._id = config.id;
    this._name = config.name;
    this._timeout = config.timeout;
    this._type = config.type;
    this._workingDir = config.workingDir;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // command_content - computed: false, optional: false, required: true
  private _commandContent?: string; 
  public get commandContent() {
    return this.getStringAttribute('command_content');
  }
  public set commandContent(value: string) {
    this._commandContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandContentInput() {
    return this._commandContent;
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

  // enable_parameter - computed: false, optional: true, required: false
  private _enableParameter?: boolean | cdktf.IResolvable; 
  public get enableParameter() {
    return this.getBooleanAttribute('enable_parameter');
  }
  public set enableParameter(value: boolean | cdktf.IResolvable) {
    this._enableParameter = value;
  }
  public resetEnableParameter() {
    this._enableParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableParameterInput() {
    return this._enableParameter;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // working_dir - computed: false, optional: true, required: false
  private _workingDir?: string; 
  public get workingDir() {
    return this.getStringAttribute('working_dir');
  }
  public set workingDir(value: string) {
    this._workingDir = value;
  }
  public resetWorkingDir() {
    this._workingDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirInput() {
    return this._workingDir;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      command_content: cdktf.stringToTerraform(this._commandContent),
      description: cdktf.stringToTerraform(this._description),
      enable_parameter: cdktf.booleanToTerraform(this._enableParameter),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      timeout: cdktf.numberToTerraform(this._timeout),
      type: cdktf.stringToTerraform(this._type),
      working_dir: cdktf.stringToTerraform(this._workingDir),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      command_content: {
        value: cdktf.stringToHclTerraform(this._commandContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_parameter: {
        value: cdktf.booleanToHclTerraform(this._enableParameter),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      working_dir: {
        value: cdktf.stringToHclTerraform(this._workingDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
