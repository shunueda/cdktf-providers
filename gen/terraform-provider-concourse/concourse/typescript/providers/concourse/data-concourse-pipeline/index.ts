// https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs/data-sources/pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataConcoursePipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs/data-sources/pipeline#id DataConcoursePipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs/data-sources/pipeline#pipeline_name DataConcoursePipeline#pipeline_name}
  */
  readonly pipelineName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs/data-sources/pipeline#team_name DataConcoursePipeline#team_name}
  */
  readonly teamName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs/data-sources/pipeline concourse_pipeline}
*/
export class DataConcoursePipeline extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "concourse_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataConcoursePipeline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataConcoursePipeline to import
  * @param importFromId The id of the existing DataConcoursePipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs/data-sources/pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataConcoursePipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "concourse_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs/data-sources/pipeline concourse_pipeline} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataConcoursePipelineConfig
  */
  public constructor(scope: Construct, id: string, config: DataConcoursePipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'concourse_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'concourse',
        providerVersion: '8.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._pipelineName = config.pipelineName;
    this._teamName = config.teamName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // is_exposed - computed: true, optional: false, required: false
  public get isExposed() {
    return this.getBooleanAttribute('is_exposed');
  }

  // is_paused - computed: true, optional: false, required: false
  public get isPaused() {
    return this.getBooleanAttribute('is_paused');
  }

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
  }

  // pipeline_name - computed: false, optional: false, required: true
  private _pipelineName?: string; 
  public get pipelineName() {
    return this.getStringAttribute('pipeline_name');
  }
  public set pipelineName(value: string) {
    this._pipelineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineNameInput() {
    return this._pipelineName;
  }

  // team_name - computed: false, optional: false, required: true
  private _teamName?: string; 
  public get teamName() {
    return this.getStringAttribute('team_name');
  }
  public set teamName(value: string) {
    this._teamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamNameInput() {
    return this._teamName;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      pipeline_name: cdktf.stringToTerraform(this._pipelineName),
      team_name: cdktf.stringToTerraform(this._teamName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline_name: {
        value: cdktf.stringToHclTerraform(this._pipelineName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_name: {
        value: cdktf.stringToHclTerraform(this._teamName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
