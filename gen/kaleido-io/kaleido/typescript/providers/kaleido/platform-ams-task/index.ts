// https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_ams_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformAmsTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_ams_task#description PlatformAmsTask#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_ams_task#environment PlatformAmsTask#environment}
  */
  readonly environment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_ams_task#name PlatformAmsTask#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_ams_task#service PlatformAmsTask#service}
  */
  readonly service: string;
  /**
  * This is the definition of the task - which will be put into a new version each time the task is updated. Name must be omitted from this YAML
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_ams_task#task_yaml PlatformAmsTask#task_yaml}
  */
  readonly taskYaml: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_ams_task#variable_set PlatformAmsTask#variable_set}
  */
  readonly variableSet?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_ams_task kaleido_platform_ams_task}
*/
export class PlatformAmsTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kaleido_platform_ams_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformAmsTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformAmsTask to import
  * @param importFromId The id of the existing PlatformAmsTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_ams_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformAmsTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kaleido_platform_ams_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_ams_task kaleido_platform_ams_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformAmsTaskConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformAmsTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'kaleido_platform_ams_task',
      terraformGeneratorMetadata: {
        providerName: 'kaleido',
        providerVersion: '1.1.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._environment = config.environment;
    this._name = config.name;
    this._service = config.service;
    this._taskYaml = config.taskYaml;
    this._variableSet = config.variableSet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // applied_version - computed: true, optional: false, required: false
  public get appliedVersion() {
    return this.getStringAttribute('applied_version');
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

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
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

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // task_yaml - computed: false, optional: false, required: true
  private _taskYaml?: string; 
  public get taskYaml() {
    return this.getStringAttribute('task_yaml');
  }
  public set taskYaml(value: string) {
    this._taskYaml = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskYamlInput() {
    return this._taskYaml;
  }

  // variable_set - computed: false, optional: true, required: false
  private _variableSet?: string; 
  public get variableSet() {
    return this.getStringAttribute('variable_set');
  }
  public set variableSet(value: string) {
    this._variableSet = value;
  }
  public resetVariableSet() {
    this._variableSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableSetInput() {
    return this._variableSet;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      environment: cdktf.stringToTerraform(this._environment),
      name: cdktf.stringToTerraform(this._name),
      service: cdktf.stringToTerraform(this._service),
      task_yaml: cdktf.stringToTerraform(this._taskYaml),
      variable_set: cdktf.stringToTerraform(this._variableSet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
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
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_yaml: {
        value: cdktf.stringToHclTerraform(this._taskYaml),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      variable_set: {
        value: cdktf.stringToHclTerraform(this._variableSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
