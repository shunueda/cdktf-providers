// https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/data-sources/pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBuildkitePipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * The slug of the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/data-sources/pipeline#slug DataBuildkitePipeline#slug}
  */
  readonly slug: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/data-sources/pipeline buildkite_pipeline}
*/
export class DataBuildkitePipeline extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "buildkite_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBuildkitePipeline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBuildkitePipeline to import
  * @param importFromId The id of the existing DataBuildkitePipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/data-sources/pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBuildkitePipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buildkite_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/data-sources/pipeline buildkite_pipeline} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBuildkitePipelineConfig
  */
  public constructor(scope: Construct, id: string, config: DataBuildkitePipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'buildkite_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'buildkite',
        providerVersion: '1.27.1',
        providerVersionConstraint: '1.27.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._slug = config.slug;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // default_branch - computed: true, optional: false, required: false
  public get defaultBranch() {
    return this.getStringAttribute('default_branch');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // repository - computed: true, optional: false, required: false
  public get repository() {
    return this.getStringAttribute('repository');
  }

  // slug - computed: false, optional: false, required: true
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // webhook_url - computed: true, optional: false, required: false
  public get webhookUrl() {
    return this.getStringAttribute('webhook_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      slug: cdktf.stringToTerraform(this._slug),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
