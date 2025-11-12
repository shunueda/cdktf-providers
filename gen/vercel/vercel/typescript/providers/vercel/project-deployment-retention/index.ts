// https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/project_deployment_retention
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectDeploymentRetentionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The retention period for canceled deployments. Should be one of '1d', '1w', '1m', '2m', '3m', '6m', '1y'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/project_deployment_retention#expiration_canceled ProjectDeploymentRetention#expiration_canceled}
  */
  readonly expirationCanceled?: string;
  /**
  * The retention period for errored deployments. Should be one of '1d', '1w', '1m', '2m', '3m', '6m', '1y'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/project_deployment_retention#expiration_errored ProjectDeploymentRetention#expiration_errored}
  */
  readonly expirationErrored?: string;
  /**
  * The retention period for preview deployments. Should be one of '1d', '1w', '1m', '2m', '3m', '6m', '1y'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/project_deployment_retention#expiration_preview ProjectDeploymentRetention#expiration_preview}
  */
  readonly expirationPreview?: string;
  /**
  * The retention period for production deployments. Should be one of '1d', '1w', '1m', '2m', '3m', '6m', '1y'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/project_deployment_retention#expiration_production ProjectDeploymentRetention#expiration_production}
  */
  readonly expirationProduction?: string;
  /**
  * The ID of the Project for the retention policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/project_deployment_retention#project_id ProjectDeploymentRetention#project_id}
  */
  readonly projectId: string;
  /**
  * The ID of the Vercel team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/project_deployment_retention#team_id ProjectDeploymentRetention#team_id}
  */
  readonly teamId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/project_deployment_retention vercel_project_deployment_retention}
*/
export class ProjectDeploymentRetention extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vercel_project_deployment_retention";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectDeploymentRetention resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectDeploymentRetention to import
  * @param importFromId The id of the existing ProjectDeploymentRetention that should be imported. Refer to the {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/project_deployment_retention#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectDeploymentRetention to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vercel_project_deployment_retention", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/project_deployment_retention vercel_project_deployment_retention} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectDeploymentRetentionConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectDeploymentRetentionConfig) {
    super(scope, id, {
      terraformResourceType: 'vercel_project_deployment_retention',
      terraformGeneratorMetadata: {
        providerName: 'vercel',
        providerVersion: '4.0.0',
        providerVersionConstraint: '4.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._expirationCanceled = config.expirationCanceled;
    this._expirationErrored = config.expirationErrored;
    this._expirationPreview = config.expirationPreview;
    this._expirationProduction = config.expirationProduction;
    this._projectId = config.projectId;
    this._teamId = config.teamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expiration_canceled - computed: true, optional: true, required: false
  private _expirationCanceled?: string; 
  public get expirationCanceled() {
    return this.getStringAttribute('expiration_canceled');
  }
  public set expirationCanceled(value: string) {
    this._expirationCanceled = value;
  }
  public resetExpirationCanceled() {
    this._expirationCanceled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationCanceledInput() {
    return this._expirationCanceled;
  }

  // expiration_errored - computed: true, optional: true, required: false
  private _expirationErrored?: string; 
  public get expirationErrored() {
    return this.getStringAttribute('expiration_errored');
  }
  public set expirationErrored(value: string) {
    this._expirationErrored = value;
  }
  public resetExpirationErrored() {
    this._expirationErrored = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationErroredInput() {
    return this._expirationErrored;
  }

  // expiration_preview - computed: true, optional: true, required: false
  private _expirationPreview?: string; 
  public get expirationPreview() {
    return this.getStringAttribute('expiration_preview');
  }
  public set expirationPreview(value: string) {
    this._expirationPreview = value;
  }
  public resetExpirationPreview() {
    this._expirationPreview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationPreviewInput() {
    return this._expirationPreview;
  }

  // expiration_production - computed: true, optional: true, required: false
  private _expirationProduction?: string; 
  public get expirationProduction() {
    return this.getStringAttribute('expiration_production');
  }
  public set expirationProduction(value: string) {
    this._expirationProduction = value;
  }
  public resetExpirationProduction() {
    this._expirationProduction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationProductionInput() {
    return this._expirationProduction;
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
      expiration_canceled: cdktf.stringToTerraform(this._expirationCanceled),
      expiration_errored: cdktf.stringToTerraform(this._expirationErrored),
      expiration_preview: cdktf.stringToTerraform(this._expirationPreview),
      expiration_production: cdktf.stringToTerraform(this._expirationProduction),
      project_id: cdktf.stringToTerraform(this._projectId),
      team_id: cdktf.stringToTerraform(this._teamId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      expiration_canceled: {
        value: cdktf.stringToHclTerraform(this._expirationCanceled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiration_errored: {
        value: cdktf.stringToHclTerraform(this._expirationErrored),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiration_preview: {
        value: cdktf.stringToHclTerraform(this._expirationPreview),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiration_production: {
        value: cdktf.stringToHclTerraform(this._expirationProduction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
