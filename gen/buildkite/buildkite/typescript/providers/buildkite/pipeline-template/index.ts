// https://registry.terraform.io/providers/buildkite/buildkite/1.27.0/docs/resources/pipeline_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PipelineTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * If the pipeline template is available for assignment by non admin users. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.0/docs/resources/pipeline_template#available PipelineTemplate#available}
  */
  readonly available?: boolean | cdktf.IResolvable;
  /**
  * The YAML step configuration for the pipeline template. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.0/docs/resources/pipeline_template#configuration PipelineTemplate#configuration}
  */
  readonly configuration: string;
  /**
  * A description for the pipeline template. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.0/docs/resources/pipeline_template#description PipelineTemplate#description}
  */
  readonly description?: string;
  /**
  * The name of the pipeline template. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.0/docs/resources/pipeline_template#name PipelineTemplate#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.0/docs/resources/pipeline_template buildkite_pipeline_template}
*/
export class PipelineTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "buildkite_pipeline_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PipelineTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PipelineTemplate to import
  * @param importFromId The id of the existing PipelineTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.0/docs/resources/pipeline_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PipelineTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buildkite_pipeline_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.0/docs/resources/pipeline_template buildkite_pipeline_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PipelineTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: PipelineTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'buildkite_pipeline_template',
      terraformGeneratorMetadata: {
        providerName: 'buildkite',
        providerVersion: '1.27.0',
        providerVersionConstraint: '1.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._available = config.available;
    this._configuration = config.configuration;
    this._description = config.description;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // available - computed: true, optional: true, required: false
  private _available?: boolean | cdktf.IResolvable; 
  public get available() {
    return this.getBooleanAttribute('available');
  }
  public set available(value: boolean | cdktf.IResolvable) {
    this._available = value;
  }
  public resetAvailable() {
    this._available = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableInput() {
    return this._available;
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      available: cdktf.booleanToTerraform(this._available),
      configuration: cdktf.stringToTerraform(this._configuration),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      available: {
        value: cdktf.booleanToHclTerraform(this._available),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      configuration: {
        value: cdktf.stringToHclTerraform(this._configuration),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
