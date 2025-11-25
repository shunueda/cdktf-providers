// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/pts_cron_job_restart
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PtsCronJobRestartConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cron job ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/pts_cron_job_restart#cron_job_id PtsCronJobRestart#cron_job_id}
  */
  readonly cronJobId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/pts_cron_job_restart#id PtsCronJobRestart#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/pts_cron_job_restart#project_id PtsCronJobRestart#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/pts_cron_job_restart tencentcloud_pts_cron_job_restart}
*/
export class PtsCronJobRestart extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_pts_cron_job_restart";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PtsCronJobRestart resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PtsCronJobRestart to import
  * @param importFromId The id of the existing PtsCronJobRestart that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/pts_cron_job_restart#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PtsCronJobRestart to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_pts_cron_job_restart", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/pts_cron_job_restart tencentcloud_pts_cron_job_restart} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PtsCronJobRestartConfig
  */
  public constructor(scope: Construct, id: string, config: PtsCronJobRestartConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_pts_cron_job_restart',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cronJobId = config.cronJobId;
    this._id = config.id;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cron_job_id - computed: false, optional: false, required: true
  private _cronJobId?: string; 
  public get cronJobId() {
    return this.getStringAttribute('cron_job_id');
  }
  public set cronJobId(value: string) {
    this._cronJobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronJobIdInput() {
    return this._cronJobId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cron_job_id: cdktf.stringToTerraform(this._cronJobId),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cron_job_id: {
        value: cdktf.stringToHclTerraform(this._cronJobId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
