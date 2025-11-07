// https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs/resources/pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs/resources/pipeline#id Pipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs/resources/pipeline#is_exposed Pipeline#is_exposed}
  */
  readonly isExposed: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs/resources/pipeline#is_paused Pipeline#is_paused}
  */
  readonly isPaused: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs/resources/pipeline#pipeline_config Pipeline#pipeline_config}
  */
  readonly pipelineConfig: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs/resources/pipeline#pipeline_config_format Pipeline#pipeline_config_format}
  */
  readonly pipelineConfigFormat: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs/resources/pipeline#pipeline_name Pipeline#pipeline_name}
  */
  readonly pipelineName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs/resources/pipeline#team_name Pipeline#team_name}
  */
  readonly teamName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs/resources/pipeline#vars Pipeline#vars}
  */
  readonly vars?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs/resources/pipeline concourse_pipeline}
*/
export class Pipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "concourse_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Pipeline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Pipeline to import
  * @param importFromId The id of the existing Pipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs/resources/pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Pipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "concourse_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs/resources/pipeline concourse_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PipelineConfig
  */
  public constructor(scope: Construct, id: string, config: PipelineConfig) {
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
    this._isExposed = config.isExposed;
    this._isPaused = config.isPaused;
    this._pipelineConfig = config.pipelineConfig;
    this._pipelineConfigFormat = config.pipelineConfigFormat;
    this._pipelineName = config.pipelineName;
    this._teamName = config.teamName;
    this._vars = config.vars;
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

  // is_exposed - computed: false, optional: false, required: true
  private _isExposed?: boolean | cdktf.IResolvable; 
  public get isExposed() {
    return this.getBooleanAttribute('is_exposed');
  }
  public set isExposed(value: boolean | cdktf.IResolvable) {
    this._isExposed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isExposedInput() {
    return this._isExposed;
  }

  // is_paused - computed: false, optional: false, required: true
  private _isPaused?: boolean | cdktf.IResolvable; 
  public get isPaused() {
    return this.getBooleanAttribute('is_paused');
  }
  public set isPaused(value: boolean | cdktf.IResolvable) {
    this._isPaused = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isPausedInput() {
    return this._isPaused;
  }

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
  }

  // pipeline_config - computed: false, optional: false, required: true
  private _pipelineConfig?: string; 
  public get pipelineConfig() {
    return this.getStringAttribute('pipeline_config');
  }
  public set pipelineConfig(value: string) {
    this._pipelineConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineConfigInput() {
    return this._pipelineConfig;
  }

  // pipeline_config_format - computed: false, optional: false, required: true
  private _pipelineConfigFormat?: string; 
  public get pipelineConfigFormat() {
    return this.getStringAttribute('pipeline_config_format');
  }
  public set pipelineConfigFormat(value: string) {
    this._pipelineConfigFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineConfigFormatInput() {
    return this._pipelineConfigFormat;
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

  // vars - computed: false, optional: true, required: false
  private _vars?: { [key: string]: string }; 
  public get vars() {
    return this.getStringMapAttribute('vars');
  }
  public set vars(value: { [key: string]: string }) {
    this._vars = value;
  }
  public resetVars() {
    this._vars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varsInput() {
    return this._vars;
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
      is_exposed: cdktf.booleanToTerraform(this._isExposed),
      is_paused: cdktf.booleanToTerraform(this._isPaused),
      pipeline_config: cdktf.stringToTerraform(this._pipelineConfig),
      pipeline_config_format: cdktf.stringToTerraform(this._pipelineConfigFormat),
      pipeline_name: cdktf.stringToTerraform(this._pipelineName),
      team_name: cdktf.stringToTerraform(this._teamName),
      vars: cdktf.hashMapper(cdktf.stringToTerraform)(this._vars),
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
      is_exposed: {
        value: cdktf.booleanToHclTerraform(this._isExposed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_paused: {
        value: cdktf.booleanToHclTerraform(this._isPaused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pipeline_config: {
        value: cdktf.stringToHclTerraform(this._pipelineConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline_config_format: {
        value: cdktf.stringToHclTerraform(this._pipelineConfigFormat),
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
      vars: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._vars),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
