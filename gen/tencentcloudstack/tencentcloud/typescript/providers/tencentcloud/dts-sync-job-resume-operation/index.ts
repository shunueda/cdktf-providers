// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/dts_sync_job_resume_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DtsSyncJobResumeOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/dts_sync_job_resume_operation#id DtsSyncJobResumeOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Synchronization instance id (i.e. identifies a synchronization job).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/dts_sync_job_resume_operation#job_id DtsSyncJobResumeOperation#job_id}
  */
  readonly jobId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/dts_sync_job_resume_operation tencentcloud_dts_sync_job_resume_operation}
*/
export class DtsSyncJobResumeOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dts_sync_job_resume_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DtsSyncJobResumeOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DtsSyncJobResumeOperation to import
  * @param importFromId The id of the existing DtsSyncJobResumeOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/dts_sync_job_resume_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DtsSyncJobResumeOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dts_sync_job_resume_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/dts_sync_job_resume_operation tencentcloud_dts_sync_job_resume_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DtsSyncJobResumeOperationConfig
  */
  public constructor(scope: Construct, id: string, config: DtsSyncJobResumeOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dts_sync_job_resume_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
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
    this._jobId = config.jobId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      job_id: cdktf.stringToTerraform(this._jobId),
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
      job_id: {
        value: cdktf.stringToHclTerraform(this._jobId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
