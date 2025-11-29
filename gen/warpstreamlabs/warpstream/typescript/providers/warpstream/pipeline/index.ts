// https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.3/docs/resources/pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * The YAML content defining the input sources, processing steps, and output destinations for the pipeline. This represents the complete configuration for this specific version. To understand how to set your configuration take a look at: https://docs.warpstream.com/warpstream/configuration/bento#getting-started
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.3/docs/resources/pipeline#configuration_yaml Pipeline#configuration_yaml}
  */
  readonly configurationYaml: string;
  /**
  * The unique human-readable name of the pipeline within the virtual cluster. This cannot be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.3/docs/resources/pipeline#name Pipeline#name}
  */
  readonly name: string;
  /**
  * The desired operational state of the pipeline. Valid values are 'running' or 'paused'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.3/docs/resources/pipeline#state Pipeline#state}
  */
  readonly state: string;
  /**
  * Pipeline type. Valid types are: `bento` (default), `orbit`, `schema_linking`, `tableflow`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.3/docs/resources/pipeline#type Pipeline#type}
  */
  readonly type?: string;
  /**
  * The ID of the virtual cluster associated with the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.3/docs/resources/pipeline#virtual_cluster_id Pipeline#virtual_cluster_id}
  */
  readonly virtualClusterId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.3/docs/resources/pipeline warpstream_pipeline}
*/
export class Pipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "warpstream_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Pipeline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Pipeline to import
  * @param importFromId The id of the existing Pipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.3/docs/resources/pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Pipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "warpstream_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.3/docs/resources/pipeline warpstream_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PipelineConfig
  */
  public constructor(scope: Construct, id: string, config: PipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'warpstream_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'warpstream',
        providerVersion: '2.3.3',
        providerVersionConstraint: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configurationYaml = config.configurationYaml;
    this._name = config.name;
    this._state = config.state;
    this._type = config.type;
    this._virtualClusterId = config.virtualClusterId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration_id - computed: true, optional: false, required: false
  public get configurationId() {
    return this.getStringAttribute('configuration_id');
  }

  // configuration_yaml - computed: false, optional: false, required: true
  private _configurationYaml?: string; 
  public get configurationYaml() {
    return this.getStringAttribute('configuration_yaml');
  }
  public set configurationYaml(value: string) {
    this._configurationYaml = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationYamlInput() {
    return this._configurationYaml;
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

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // virtual_cluster_id - computed: false, optional: false, required: true
  private _virtualClusterId?: string; 
  public get virtualClusterId() {
    return this.getStringAttribute('virtual_cluster_id');
  }
  public set virtualClusterId(value: string) {
    this._virtualClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualClusterIdInput() {
    return this._virtualClusterId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration_yaml: cdktf.stringToTerraform(this._configurationYaml),
      name: cdktf.stringToTerraform(this._name),
      state: cdktf.stringToTerraform(this._state),
      type: cdktf.stringToTerraform(this._type),
      virtual_cluster_id: cdktf.stringToTerraform(this._virtualClusterId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration_yaml: {
        value: cdktf.stringToHclTerraform(this._configurationYaml),
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_cluster_id: {
        value: cdktf.stringToHclTerraform(this._virtualClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
