// https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/data-sources/project_deployment_retention
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVercelProjectDeploymentRetentionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Project for the retention policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/data-sources/project_deployment_retention#project_id DataVercelProjectDeploymentRetention#project_id}
  */
  readonly projectId: string;
  /**
  * The ID of the Vercel team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/data-sources/project_deployment_retention#team_id DataVercelProjectDeploymentRetention#team_id}
  */
  readonly teamId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/data-sources/project_deployment_retention vercel_project_deployment_retention}
*/
export class DataVercelProjectDeploymentRetention extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vercel_project_deployment_retention";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVercelProjectDeploymentRetention resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVercelProjectDeploymentRetention to import
  * @param importFromId The id of the existing DataVercelProjectDeploymentRetention that should be imported. Refer to the {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/data-sources/project_deployment_retention#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVercelProjectDeploymentRetention to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vercel_project_deployment_retention", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/data-sources/project_deployment_retention vercel_project_deployment_retention} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVercelProjectDeploymentRetentionConfig
  */
  public constructor(scope: Construct, id: string, config: DataVercelProjectDeploymentRetentionConfig) {
    super(scope, id, {
      terraformResourceType: 'vercel_project_deployment_retention',
      terraformGeneratorMetadata: {
        providerName: 'vercel',
        providerVersion: '4.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._projectId = config.projectId;
    this._teamId = config.teamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expiration_canceled - computed: true, optional: false, required: false
  public get expirationCanceled() {
    return this.getStringAttribute('expiration_canceled');
  }

  // expiration_errored - computed: true, optional: false, required: false
  public get expirationErrored() {
    return this.getStringAttribute('expiration_errored');
  }

  // expiration_preview - computed: true, optional: false, required: false
  public get expirationPreview() {
    return this.getStringAttribute('expiration_preview');
  }

  // expiration_production - computed: true, optional: false, required: false
  public get expirationProduction() {
    return this.getStringAttribute('expiration_production');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // team_id - computed: true, optional: true, required: false
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  public resetTeamId() {
    this._teamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project_id: cdktf.stringToTerraform(this._projectId),
      team_id: cdktf.stringToTerraform(this._teamId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
