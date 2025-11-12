// https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/data-sources/workspace_flowpipe_pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPipesWorkspaceFlowpipePipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/data-sources/workspace_flowpipe_pipeline#id DataPipesWorkspaceFlowpipePipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/data-sources/workspace_flowpipe_pipeline#organization DataPipesWorkspaceFlowpipePipeline#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/data-sources/workspace_flowpipe_pipeline#workspace DataPipesWorkspaceFlowpipePipeline#workspace}
  */
  readonly workspace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/data-sources/workspace_flowpipe_pipeline#workspace_mod_pipeline_id DataPipesWorkspaceFlowpipePipeline#workspace_mod_pipeline_id}
  */
  readonly workspaceModPipelineId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/data-sources/workspace_flowpipe_pipeline pipes_workspace_flowpipe_pipeline}
*/
export class DataPipesWorkspaceFlowpipePipeline extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pipes_workspace_flowpipe_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPipesWorkspaceFlowpipePipeline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPipesWorkspaceFlowpipePipeline to import
  * @param importFromId The id of the existing DataPipesWorkspaceFlowpipePipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/data-sources/workspace_flowpipe_pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPipesWorkspaceFlowpipePipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pipes_workspace_flowpipe_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/data-sources/workspace_flowpipe_pipeline pipes_workspace_flowpipe_pipeline} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPipesWorkspaceFlowpipePipelineConfig
  */
  public constructor(scope: Construct, id: string, config: DataPipesWorkspaceFlowpipePipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'pipes_workspace_flowpipe_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'pipes',
        providerVersion: '0.17.0',
        providerVersionConstraint: '0.17.0'
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
    this._organization = config.organization;
    this._workspace = config.workspace;
    this._workspaceModPipelineId = config.workspaceModPipelineId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // last_process_id - computed: true, optional: false, required: false
  public get lastProcessId() {
    return this.getStringAttribute('last_process_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // params - computed: true, optional: false, required: false
  public get params() {
    return this.getStringAttribute('params');
  }

  // steps - computed: true, optional: false, required: false
  public get steps() {
    return this.getStringAttribute('steps');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getStringAttribute('tags');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // triggers - computed: true, optional: false, required: false
  public get triggers() {
    return this.getStringAttribute('triggers');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getNumberAttribute('version_id');
  }

  // workspace - computed: false, optional: false, required: true
  private _workspace?: string; 
  public get workspace() {
    return this.getStringAttribute('workspace');
  }
  public set workspace(value: string) {
    this._workspace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace;
  }

  // workspace_mod_id - computed: true, optional: false, required: false
  public get workspaceModId() {
    return this.getStringAttribute('workspace_mod_id');
  }

  // workspace_mod_pipeline_id - computed: false, optional: false, required: true
  private _workspaceModPipelineId?: string; 
  public get workspaceModPipelineId() {
    return this.getStringAttribute('workspace_mod_pipeline_id');
  }
  public set workspaceModPipelineId(value: string) {
    this._workspaceModPipelineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceModPipelineIdInput() {
    return this._workspaceModPipelineId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      organization: cdktf.stringToTerraform(this._organization),
      workspace: cdktf.stringToTerraform(this._workspace),
      workspace_mod_pipeline_id: cdktf.stringToTerraform(this._workspaceModPipelineId),
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
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace: {
        value: cdktf.stringToHclTerraform(this._workspace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_mod_pipeline_id: {
        value: cdktf.stringToHclTerraform(this._workspaceModPipelineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
