// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/dts_migrate_job_resume_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DtsMigrateJobResumeOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/dts_migrate_job_resume_operation#id DtsMigrateJobResumeOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * job id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/dts_migrate_job_resume_operation#job_id DtsMigrateJobResumeOperation#job_id}
  */
  readonly jobId: string;
  /**
  * resume mode: 1.clearData-Clear target data; 2.overwrite-The task is executed in overwrite mode; 3.normal-No extra action. Note that clearData and overwrite are valid only for redis links, normal is valid only for non-Redis links.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/dts_migrate_job_resume_operation#resume_option DtsMigrateJobResumeOperation#resume_option}
  */
  readonly resumeOption: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/dts_migrate_job_resume_operation tencentcloud_dts_migrate_job_resume_operation}
*/
export class DtsMigrateJobResumeOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dts_migrate_job_resume_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DtsMigrateJobResumeOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DtsMigrateJobResumeOperation to import
  * @param importFromId The id of the existing DtsMigrateJobResumeOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/dts_migrate_job_resume_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DtsMigrateJobResumeOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dts_migrate_job_resume_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/dts_migrate_job_resume_operation tencentcloud_dts_migrate_job_resume_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DtsMigrateJobResumeOperationConfig
  */
  public constructor(scope: Construct, id: string, config: DtsMigrateJobResumeOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dts_migrate_job_resume_operation',
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
    this._id = config.id;
    this._jobId = config.jobId;
    this._resumeOption = config.resumeOption;
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

  // resume_option - computed: false, optional: false, required: true
  private _resumeOption?: string; 
  public get resumeOption() {
    return this.getStringAttribute('resume_option');
  }
  public set resumeOption(value: string) {
    this._resumeOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resumeOptionInput() {
    return this._resumeOption;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      job_id: cdktf.stringToTerraform(this._jobId),
      resume_option: cdktf.stringToTerraform(this._resumeOption),
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
      resume_option: {
        value: cdktf.stringToHclTerraform(this._resumeOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
