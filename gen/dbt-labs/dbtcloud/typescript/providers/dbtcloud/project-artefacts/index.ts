// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/project_artefacts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectArtefactsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs Job ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/project_artefacts#docs_job_id ProjectArtefacts#docs_job_id}
  */
  readonly docsJobId?: number;
  /**
  * Freshness Job ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/project_artefacts#freshness_job_id ProjectArtefacts#freshness_job_id}
  */
  readonly freshnessJobId?: number;
  /**
  * Project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/project_artefacts#project_id ProjectArtefacts#project_id}
  */
  readonly projectId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/project_artefacts dbtcloud_project_artefacts}
*/
export class ProjectArtefacts extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_project_artefacts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectArtefacts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectArtefacts to import
  * @param importFromId The id of the existing ProjectArtefacts that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/project_artefacts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectArtefacts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_project_artefacts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/project_artefacts dbtcloud_project_artefacts} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectArtefactsConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectArtefactsConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_project_artefacts',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.5.1',
        providerVersionConstraint: '1.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._docsJobId = config.docsJobId;
    this._freshnessJobId = config.freshnessJobId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // docs_job_id - computed: true, optional: true, required: false
  private _docsJobId?: number; 
  public get docsJobId() {
    return this.getNumberAttribute('docs_job_id');
  }
  public set docsJobId(value: number) {
    this._docsJobId = value;
  }
  public resetDocsJobId() {
    this._docsJobId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get docsJobIdInput() {
    return this._docsJobId;
  }

  // freshness_job_id - computed: true, optional: true, required: false
  private _freshnessJobId?: number; 
  public get freshnessJobId() {
    return this.getNumberAttribute('freshness_job_id');
  }
  public set freshnessJobId(value: number) {
    this._freshnessJobId = value;
  }
  public resetFreshnessJobId() {
    this._freshnessJobId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freshnessJobIdInput() {
    return this._freshnessJobId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      docs_job_id: cdktf.numberToTerraform(this._docsJobId),
      freshness_job_id: cdktf.numberToTerraform(this._freshnessJobId),
      project_id: cdktf.numberToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      docs_job_id: {
        value: cdktf.numberToHclTerraform(this._docsJobId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      freshness_job_id: {
        value: cdktf.numberToHclTerraform(this._freshnessJobId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
