// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_job_abort
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PtsJobAbortConfig extends cdktf.TerraformMetaArguments {
  /**
  * The reason for aborting the job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_job_abort#abort_reason PtsJobAbort#abort_reason}
  */
  readonly abortReason?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_job_abort#id PtsJobAbort#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Job ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_job_abort#job_id PtsJobAbort#job_id}
  */
  readonly jobId: string;
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_job_abort#project_id PtsJobAbort#project_id}
  */
  readonly projectId: string;
  /**
  * Scenario ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_job_abort#scenario_id PtsJobAbort#scenario_id}
  */
  readonly scenarioId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_job_abort tencentcloud_pts_job_abort}
*/
export class PtsJobAbort extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_pts_job_abort";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PtsJobAbort resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PtsJobAbort to import
  * @param importFromId The id of the existing PtsJobAbort that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_job_abort#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PtsJobAbort to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_pts_job_abort", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_job_abort tencentcloud_pts_job_abort} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PtsJobAbortConfig
  */
  public constructor(scope: Construct, id: string, config: PtsJobAbortConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_pts_job_abort',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._abortReason = config.abortReason;
    this._id = config.id;
    this._jobId = config.jobId;
    this._projectId = config.projectId;
    this._scenarioId = config.scenarioId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // abort_reason - computed: false, optional: true, required: false
  private _abortReason?: number; 
  public get abortReason() {
    return this.getNumberAttribute('abort_reason');
  }
  public set abortReason(value: number) {
    this._abortReason = value;
  }
  public resetAbortReason() {
    this._abortReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortReasonInput() {
    return this._abortReason;
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

  // job_id - computed: false, optional: false, required: true
  private _jobId?: string; 
  public get jobId() {
    return this.getStringAttribute('job_id');
  }
  public set jobId(value: string) {
    this._jobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
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

  // scenario_id - computed: false, optional: false, required: true
  private _scenarioId?: string; 
  public get scenarioId() {
    return this.getStringAttribute('scenario_id');
  }
  public set scenarioId(value: string) {
    this._scenarioId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scenarioIdInput() {
    return this._scenarioId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      abort_reason: cdktf.numberToTerraform(this._abortReason),
      id: cdktf.stringToTerraform(this._id),
      job_id: cdktf.stringToTerraform(this._jobId),
      project_id: cdktf.stringToTerraform(this._projectId),
      scenario_id: cdktf.stringToTerraform(this._scenarioId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      abort_reason: {
        value: cdktf.numberToHclTerraform(this._abortReason),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_id: {
        value: cdktf.stringToHclTerraform(this._jobId),
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
      scenario_id: {
        value: cdktf.stringToHclTerraform(this._scenarioId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
